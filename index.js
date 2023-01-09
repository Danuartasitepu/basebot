"use strict";
const {
        default: makeWASocket,
        BufferJSON,
        initInMemoryKeyStore,
        DisconnectReason,
        AnyMessageContent,
        useSingleFileAuthState,
        makeInMemoryStore,
        delay,
        downloadContentFromMessage,
        jidDecode,
        generateForwardMessageContent,
        generateWAMessageFromContent,
        proto,
        prepareWAMessageMedia
} = require("@adiwajshing/baileys")
const figlet = require("figlet");
const fs = require("fs");
const moment = require('moment')
const chalk = require('chalk')
const logg = require('pino')
const clui = require('clui')
const PhoneNumber = require('awesome-phonenumber')
const { Spinner } = clui
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif2')
const { serialize, fetchJson, getBuffer, makeid } = require("./lib/myfunc");
const { color, ZakiLog, infolog } = require("./lib/color");
const afk = require("./lib/afk");
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
let setting = JSON.parse(fs.readFileSync('./config.json'));
let welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let session = `./${setting.sessionName}.json`
const { state, saveState } = useSingleFileAuthState(session)

function title() {
	  console.log(chalk.bold.blue(figlet.textSync('                  Reii|X-Angel-Botz', {
		font: 'Standard',
		horizontalLayout: 'default',
		verticalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	})))
	console.log(chalk.yellow(`\n                        ${chalk.red('        [ Store - Bot]')}\n\n${chalk.italic.magenta('• Author')} : ${chalk.white('Reii|X-Angel-Botz')}\n${chalk.italic.magenta('• Tiktok')} : ${chalk.white('@always_ntreii')}\n${chalk.italic.magenta('• Instagram')} : ${chalk.white('@not_rei1')}\n${chalk.italic.magenta('• Caption')} : ${chalk.white('Terkadang Sebuah Janji Adalah Kalimat Penenang Yang Berujung Sebuah Kebohongan')}\n`))
}

/**
* Uncache if there is file change;
* @param {string} module Module name or path;
* @ {function} cb <optional> ;
*/
function nocache(module, cb = () => { }) {
        console.log(`Module ${module} sedang diperhatikan terhadap perubahan`)
        fs.watchFile(require.resolve(module), async () => {
          await uncache(require.resolve(module))
          cb(module)
        })
}
/**
* Uncache a module
* @param {string} module Module name or path;
*/
function uncache(module = '.') {
        return new Promise((resolve, reject) => {
          try {
            delete require.cache[require.resolve(module)]
            resolve()
          } catch (e) {
            reject(e)
          }
        })
}
/*
zaki.sendPaymentMessage = async (jid, mata_uang, teks, jumlah) => {
  const ba = require('@adiwajshing/baileys')
  const fur = ba.generateWAMessageFromContent(jid, ba.proto.Message.fromObject({
    "requestPaymentMessage": {
      "currencyCodeIso4217": mata_uang,
      "amount1000": jumlah,
      "requestFrom": m.sender,
      "noteMessage": {
        "extendedTextMessage": {
          "text": teks
        }
      },
      "expiryTimestamp": "0",
      "amount": {
        "value": "27100",
        "offset": 1000,
        "currencyCode": "USD"
      }
    }
  }),{quoted : null})
  return zaki.relayMessage(jid, fur.message, {messageId: fur.key.id})}
  */
const getPosiSaying = (from, _db) => {
    let posi = null
    Object.keys(_db).forEach((i) => {
      if (_db[i].jid === from) {
        posi = i
      }
    })
    if (posi !== null) {
      return posi
    }
}

const status = new Spinner(chalk.cyan(` Booting WhatsApp Bot`))
const starting = new Spinner(chalk.cyan(` Preparing After Connect`))
const reconnect = new Spinner(chalk.redBright(` Reconnecting WhatsApp Bot`))

const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })

const connectToWhatsApp = async () => {
        const zaki = makeWASocket({
            printQRInTerminal: true,
            logger: logg({ level: 'fatal' }),
            browser: ['Reii|X-Angel-Botz Multi Device','Safari','1.0.0'],
            auth: state
        })
        title()
        store.bind(zaki.ev)

        /* Auto Update */
        require('./zaki')
        nocache('./zaki', module => console.log(chalk.greenBright('[ WHATSAPP BOT ]  ') + time + chalk.cyanBright(` "${module}" Telah diupdate!`)))

        zaki.multi = true
        zaki.nopref = false
        zaki.prefa = 'anjing'
        zaki.spam = []
        zaki.mode = 'public'
        zaki.ev.on('messages.upsert', async m => {
           var msg = m.messages[0]
	    if (!m.messages) return;
	    if (msg.key && msg.key.remoteJid == "status@broadcast") return
	    msg = serialize(zaki, msg)
           msg.isBaileys = msg.key.id.startsWith('BAE5') || msg.key.id.startsWith('3EB0')
           require('./zaki')(zaki, msg, m, setting, store, welcome, _afk)
        })

        // To Read Presences
        zaki.ev.on('presence.update', async data => {
           // Read Data Presences Afk
           if (data.presences) {
             for (let key in data.presences) {
               if (data.presences[key].lastKnownPresence === "composing" || data.presences[key].lastKnownPresence === "recording") {
                 if (afk.checkAfkUser(key, _afk)) {
                   _afk.splice(afk.getAfkPosition(key, _afk), 1)
                   fs.writeFileSync('./database/afk.json', JSON.stringify(_afk, null, 2))
                   zaki.sendMessage(data.id, { text: `@${key.split("@")[0]} berhenti afk, dia sedang ${data.presences[key].lastKnownPresence === "composing" ? "mengetik" : "merekam"}`, mentions: [key] })
                 }
               }
             }
           }
        })

        zaki.ev.on('connection.update', (update) => {
           const { connection, lastDisconnect } = update
           if (connection === 'close') {
              status.stop()
              reconnect.stop()
              starting.stop()
              console.log(ZakiLog('Login'))
              lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut 
              ? connectToWhatsApp() 
              : console.log(ZakiLog('Logout'))
           }
        })

        zaki.ev.on('group-participants.update', async (data) => {
           const isWelcome = getPosiSaying(data.id, welcome) ? true : false
           var posi = getPosiSaying(data.id, welcome)
           var groupData = await zaki.groupMetadata(data.id)
           var { id, subject, desc, participants } = groupData
           if (isWelcome) {
             try {
               for (let i of data.participants) {
                 // Get Profile Picture Url Participants
                 try {
                   var pp_user = await zaki.profilePictureUrl(i, 'image')
                 } catch {
                   var pp_user = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                 }
                 var pushname = await zaki.getName(i)
                 var img = await getBuffer(pp_user)
                 // Detecting Actions and Sending Greetings
                 if (data.action == 'add') {
                   var teksw = welcome[posi].welcome.replace(/@user/gi, `@${i.split("@")[0]}`).replace(/@subject/gi, subject).replace(/@pushname/gi, pushname).replace(/@desc/gi, desc)
                   zaki.sendMessage(data.id, { caption: teksw, image: img, mentions: [i] })
                 } else if (data.action == 'remove') {
                   var teksl = welcome[posi].left.replace(/@user/gi, `@${i.split("@")[0]}`).replace(/@subject/gi, subject).replace(/@pushname/gi, pushname).replace(/@desc/gi, desc)
                   zaki.sendMessage(data.id, { caption: teksl, image: img, mentions: [i] })
                 }
               }
             } catch (e) {
               console.log(e)
             }
           }
        })

        zaki.ev.on('creds.update', () => saveState)

        zaki.reply = (from, content, msg) => zaki.sendMessage(from, { text: content }, { quoted: msg })

zaki.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
if (json.content[0].tag == 'offer') {
let pa7rick = await zaki.sendContact(callerId, ownerNumber)
zaki.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`}, { quoted : pa7rick })
await sleep(8000)
await zaki.updateBlockStatus(callerId, "block")
}
})

        zaki.decodeJid = (jid) => {
           if (!jid) return jid
           if (/:\d+@/gi.test(jid)) {
             let decode = jidDecode(jid) || {}
             return decode.user && decode.server && decode.user + '@' + decode.server || jid
           } else return jid
        }

        zaki.ev.on('contacts.update', update => {
           for (let contact of update) {
             let id = zaki.decodeJid(contact.id)
             if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
           }
        })

        zaki.getName = (jid, withoutContact = false) => {
           var id = zaki.decodeJid(jid)
           withoutContact = zaki.withoutContact || withoutContact
           let v
           if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
             v = store.contacts[id] || {}
             if (!(v.name || v.subject)) v = zaki.groupMetadata(id) || {}
             resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
           })
            else v = id === '0@s.whatsapp.net' ? {
             id,
             name: 'WhatsApp'
            } : id === zaki.decodeJid(zaki.user.id) ?
             zaki.user :
             (store.contacts[id] || {})
             return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
        }

        zaki.setStatus = (status) => {
           zaki.query({
              tag: 'iq',
              attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
              },
              content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
              }]
            })
           return status
        }

        zaki.sendContact = async (jid, kon, quoted = '', opts = {}) => {
           let list = []
           for (let i of kon) {
             list.push({
               lisplayName: await zaki.getName(i + '@s.whatsapp.net'),
               vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await zaki.getName(i + '@s.whatsapp.net')}\nFN:${await zaki.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
             })
           }
           return zaki.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
        }

        zaki.copyNForward = async (jid, message, forceForward = false, options = {}) => {
           let vtype
           if (options.readViewOnce) {
             message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
             vtype = Object.keys(message.message.viewOnceMessage.message)[0]
             delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
             delete message.message.viewOnceMessage.message[vtype].viewOnce
             message.message = {
               ...message.message.viewOnceMessage.message
             }
           }
           let mtype = Object.keys(message.message)[0]
           let content = await generateForwardMessageContent(message, forceForward)
           let ctype = Object.keys(content)[0]
           let context = {}
           if (mtype != "conversation") context = message.message[mtype].contextInfo
           content[ctype].contextInfo = {
             ...context,
             ...content[ctype].contextInfo
           }
           const waMessage = await generateWAMessageFromContent(jid, content, options ? {
             ...content[ctype],
             ...options,
             ...(options.contextInfo ? {
               contextInfo: {
                 ...content[ctype].contextInfo,
                 ...options.contextInfo
               }
             } : {})
           } : {})
           await zaki.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
           return waMessage
        }

        zaki.sendMessageFromContent = async(jid, message, options = {}) => {
           var option = { contextInfo: {}, ...options }
           var prepare = await generateWAMessageFromContent(jid, message, option)
           await zaki.relayMessage(jid, prepare.message, { messageId: prepare.key.id })
           return prepare
        }

        zaki.groupInspectCode = async(jid) => {
           return require('./lib/inspect')(zaki, jid)
        }

        zaki.downloadAndSaveMediaMessage = async(msg, type_file, path_file) => {
	    if (type_file === 'image') {
	        var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
	        let buffer = Buffer.from([])
	        for await(const chunk of stream) {
	            buffer = Buffer.concat([buffer, chunk])
	        }
	        fs.writeFileSync(path_file, buffer)
	        return path_file
	    } else if (type_file === 'video') {
	        var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
	        let buffer = Buffer.from([])
	        for await(const chunk of stream) {
	            buffer = Buffer.concat([buffer, chunk])
	        }
	        fs.writeFileSync(path_file, buffer)
	        return path_file
	    } else if (type_file === 'sticker') {
	        var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
	        let buffer = Buffer.from([])
	        for await(const chunk of stream) {
	            buffer = Buffer.concat([buffer, chunk])
	        }
	        fs.writeFileSync(path_file, buffer)
	        return path_file
	    } else if (type_file === 'audio') {
	        var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
	        let buffer = Buffer.from([])
	        for await(const chunk of stream) {
	            buffer = Buffer.concat([buffer, chunk])
	        }
	        fs.writeFileSync(path_file, buffer)
	        return path_file
        }
    }
        /**
        * @param {*} jid
        * @param {*} path
        * @param {*} quoted
        * @param {*} options
        * @returns
        */
        zaki.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
           let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
           let buffer
           if (options && (options.packname || options.author)) {
             buffer = await writeExifImg(buff, options)
           } else {
             buffer = await imageToWebp(buff)
           }
           await zaki.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
           .then( response => {
              fs.unlinkSync(buffer)
              return response
           })
        }

        /**
        * @param {*} jid
        * @param {*} path
        * @param {*} quoted
        * @param {*} options
        * @returns
        */
        zaki.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
           let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
           let buffer
           if (options && (options.packname || options.author)) {
             buffer = await writeExifVid(buff, options)
           } else {
             buffer = await videoToWebp(buff)
           }
           await zaki.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
           .then( response => {
              fs.unlinkSync(buffer)
              return response
           })
        }
        return zaki
}

connectToWhatsApp()
.catch(err => console.log(err))
