"use strict";
const {
    downloadContentFromMessage,
    generateWAMessageContent
} = require("@adiwajshing/baileys")
const Baileys = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
const { serialize, getBuffer, fetchJson, fetchText, getRandom,
        getGroupAdmins, reSize, runtime, sleep, generateProfilePicture,
        makeid, removeEmojis, calculate_age, bytesToSize, checkBandwidth } = require("./lib/myfunc");
const thiccysapi = require('textmaker-thiccy')        
const { webp2mp4File } = require("./lib/convert")
const { pinterest } = require("./lib/pinterest")
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { isTicTacToe, getPosTic } = require("./lib/tictactoe");
const { telesticker } = require("./lib/telestick")
const os = require('os')
const { fbdl } = require("./lib/facebook");
const { mediafire } = require("./lib/mediafire");
const { Musikmatch } = require("./lib/lirik");
const { stalkff, stalkml } = require("./lib/stalker");
const {
    addResponGroup,
    checkResponGroup,
    changeResponGroup,  
    deleteResponGroup,
    sendResponGroup
} = require('./lib/respon-group');
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
const { isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen } = require("./lib/setopen");
const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose } = require("./lib/setclose");
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("./lib/game");
const tictac = require("./lib/tictac");
const tictacsolo = require("./lib/tictactoe-solo");
const _prem = require("./lib/premium");
const { tebakgmbr } = require("./lib/tebakgambar");
const msgFilter = require("./lib/antispam");
const textpro = require("./lib/textpro");
const { writeExif } = require("./lib/exif2");
const { yta, ytv } = require("./lib/ytdl");
const { TelegraPh, UploadFileUgu } = require("./lib/uploader");
const { goLens } = require("./lib/googlens");
const { igProfile, insta, igstory } = require("./lib/instagram");
const afk = require("./lib/afk");
const { allsurah, getSurah } = require("./lib/alquran");
const _sewa = require("./lib/sewa");
const skrep = require('./lib/scrape');
const fs = require ("fs");
const cheerio = require("cheerio")
const moment = require("moment-timezone");
const Dym = require("didyoumean");
const util = require("util");
const qs = require("querystring");
const base64 = require("base64-img");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const acrcloud = require("acrcloud");
const axios = require("axios");
const yts = require("yt-search");
const speed = require("performance-now");
const translate = require("@vitalets/google-translate-api");
const request = require("request");
const ms = require("parse-ms");
const toMs = require("ms");
const {
  BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  FajarNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  Cerpen,
  Quotes,
  Couples,
  JalanTikusMeme,
  Darkjokes
} = require("dhn-api");

// Exif
const Exif = require("./lib/exif")
const exif = new Exif()

// DB Game
let tictactoe = [];
let ttcsolo = [];
let tebakgambar = [];
let kuis = [];
let tebaklagu = [];
let casino = [];

// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'));
let mess = JSON.parse(fs.readFileSync('./indonesia.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let modsNumber = JSON.parse(fs.readFileSync('./database/modsNumber.json'));
let anonymous = JSON.parse(fs.readFileSync('./database/anonymous.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let responDB = JSON.parse(fs.readFileSync('./database/respon.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/respon-group.json'));

//Stiker WM
var wm1 = "Author By Reii|X-Angel-Botz"
var wm2 = "+62 877-7840-5247"

//SETTING
var ownername = "Dev Reii|X-Angel-Botz"
var botname = "Reii|X-Angel-Botz"

			//Storage
			const bucinrandom = JSON.parse(fs.readFileSync("./storage/bucin.json"));
			const dogs = JSON.parse(fs.readFileSync("./storage/dogs.json"));
			const anim = JSON.parse(fs.readFileSync("./storage/anime.json"));
			const loli = JSON.parse(fs.readFileSync("./storage/loli.json"));
    		const lolivid = JSON.parse(fs.readFileSync("./storage/asupanloli.json"));
			const fetishloli = JSON.parse(fs.readFileSync("./storage/nsfwloli.json"));    		
			const patrick = JSON.parse(fs.readFileSync("./storage/patr.json"));
			const guwra = JSON.parse(fs.readFileSync("./storage/gura.json"));
			const dark = JSON.parse(fs.readFileSync("./storage/dark.json"));
			const couple = JSON.parse(fs.readFileSync("./storage/couple.json"));
			const faktarandom = JSON.parse(fs.readFileSync("./storage/faktaunik.json"));
			const pantunrandom = JSON.parse(fs.readFileSync("./storage/pantun.json"));
			const randomdilan = JSON.parse(fs.readFileSync("./storage/dilan.json"));
			const quotesanime = JSON.parse(fs.readFileSync("./storage/quotesnime.json"));			
			const hekerbucin = JSON.parse(fs.readFileSync("./storage/hekerbucin.json"));
			const katailham = JSON.parse(fs.readFileSync("./storage/katailham.json"));
			const asupann = JSON.parse(fs.readFileSync("./storage/asupan.json")); 
			const storynime = JSON.parse(fs.readFileSync("./storage/storyanime.json")); 			
			const memrndm = JSON.parse(fs.readFileSync("./storage/memerandom.json"));
			const ghea = JSON.parse(fs.readFileSync("./storage/ghea.json"));			
			const ukhty = JSON.parse(fs.readFileSync("./storage/ukhty.json"));
			const quote = JSON.parse(fs.readFileSync("./storage/quotes.json"));
            const ktgl = JSON.parse(fs.readFileSync("./storage/katagalau.json"));

			//Game
			const der = JSON.parse(fs.readFileSync("./game/dare.json"));
			const trut = JSON.parse(fs.readFileSync("./game/truth.json"));
			
moment.tz.setDefault("Asia/Jakarta").locale("id");

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good Night'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good Evening'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good Evening'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good Afternoon'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good Morning'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
                                         }
                                         
// Auto Reset Limit
setInterval(function() {
   var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
   var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
   // hasilnes Kalo mau Jam 00 jadi 12:00:00 AM
   if(hasilnes === '12:00:00 AM') {
     limit.splice('reset')
     fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
     glimit.splice('reset')
     fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
     console.log("Limit Sudah Di Reset!")
   }
}, 1000);

module.exports = async(zaki, msg, m, setting, store, welcome, _afk) => {
          try {
                let { ownerNumber, botName, lolkey, xteamkey, gamewaktu, limitCount, packname, author } = setting
                if (msg.mentioned && msg.mentioned.includes('')) { Object.keys(msg.mentioned).forEach((i) => { if (msg.mentioned[i] == '') { msg.mentioned.splice(i, 1) } }) }
                const { type, isQuotedMsg, quotedMsg, options, now, fromMe, mentioned, isBaileys } = msg
                if (isBaileys) return
                const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
                let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
               // const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
                const content = JSON.stringify(msg.message)
                const from = msg.key.remoteJid
                var chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
                const budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
                if (chats == undefined) { chats = '' }
                var dataGroup = (type === 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
                var dataPrivate = (type === "messageContextInfo") ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
                const isButton = dataGroup.length !== 0 ? dataGroup : dataPrivate
                var dataListG = (type === "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
                var dataList = (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
                const isListMessage = dataListG.length !== 0 ? dataListG : dataList
                const toJSON = j => JSON.stringify(j, null,'\t')

                if (zaki.multi) {
                  var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
                } else {
                  if (zaki.nopref) {
                     prefix = ''
                  } else {
                     prefix = zaki.prefa
                  }
                }

                const args = chats.split(' ')
                const command = chats.toLowerCase().split(' ')[0] || ''
                const q = chats.slice(command.length + 1, chats.length)
                const isCmd = command.startsWith(prefix)
                const isGroup = msg.key.remoteJid.endsWith('@g.us')
                let sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
                const isOwner = ownerNumber.includes(sender)
                const isMods = isOwner ? true : modsNumber.includes(sender) ? true : false
                const pushname = msg.pushName
                const body = chats.startsWith(prefix) ? chats : ''
                const botNumber = zaki.user.id.split(':')[0] + '@s.whatsapp.net'
                const groupMetadata = isGroup ? await zaki.groupMetadata(from) : ''
                const groupName = isGroup ? groupMetadata.subject : ''
                const groupId = isGroup ? groupMetadata.id : ''
                const groupMembers = isGroup ? groupMetadata.participants : ''
                const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
                const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
                const isGroupAdmins = groupAdmins.includes(sender)
                const isUser = pendaftar.includes(sender)
                const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
                const isSewa = _sewa.checkSewaGroup(from, sewa)
                const isAntiLink = antilink.includes(from) ? true : false
                const isAfkOn = afk.checkAfkUser(sender, _afk)

                const gcounti = setting.gcount
                const gcount = isPremium ? gcounti.prem : gcounti.user

                const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
                const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
                const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
                mention != undefined ? mention.push(mentionByReply) : []
                const mentionUser = mention != undefined ? mention.filter(n => n) : []

                // Function for Code Execution Assistant
                async function downloadAndSaveMediaMessage (type_file, path_file) {
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
                const isUrl = (url) => {
                   return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
                }        
                const sendFileFromUrl = async (from, url, caption, options = {}) => {
                    let mime = '';
                    let res = await axios.head(url)
                    mime = res.headerd["content-type"]
                    let type = mime.split("/")[0]+"Message"
                    if (mime.split("/")[0] === "image") {
                      var img = await getBuffer(url)
                      return zaki.sendMessage(from, { image: img, caption: caption }, options)
                    } else if (mime.split("/")[0] === "video") {
                      var vid = await getBuffer(url)
                      return zaki.sendMessage(from, { video: vid, caption: caption }, options)
                    } else if (mime.split("/")[0] === "audio") {
                      var aud = await getBuffer(url)
                      return zaki.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
                    } else {
                      var doc = await getBuffer(url)
                      return zaki.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
                    }
                }
                async function sendPlay(from, query) {
                  try {
                    var data = await yts(query)
                    data = data.videos[0]
                    var data_a = (await yta(data.url)).filesizeF
                    var data_v = (await ytv(data.url)).filesizeF
                    var button = [
                        { buttonId: prefix+`ytmp3 ${data.url}`, buttonText: { displayText: `Audio (${data_a})` }, type: 1 },
                        { buttonId: prefix+`ytmp4 ${data.url}`, buttonText: { displayText: `Video (${data_v})` }, type: 1 }
                    ]
                    zaki.sendMessage(from, { caption: `*Title :* ${data.title}\n*Quality Mp3 :* 128p\n*Quality Mp4 :* 360p\n*Duration :* ${data.duration.timestamp}\n*Url :* ${data.url}`, image: await getBuffer(data.thumbnail), buttons: button, footer: 'Silahkan Pilih Media Yang Akan Di Download', mentions: [sender] }, { quoted: msg })
                  } catch (e) {
                    zaki.sendMessage(ownerNumber, { text: 'Send play error' })
                    console.log(e)
                  }
                }
                const isEmoji = (emo) => {
                   let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
                   let regexEmoji = new RegExp(emoji_ranges, 'gi');
                   return emo.match(regexEmoji)
                }
                function jsonformat(string) {
                   return JSON.stringify(string, null, 2)
                }
                function monospace(string) {
                   return '```' + string + '```'
                }
                function randomNomor(min, max = null) {
                   if (max !== null) {
                     min = Math.ceil(min);
                     max = Math.floor(max);
                     return Math.floor(Math.random() * (max - min + 1)) + min;
                   } else {
                     return Math.floor(Math.random() * min) + 1
                   }
                }
                const pickRandom = (arr) => {
                   return arr[Math.floor(Math.random() * arr.length)]
                }
                function mentions(teks, mems = [], id) {
                   if (id == null || id == undefined || id == false) {
                     let res = zaki.sendMessage(from, { text: teks, mentions: mems })
                     return res
                   } else {
                     let res = zaki.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
                     return res
                   }
                }
                const nebal = (angka) => {
                   return Math.floor(angka)
                }
                function parseMention(text = '') {
                   return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
                }
                
                const reply = (teks) => {
                   return zaki.sendMessage(from, { text: teks, mentions: parseMention(teks) }, { quoted: msg })
                }
                const fakeDeface = (from, teks, title, description, img, option = {}) => {
                   if (!isUrl(teks)) return 'teks harus mengandung url'
                   return zaki.sendMessage(from, {
                        text: teks,
                        title,
                        matchedText: isUrl(teks)[0],
                        canonicalUrl: isUrl(teks)[0],
                        description,
                        detectLinks: false,
                        jpegThumbnail: img
                   }, option)
                }
                const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name:'🇮🇩 Indonesia',
jpegThumbnail: fs.readFileSync('./media/thumb.jpg')
}
}
}
                const adReply = (teks) => {
                   return zaki.sendMessage(from, {
                     text: teks, contextInfo: {
                      externalAdReply: {
                        title: `Hello ${pushname}`,
							mediaType: 2,
							renderLargerThumbnail: true,
							showAdAttribution: true,
							body: "",
							thumbnail: fs.readFileSync('./media/thumb.jpg'),
							mediaUrl: "https://instagram.com/not_rei1",
							sourceUrl: "https://instagram.com/not_rei1",
                      }
                     }
                   }, { quoted: flokasi })
                }
                const ReplyNya = (teks) => {
                   return zaki.sendMessage(from, {
                     text: teks, contextInfo: {
                      externalAdReply: {
                        title: `© Reii|X-Angel-Botz`,
                        body: `Simple Bot WhatsApp V1-By Reii`,
                        mediaType: 2,
                        thumbnail: fs.readFileSync('./media/thumb2.jpg'),
                        sourceUrl: `https://instagram.com/not_rei1`
                      }
                     }
                   }, { quoted: msg })
                }
                var mekin = await getBuffer(url)
                msg.mekPle
				? (content.contextInfo ={
                      externalAdReply: {
                        title: `Hello ${pushname}`,
							mediaType: 2,
							renderLargerThumbnail: true,
							showAdAttribution: true,
							body: "",
							thumbnail: fs.readFileSync('./media/chitanda.jpg'),
							mediaUrl: "https://instagram.com/not-rei1",
							sourceUrl: "https://instagram.com/not_rei1",
                      }
                     })
                     : "";
                const textImg = (teks) => {
                   return zaki.sendMessage(from, { text: teks, jpegThumbnail: fs.readFileSync(setting.pathimg), mentions: parseMention(teks) }, { quoted: msg })
                }
                const sendMess = (hehe, teks) => {
                   return zaki.sendMessage(hehe, { text, teks })
                }
                const buttonWithText = (from, text, footer, buttons) => {
                   return zaki.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
                }
                const getCase = (cases) => {
                   return "case prefix+"+`'${cases}'`+fs.readFileSync(__filename).toString().split('case prefix+\''+cases+'\'')[1].split("break")[0]+"break"
                }
                function formatDate(n, locale = 'id') {
                   let d = new Date(n)
                   return d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})
                }
                async function sendStickerFromUrl(from, url, packname1 = packname, author1 = author, options = {}) {
                   var names = Date.now() / 10000;
                   var download = function (uri, filename, callback) {
                     request.head(uri, function (err, res, body) {
                       request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                     });
                   };
                   exif.create(packname1, author1, `sendstc_${names}`)
                   download(url, './sticker/' + names + '.png', async function () {
                     let filess = './sticker/' + names + '.png'
                     let asw = './sticker/' + names + '.webp'
                       exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, async (err) => {
                         exec(`webpmux -set exif ./sticker/sendstc_${names}.exif ${asw} -o ${asw}`, async (error) => {
                           zaki.sendMessage(from, { sticker: fs.readFileSync(asw) }, options)
                           fs.unlinkSync(filess)
                           fs.unlinkSync(asw)
                           fs.unlinkSync(`./sticker/sendstc_${names}.exif`)
                         })
                       })
                   })
                }
                function toRupiah(angka) {
                   var balancenyeini = '';
                   var angkarev = angka.toString().split('').reverse().join('');
                   for (var i = 0; i < angkarev.length; i++)
                   if (i % 3 == 0) balancenyeini += angkarev.substr(i, 3) + '.';
                   return '' + balancenyeini.split('', balancenyeini.length - 1).reverse().join('');
                }
                const buttonsProfile = [
                  { quickReplyButton: { displayText: ` Back To Menu`, id: `${prefix}menu` } }
                ]
                const buttonsDefault = [
                   { quickReplyButton: { displayText: ` Owner`, id: `${prefix}owner` } },
                   { quickReplyButton: { displayText: ` Dashboard`, id: `${prefix}dashboard` } }
                ]
                async function fastCheck(url) {
                   var resp = await axios.get(url);
                   return resp.headers["content-type"];
                }

                // Function for Casino
                const isPlayCasino = (from, casino) => {
                   var status = false
                   Object.keys(casino).forEach((i) => {
                     if (casino[i].session == from) {
                       status = true
                     }
                   })
                   return status
                }
                const getCasino = (from, casino) => {
                   var posi = null
                   Object.keys(casino).forEach((i) => {
                     if (casino[i].session == from) {
                       posi = i
                     }
                   })
                   return posi
                }
                const setCasino = (chatId, player1, player2, nominal, _db) => {
                 if (!isPlayCasino(chatId, _db)) {
                   var obj = {
                      status: true,
                      session: chatId,
                      turn: 'Z',
                      Z: player1,
                      Y: player2,
                      nominal: nominal,
                      expired: setTimeout(() => {
                        var teksc = `Waktu casino habis, tidak ada jawaban dari @${player2.split("@")[0]}`
                        zaki.sendMessage(chatId, { text: teksc, mentions: [player2+'@s.whatsapp.net'] })
                        _db.splice(getCasino(chatId, _db), 1)
                      }, 10000000)
                    }
                    _db.push(obj)
                 }
                }
                const deleteCasino = (from, _db) => {
                   if (isPlayCasino(from, _db)) {
                     _db.splice(getCasino(from, _db), 1)
                     return true
                   } else {
                     return false
                   }
                }
                const sesiCasino = (from, casino) => {
                   return casino[getCasino(from, casino)]
                }

                // Function for Count Hit
                async function addCountCmdUser(nama, sender, u) {
                   var posi = null
                   var pos = null
                   Object.keys(u).forEach((i) => {
                     if (u[i].jid === sender) {
                       posi = i
                     }
                   })
                   if (posi === null) {
                     u.push({jid: sender, db: [{nama: nama, count: 0}]})
                     fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
                     Object.keys(u).forEach((i) => {
                       if (u[i].jid === sender) {
                         posi = i
                       }
                     })
                   }
                   if (posi !== null) {
                     Object.keys(u[posi].db).forEach((i) => {
                       if (u[posi].db[i].nama === nama) {
                         pos = i
                       }
                     })
                     if (pos === null) {
                       u[posi].db.push({nama: nama, count: 1})
                       fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
                     } else {
                       u[posi].db[pos].count += 1
                       fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
                     }
                   }
                }
                async function getPosiCmdUser(sender, _db) {
                   var posi = null
                   Object.keys(_db).forEach((i) => {
                     if (_db[i].jid === sender) {
                       posi = i
                     }
                   })
                   return posi
                }
                async function addCountCmd(nama, sender, _db) {
                   addCountCmdUser(nama, sender, _cmdUser)
                   var posi = null
                   Object.keys(_db).forEach((i) => {
                     if (_db[i].nama === nama) {
                       posi = i
                     }
                   })
                   if (posi === null) {
                     _db.push({nama: nama, count: 1})
                     fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
                   } else {
                     _db[posi].count += 1
                     fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
                   }
                }

                // Function for Welcome & Leave
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
                const isWelcome = isGroup ? getPosiSaying(from, welcome) ? true : false : false

                // Function for Anonymous Chat
                function anonyCheck(who = '', _db) {
                   return [_db.a, _db.b].includes(who)
                }
                function anonyOther(who = '', _db) {
                    return who == _db.a ? _db.b : who == _db.b ? _db.a : ''
                }

                const isImage = (type == 'imageMessage')
                const isVideo = (type == 'videoMessage')
                const isSticker = (type == 'stickerMessage')
                const isQuotedImage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
                const isQuotedAudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
                const isQuotedDocument = isQuotedMsg ? (quotedMsg.type === 'documentMessage') ? true : false : false
                const isQuotedVideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
                const isQuotedSticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false

                // Auto Read & Presence Online
                //zaki.sendReadReceipt(from, isGroup ? sender : '', [msg.key.id])
                await zaki.readMessages([msg.key]);
                zaki.sendPresenceUpdate('available', from)

                if (zaki.mode === 'self') {
                  if (!isOwner && !fromMe) return
                  if (fromMe && isBaileys) return
                }

                // Anti Link
                if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins) {
                   if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                     if (!isBotGroupAdmins) return reply(`Untung bot bukan admin`)
                     reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                     .then( done => zaki.groupParticipantsUpdate(from, [sender], "remove") )
                   }
                }

                // Auto Registrasi
                if (isCmd && !isUser) {
                   pendaftar.push(sender)
                   fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
                }

                // Premium
                _prem.expiredCheck(zaki, premium)
                
                // Sewa
                _sewa.expiredCheck(zaki, sewa)

                // Tictactoe
                if (isTicTacToe(from, tictactoe)) tictac(chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance)
                if (isTicTacToe(from, ttcsolo)) tictacsolo(zaki, chats, prefix, ttcsolo, msg)
    
                // Suit PVP
                require('./lib/suitpvp')(zaki, sender, chats, from, msg, isGroup)
    
                // To Read Game Answers
                cekWaktuGame(zaki, tebakgambar) // Tebak Gambar
                if (isPlayGame(from, tebakgambar) && isUser) {
                  if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
                    var htgm = randomNomor(100, 150)
                    addBalance(sender, htgm, balance)
                    reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakgambar*`)
                    tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
                  }
                }
                cekWaktuGame(zaki, kuis) // Kuis Game
                if (isPlayGame(from, kuis) && isUser) {
                  if (chats.toLowerCase() == getJawabanGame(from, kuis)) {
                    var htgm = randomNomor(100, 150)
                    addBalance(sender, htgm, balance)
                    reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, kuis)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}kuis*`)
                    kuis.splice(getGamePosi(from, kuis), 1)
                  }
                }
                cekWaktuGame(zaki, tebaklagu) // Tebak Lagu
                if (isPlayGame(from, tebaklagu) && isUser) {
                  if (chats.toLowerCase() == getJawabanGame(from, tebaklagu)) {
                    var htl = randomNomor(150, 200)
                    addBalance(sender, htl, balance)
                    reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebaklagu)}\nHadiah : ${htl} balance\n\nIngin bermain lagi? ketik *${prefix}tebaklagu*`)
                    tebaklagu.splice(getGamePosi(from, tebaklagu), 1)
                  }
                }

                // Auto Write Database Anonymous Every 30 Second's
                setInterval(async () => {
                  fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonymous, null, 2))
                }, 30 * 1000)

                var cekForAnon = isCmd && args[0].length > 1

                // For Action Anonymous Chat
                if (!isGroup && !msg.key.fromMe && !cekForAnon) {
                   let rums = Object.values(anonymous).find(room => [room.a, room.b].includes(sender) && room.state == "CHATTING")
                   if (rums) {
                     var partnerJID = [rums.a, rums.b].find(user => user !== sender)
                     if (msg.type == "conversation") {
                       zaki.sendMessage(partnerJID, { text: chats })
                     } else if (msg.type == "extendedTextMessage") {
                       zaki.sendMessage(partnerJID, { text: chats, contextInfo: msg.message["extendedTextMessage"].contextInfo })
                     } else {
                       var contextInfo = msg.message[msg.type].contextInfo
                       zaki.sendMessageFromContent(partnerJID, msg.message, { contextInfo })
                     }
                   }
                }

                // For Response List in Group
                if (!isCmd && isGroup && isAlreadyResponList(from, chats, db_respon_list)) {
                  var get_data_respon = getDataResponList(from, chats, db_respon_list)
                  if (get_data_respon.isImage === false) {
                    zaki.sendMessage(from, { text: sendResponList(from, chats, db_respon_list) }, { quoted: msg })
                  } else {
                    zaki.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, { quoted: msg })
                  }
                }

                // To determine the winner of the Casino
                if (isPlayCasino(from, casino)) {
                   var casinoo = sesiCasino(from, casino)
                   if (sender == `${casinoo.Y}@s.whatsapp.net` && chats.toLowerCase() == 'n') {
                     zaki.sendMessage(from, { text: `「 Game Casino Rejected 」\n\n• @${casinoo.Y} Membatalkan Game`, mentions: [casinoo.Y+"@s.whatsapp.net"] }, {quoted: msg })
                     clearTimeout(casinoo.expired)
                     deleteCasino(from, casino)
                   } else if (sender == `${casinoo.Y}@s.whatsapp.net` && chats.toLowerCase() == 'y') {
                     clearTimeout(casinoo.expired)
                     var angka1 = await randomNomor(10, 20)
                     var angka2 = await randomNomor(10, 20)
                     if (angka1 > angka2) {
                       starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
                       zaki.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net"]}, {quoted: msg })
                       await addBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
                       await kurangBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
                       deleteCasino(from, casino)
                     } else if (angka1 < angka2) {
                       starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
                       zaki.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net"] }, {quoted: msg })
                       await addBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
                       await kurangBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
                       deleteCasino(from, casino)
                    } else if (angka1 = angka2) {
                      starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
                      zaki.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net" ]}, { quoted: msg })
                      deleteCasino(from, casino)
                    }
                  }
                }

                // Function for AFK
                if (isGroup && !isBaileys && !fromMe) {
                  if (mentioned.length !== 0) {
                    for (let ment of mentioned) {
                      if (afk.checkAfkUser(ment, _afk)) {
                        const getId = afk.getAfkId(ment, _afk)
                        const getReason = afk.getAfkReason(getId, _afk)
                        const getTime = Date.now() - afk.getAfkTime(getId, _afk)
                        const heheh = ms(getTime)
                        await reply(`@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`)
                      }
                    }
                  }
                  if (afk.checkAfkUser(sender, _afk)) {
                    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
                    fs.writeFileSync('./database/afk.json', JSON.stringify(_afk, null, 2))
                    await mentions(`@${sender.split('@')[0]} telah kembali`, [sender], true)
                  }
                }

                // Function for Anti Spam
                msgFilter.ResetSpam(zaki.spam)
                const spampm = () => {
                   console.log(color('~>[SPAM]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
                   msgFilter.addSpam(sender, zaki.spam)
                   reply(`Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 6 detik`)
                }
                const spamgr = () => {
                   console.log(color('~>[SPAM]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
                   msgFilter.addSpam(sender, zaki.spam)
                   reply(`Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 6 detik`)
                }

                if (isCmd && msgFilter.isFiltered(sender) && !isGroup) return spampm()
                if (isCmd && msgFilter.isFiltered(sender) && isGroup) return spamgr()
                if (isCmd && args[0].length > 1 && !isOwner && !isPremium) msgFilter.addFilter(sender)

                if (chats.startsWith("=> ") && isMods) {
                   console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                   const ev = (sul) => {
                     var sat = JSON.stringify(sul, null, 2)
                     var bang = util.format(sat)
                     if (sat == undefined) {
                       bang = util.format(sul)
                     }
                     return textImg(bang)
                   }
                   try {
                     textImg(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
                   } catch (e) {
                     textImg(util.format(e))
                   }
                } else if (chats.startsWith("$ ") && isMods) {
                   console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                   exec(chats.slice(2), (err, stdout) => {
                     if (err) return reply(`${err}`)
                     if (stdout) reply(`${stdout}`)
                   })
                } else if (chats.startsWith("> ") && isMods) {
                   console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
                   try {
                     let evaled = await eval(chats.slice(2))
                     if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
                     reply(`${evaled}`)
                   } catch (err) {
                     reply(`${err}`)
                   }
                }

                // Logs;
                if (!isGroup && isCmd && !fromMe) {
                   addBalance(sender, randomNomor(20), balance)
                   console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
                }
                if (isGroup && isCmd && !fromMe) {
                   addBalance(sender, randomNomor(20), balance)
                   console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
                }

const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
contextInfo: {
                      externalAdReply: {
                        title: `Hello ${pushname}`,
							mediaType: 2,
							renderLargerThumbnail: true,
							showAdAttribution: true,
							body: "",
							thumbnail: fs.readFileSync('./media/chitanda.jpg'),
							mediaUrl: "https://instagram.com/not_rei1",
							sourceUrl: "https://instagram.com/not_rei1",
                      }
                     }
                     }
                     
// Anti 212
if (sender.startsWith('212'))
await zaki.updateBlockStatus(msg.sender, "block")	   
   
//Image
let bc2 = await getBuffer('https://iili.io/HCdiJEv.md.jpg')
let bc3 = await getBuffer('https://iili.io/HCdiJEv.md.jpg')

//Text
const footer = "© Reii|X-Angel-Botz"
const wiwik = `_Hi ${pushname} ${ucapanWaktu} 👋._

*❝ I'm A Simple Bot Whatsapp, Developed By @6287778405247, Please Read More To See The Features.*
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*❐ MAIN MENU*
   *•* ${prefix}menu
   *•* ${prefix}infobot
   *•* ${prefix}profile   
   *•* ${prefix}speed
   *•* ${prefix}runtime
   *•* ${prefix}cekprem
   *•* ${prefix}groupbot
   *•* ${prefix}owner
   *•* ${prefix}script
   *•* ${prefix}donate
   *•* ${prefix}listprem
   *•* ${prefix}buyprem
   *•* ${prefix}sewabot
   *•* ${prefix}dashboard
   *•* ${prefix}listbahasa

*❐ CONVERTER/TOOLS*
   *•* ${prefix}sticker
   *•* ${prefix}stickerwm
   *•* ${prefix}takesticker
   *•* ${prefix}tambah
   *•* ${prefix}kurang
   *•* ${prefix}kali
   *•* ${prefix}bagi   
   *•* ${prefix}toimg
   *•* ${prefix}tovid
   *•* ${prefix}tomp3
   *•* ${prefix}ttp
   *•* ${prefix}attp
   *•* ${prefix}emojimix
   *•* ${prefix}stikermeme
   *•* ${prefix}spamcall
   *•* ${prefix}say
   *•* ${prefix}translate
   *•* ${prefix}nulis
   *•* ${prefix}tourl
   *•* ${prefix}inspect
   *•* ${prefix}react
   *•* ${prefix}wame
   *•* ${prefix}q
            
*❐ ISLAM MENU*
   *•* ${prefix}listsurah
   *•* ${prefix}alquran
 
*❐ FUN MENU*
   *•* ${prefix}manfess
   *•* ${prefix}fitnah
   *•* ${prefix}afk
   *•* ${prefix}nenen
   *•* ${prefix}simp
   *•* ${prefix}wangy
   *•* ${prefix}wangy2
   *•* ${prefix}sherk
   *•* ${prefix}truth
   *•* ${prefix}dare
   *•* ${prefix}bisakah
   *•* ${prefix}kapankah
   *•* ${prefix}apakah
   *•* ${prefix}bagaimanakah
   *•* ${prefix}rate
   *•* ${prefix}ceksange
   *•* ${prefix}cekgay
   *•* ${prefix}ceklesbi
   *•* ${prefix}cekganteng
   *•* ${prefix}cekcantik
   *•* ${prefix}cekwatak
   *•* ${prefix}hobby
  
*❐ ANONYMOUS CHAT*
   *•* ${prefix}anonymous
   *•* ${prefix}start
   *•* ${prefix}stop
   *•* ${prefix}next
   *•* ${prefix}sendprofile

*❐ DOWNLOADER*
   *•* ${prefix}play
   *•* ${prefix}tiktok
   *•* ${prefix}ytmp4
   *•* ${prefix}ytmp3
   *•* ${prefix}getvideo
   *•* ${prefix}getmusic
   *•* ${prefix}instagram
   *•* ${prefix}igstory
   *•* ${prefix}facebook
   *•* ${prefix}mediafire
   *•* ${prefix}telesticker
   *•* ${prefix}pinterestdl

*❐ MAKER MENU*
   *•* ${prefix}textmaker glicth
   *•* ${prefix}textmaker glow
   *•* ${prefix}flasmurf
   *•* ${prefix}flarun
   *•* ${prefix}fluming
   *•* ${prefix}flaming
   *•* ${prefix}lava
   *•* ${prefix}neonlight
   *•* ${prefix}fabric
   *•* ${prefix}glue
   *•* ${prefix}luxury
   *•* ${prefix}underwater
   *•* ${prefix}harrypotter
   *•* ${prefix}steel
   *•* ${prefix}metallic
   *•* ${prefix}graffiti
   *•* ${prefix}pencil
   *•* ${prefix}sand
   *•* ${prefix}magma
   *•* ${prefix}joker
   *•* ${prefix}sky
   *•* ${prefix}matrix
   *•* ${prefix}neon
   *•* ${prefix}blackpink
   *•* ${prefix}thunder
   *•* ${prefix}whitebear
   *•* ${prefix}hoorror
   *•* ${prefix}8bit
   *•* ${prefix}horror
   *•* ${prefix}retro
   *•* ${prefix}pornhub
   *•* ${prefix}juice
   *•* ${prefix}batman
   *•* ${prefix}multicolor
   *•* ${prefix}collwall
   *•* ${prefix}cool
   *•* ${prefix}wonderful
   *•* ${prefix}sketch
   *•* ${prefix}skeleton
   *•* ${prefix}marvel
   *•* ${prefix}foggy
   *•* ${prefix}writing
   *•* ${prefix}halloween
   *•* ${prefix}watercolor
   *•* ${prefix}classic
   *•* ${prefix}rainbow
   *•* ${prefix}sci_fi
   *•* ${prefix}christmas
   *•* ${prefix}ancient
   *•* ${prefix}toxic
   *•* ${prefix}wolf
   *•* ${prefix}neonlove
  
*❐ QUOTES MENU*
   *•* ${prefix}quote
   *•* ${prefix}katagalau
   *•* ${prefix}quotesanime
   *•* ${prefix}katailham
   *•* ${prefix}hekerbucin
   *•* ${prefix}bucin
   *•* ${prefix}pantun
   *•* ${prefix}quote
   *•* ${prefix}faktarandom2

*❐ RANDOM MENU*
   *•* ${prefix}randomfakta
   *•* ${prefix}quoteanime
   *•* ${prefix}cecan
   *•* ${prefix}cogan
   *•* ${prefix}waifu
   *•* ${prefix}meme
   *•* ${prefix}darkjoke
   *•* ${prefix}ppcouple
   *•* ${prefix}ppcouple2
   
*❐ STALKER MENU*
   *•* ${prefix}igstalk
   *•* ${prefix}ghstalk
        
*❐ SEARCH MENU*
   *•* ${prefix}lirik
   *•* ${prefix}grupwa
   *•* ${prefix}pinterest
   *•* ${prefix}ytsearch
   *•* ${prefix}whatmusic
   *•* ${prefix}searchbyimage
  
*❐ GAME MENU*
   *•* ${prefix}tictactoe
   *•* ${prefix}delttc
   *•* ${prefix}tictactoe-solo
   *•* ${prefix}endttc
   *•* ${prefix}tebakgambar
   *•* ${prefix}kuis
   *•* ${prefix}tebaklagu
   *•* ${prefix}nyerah
   *•* ${prefix}casino
   *•* ${prefix}delcasino
   *•* ${prefix}suit
  
*❐ BALANCE MENU*
   *•* ${prefix}topbalance
   *•* ${prefix}buylimit
   *•* ${prefix}buyglimit
   *•* ${prefix}transfer
  
*❐ GROUP MENU*
   *•* ${prefix}linkgrup
   *•* ${prefix}setppgrup
   *•* ${prefix}setnamegc
   *•* ${prefix}setdesc
   *•* ${prefix}group
   *•* ${prefix}revoke
   *•* ${prefix}ceksewa
   *•* ${prefix}delete
   *•* ${prefix}promote
   *•* ${prefix}demote
   *•* ${prefix}add
   *•* ${prefix}kick
   *•* ${prefix}antilink
   *•* ${prefix}welcome
   *•* ${prefix}setwelcome
   *•* ${prefix}setleft
   *•* ${prefix}hidetag
     
*❐  OWNER MENU*
   > 
   => 
   $ 
   *•* ${prefix}exif
   *•* ${prefix}self
   *•* ${prefix}public
   *•* ${prefix}leave
   *•* ${prefix}join
   *•* ${prefix}setppbot
   *•* ${prefix}getcase
   *•* ${prefix}addprem
   *•* ${prefix}delprem
   *•* ${prefix}sewaad
   *•* ${prefix}resetlimit
   *•* ${prefix}bc1
   *•* ${prefix}bc2
   *•* ${prefix}bc3`

   //Tes
   zaki.sendPaymentMessage = async (jid, mata_uang, teks, jumlah) => {
    const ba = require('@adiwajshing/baileys')
    const fur = ba.generateWAMessageFromContent(jid, ba.proto.Message.fromObject({
      "requestPaymentMessage": {
        "currencyCodeIso4217": mata_uang,
        "amount1000": jumlah,
        "requestFrom": msg.sender,
        "noteMessage": {
          "extendedTextMessage": {
            "text": teks,
        "expiryTimestamp": "0",
        "amount": {
          "value": "27100",
          "offset": 1000,
          "currencyCode": "USD"
        }
    }
    }
      }
    }),{quoted : null})
    return zaki.relayMessage(jid, fur.message, {messagId: fur.key.id})}

        switch(command) {
//baru
/*case prefix+'gitclone':
//if (isBan) return reply(mess.ban)
let kwont = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return reply('Linknya?')
//if (args[0]) return reply('Linknya salah')
let [, user, repo] = args[0].match(kwont) || []
repos = repo.replace(/.git$/, '')
let hasdl = `https://api.github.com/repos/${user}/${repos}/zipball`
let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
zaki.sendFile(from, hasdl, namafile, m)
break*/
case prefix+'jalantikusmeme': {
//if (isBan) return reply(mess.ban)
reply(mess.wait)
let jnts = JalanTikusMeme()
zaki.sendMessage(from, { image: { url: jnts, caption: `Cringe Dek` } }, { quoted: m })
}
break
case prefix+'darkjokes': {
//if (isBan) return reply(mess.ban)
reply(mess.wait)
let randIndex = Math.floor(Math.random() * dark.length);
var randKey = dark[randIndex];
zaki.sendMessage(from, { image : { url : randKey.url }, caption:`Ehem` }, { quoted : msg })
}
break
case prefix+'darkjokes2': {
//if (isBan) return reply(mess.ban)
reply(mess.wait)
let kntul = Darkjokes()
zaki.sendMessage(from, { image: { url: kntul, caption: `Cringe Dek` } }, { quoted: m })
}
break
case prefix+'memerandome': case prefix+'randommeme': case prefix+'meme': {
//if (isBan) return reply(mess.ban)
reply(mess.wait)
var rannIndex = Math.floor(Math.random() * memrndm.length);
let randKeyy = memrndm[rannIndex];
			zaki.sendMessage(from, { image : { url : randKeyy.url }, caption:`Nih Kids` }, { quoted : msg })
}
break
case prefix+'ppcouples2': case prefix+'ppcp2': {
//if (isBan) return reply(mess.ban)
reply(mess.wait)
var ngntd = Couples()
zaki.sendMessage(from, { image : { url : ngntd.female }, caption:`_For Your Girlfriend_\n\n_Follow @not_rei1_` }, { quoted : msg })
zaki.sendMessage(from, { image : { url : ngntd.male }, caption:`_For Your Boyfriend_\n\n_Follow @not_rei1_` }, { quoted : msg })
}
break
case prefix+'ppcp': case prefix+'ppcouple': {
//if (isBan) return reply(mess.ban)
reply(mess.wait)
let pasangan1 = Math.floor(Math.random() * couple.length);
let pasangan2 = couple[pasangan1];
zaki.sendMessage(from, { image : { url : pasangan2.female }, caption:`_For Your Girlfriend_\n\n_Follow @not_rei1_` }, { quoted : msg })
zaki.sendMessage(from, { image : { url : pasangan2.male }, caption:`_For Your Boyfriend_\n\n_Follow @not_rei1_` }, { quoted : msg })
}
break
case prefix+'katagalau': {
var plo = ktgl[Math.floor(Math.random() * (ktgl.length))]
reply(plo)
				}
				break
case prefix+'cerpen': {
//if (isBan) return reply(mess.ban)
let wasu = Cerpen()
reply(wasu)
}
break
case prefix+'quotesdilan': case prefix+'dilan': {
var dilong = randomdilan[Math.floor(Math.random() * (randomdilan.length))]
reply(dilong)
}
break
case prefix+'katailham': {
var ilhamkata = katailham[Math.floor(Math.random() * (katailham.length))]
reply(ilhamkata)
}
break
case prefix+'pantun': {
var pantung = pantunrandom[Math.floor(Math.random() * (pantunrandom.length))]
reply(pantung)
}
break
case prefix+'bucin': 
const bosan = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
reply(bosan)
break
case prefix+'hekerbucin': {
var hekel = hekerbucin[Math.floor(Math.random() * (hekerbucin.length))]
reply(hekel)
}
break
case prefix+'truth': {
	//if (isBan) return reply(mess.ban)
	const hol = trut[Math.floor(Math.random() * (trut.length))]
	let images = ('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg')
	let buttons = [
		{buttonId: `${prefix}truth`, buttonText: {displayText: 'NEXT'}, type: 1}
	]
	let buttonMessage = {
	image: { url: images },
	caption: `*｢  TRUTH OR DARE  ｣*  
	
${hol}`,
	footer: `${footer}`,
	buttons: buttons,
	headerType: 4
	}
	zaki.sendMessage(from, buttonMessage, { quoted: msg })
}
	break
	case prefix+'dare': {
		//if (isBan) return reply(mess.ban)
		const mek = der[Math.floor(Math.random() * (der.length))]
		let images = ('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg')
		let buttons = [
			{buttonId: `${prefix}dare`, buttonText: {displayText: 'NEXT'}, type: 1}
		]
		let buttonMessage = {
		image: { url: images },
		caption: `*｢  TRUTH OR DARE  ｣*  
		
${mek}`,
		footer: `${footer}`,
		buttons: buttons,
		headerType: 4
		}
		zaki.sendMessage(from, buttonMessage, { quoted: msg })
	}
		break	
case prefix+'hobby': {
	//if (isBan) return reply(mess.ban)
	let hobby = body.slice(0)
				const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
				const by = hob[Math.floor(Math.random() * hob.length)]
reply('Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by)
				}
				break

case prefix+'cekwatak': {
	//if (isBan) return reply(mess.ban)
	let watak = body.slice(0)
				const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
				const tak = wa[Math.floor(Math.random() * wa.length)]
reply('Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak)
				}
				break
				
case prefix+'cekcantik': {
	//if (isBan) return reply(mess.ban)				
let cantik = body.slice(0)
				const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const tik = can[Math.floor(Math.random() * can.length)]
reply('Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%')
				}
				break	
				
case prefix+'cekganteng': {
	//if (isBan) return reply(mess.ban)							
let ganteng = body.slice(0)
				const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const teng = gan[Math.floor(Math.random() * gan.length)]
reply('Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%')		
}
break												
													
case prefix+'ceklesbi': {
	//if (isBan) return reply(mess.ban)			
let lesbii = body.slice(0)
				const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
reply('Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%')
				}
				break					

case prefix+'cekgay': {
	//if (isBan) return reply(mess.ban)
let gayy = body.slice(0)
				const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const yag = gay[Math.floor(Math.random() * gay.length)]
reply('Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%')
				}
				break	
				
case prefix+'ceksange': {
	//if (isBan) return reply(mess.ban)											
let sange = body.slice(0)
				const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const nge = sang[Math.floor(Math.random() * sang.length)]
reply('Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%')
				}
				break		

case prefix+'rate': {
	//if (isBan) return reply(mess.ban)
let rate = body.slice(0)
				const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const te = ra[Math.floor(Math.random() * ra.length)]
reply('Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%')
}
break

case prefix+'conves': case prefix+'pesanrahasia': case prefix+'menfess': case prefix+'menfes': 
if (!q) return reply(`Example : \n${command} 628xxxx|Pengirim|Pesannya`)
                 var Buton = [
                { buttonId: prefix+'conves', buttonText: { displayText: "Kirim Pesan Rahasia" }, type: 1 }
             ]
             var nmr = q.split('|')[0]+'@s.whatsapp.net'
             var tek1 = q.split('|')[1]
             var tek2 = q.split('|')[2]
               zaki.sendMessage(nmr, { text: 'Halo 👋, Kamu Dapeat Menfess Nih!\n\n*❏ Dari :* '+tek1+'\n*❏ Pesan :* '+tek2+'', footer: "© Chitanda - MD", buttons: Buton })
                  reply('*Berhasil Mengirim Pesan!*')
   break            
case prefix+'bagaimanakah': {
	//if (isBan) return reply(mess.ban)
let bagaimanakah = body.slice(0)
				const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
				const mana = bagai[Math.floor(Math.random() * bagai.length)]
reply('Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana)
}
break

case prefix+'apakah': {
	//if (isBan) return reply(mess.ban)
let apakah = body.slice(0)
				const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
				const kah = apa[Math.floor(Math.random() * apa.length)]
reply('Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah)
}
break

case prefix+'kapankah': {
	//if (isBan) return reply(mess.ban)
let kapankah = body.slice(0)
				const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
reply('Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh)
}
break	

case prefix+'bisakah': {
	//if (isBan) return reply(mess.ban)
let bisakah = body.slice(0)
				const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
reply('Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh)	
}
break
case prefix+'sherk': {
	if (!q) return reply("Namanya?")
	var shimp = `Usiaku 17 tahun. Aku sangat mencintai ${q}, aku punya semua Figurine dan wallpapernya. Aku berdoa setiap malam dan berterima kasih atas segala hal yang telah ia berikan kepadaku. "${q} adalah cinta" aku bilang "${q} adalah Tujuan Hidupku". Temanku datang ke kamarku dan berkata "HALU LU ANJING !!". Aku tau dia cemburu atas kesetiaanku kepada ${q}. Lalu kukatakan padanya "BACOT NJING !!". Temanku menampol kepalaku dan menyuruhku untuk tidur. Kepalaku sakit dan aku menangis. Aku rebahan di kasur yang dingin, lalu ada sesuatu yang hangat menyentuhku. Ternyata ${q} datang ke dalam kamarku, Aku begitu senang bertemu ${q}. Dia membisikan ke telingaku, "Kamu adalah impianku" Dengan tangannya dia meraih diriku. Aku melebarkan pantatku keatas demi ${q}. Dia menusukan sesuatu kedalam Anggusku. begitu sakit, tapi kulakukan itu demi ${q}. Aku ingin memberikan kepuasan kepada ${q}. Dia meraum bagaikan singa, disaat dia melepaskan cintanya kedalam Anggusku. Temanku masuk kekamarku dan berkata "....... Anjing". ${q} melihat temanku dan berkata " Semua sudah berakhir" Dengan menggunakan kemampuannya Stellar Restoration ${q} pergi meninggalkan kamarku. "${q} itu cinta" "${q} itu kehidupan".`
	reply(shimp)
	}
	break
	case prefix+'wangy2': {
	if (!q) return reply("Namanya?")
	var halu = `GW BENAR-BENAR PENGEN JILAT KAKI *${q}*,GW PENGEN BANGET MENJILAT SETIAP BAGIAN KAKINYA SAMPAI AIR LIUR GW BERCUCURAN KAYAK AIR KERINGAT LALU NGENTOD DENGAN NYA SETIAP HARI SAMPAI TUBUH KITA MATI RASA, YA TUHAN GW INGIN MEMBUAT ANAK ANAK DENGAN *${q}* SEBANYAK SATU TIM SEPAK BOLA DAN MEMBUAT SATU TIM SEPAK BOLA LAINYA UNTUK MELAWAN ANAK-ANAK TIM SEPAK BOLA PERTAMA GW  YANG GW BUAT SAMA *${q}* GW PENGEN MASUK KE SETIAP LUBANG TUBUHNYA, MAU ITU LUBANG HIDUNG LUBANG MATA MAUPUN LUBANG BOOL, KEMUDIAN GW AKAN MANUSIA YANG TIDAK BISA HIDUP KALO GW GA ENTOD SETIAP HARI.`
	reply(halu)
	}
	break
	case prefix+'wangy': {
	if (!q) return reply("Namanya?")
	var wangi = `${q} ${q} ${q} ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${q} wangi aku mau nyiumin aroma wanginya ${q} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${q} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${q} AAAAA LUCCUUUUUUUUUUUUUUU............ ${q} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${q} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${q} gw ... ${q} di laptop ngeliatin gw, ${q} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${q} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${q} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
	reply(wangi)
	}
	break
	case prefix+'nenen': {
	if (!q) return reply("Namanya?")
	var nenon = `NENEN NENEN KEPENGEN NENEN SAMA ${q}. TETEK GEDE NAN KENCANG MILIK ${q} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${q}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${q}. BIARKAN AKU MENGENYOT NENENMU ${q}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${q} WANGIIII`
	reply(nenon)
	}
	break
	case prefix+'simp': {
	if (!q) return reply("Namanya?")
	var uol = `Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${q}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${q}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pinton film, sambil pelukan ama ma ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${q} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${q}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`
	reply(uol)
	}
	break									        
//Anu
        case prefix+'tambah':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one + nilai_two}`)
            break
        case prefix+'kurang':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one - nilai_two}`)
            break
        case prefix+'kali':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one * nilai_two}`)
            break
        case prefix+'bagi':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one / nilai_two}`)
            break
                // Main Menu
                case prefix+'menu':
                case prefix+'help':
                   addCountCmd('#help', sender, _cmd)
/*              
const { generateWAMessageFromContent } = require ("@adiwajshing/baileys")
let prep = generateWAMessageFromContent(from, { liveLocationMessage: { 
degreesLatitude: 35.652832, degreesLongitude: 139.839478,
caption: wiwik,
mention: [sender],
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: null,
externalAdReply: {
  showAdAttribution: true
}
}}, { quoted: msg
					})
 zaki.relayMessage(from, prep.message, { messageId: prep.key.id })
 */
/*
  zaki.relayMessage(from,  {
  requestPaymentMessage: {
    currencyCodeIso4217: 'USD',
    amount1000: 1000000,
    requestFrom: msg.sender,
    noteMessage: {
      extendedTextMessage: {
        text: wiwik,
          externalAdReply: {
            showAdAttribution: true
          }
      }
    }
  }
}, { quoted: flokasi})
*/
var hudu = [ 'application/pdf' , 'application/vnd.openxmlformats-officedocument.presentationml.presentation' , 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
let filerdm = hudu[Math.floor(Math.random() * hudu.length)]
var ppp = await getBuffer('https://iili.io/HCdiJEv.md.jpg')
let buttons = [
{buttonId: `.owner`, buttonText: {displayText: 'OWNER'}, type: 1},{buttonId: `.db`, buttonText: {displayText: 'DASHBOARD'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./media/foto.jpg'),
mimetype: filerdm,
jpegThumbnail: ppp,
fileName: `© Reii|X-Angel-Botz`,
fileLength: 99999999999999,
caption: wiwik,
footer: `© Reii|X-Angel-Botz`,
buttons: buttons,
headerType: 4,
mentions: [m.sender, "6287778405247@s.whatsapp.net"],
contextInfo:{externalAdReply:{
showAdAttribution: true,
title:`${pushname}`,
body:``,
thumbnail: ppp,
mediaType:2,
mediaUrl: `https://www.tiktok.com/@always_ntreii?_t=8VvI63a8xaz&_r=1`,
sourceUrl: `https://www.tiktok.com/@always_ntreii?_t=8VvI63a8xaz&_r=1`,
}}
}
zaki.sendMessage(from, buttonMessage, {quoted: flokasi})
                   break
                case prefix+'infobot': case prefix+'info':
                case prefix+'botinfo': case prefix+'stats': case prefix+'stat':
                   addCountCmd('#infobot', sender, _cmd)
                   var nodeos = require('node-os-utils')
                   //var { totalGb, usedGb, freeGb } = await nodeos.drive.info()
                   var { download, upload } = await checkBandwidth()
                   var totalhit = 0; for (let i of _cmd) { totalhit = totalhit + i.count }
                   var allgrup = await zaki.groupFetchAllParticipating().then(res => Object.values(res))
                   var allchat = await store.chats.all()
                   var tmp = speed(); var tmps = speed() - tmp;
                   var sesize = bytesToSize(fs.statSync(`./${setting.sessionName}.json`).size)
var capt = `『 💬 STATUS 』

*» Bot Name :* ${zaki.user.name}
*» Total Pengguna :* ${pendaftar.length}
*» Runtime :* ${runtime(process.uptime())}
*» Total Chat :* ${allchat.length}
*» Private Chat :* ${allchat.length - allgrup.length}
*» Group Chat :* ${allgrup.length}
*» Total Hit :* ${totalhit}

『 📱 PHONE 』

*» Brand Phone :*  Linux 
*» Ram Device :*  256 GB + 1 Tb 
*» Os Version :* ${os.version}
*» Os Tyoe :*  ${os.type()} 
*» Os Relase :*  ${os.release()} 

『 ⚔️ SERVER 』

*» Tmp Dir :* ${os.tmpdir()} 
*» Arch :* ${os.arch()} 
*» Platfrom :* ${os.platform()} 
*» Hostname :* ${os.hostname()} 
*» Speed :* ${tmps.toFixed(4)} Second(s)

『 📊 STATISTIC 』

*» Download :* ${download}
*» Upload :* ${upload}
*» Total Storage :* unlimited GB
*» Used :* unlimited GB
*» Free :* unlimited GB`
adReply(capt)
                   break
case prefix+'profile': case prefix+'me':
  function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
       while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
  }
  let kntil = ` ❐ Your Profile :
  
     • Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
     • Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
     • Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
     • Balance : $${toCommas(getBalance(sender, balance))}
  `
  adReply(kntil)
    break
                case prefix+'groupbot': case prefix+'botgroup':
                case prefix+'chitandamd': case prefix+'flob':
                   var gc = "https://chat.whatsapp.com/EUr0RyJvHyWFkZnjI1wGRI"
                   var teks = `Untuk Mendaptakan info seputar update dari Reii|X-Angel-Botz Silahkan Join Ke Group Officialnya: ${gc}`
                   adReply(teks)
                   break
                case prefix+'runtime':
                   addCountCmd('#runtime', sender, _cmd)
                   reply(runtime(process.uptime()))
                   break
                case prefix+'ping': case prefix+'speed':
                   addCountCmd('#speed', sender, _cmd)
                   let timestamp = speed();
                   let latensi = speed() - timestamp
                   textImg(`${latensi.toFixed(4)} Second`)
                   break
                case prefix+'donate':
                case prefix+'donasi':
                   addCountCmd('#donate', sender, _cmd)
                   zaki.sendMessage(from, { image: { url: 'https://iili.io/HC3Xmla.md.png' }, caption: `*── 「 DONATE 」 ──*\n\n_Kalian Bisa Dukung Bot Lewat Donate Ke :_\n _》Dana : 087778405247_\n _》Ovo : 087778405247_\n\n_Donate Kalian Sangat Berarti Buat Bikin Bot ini on 24 jam._\n\n_Contact person Owner:_\n_wa.me/6287778405247` }, { quoted: msg })
                   break
                case prefix+'owner':
                   addCountCmd('#owner', sender, _cmd)
                   var number = ownerNumber.replace(/[^0-9]/g, '')
                   var vcard = 'BEGIN:VCARD\n'
                   + 'VERSION:3.0\n'
                   + 'FN:Owner of '+ botname.split(' ')[0] + '\n'
                   + 'ORG:;\n'
                   + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
                   + 'END:VCARD'
                   zaki.sendMessage(from, { contacts: { displayName: ownername, contacts: [{ vcard }] }},{ quoted: msg })
                   break
                case prefix+'sc': case prefix+'script':
                case prefix+'sourcecode': case prefix+'scriptbot':
                   addCountCmd('#sourcecode', sender, _cmd)
                   var teks = '```SCRIPT BOT INI DIJUAL HARGA 100 Ribu JIKA MINAT?``` \n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏  *Whatsapp Admin Wa.me/6287778405247*'
                   ReplyNya(teks)
                   break
                case prefix+'cekprem':
                case prefix+'cekpremium':
                   if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buyprem* untuk membeli premium`)
                   addCountCmd('#cekpremium', sender, _cmd)
                   if (isOwner) return reply(`Lu owner bego!`)
                   if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                   let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                   let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                   reply(premiumnya)
                   break
                case prefix+'listprem':
                   addCountCmd('#listprem', sender, _cmd)
                   let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                   let men = [];
                   for (let i of premium) {
                     men.push(i.id)
                     txt += `*ID :* @${i.id.split("@")[0]}\n`
                     if (i.expired === 'PERMANENT') {
                       let cekvip = 'PERMANENT'
                       txt += `*Expire :* PERMANENT\n\n`
                     } else {
                       let cekvip = ms(i.expired - Date.now())
                       txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                     }
                   }
                   mentions(txt, men, true)
                   break
                case prefix+'buyprem': case prefix+'premium':
                   addCountCmd('#buypremium', sender, _cmd)
                   var teks = `Silahkan Untuk Upgrade Ke Premium Untuk Menikmati Bot Dengan Limit Unlimites. Jika Berminat Silahkan Chat Owner!`
                   reply(teks)
                   break
                case prefix+'sewa': case prefix+'sewabot':
                   addCountCmd('#sewabot', sender, _cmd)
                   var anu = ` *» Price List Chitanda - MD :*

   _• Sewa Bot 1 Minggu : 5K_
   _• Sewa Bot 1 Bulan : 15K_
   _• Sewa Bot Permanen : 30K_
   _• Sewa Bot 2 Group : 50K_
 `
ReplyNya(anu)
                   break
                case prefix+'dashboard': case prefix+'db':
                   addCountCmd('#dashboard', sender, _cmd)
                   var posi = await getPosiCmdUser(sender, _cmdUser)
                   _cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
                   _cmd.sort((a, b) => (a.count  < b.count) ? 1 : -1)
                   var posi = await getPosiCmdUser(sender, _cmdUser)
                   var jumlahCmd = _cmd.length
                   if (jumlahCmd > 10) jumlahCmd = 10
                   var jumlah = _cmdUser[posi].db.length
                   if (jumlah > 5) jumlah = 5
                   var totalUser = 0
                   for (let x of _cmdUser[posi].db) {
                     totalUser = totalUser + x.count
                   }
                   var total = 0
                   for (let o of _cmd) {
                     total = total + o.count
                   }
                   var teks = `*❒ DASHBOARD*\n\n◉ TOTAL HIT : ${total}\n\n`
                   teks += `*📌 Command Today :*\n`
                   for (let u = 0; u < jumlahCmd; u ++) {
                     teks += `◉ ${_cmd[u].nama} : ${_cmd[u].count}x\n`
                   }
                   ReplyNya(teks)
                   break
                // Converter & Tools Menu
                case prefix+'sticker': case prefix+'stiker': case prefix+'s':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (isImage || isQuotedImage) {
                     addCountCmd('#sticker', sender, _cmd)
                     var media = await zaki.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender}.jpeg`)
                     var opt = { packname: wm1, author: wm2 }
                     zaki.sendImageAsSticker(from, media, msg, opt)
                     .then( res => {
                     fs.unlinkSync(media)
                     }).catch((e) => reply(mess.error.api))
                   } else if (isVideo || isQuotedVideo) {
                     if (args.length < 2) return reply(`Kirim/Balas gambar/video/sticker dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                     reply(mess.wait)
                     var media = await zaki.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender}.jpeg`)
                     var opt = { packname: wm1, author: wm2 }
                     zaki.sendImageAsSticker(from, media, msg, opt)
                     .then( res => {
                       fs.unlinkSync(media)
                     }).catch((e) => reply(mess.error.api))
                   } else if (isQuotedSticker) {
                     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                     reply(mess.wait)
                     var media = quotedMsg['stickerMessage'].isAnimated !== true ? await zaki.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender}.jpeg`) : await zaki.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender}.webp`)
                     media = quotedMsg['stickerMessage'].isAnimated !== true ? media : (await webp2mp4File(media)).data
                     var opt = { packname: wm1, author: wm2 }
                     quotedMsg['stickerMessage'].isAnimated !== true ?
                      zaki.sendImageAsSticker(from, media, msg, opt)
                       .then( res => { fs.unlinkSync(media) }).catch((e) => reply(mess.error.api))
                       : zaki.sendVideoAsSticker(from, media, msg, opt)
                        .then( res => { fs.unlinkSync(`./sticker/${sender}.webp`) }).catch((e) => reply(mess.error.api))
                   } else {
                     reply(`Kirim/Balas gambar/video/sticker dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                   }
                   break
                case prefix+'swm': case prefix+'wm': case prefix+'take': case prefix+'takestiker':
                case prefix+'stikerwm': case prefix+'stickerwm': case prefix+'takesticker':
                   if (!isPremium) return reply(mess.OnlyPrem)
                   var pname = q.split('|')[0] ? q.split('|')[0] : q
                   var athor = q.split('|')[1] ? q.split('|')[1] : ''
                   if (isImage || isQuotedImage) {
                     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                     var media = await zaki.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender}.jpeg`)
                     var opt = { packname: pname, author: athor }
                     zaki.sendImageAsSticker(from, media, msg, opt)
                     .then( res => {
                     fs.unlinkSync(media)
                     }).catch((e) => reply(mess.error.api))
                   } else if (isVideo || isQuotedVideo) {
                     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                     reply(mess.wait)
                     var media = await zaki.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender}.jpeg`)
                     var opt = { packname: pname, author: athor }
                     zaki.sendImageAsSticker(from, media, msg, opt)
                     .then( res => {
                       fs.unlinkSync(media)
                     }).catch((e) => reply(mess.error.api))
                   } else if (isQuotedSticker) {
                     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                     reply(mess.wait)
                     var media = quotedMsg['stickerMessage'].isAnimated !== true ? await zaki.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender}.jpeg`) : await zaki.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender}.webp`)
                     media = quotedMsg['stickerMessage'].isAnimated !== true ? media : (await webp2mp4File(media)).data
                     var opt = { packname: pname, author: athor }
                     quotedMsg['stickerMessage'].isAnimated !== true ?
                      zaki.sendImageAsSticker(from, media, msg, opt)
                       .then( res => { fs.unlinkSync(media) }).catch((e) => reply(mess.error.api))
                       : zaki.sendVideoAsSticker(from, media, msg, opt)
                        .then( res => { fs.unlinkSync(`./sticker/${sender}.webp`) }).catch((e) => reply(mess.error.api))
                   } else {
                     reply(`Kirim/Balas gambar/video/sticker dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                   }
                   break
                case prefix+'toimg': case prefix+'toimage':
                case prefix+'tovid': case prefix+'tovideo':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (!isQuotedSticker) return reply(`Reply stikernya!`)
                   var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                   var buffer = Buffer.from([])
                   for await(const chunk of stream) {
                     buffer = Buffer.concat([buffer, chunk])
                   }
                   var rand1 = 'sticker/'+getRandom('.webp')
                   var rand2 = 'sticker/'+getRandom('.png')
                   fs.writeFileSync(`./${rand1}`, buffer)
                   if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
                     reply(mess.wait)
                     addCountCmd('#toimg', sender, _cmd)
                     exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
                       fs.unlinkSync(`./${rand1}`)
                       if (err) return reply(mess.error.api)
                       zaki.sendMessage(from, { image: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
                       limitAdd(sender, limit)
                       fs.unlinkSync(`./${rand2}`)
                     })
                   } else {
                     reply(mess.wait)
                     addCountCmd('#tovid', sender, _cmd)
                     webp2mp4File(`./${rand1}`).then(async(data) => {
                       fs.unlinkSync(`./${rand1}`)
                       zaki.sendMessage(from, { video: await getBuffer(data.data) }, { quoted: msg })
                       limitAdd(sender, limit)
                     })
                   }
                   break
                case prefix+'tomp3': case prefix+'toaudio':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (isVideo || isQuotedVideo) {
                     let media = await zaki.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${Date.now()}.mp4`)
                     reply(mess.wait)
                     addCountCmd('#tomp3', sender, _cmd)
                     let ran = './sticker/'+getRandom('.mp3')
                     exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
                       fs.unlinkSync(media)
                       if (err) { fs.unlinkSync(ran); return reply('Gagal :V') }
                       zaki.sendMessage(from, { audio: fs.readFileSync(ran),  mimetype: 'audio/mp4', fileName: `${sender.split("@")[0]}ToMp3`, ptt: args[1] == '--ptt' ? true : false }, { quoted: msg })
                       limitAdd(sender, limit)
                       fs.unlinkSync(ran)
                     })
                   } else {
                     reply(`Kirim/reply video dengan caption ${command} atau ${command} --ptt`)
                   }
                   break
                case prefix+'attp':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                   if (q.length > 75) return reply(`Teks nya kepanjangan`)
                   addCountCmd('#attp', sender, _cmd)
                   getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
                   .then( res => {
                     if (res == undefined) return reply(mess.error.api)
                     zaki.sendVideoAsSticker(from, res, msg, { packname, author })
                     limitAdd(sender, limit)
                   }).catch(() => reply(mess.error.api))
                   break
                case prefix+'ttp':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah *${prefix}ttp* teks`)
                   if (q.length > 75) return reply(`Teksnya kepanjangan`)
                   addCountCmd('#ttp', sender, _cmd)
                   getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(q)}`)
                   .then( res => {
                     if (res == undefined) return reply(mess.error.api)
                     zaki.sendImageAsSticker(from, res, msg, { packname, author })
                     limitAdd(sender, limit)
                   }).catch(() => reply(mess.error.api))
                   break
                case prefix+'emojimix': case prefix+'mixemoji':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} emoji1+emoji2\ncontoh : ${command} 😜+😅`)
                   if (!q.includes('+')) return reply(`Format salah, contoh pemakaian ${command} 😅+😭`)
                   var emo1 = q.split("+")[0]
                   var emo2 = q.split("+")[1]
                   if (!isEmoji(emo1) || !isEmoji(emo2)) return reply(`Itu bukan emoji!`)
                   addCountCmd('#emojimix', sender, _cmd)
                   fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emo1)}_${encodeURIComponent(emo2)}`)
                   .then(data => {
                     sendStickerFromUrl(from, data.results[0]. url, packname, author, { quoted: msg })
                     limitAdd(sender, limit)
                   }).catch((e) => reply(mess.error.api))
                   break
                case prefix+'smeme': case prefix+'stikermeme':
                case prefix+'stickermeme': case prefix+'memestiker':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   var atas = q.includes('|') ? q.split('|')[0] ? q.split('|')[0] : q : '-'
                   var bawah = q.includes('|') ? q.split('|')[1] ? q.split('|')[1] : '' : q
                   var opt = { packname, author }
                   if (isImage || isQuotedImage) {
                    try {
                     if (args.length < 2) return reply(`Kirim perintah ${command} teks atas|teks bawah`)
                     addCountCmd('#smeme', sender, _cmd)
                     reply(mess.wait)
                     var media = await zaki.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender+Date.now()}.jpg`)
                     var media_url = (await UploadFileUgu(media)).url
                     var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
                     zaki.sendImageAsSticker(from, meme_url, msg, opt)
                     limitAdd(sender, limit)
                     fs.unlinkSync(media)
                    } catch (e) {
                     reply(mess.error.api)
                    }
                   } else if (isQuotedSticker) {
                    try {
                     if (args.length < 2) return reply(`Kirim perintah ${command} teks atas|teks bawah`)
                     addCountCmd('#smeme', sender, _cmd)
                     reply(mess.wait)
                     var media = await zaki.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender+Date.now()}.webp`)
                     var media_url = (await UploadFileUgu(media)).url
                     var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
                     zaki.sendImageAsSticker(from, meme_url, msg, opt)
                     limitAdd(sender, limit)
                     fs.unlinkSync(media)
                    } catch (err) {
                     reply(mess.error.api)
                    }
                   } else {
                     reply(`Kirim Gambar atau balas Sticker dengan caption ${command} teks atas|teks bawah`)
                   }
                   break
                case prefix+'spamcall':
                   if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buyprem* untuk membeli premium`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} nomor`)
                   var data = await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=${args[1]}`).catch(() => reply(mess.error.api))
                   if (data.status == false) {
                     reply(data.msg)
                   } else {
                     reply(data.logs)
                   }
                   break
                case prefix+'say':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                   var lang = q.split("--")[1]
                   if (!lang) lang = 'id'
                   var gen = ["female", "male"].includes(args[1]) ? args[1] : 'male'
                   var teks = ["female", "male"].includes(args[1]) ? (q.slice(args[1].length + 1, q.length).split('--')[0]) : q.split('--')[0]
                   zaki.sendPresenceUpdate('recording', from)
                   getBuffer(`http://texttospeech.responsivevoice.org/v1/text:synthesize?text=${removeEmojis(teks)}&lang=${lang}&engine=g3&name=&pitch=0.5&rate=0.420&volume=1&key=0POmS5Y2&gender=${gen}`)
                   .then(async(buf) => {
                     zaki.sendMessage(from, { audio: buf, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
                     limitAdd(sender, limit)
                   })
                   break
                case prefix+'translate': case prefix+'tr':{
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Penggunaan :\n*${prefix}translate* kodebahasa teks\n*${prefix}translate* kodebahasa <reply message>`)
                   if (isQuotedMsg) {
                     let bahasanya = args[1].toString()
                     const trans = await translate(quotedMsg.chats, {
                         to: bahasanya
                     })
                     .then((res) => reply(res.text))
                     .catch((err) => {
                       reply(`Kode bahasa salah, ketik ${prefix}listbahasa untuk melihat bahasa yang tersedia!`)
                     })
                     trans
                     limitAdd(sender, limit)
                   } else {
                     if (args.length < 3) return reply(`Penggunaan :\n*${prefix}translate* kodebahasa teks\n*${prefix}translate* kodebahasa <reply message>`)
                     addCountCmd('#translate', sender, _cmd)
                     let bahasanya = args[1].toString()
                     let textnya = q.slice(args[1].length + 1, q.length)
                     const trans = await translate(textnya, {
                         to: bahasanya
                     })
                     .then((res) => reply(res.text))
                     .catch((err) => {
                       reply(`Kode bahasa salah, ketik ${prefix}listbahasa untuk melihat bahasa yang tersedia!`)
                      })
                     trans
                     limitAdd(sender, limit)
                   }
                }
                   break
                case prefix+'listbahasa':
                   var clear = ["auto", "isSupported", "getCode"]
                   var teks = `List Bahasa Yang Tersedia\n\n`
                   for (let i in translate.languages) {
                     if (!clear.includes(i)) {
                       teks += `*${i}* untuk ${translate.languages[i]}\n`
                     }
                   }
                   reply(teks)
                   break
                case prefix+'nulis':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                   addCountCmd('#nulis', sender, _cmd)
                   reply(mess.wait)
                   var img = await getBuffer(`http://hadi-api.herokuapp.com/api/canvas/nulis?text=${q}`)
                   zaki.sendMessage(from, { image: img }, { quoted: msg }).catch((e) => reply(mess.error.api))
                   limitAdd(sender, limit)
                   break
                case prefix+'upload': case prefix+'tourl': case prefix+'tolink':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   var media = null
                   if (isQuotedSticker) {
                     var fileName = 'sticker'+makeid(10)+'.webp'
                     var media = await zaki.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${fileName}`)
                   } else if (isImage || isQuotedImage) {
                     var fileName = 'image'+makeid(10)+'.jpg'
                     var media = await zaki.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${fileName}`)
                   } else if (isVideo || isQuotedVideo) {
                     var fileName = 'video'+makeid(10)+'.mp4'
                     var media = await zaki.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${fileName}`)
                   } else if (isQuotedAudio) {
                     var fileName = 'audio'+makeid(10)+'.mp3'
                     var media = await zaki.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${fileName}`)
                   } else {
                     return reply(`Kirim atau balas Sticker/Foto/Video/Audio yang ingin dijadikan url dengan caption ${command}`)
                   }
                   if (media !== null) {
                     reply(mess.wait)
                     addCountCmd('#tourl', sender, _cmd)
                     var { name, url, size } = await UploadFileUgu(media)
                     size = bytesToSize(size)
                     var teks = `*UPLOAD SUCCES*\n\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${size}`
                     reply(teks)
                     limitAdd(sender, limit)
                     fs.unlinkSync(media)
                   } else {
                     reply(mess.error.api)
                     fs.unlinkSync(media)
                   }
                   break
                // Religion Menu
                case prefix+'listsurah': case prefix+'allsurah':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   allsurah().then( data => {
                     var teks = `List Surah Al-Qur\'an\n\n`
                     for (let i of data.result) {
                       teks += `*Nomor :* ${i.index}\n*Surah :* ${i.surah} (${i.latin})\n*Jumlah Ayat :* ${i.jumlah_ayat}\n\n`
                     }
                     teks += `Jika ingin mengambil salah satu Surah ketik ${prefix}alquran nomor atau ${prefix}alquran nomor/ayat`
                     reply(teks)
                     limitAdd(sender, limit)
                   })
                   break
                // Baileys
                case prefix+'fitnah':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (args.length < 2) return reply(`Kirim perintah *${command}* @tag|pesantarget|pesanbot`)
                   var org = q.split("|")[0]
                   var target = q.split("|")[1];
                   var bot = q.split("|")[2];
                   if (!org.startsWith('@')) return reply('Tag orangnya')
                   if (!target) return reply(`Masukkan pesan target!`)
                   if (!bot) return reply(`Masukkan pesan bot!`)
                   var mens = parseMention(target)
                   var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { extemdedTextMessage: { text: `${target}`, contextInfo: { mentionedJid: mens }}}}
                   var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { conversation: `${target}` }}
                   zaki.sendMessage(from, { text: bot, mentions: mentioned }, { quoted: mens.length > 2 ? msg1 : msg2 })
                   break
                case prefix+'wame':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (isQuotedMsg) {
                     if (quotedMsg.chats.length > 1) {
                       var all = quotedMsg.chats.split('\n')
                       var teks = ''
                       for (let i of all) {
                         var a = i.replace(/[+| |(|)|.|-]/gi, "")
                         var b = parseInt(a)
                         if (!b) teks += `${i} fail`
                         teks += `wa.me/`+b+'\n'
                       }
                       reply(teks.trim())
                       limitAdd(sender, limit)
                     } else {
                       var a = quotedMsg.chats.replace(/[+| |(|)|.|-]/gi, "")
                       var b = parseInt(a)
                       if (!b) return reply("Pastikan hanya reply angka")
                       reply("wa.me/"+b)
                       limitAdd(sender, limit)
                     }
                   } else if (args.length > 1) {
                     if (q.split('\n').length > 1) {
                       var all = q.split('\n')
                       var teks = ''
                       for (let i of all) {
                         var a = i.replace(/[+| |(|)|.|-]/gi, "")
                         var b = parseInt(a)
                         if (!b) teks += `${i} fail`
                         teks += `wa.me/`+b+'\n'
                       }
                       reply(teks.trim())
                       limitAdd(sender, limit)
                     } else {
                       var a = q.replace(/[+| |(|)|.|-]/gi, "")
                       var b = parseInt(a)
                       if (!b) return reply("Pastikan hanya angka")
                       reply("wa.me/"+b)
                       limitAdd(sender, limit)
                     }
                   } else {
                     reply(`Kirim perintah ${command} nomer atau balas pesan nomernya dengan caption ${command}`)
                   }
                   break
                case prefix+'q': case prefix+'getquotedmsg':
                case prefix+'getquoted': case prefix+'quoted':
                   if (!isPremium) return reply(mess.OnlyPrem)
                   if (!isQuotedMsg) return reply(`Balas Pesannya!`)
                   var data = await store.loadMessage(from, quotedMsg.id)
                   data = serialize(zaki, data)
                   if (data.isQuotedMsg !== true) return reply(`The message you replied to contained no reply`)
                   var typ = Object.keys(data.message)[0]
                   if (data.message[typ].contextInfo.quotedMessage.conversation) {
                     reply(`${data.message[typ].contextInfo.quotedMessage.conversation}`)
                   } else {
                     var anu = data.message[typ].contextInfo.quotedMessage
                     zaki.sendMessageFromContent(from, anu)
                   }
                   break
                case prefix+'hidetag':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   addCountCmd('#hidetag', sender, _cmd)
                   var memh = [];
                   groupMembers.map( i => memh.push(i.id) )
                   zaki.sendMessage(from, { text: q ? q : '', mentions: memh })
                   break
                case prefix+'react':
                   if (!isQuotedMsg) return reply(`Balas pesannya`)
                   if (args.length < 2) return reply(`Masukkan 1 emoji`)
                   if (!isEmoji(args[1])) return reply(`Itu bukan emoji!`)
                   if (isEmoji(args[1]).length > 1) return reply(`Satu aja emojinya`)
                   var reactMsg = { reactionMessage: {
                        key: {
                          remoteJid: from,
                          fromMe: quotedMsg.fromMe,
                          id: quotedMsg.id,
                          participant: quotedMsg.sender
                        },
                        text: args[1]
                      }
                   }
                   zaki.sendMessageFromContent(from, reactMsg)
                   break
                case prefix+'afk':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (isAfkOn) return reply('afk sudah diaktifkan sebelumnya')
                   if (body.slice(100)) return reply('Alasanlu kepanjangan')
                   addCountCmd('#afk', sender, _cmd)
                   let reason = body.slice(5) ? body.slice(5) : 'Nothing.'
                   afk.addAfkUser(sender, Date.now(), reason, _afk)
                   reply(`@${sender.split('@')[0]} sedang afk\nAlasan : ${reason}`)
                   break
                case prefix+'inspect':
                   if (!isPremium) return reply(mess.OnlyPrem)
                   if (args.length < 2) return reply(`Kirim perintah ${command} linkgrup`)
                   var regx = /chat.whatsapp.com\/([\w\d]*)/g;
                   var cek = args[1].match(regx)
                   if (cek == null) return reply(`No invite url detected `)
                   cek = cek[0].replace('chat.whatsapp.com/', '')
                   zaki.groupInspectCode(cek).then( data => {
                     if (data.msg) return reply(`Maaf terjadi kesalahan, silahkan coba link lain!`)
                     var { id, subject, creator, creation, size, desc, participants } = data
                     var teks = `*GROUP INSPECT LINK*\n
*Id Group :* ${id}
*Subjek :* ${subject}
*Owner :* ${creator !== undefined ? '@'+creator.split("@")[0] : id.includes('-') ? '@'+id.split('-')[0] : 'Not detected'}
*Di Buat Pada :* ${formatDate(creation * 1000)}
*Total Member :* ${size}\n
*Teman yang diketahui join :* ${participants ? '\n' + participants.map((user, i) => ++i + '. @' + user.id.split(`@`)[0]).join('\n').trim() : 'Tidak ada'}\n
*Deskripsi :* ${desc !== undefined ? desc : ""}`
                     reply(teks)
                   })
                   break
                // Anonymous Chat
                case prefix+'anonymous':
                   if (isGroup) return reply(mess.OnlyPM)
                   addCountCmd('#anonymous', sender, _cmd)
                   var but = [
                     { quickReplyButton: { displayText: "Search", id: prefix+'start' }}
                   ]
                   var teks = `Hai ${pushname !== undefined ? pushname : 'Kak'} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}search untuk mencari Teman Chat anda, atau bisa pencet tombol Search dibawah`
                   zaki.sendMessage(from, { text: teks, footer: "Anonymouse", templateButtons: but })
                   break
                case prefix+'start': case prefix+'search':
                   if (isGroup) return reply(mess.OnlyPM)
                   addCountCmd('#start', sender, _cmd)
                   var rumss = Object.values(anonymous).find(room => anonyCheck(sender, room))
                   var rooms = Object.values(anonymous).find(room => anonyCheck(sender, room) && room.state == 'CHATTING')
                   if (rooms) {
                     var but = [
                        { buttonId: prefix+'stop', buttonText: { displayText: "STOP" }, type: 1 },
                        { buttonId: prefix+'next', buttonText: { displayText: "NEXT" }, type: 1 }
                     ]
                     var teks = `Kamu masih dalam sesi chat dengan partner!`
                     return zaki.sendMessage(from, { text: teks, footer: "Anonymouse", buttons: but })
                   } else if (rumss) {
                     var teks = `Mencari Patner Anda!`
                     var but = [ { buttonId: prefix+'stop', buttonText: { displayText: "STOP" }, type: 1 } ]
                     return zaki.sendMessage(from, { text: teks, footer: "Author By @Reii|X-Angel-Botz", buttons: but })
                   }
                   var roomm = Object.values(anonymous).find(room => room.state == "WAITING" && !anonyCheck(sender, room))
                   if (roomm) {
                     var but = [
                       { buttonId: prefix+'stop', buttonText: { displayText: "STOP" }, type: 1 },
                       { buttonId: prefix+'next', buttonText: { displayText: "NEXT" }, type: 1 }
                     ]
                     roomm.b = sender
                     roomm.state = "CHATTING"
                     var teks = `_Patner Ditemukan!_\n${prefix}next -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
                     await zaki.sendMessage(roomm.a, { text: teks, footer: "Author By @Reii|X-Angel-Botz", buttons: but })
                     await zaki.sendMessage(roomm.b, { text: teks, footer: "Author By @Reii|X-Angel-Botz", buttons: but })
                   } else if (!rooms) {
                     let id = + new Date
                     anonymous[id] = {
                         id,
                         a: sender,
                         b: '',
                         state: "WAITING"
                     }
                     var but = [
                       { buttonId: prefix+'stop', buttonText: { displayText: "STOP" }, type: 1 }
                     ]
                     var teks = `Mencari Patner Anda!`
                     await zaki.sendMessage(from, { text: teks, footer: "Author By @Reii|X-Angel-Botz", buttons: but })
                   }
                   break
                case prefix+'stop':
                   if (isGroup) return reply(mess.OnlyPM)
                   addCountCmd('#stop', sender, _cmd)
                   var roomo = Object.values(anonymous).find(room => anonyCheck(sender, room))
                   if (!roomo) {
                     var but = [
                       { buttonId: prefix+'start', buttonText: { displayText: "START" }, type: 1 }
                     ]
                     var teks = `Belum Memulai Chat!`
                     await zaki.sendMessage(from, { text: teks, footer: "Author By @Reii|X-Angel-Botz", buttons: but })
                   } else {
                     var but = [
                       { buttonId: prefix+'start', buttonText: { displayText: "START" }, type: 1 }
                     ]
                     var teks = `Sesi Chat Di Berhentikan.`
                     var teks2 = `Sesi Chat Di Berhentikan Oleh Teman Kamu
                     `
                     await zaki.sendMessage(from, { text: teks, footer: "Author By @Reii|X-Angel-Botz", buttons: but })
                     let other = anonyOther(sender, roomo)
                     if (other) await zaki.sendMessage(other, { text: teks2, footer: "Author By @Reii|X-Angel-Botz", buttons: but })
                     delete anonymous[roomo.id]
                   }
                   break
                case prefix+'next': case prefix+'next':
                   if (isGroup) return reply(mess.OnlyPM)
                   addCountCmd('#next', sender, _cmd)
                   let romeo = Object.values(anonymous).find(room => anonyCheck(sender, room))
                   var but = [
                     { buttonId: prefix+'start', buttonText: { displayText: "START" }, type: 1 }
                   ]
                   if (!romeo) {
                     var teks = `Belum Memulai Chat!`
                     return await zaki.sendMessage(from, { text: teks, footer: "Author By @Reii|X-Angel-Botz", buttons: but })
                   } else {
                     let other = anonyOther(sender, romeo)
                     var teks1 = `Sesi Chat Di Berhentikan Oleh Teman Kamu`
                     if (other) await zaki.sendMessage(other, { text: teks1, footer: "Author By @Reii|X-Angel-Botz", buttons: but })
                     delete anonymous[romeo.id]
                   }
                   let room = Object.values(anonymous).find(room => room.state == "WAITING" && !anonyCheck(sender, room))
                   if (room) {
                     var but = [
                       { buttonId: prefix+'stop', buttonText: { displayText: "STOP" }, type: 1 },
                       { buttonId: prefix+'next', buttonText: { displayText: "NEXT" }, type: 1 }
                     ]
                     room.b = sender
                     room.state = "CHATTING"
                     var teks = `_Patner Ditemukan!_\n${prefix}next -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
                     await zaki.sendMessage(room.a, { text: teks, footer: "Author By @Reii|X-Angel-Botz", buttons: but })
                     await zaki.sendMessage(room.b, { text: teks, footer: "Author By @Reii|X-Angel-Botz", buttons: but })
                   } else {
                     let id = + new Date
                     anonymous[id] = {
                         id,
                         a: sender,
                         b: '',
                         state: "WAITING"
                     }
                     var but = [
                       { buttonId: prefix+'stop', buttonText: { displayText: "STOP" }, type: 1 }
                     ]
                     var teks = `Mencari Patner Anda!`
                     await zaki.sendMessage(from, { text: teks, footer: "Author By @Reii|X-Angel-Botz", buttons: but })
                   }
                   break
                case prefix+'sendprofile': case prefix+'sendprofil':
                   if (isGroup) return reply(mess.OnlyPM)
                   let romoe = Object.values(anonymous).find(room => anonyCheck(sender, room) && room.state == 'CHATTING')
                   addCountCmd('#sendprofile', sender, _cmd)
                   var but = [
                     { buttonId: prefix+'start', buttonText: { displayText: "START" }, type: 1 }
                   ]
                   if (!romoe) {
                     var teks = `Belum Memulai Chat!`
                     await zaki.sendMessage(from, { text: teks, footer: "Author By @Reii|X-Angel-Botz", buttons: but })
                   } else {
                     let rms = Object.values(anonymous).find(room => [room.a, room.b].includes(sender) && room.state == "CHATTING")
                     var partnerJID = anonyOther(sender, rms)
                     var res = await zaki.sendContact(partnerJID, [sender.split("@")[0]])
                     zaki.sendMessage(from, { text: 'Profil Sudah Di Kirim Ke Teman Anda.' }, { quoted: msg })
                     zaki.sendMessage(partnerJID, { text: 'Teman Anda Membagikan Profilnya.!' }, { quoted: res })
                   }
                   break
                // Downloader Menu
                case prefix+'tiktok': case prefix+'tiktoknowm':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
                   reply(mess.wait)
                   addCountCmd('#tiktok', sender, _cmd)
                   require('./lib/tiktok2').Tiktok(args[1]).then( data => {
                     zaki.sendMessage(from, {
                       video: { url: data.watermark },
                       caption: `${data.title}\n\nKamu bisa mengubahnya menjadi Audio, pencet tombol dibawah untuk mengubahnya!`,
                       buttons: [ { buttonId: `${prefix}tiktokaudio ${args[1]}`, buttonText: { displayText: 'Audio' }, type: 1 }
                       ],
                       footer: "© Reii|X-Angel-Botz"
                     }, { quoted: msg })
                     limitAdd(sender, limit)
                   }).catch((e) => {
                     reply(mess.error.api)
                   })
                   break
 /*               case prefix+'tiktoknowm':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
                   reply(mess.wait)
                   addCountCmd('#tiktoknowm', sender, _cmd)
                   require('./lib/tiktok2').Tiktok(args[1]).then( data => {
                     zaki.sendMessage(from, { video: { url: data.nowm }}, { quoted: msg })
                     limitAdd(sender, limit)
                   }).catch(() => reply(mess.error.api))
                   break*/
                case prefix+'tiktokaudio':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link\nAtau ${command} link --ori`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
                   reply(mess.wait)
                   addCountCmd('#tiktokaudio', sender, _cmd)
                   require('./lib/tiktok2').Tiktok(args[1]).then(async(data) => {
                    if (args[2] == '--ori') {
                      zaki.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: msg })
                      limitAdd(sender, limit)
                    } else {
                      var nme = `./sticker/${Date.now()}.mp4`
                      fs.writeFileSync(nme, await getBuffer(data.nowm))
                      var ran = './sticker/'+getRandom('.mp3')
                      exec(`ffmpeg -i ${nme} ${ran}`, async (err) => {
                       zaki.sendMessage(from, { audio: fs.readFileSync(ran), mimetype: 'audio/mp4' }, { quoted: msg })
                       limitAdd(sender, limit)
                       fs.unlinkSync(nme)
                       fs.unlinkSync(ran)
                      })
                    }
                   }).catch(() => reply(mess.error.api))
                   break
                case prefix+'play':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} query\nContoh : ${command} monokrom`)
                   reply(mess.wait)
                   addCountCmd('#play', sender, _cmd)
                   await sendPlay(from, q)
                   limitAdd(sender, limit)
                   break
                case prefix+'ytmp4': case prefix+'mp4':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
                   reply(mess.wait)
                   addCountCmd('#ytmp4', sender, _cmd)
                   args[1] = args[1].includes('shorts') ? args[1].replace('https://youtube.com/shorts/', 'https://youtu.be/') : args[1]
                   ytv(args[1]).then(async(data) => {
                     var teks = `*Youtube Video Downloader*\n\n*» Title :* ${data.title}\n*» Quality :* 360p\n*» Size :* ${data.filesizeF}\n*» Url Source :* ${args[1]}`
                     if (Number(data.filesize) >= 10000000) {
                       var res = await axios.get(`https://tinyurl.com/api-create.php?url=${data.dl_link}`)
                       teks += `\n*» Download :* ${res.data}\n\n_for larger sizes, presented in the form of a link_`
                       zaki.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
                       limitAdd(sender, limit)
                     } else {
                       zaki.sendMessage(from, { video: await getBuffer(data.dl_link), caption: teks }, { quoted: msg })
                       limitAdd(sender, limit)
                     }
                   }).catch(() => reply(mess.error.api))
                   break
                case prefix+'ytmp3': case prefix+'mp3':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
                   reply(mess.wait)
                   addCountCmd('#ytmp3', sender, _cmd)
                   args[1] = args[1].includes('shorts') ? args[1].replace('https://youtube.com/shorts/', 'https://youtu.be/') : args[1]
                   yta(args[1]).then(async(data) => {
                     var teks = `*Youtube Audio Downloader*\n\n*» Title :* ${data.title}\n*» Quality :* 128p\n*» Size :* ${data.filesizeF}\n*» Url Source :* ${args[1]}\n\n_wait a minute sending media..._`
                     if (Number(data.filesize) >= 10000000) {
                       var res = await axios.get(`https://tinyurl.com/api-create.php?url=${data.dl_link}`)
                       teks = `*Youtube Audio Downloader*\n\n*» Title :* ${data.title}\n*» Quality :* 128p\n*» Size :* ${data.filesizeF}\n*» Url Source :* ${args[1]}\n*» Download :* ${res.data}\n\n_for larger sizes, presented in the form of a link_`
                       zaki.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
                       limitAdd(sender, limit)
                     } else {
                       zaki.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
                       zaki.sendMessage(from, { document: await getBuffer(data.dl_link), fileName: `${data.title}.mp3`, mimetype: 'audio/mp3'}, { quoted: msg })
                       limitAdd(sender, limit)
                     }
                   }).catch(() => reply(mess.error.api))
                   break
                case prefix+'getvideo': case prefix+'getvidio':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
                   if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
                   if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
                   var kuoted = await quotedMsg.chats
                   var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                   var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                   if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                   if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                   if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
                   reply(mess.wait)
                   addCountCmd('#getvideo', sender, _cmd)
                   ytv(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then(async(data) => {
                     data.url = `https://youtube.com/watch?v=${arrey[args[1] -1]}`
                     var teks = `*Youtube Video Downloader*\n\n*» Title :* ${data.title}\n*» Quality :* 360p\n*» Size :* ${data.filesizeF}\n*» Url Source :* ${data.url}`
                     if (Number(data.filesize) >= 10000000) {
                       var res = await axios.get(`https://tinyurl.com/api-create.php?url=${data.dl_link}`)
                       teks += `\n*» Download :* ${res.data}\n\n_for larger sizes, presented in the form of a link_`
                       zaki.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
                       limitAdd(sender, limit)
                     } else {
                       zaki.sendMessage(from, { video: await getBuffer(data.dl_link), caption: teks }, { quoted: msg })
                       limitAdd(sender, limit)
                     }
                   }).catch(() => reply(mess.error.api))
                   break
                case prefix+'getmusik': case prefix+'getmusic':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
                   if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
                   if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
                   var kuoted = await quotedMsg.chats
                   var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                   var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                   if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                   if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                   if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
                   reply(mess.wait)
                   addCountCmd('#getmusic', sender, _cmd)
                   yta(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then(async(data) => {
                     data.url = `https://youtube.com/watch?v=${arrey[args[1] -1]}`
                     var teks = `*Youtube Audio Downloader*\n\n*» Title :* ${data.title}\n*» Quality :* 128p\n*» Size :* ${data.filesizeF}\n*» Url Source :* ${data.url}\n\n_wait a minute sending media..._`
                     if (Number(data.filesize) >= 10000000) {
                       var res = await axios.get(`https://tinyurl.com/api-create.php?url=${data.dl_link}`)
                       teks = `*Youtube Audio Downloader*\n\n*» Title :* ${data.title}\n*» Quality :* 128p\n*» Size :* ${data.filesizeF}\n*» Url Source :* ${data.url}\n*» Download :* ${res.data}\n\n_for larger sizes, presented in the form of a link_`
                       zaki.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
                       limitAdd(sender, limit)
                     } else {
                       zaki.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
                       zaki.sendMessage(from, { document: await getBuffer(data.dl_link), fileName: `${data.title}.mp3`, mimetype: 'audio/mp3'}, { quoted: msg })
                       limitAdd(sender, limit)
                     }
                   }).catch(() => reply(mess.error.api))
                   break
                case prefix+'ig': case prefix+'igdl':
                case prefix+'instagram':{
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah *${prefix}ig* link ig`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('instagram.com')) return reply(mess.error.Iv)
                   reply(mess.wait)
                   try {
                    if (args[1].includes('reel/')) {
                     var dat = await require("./lib/igdl").igdl(args[1]);
                     addCountCmd('#instagram', sender, _cmd)
                     zaki.sendMessage(from, { video: { url: dat.medias[0].downloadUrl } }, { quoted: msg })
                     limitAdd(sender, limit)
                    } else {
                     var ar = await insta(args[1]);
                     if (ar.uriType === "igHigh") {
                       addCountCmd('#instagram', sender, _cmd)
                       var type1 = await fastCheck(ar.media[0].url);
                       let ext = /image/.test(type1)
                       ? { image: { url: ar.media[0].url } }
                       : { video: { url: ar.media[0].url } };
                       zaki.sendMessage(from, { ...ext }, { quoted: msg });
                       limitAdd(sender, limit)
                     } else if (ar.uriType === "igStory") {
                       addCountCmd('#instagram', sender, _cmd)
                       var type2 = await fastCheck(ar.media[0].url);
                       let ext = /image/.test(type2)
                       ? { image: { url: ar.media[0].url } }
                       : { video: { url: ar.media[0].url } };
                       zaki.sendMessage(from, { ...ext }, { quoted: msg });
                       limitAdd(sender, limit)
                     } else {
                       addCountCmd('#instagram', sender, _cmd)
                       reply(`Instagram Post, total ${ar.url.length} Postingan. Media segera dikirim`)
                       ar.url.map(async (r) => {
                         var type3 = await fastCheck(r);
                         let ext = /image/.test(type3) ? { image: { url: r } } : { video: { url: r } };
                         zaki.sendMessage(from, { ...ext })
                         limitAdd(sender, limit)
                       });
                     }
                    }
                   } catch (e) {
                     reply(mess.error.api);
                   }
                }
                   break
                case prefix+'igstory':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} username`)
                   reply(mess.wait)
                   addCountCmd('#igstory', sender, _cmd)
                   if (args[1].startsWith("@")) args[1] = args[1].replace("@", "")
                   igstory(args[1]).then(async(data) => {
                     var teks = `Instagram Story total ${data.medias.length}, media segera dikirim`
                     reply(teks)
                     for (let i of data.medias) {
                       var media = await getBuffer(i.url)
                       if (i.type == "image") {
                         zaki.sendMessage(from, { image: media })
                       } else if (i.type == "video") {
                         zaki.sendMessage(from, { video: media })
                       }
                     }
                   }).catch(() => reply(mess.error.api))
                   break
                case prefix+'facebook': case prefix+'fbdl':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('facebook.com')) return reply(mess.error.Iv)
                   reply(mess.wait)
                   addCountCmd('#facebook', sender, _cmd)
                   fbdl(args[1]).then( data => {
                     if (data.length == 0) return reply(`Maaf terjadi kesalahan, ganti link yang lain!`)
                     zaki.sendMessage(from, { video: { url: data[data.length - 1] }, caption: data.title }, { quoted: msg })
                     limitAdd(sender, limit)
                   }).catch(() => reply(mess.error.api))
                   break
                case prefix+'mediafire': case prefix+'mfdl':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix} limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('mediafire.com')) return reply(mess.error.Iv)
                   reply(mess.wait)
                   addCountCmd('#mediafire', sender, _cmd)
                   mediafire(args[1]).then(async(data) => {
                     data.nama = decodeURIComponent(data.nama)
                     var media = await getBuffer(data.link)
                     if (data.mime.includes('mp4')) {
                       zaki.sendMessage(from, { document: media, fileName: data.nama, mimetype: 'video/mp4' }, { quoted: msg })
                     } else if (data.mime.includes('mp3')) {
                       zaki.sendMessage(from, { document: media, fileName: data.nama, mimetype: 'audio/mp3' }, { quoted: msg })
                     } else {
                       zaki.sendMessage(from, { document: media, fileName: data.nama, mimetype: 'application/'+data.mime }, { quoted: msg })
                     }
                   }).catch(() => reply(mess.error.api))
                   break
                case prefix+'telestick': case prefix+'telesticker':
                   if (!isPremium) return reply(mess.OnlyPrem)
                   if (isGroup) return reply(`Untuk menghindari Spam, fitur ${command} hanya bisa digunakan di Chat Pribadi`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('t.me')) return reply(mess.error.Iv)
                   reply(mess.wait)
                   addCountCmd('#telestick', sender, _cmd)
                   telesticker(args[1]).then(async(data) => {
                     for (let i of data) {
                       if (i.status == 200) {
                         sendStickerFromUrl(from, i.url)
                         await sleep(1000)
                       } else {
                         zaki.sendMessage(from, { text: 'Salah satu sticker error!' })
                       }
                     }
                   }).catch((e) => reply(mess.error.api))
                   break
                case prefix+'pindl': case prefix+'pinterestdl':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah *${command}* url`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('pin')) return reply(mess.error.Iv)
                   addCountCmd('#pinterestdl', sender, _cmd)
                   reply(mess.wait)
                   require('./lib/pindl').pindl(args[1]).then(async(res) => {
                     var mime;
                     var a = await axios.head(res)
                     mime = a.headers["content-type"]
                     if (mime == "image/gif") {
                       zaki.sendMessage(from, { video: { url: res }, mimetype: "video/mp4", gifPlayback: true }, { quoted: msg })
                       limitAdd(sender, limit)
                     } else if (mime == "video/mp4") {
                       zaki.sendMessage(from, { video: { url: res } }, { quoted: msg })
                       limitAdd(sender, limit)
                     } else {
                       zaki.sendMessage(from, { image: { url: res } }, { quoted: msg })
                       limitAdd(sender, limit)
                     }
                   })
                   .catch(() => { reply(mess.error.api) })
                   break
                // Maker Menu
case prefix+'hoorror':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
  case prefix+'whitebear':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'thunder':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'blackpink':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'neon':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'matrix':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'sky':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'joker':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/create-logo-joker-online-934.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'magma':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'sand':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'pencil':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'graffiti':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'metallic':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'steel':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'harrypotter':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'underwater':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'luxury':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'glue':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'fabric':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'neonlight':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'lava':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'toxic':{
	if (!q) return reply("text?")
//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'ancient':{
	if (!q) return reply("text?")
//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'christmas':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'sci_fi':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'rainbow':{
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
     let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
//BARU
case prefix+'classic':{
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'watercolor':{
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'halloween':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'halloweenfire':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/halloween-fire-text-effect-940.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'writing':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'foggy':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'marvel':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
  case prefix+'emojimix3': {
	        if (!q) throw `Example : ${prefix + command} 😆+🤣`
		let [emoji1, emoji2] = args[0].split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await zaki.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
case prefix+'skeleton':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'sketch':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'wonderful':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'cool':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'collwall':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'multicolor':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'batman':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
case prefix+'juice':{
	if (!q) return reply("text?")
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, args[0])
     reply(mess.wait)
     console.log(anui)
    zaki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted: msg})
}
   break
//WM By Rizki
case prefix+'pornhub':{
if (!args.join(" ")) return reply(`Example: ${prefix + command} ajg | ea`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
  let inilogo4 = args.join(" ")
let inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
zaki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted: msg})
}
break
case prefix+'retro':{
if (!args.join(" ")) return reply(`Example: ${prefix + command} ajg | ea`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
  let inilogo4 = args.join(" ")
let inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
zaki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted: msg})
}
break
case prefix+'horror':{
if (!args.join(" ")) return reply(`Example: ${prefix + command} ajg | ea`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
  let inilogo4 = args.join(" ")
let inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
zaki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted: msg})
}
break
case prefix+'8bit':{
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!args.join(" ")) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  let inilogo4 = args.join(" ")
let inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
zaki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted: msg})
}
break
case prefix+'textmaker': {
//if (isBan) return reply(mess.ban)
if (args.length < 1) return reply(`Example :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} Chitanda Eru`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
zaki.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted: msg})
} else if (args[0] === 'glow') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} Chitanda Eru`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
zaki.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted: msg})
} else {
reply(`*List Text Maker :*\n•> glitch\n•> glow`)
}
}
break
                case prefix+'wolf': case prefix+'logowolf':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} text1|text2`)
                   if (!q.includes('|')) return reply(`Format salah, contoh pemakaian ${command} Logo|Wolf`)
                   if (q.length > 21) return reply(`Teksnya kebanyakan`)
                   var tek1 = q.split('|')[0]
                   var tek2 = q.split('|')[1]
                   if (!tek2) return reply(`Format salah, contoh pemakaian ${command} Logo|Wolf`)
                   if (tek1.length > 10) return reply(`Teks 1 kepanjangan`)
                   if (tek2.length > 10) return reply(`Teks 2 kepanjangan`)
                   reply(mess.wait)
                   addCountCmd('#wolf', sender, _cmd)
                   textpro('https://textpro.me/create-wolf-logo-galaxy-online-936.html', [tek1, tek2])
                   .then( data => {
                     zaki.sendMessage(from, { image: { url: data } }, { quoted: msg })
                     limitAdd(sender, limit)
                   }).catch((e) => reply(mess.error.api))
                   break
                case prefix+'neonlove':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                   if (q.length > 21) return reply(`Teksnya kebanyakan`)
                   reply(mess.wait)
                   addCountCmd('#neonlove', sender, _cmd)
                   textpro('https://textpro.me/create-neon-light-on-brick-wall-online-1062.html', q)
                   .then( data => {
                     zaki.sendMessage(from, { image: { url: data } }, { quoted: msg })
                     limitAdd(sender, limit)
                   }).catch(() => reply(mess.error.api))
                   break
                // Owner Menu
                case prefix+'exif':
                   if (!isOwner) return reply(mess.OnlyOwner)
                   addCountCmd('#exif', sender, _cmd)
                   var namaPack = q.split('|')[0] ? q.split('|')[0] : q
                   var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
                   exif.create(namaPack, authorPack)
                   setting.packname = namaPack; setting.author = authorPack
                   fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
                   reply(`Sukses membuat exif`)
                   break
                case prefix+'self':
                   if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                   addCountCmd('#self', sender, _cmd)
                   zaki.mode = 'self'
                   ReplyNya(`Berhasil berubah ke mode Self!`)
                   break
                case prefix+'public': case prefix+'publik':
                   if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                   addCountCmd('#public', sender, _cmd)
                   zaki.mode = 'public'
                   ReplyNya(`Berhasil berubah ke mode Public!`)
                   break
                case prefix+'leave':
                   if (!isOwner) return reply(mess.OnlyOwner)
                   if (!isGroup) return reply(mess.OnlyGrup)
                   addCountCmd('#leave', sender, _cmd)
                   zaki.groupLeave(from)
                   break
                case prefix+'join':
                   if (!isOwner) return reply(mess.OnlyOwner)
                   if (args.length < 2) return reply(`Kirim perintah ${command} _linkgrup_`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   var url = args[1]
                   addCountCmd('#join', sender, _cmd)
                   url = url.split('https://chat.whatsapp.com/')[1]
                   var data = await zaki.groupAcceptInvite(url)
                   reply(jsonformat(data))
                   break
                case prefix+'setpp': case prefix+'setppbot':
                   if (isImage || isQuotedImage) {
                     addCountCmd('#setppbot', sender, _cmd)
                     var media = await zaki.downloadAndSaveMediaMessage(msg, 'image', 'ppbot.jpeg')
                     if (args[1] == `'panjang'`) {
                       var { img } = await generateProfilePicture(media)
                       await zaki.query({
                         tag: 'iq',
                         attrs: {
                           to: botNumber,
                           type:'set',
                           xmlns: 'w:profile:picture'
                         },
                         content: [
                           {
                             tag: 'picture',
                             attrs: { type: 'image' },
                             content: img
                           }
                         ]
                       })
                       fs.unlinkSync(media)
                       reply(`Sukses`)
                     } else {
                       var data = await zaki.updateProfilePicture(botNumber, { url: media })
                       fs.unlinkSync(media)
                       reply(`Sukses`)
                     }
                   } else {
                     reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
                   }
                   break
                case prefix+'getcase': case prefix+'getfitur':
                   if (!isOwner) return reply(mess.OnlyOwner)
                   if (args.length < 2) return reply(`Kirim perintah ${command} case_name`)
                   try {
                     var data = getCase(q)
                     reply(data)
                   } catch {
                     reply(`${q} tidak ada didalam fitur bot`)
                   }
                   break
                case prefix+'addprem':
                   if (!isOwner) return reply(mess.OnlyOwner)
                   if (args.length < 2) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)
                   if (!args[2]) return reply(`Mau yang berapa hari?`)
                   if (mentionUser.length !== 0) {
                     addCountCmd('#addprem', sender, _cmd)
                     _prem.addPremiumUser(mentionUser[0], args[2], premium)
                     reply('Sukses')
                   } else {
                     var cekap = await zaki.onWhatsApp(args[1]+"@s.whatsapp.net")
                     if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                     addCountCmd('#addprem', sender, _cmd)
                     _prem.addPremiumUser(args[1]+'@s.whatsapp.net', args[2], premium)
                     reply('Sukses')
                   }
                   break
                case prefix+'delprem':
                   if (!isOwner) return reply(mess.OnlyOwner)
                   if (args.length < 2) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                   if (mentionUser.length !== 0){
                     addCountCmd('#delprem', sender, _cmd)
                     premium.splice(_prem.getPremiumPosition(mentionUser[0], premium), 1)
                     fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                     reply('Sukses!')
                   } else {
                     addCountCmd('#delprem', sender, _cmd)
                     premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
                     fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                     reply('Sukses!')
                   }
                   break
                case prefix+'sewaad':
                if (!isGroup)return reply(mess.OnlyGrup)
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n${command} add waktu\n${command} del`)
                if (args[1].toLowerCase() === 'add'){
                  if (!args[2]) return reply(`Kirim perintah ${command} add waktu\nKirim perintah pada grup yang ingin di tambahkan`)
                    addCountCmd('#setsewa', sender, _cmd)
                    _sewa.addSewaGroup(from, args[2], sewa)
                    reply(`Success`)
                } else if (args[1].toLowerCase() === 'del'){
                  if (!args[2]) return reply(`Kirim perintah ${command} del idgrup, atau kirim perintah di grupnya`)
                    addCountCmd('#setsewa', sender, _cmd)
                    sewa.splice(_sewa.getSewaPosition(args[2] ? args[2] : from, sewa), 1)
                    fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
                    reply(`Success`)
                } else {
                   reply(`Penggunaan :\n*${prefix}+sewa* add/del waktu`)
                }
                break
            case prefix+'listsewa':
                if (!isOwner) return
                addCountCmd('#listsewa', sender, _cmd)
                let tkt = `List Sewa Bot\nJumlah : ${sewa.length}\n\n`
                for (let i of sewa) {
                  tkt += `*ID :* ${i.id}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    tkt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    tkt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                xinz.sendMessage(from, tkt, text, { quoted: msg })
                break
            case prefix+'sewacheck':
            case prefix+'ceksewa': {
                if (!isGroup)return reply(mess.OnlyGrup)
                if (!isSewa) return reply(`Bot tidak di sewa group ini!`)
                addCountCmd('#ceksewa', sender, _cmd)
                let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                }
                break
                case prefix+'resetlimit':
                   if (!isOwner) return reply(mess.OnlyOwner)
                   addCountCmd('#resetlimit', sender, _cmd)
                   limit.splice('reset')
                   fs.writeFileSync('./database/limit.json', JSON.stringify(limit, null, 2))
                   glimit.splice('reset')
                   fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit, null, 2))
                   reply(`Sukses reset limit pengguna`)
                   break
                case prefix+'broadcast1': case prefix+'bc1':
                   if (!isOwner) return reply(mess.OnlyOwner)
                   if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                   addCountCmd('#broadcast', sender, _cmd)
                   var data = await store.chats.all()
                   var teks = `*❐ B R O A D C A S T :*\n\n${q}`
                   for (let s of data) {
                    var andok = [];
                   // groupMembers.map( i => andok.push(i.id) )                    
                     zaki.sendMessage(s.id, { text: teks })
                     await sleep(1000)
                   }
                   reply(`Sukses mengirim pesan siaran kepada ${data.length} chat`)
                   break
                   case prefix+'broadcast2': case prefix+'bc2':
                   if (!isOwner) return reply(mess.OnlyOwner)
                   if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                   addCountCmd('#broadcast', sender, _cmd)
                   var data = await store.chats.all()
                   var teks = `*❐ B R O A D C A S T :*\n\n${q}`
                   for (let i of data) {
                  zaki.sendMessage(i.id, { text: teks, contextInfo: {
                      externalAdReply: {
                        title: `© Reii|X-Angel-Botz`,
							mediaType: 2,
							renderLargerThumbnail: true,
							showAdAttribution: true,
							body: "",
							thumbnail: bc2,
							mediaUrl: "https://instagram.com/not_rei1",
							sourceUrl: "https://instagram.com/not_rei1",
                      }
                     }
                   }, { quoted: flokasi })
                     await sleep(1000)
                   }
                   reply(`Sukses mengirim pesan siaran kepada ${data.length} chat`)
                   break
                  case prefix+'broadcast3': case prefix+'bc3':
                   if (!isOwner) return reply(mess.OnlyOwner)
                   if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                   addCountCmd('#broadcast', sender, _cmd)
                   var data = await store.chats.all()
                   var teks = `*❐ B R O A D C A S T :*\n\n${q}`
                   for (let i of data) {
                  zaki.sendMessage(i.id, { text: teks, contextInfo: {
                      externalAdReply: {
                        title: `© Reii|X-Angel-Botz`,
							mediaType: 2,
							renderLargerThumbnail: true,
							showAdAttribution: true,
							body: "",
							thumbnail: bc3,
							mediaUrl: "https://instagram.com/not_rei1",
							sourceUrl: "https://chat.whatsapp.com/EUr0RyJvHyWFkZnjI1wGRI",
                      }
                     }
                   }, { quoted: flokasi })
                     await sleep(1000)
                   }
                   reply(`Sukses mengirim pesan siaran kepada ${data.length} chat`)
                   break
                case prefix+'dym':
                   if (!isOwner) return
                   if (args.length < 2) return reply(`Nama cmd nya?`)
                   addCountCmd('#dym', sender, _cmd)
                   args.splice(0, 1)
                   for (let i of args) {
                     if (!listCmd.includes(i)) {
                       listCmd.push(i)
                       fs.writeFileSync('./database/listcmd.json', JSON.stringify(listCmd, null, 2))
                     }
                   }
                   reply('Sukses')
                   break
                // Random Menu
                case prefix+'quote': case prefix+'quotes':
                case prefix+'randomquote': case prefix+'randomquotes':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   addCountCmd('#quotes', sender, _cmd)
                   var data = JSON.parse(fs.readFileSync('./database/quotes.json'))
                   data = pickRandom(data)
                   reply(data.quotes+'\n\n-- '+data.author)
                   limitAdd(sender, limit)
                   break
                case prefix+'fakta': case prefix+'randomfakta':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   addCountCmd('#fakta', sender, _cmd)
                   var data = fs.readFileSync('./database/fakta.txt', 'utf-8').split('\n')
                   reply(pickRandom(data))
                   limitAdd(sender, limit)
                   break
                case prefix+'quoteanime': case prefix+'quotesanime':
                case prefix+'animequotes': case prefix+'animequote':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   addCountCmd('#quoteanime', sender, _cmd)
                   require('./lib/quoteanime').quoteAnime().then( res => {
                     var data = pickRandom(res)
                     var teks = `${data.quote}\n\n- ${data.char_name}\nin *${data.anime_title}* eps *${data.at_ep}*`
                     reply(teks)
                     limitAdd(sender, limit)
                   }).catch((e) => reply(mess.error.api))
                   break
                case prefix+'cecan': case prefix+'cewek':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   reply(mess.wait)
                   addCountCmd('#cecan', sender, _cmd)
                   var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
                   var data = await pinterest(pickRandom(query))
                   var but = [{ buttonId: command, buttonText: { displayText: 'Next Photo' }, type: 1 }]
                   zaki.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, headerType: 'IMAGE' }, { quoted: msg })
                   limitAdd(sender, limit)
                   break
                case prefix+'cogan': case prefix+'cowok':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   reply(mess.wait)
                   addCountCmd('#cogan', sender, _cmd)
                   var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
                   var data = await pinterest(pickRandom(query))
                   var but = [{ buttonId: command, buttonText: { displayText: 'Next Photo' }, type: 1 }]
                   zaki.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, headerType: 'IMAGE' }, { quoted: msg })
                   limitAdd(sender, limit)
                   break
                case prefix+'waifu':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   reply(mess.wait)
                   addCountCmd('#waifu', sender, _cmd)
                   var data = (await axios.get('https://waifu.pics/api/sfw/waifu')).data.url
                   var but = [{ buttonId: command, buttonText: { displayText: 'Next Photo' }, type: 1 }]
                   zaki.sendMessage(from, { caption: "Random Waifu", image: { url: data }, headerType: 'IMAGE' }, { quoted: msg })
                   limitAdd(sender, limit)
                   break
                // Search Menu
                case prefix+'lirik': case prefix+'liriklagu':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} judul lagu`)
                   reply(mess.wait)
                   addCountCmd('#lirik', sender, _cmd)
                   Musikmatch(q).then(async(data) => {
                     var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
                     zaki.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: msg })
                     limitAdd(sender, limit)
                   }).catch(() => reply(`Judul lagu tidak ditemukan`))
                   break
                case prefix+'grupwa': case prefix+'searchgrup':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} nama grup`)
                   reply(mess.wait)
                   addCountCmd('#grupwa', sender, _cmd)
                   require('./lib/grupwa').grupwa(q).then(async(data) => {
                     if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
                       var teks = `*Hasil Pencarian Dari ${q}*\n\n`
                       for (let x of data.result) {
                         teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
                       }
                       reply(teks)
                       limitAdd(sender, limit)
                     }).catch(() => reply(mess.error.api))
                   break
                case prefix+'pinterest':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
                   var jumlah;
                   if (q.includes('--')) jumlah = q.split('--')[1]
                   if (jumlah > 20) return reply(`Maksimal 20`)
                   reply(mess.wait)
                   addCountCmd('#pinterest', sender, _cmd)
                   pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
                     if (q.includes('--')) {
                       if (data.result.length < jumlah) {
                         jumlah = data.result.length
                         reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
                       }
                       for (let i = 0; i < jumlah; i++) {
                         zaki.sendMessage(from, { image: { url: data.result[i] }})
                       }
                       limitAdd(sender, limit)
                     } else {
                       var but = [{ buttonId: command+ ' '+q, buttonText: { displayText: `Next Photo` }, type: 1 }]
                       zaki.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) } }, { quoted: msg })
                       limitAdd(sender, limit)
                     }
                   })
                   break
                case prefix+'yts': case prefix+'ytsearch':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} query`)
                   reply(mess.wait)
                   addCountCmd('#ytsearch', sender, _cmd)
                   yts(q).then( data => {
                     let yt = data.videos
                     var jumlah = 15
                     if (yt.length < jumlah) jumlah = yt.length
                     var no = 0
                     let txt = `*YOUTUBE SEARCH*

*Data berhasil didapatkan*
*Hasil pencarian dari ${q}*

*${prefix}getmusic <no urutan>*
*${prefix}getvideo <no urutan>*
Untuk mengambil Audio/Video dari hasil pencarian`
                     for (let i = 0; i < jumlah; i++) {
                       no += 1
                       txt += `\n─────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author.name}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
                     }
                     zaki.sendMessage(from, { image: { url: yt[0].image }, caption: txt }, { quoted: msg })
                     limitAdd(sender, limit)
                   }).catch(() => reply(mess.error.api))
                   break
                case prefix+'whatmusic': case prefix+'whatmusik':
                   if (!isPremium) return reply(mess.OnlyPrem)
                   if (isVideo || isQuotedVideo || isQuotedAudio) {
                    if (isQuotedAudio && quotedMsg.id.endsWith('TL')) return reply(`Gaboleh curang cuy!`)
                     reply(mess.wait)
                     addCountCmd('#whatmusic', sender, _cmd)
                     try {
                       var media;
                       if (isVideo || isQuotedVideo) {
                         media = await zaki.downloadAndSaveMediaMessage(msg, 'video', './sticker/a'+sender+'.mp3')
                       } else if (isQuotedAudio) {
                         media = await zaki.downloadAndSaveMediaMessage(msg, 'audio', './sticker/a'+sender+'.mp3')
                       }
                       const acr = new acrcloud({
                           host: "identify-eu-west-1.acrcloud.com",
                           access_key: "1598f147ee841b02dc18821a1be79fae",
                           access_secret: "FLMLqyIMv19PHb8L4Xgy86YeD1K2qrHQFnL3muYO"
                       });
                       var sampleq = fs.readFileSync('./sticker/a'+sender+'.mp3')
                       var metadata = await acr.identify(sampleq)
                       console.log(metadata)
                       zaki.reply(from, `*「 Berhasil Ditemukan 」*\n\n➸ Judul Lagu : ${metadata.metadata.music[0].title}\n➸ Artis : ${metadata.metadata.music[0].artists[0].name}\n➸ Album : ${metadata.metadata.music[0].album.name}\n➸ Rilis : ${metadata.metadata.music[0].release_date}`, msg)
                       fs.unlinkSync('./sticker/a'+sender+'.mp3')
                     } catch (e) {
                       fs.unlinkSync('./sticker/a'+sender+'.mp3')
                       reply(`Lagu tidak dapat ditemukan, atau ukuran lagu yang terlalu besar!`)
                     }
                   } else {
                     reply(`Reply video/audio dan sertakan caption ${prefix}whatmusic`)
                   }
                   break
                  case prefix+'ghstalk': case prefix+'stalkgh':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
ReplyNya(`mencari github ${q}, data berhasil didapatkan`)
axios.get(`https://api.github.com/users/${q}`)
.then((res) => res.data)
.then((res) =>{
let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
let txt = `*GITHUB STALKER*

• Username : ${login}
• Name : ${name}
• Followers : ${followers} followers
• Following : ${following} following
• Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
• Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
• Public Gists : ${public_gists}
• Public Repos : ${public_repos}
• Twitter : ${twitter_username}
• Email : ${email}
• Location : ${location}
• Blog : ${blog}
• Link : ${html_url}
• Bio :\n${bio}`
zaki.sendMessage(from, {image: {url:avatar_url}, caption:txt}, {quoted:msg})
})
break
                   if (!q) return reply(`Kirim perintah ${command} username`)
                   reply(mess.wait)
                case prefix+'igstalk': case prefix+'stalkig':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (!q) return reply(`Kirim perintah ${command} username`)
                   reply(mess.wait)
                   addCountCmd('#igstalk', sender, _cmd)
                   let get_result = await skrep.igstalk(q)
var teksdek = (`*INSTAGRAM - STALK*\n\n • Username : ${q}\n • Fullname : ${get_result.data.fullname}\n • Followers : ${get_result.data.follower}\n • Following : ${get_result.data.following}\n • Verified : ${get_result.data.verified}\n • Private : ${get_result.data.private}\n • Bio :\n  ${get_result.data.bio}`)
zaki.sendMessage(from, { image: { url: get_result.profile.high }, caption: teksdek }, { quoted: msg })
                   break
                case prefix+'googlelens': case prefix+'glens':
                case prefix+'searchbyimage': case prefix+'golens':
                case prefix+'searchbyimg':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (isImage || isQuotedImage) {
                     reply(mess.wait)
                     addCountCmd('#googlelens', sender, _cmd)
                     var media = await zaki.downloadAndSaveMediaMessage(msg, 'image', `./sticker/glens${sender}.jpg`)
                     var mediaLink = (await UploadFileUgu(media)).url
                     var data = await goLens(mediaLink)
                     var teks = `*Data Berhasil Di Dapatkan!*\n\n*Url Photo :* ${data.imgUrl}\n\nPencet Tombol "Menuju Pencarian" atau "Copy Link" di bawah untuk menuju ke pencarian yang anda Cari!`
                     zaki.sendMessage(from, { caption: teks, image: fs.readFileSync(media) }, { quoted: msg })
                     .then( res => {
                       fs.unlinkSync(media)
                       limitAdd(sender, limit)
                     })
                   } else {
                     reply(`Kirim/Balas gambar yang ingin dicari!`)
                   }
                   break
                // Game Menu
                case prefix+'tictactoe': case prefix+'ttt': case prefix+'ttc':
                   if (!isGroup)return reply(mess.OnlyGrup)
                   if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
                   if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                   if (mentioned.length !== 1) {
                     if (mentioned[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
                     if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)
                     var hadiah = randomNomor(100, 150)
                     addCountCmd('#tictactoe', sender, _cmd)
                     mentions(monospace(`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/N) untuk bermain\n\nHadiah : ${hadiah} balance`), [sender, mentioned[0]], false)
                     tictactoe.push({
                        id: from,
                        status: null,
                        hadiah: hadiah,
                        penantang: sender,
                        ditantang: mentioned[0],
                        waktu: setTimeout(() => {
                          if (isTicTacToe(from, tictactoe)) zaki.sendMessage(from, { text: `Waktu TicTacToe Habis, Tidak ada balasan dari @${mentioned[0].split("@")[0]}`, mentions: [mentioned[0]] })
                          var posi = getPosTic(from, tictactoe)
                          tictactoe.splice(posi, 1)
                        }, 10000000),
                        timeout: 60000,
                        TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                     })
                     gameAdd(sender, glimit)
                   } else {
                     reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                   }
                   break
                case prefix+'delttt': case prefix+'delttc':
                   if (!isGroup)return reply(mess.OnlyGrup)
                   if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
                   var posi = getPosTic(from, tictactoe)
                   if (tictactoe[posi].penantang.includes(sender)) {
                     addCountCmd('#delttc', sender, _cmd)
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                   } else if (tictactoe[posi].ditantang.includes(sender)) {
                     addCountCmd('#delttc', sender, _cmd)
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                   } else if (isGroupAdmins) {
                     addCountCmd('#delttc', sender, _cmd)
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                   } else if (isOwner) {
                     addCountCmd('#delttc', sender, _cmd)
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                   } else {
                     reply(`Anda tidak bisa menghapus sesi tictactoe, karena bukan pemain!`)
                   }
                   break
                case prefix+'ttc-solo': case prefix+'tictactoe-solo': case prefix+'ttcsolo':
                   if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isTicTacToe(from, ttcsolo)) return reply(`Masih ada game yg blum selesai\nketik ${prefix}/endttc untuk menghapus sesi`)
                   addCountCmd('#tictactoe-solo', sender, _cmd)
                   reply(monospace(`TICTACTOE GAME\n\n@${sender.split("@")[0]} melawan ${botname}\n\nKirim (Y/N) untuk melanjutkan permainan`))
                   ttcsolo.push({
                     id: from,
                     status: null,
                     giliran: 'penantang',
                     penantang: sender,
                     ditantang: botname,
                     TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                   })
                   gameAdd(sender, glimit)
                   break
                case prefix+'endttc': case prefix+'endtictactoe':
                   if (!isTicTacToe(from, ttcsolo)) return reply(`Tidak ada sesi game TicTacToe di Grup ini!`)
                   var posi = getPosTic(from, ttcsolo)
                   if (ttcsolo[posi].penantang == sender) {
                     reply(`Berhasil menghapus sesi TicTacToe Solo`)
                     ttcsolo.splice(posi, 1)
                   } else {
                     reply(`Anda bukan pemain, suruh @${ttcsolo[posi].penantang.split("@")[0]} untuk mengetik ${prefix}endttc`)
                   }
                   break
                case prefix+'tebakgambar': case prefix+'tg':
                   if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebakgambar)) return zaki.reply(from, `Masih ada game yang belum diselesaikan`, tebakgambar[getGamePosi(from, tebakgambar)].msg)
                   addCountCmd('#tebakgambar', sender, _cmd)
                   var data = { image: '', jawaban: '' }
                   try {
                     var anu2 = await tebakgmbr()
                     data.image = anu2.image
                     data.jawaban = anu2.jawaban.split('Jawaban ').join('')
                     var teks = `*TEBAK GAMBAR*\n\n`+monospace(`Petunjuk : ${data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                     zaki.sendMessage(from, { image: { url: data.image }, caption: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TG' })
                     .then( res => {
                       var jawab = data.jawaban.toLowerCase()
                       addPlayGame(from, 'Tebak Gambar', jawab, gamewaktu, res, tebakgambar)
                       gameAdd(sender, glimit)
                     })
                   } catch (e) {; reply(mess.error.api); }
                   break
                case prefix+'tebaklagu': case prefix+'tl':
                   if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebaklagu)) return zaki.reply(from, `Masih ada game yang belum diselesaikan`, tebaklagu[getGamePosi(from, tebaklagu)].msg)
                   addCountCmd('#tebaklagu', sender, _cmd)
                   require('./lib/tebaklagu').tebaklagu().then( data => {
                     zaki.sendPresenceUpdate('recording', from)
                     var { preview, title} = data.result
                     var teks = `*TEBAK LAGU*\n\n`+monospace(`Petunjuk : ${title.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                     zaki.sendMessage(from, { audio: { url: preview }, mimetype: 'audio/mp4', ptt: true }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TL' })
                     .then( res => {
                       zaki.sendMessage(from, { text: teks }, { quoted: res })
                       var jawab = title.toLowerCase()
                       addPlayGame(from, 'Tebak Lagu', jawab, gamewaktu, res, tebaklagu)
                       gameAdd(sender, glimit)
                     })
                   }).catch(() => reply(mess.error.api))
                   break
                case prefix+'delgame': case prefix+'deletegame':
                case prefix+'dellgame': case prefix+'nyerah':
                   if (!isQuotedMsg) return reply(`Balas pesan soal game yang ingin dihapus`)
                   if (quotedMsg.id.endsWith('TG')) {
                     var tg = getGamePosi(from, tebakgambar)
                     if (tg == undefined) return reply(`Game tersebut sudah selesai`)
                     if (tebakgambar[tg].msg.key.id !== quotedMsg.id) return reply(`Game tersebut sudah selesai`)
                     addCountCmd('#nyerah', sender, _cmd)
                     reply(`*Tebak Gambar*\nJawaban : ${tebakgambar[tg].jawaban}`)
                     tebakgambar.splice(tg, 1)
                   } else if (quotedMsg.id.endsWith('KS')) {
                     var ks = getGamePosi(from, kuis)
                     if (ks == undefined) return reply(`Game tersebut sudah selesai`)
                     if (kuis[ks].msg.key.id !== quotedMsg.id) return reply(`Game tersebut sudah selesai`)
                     addCountCmd('#nyerah', sender, _cmd)
                     reply(`*Kuis Game*\nJawaban : ${kuis[ks].jawaban}`)
                     kuis.splice(ks, 1)
                   } else if (quotedMsg.id.endsWith('TL')) {
                     var tl = getGamePosi(from, tebaklagu)
                     if (tl == undefined) return reply(`Game tersebut sudah selesai`)
                     if (tebaklagu[tl].msg.key.id !== quotedMsg.id) return reply(`Game tersebut sudah selesai`)
                     addCountCmd('#nyerah', sender, _cmd)
                     reply(`*Tebak Lagu*\nJawaban : ${tebaklagu[tl].jawaban}`)
                     tebaklagu.splice(tl, 1)
                   } else {
                     reply(`Balas soal game!`)
                   }
                   break
                case prefix+'casino':
                   if (!isGroup)return reply(mess.OnlyGrup)
                   if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal`)
                   if (mentionUser.length == 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
                   if (mentionUser.length > 2) return reply('Hanya bisa dengan 1 orang')
                   if (mentionUser[0] === sender) return reply(`Sad amat main sama diri sendiri`)
                   if (mentionUser[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
                   if (getCasino(from, casino) !== null) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
                   if (args.length == 2) return reply('Masukan Nominal Nya')
                   if (args[2].includes('-')) return reply(`Jangan menggunakan -`)
                   if (isNaN(parseInt(args[2]))) return reply('Nominal Harus Berupa Angka!')
                   var anu = getBalance(sender, balance)
                   var ani = getBalance(mentionUser[0], balance)
                   if (anu < args[2] || anu == 'undefined') return reply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                   if (ani < args[2] || ani == 'undefined') return reply(`Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}balance @tag untuk mengecek Balance lawanmu`)
                   setCasino(from, sender.split("@")[0], mentioned[0].split("@")[0], Number(args[2]), casino)
                   gameAdd(sender, glimit)
                   var starGame = `🎰 Memulai Game Casino 💰\n\n• @${sender.replace("@s.whatsapp.net", "")} Menantang ${args[1]}, dengan Nominal: *$ ${parseInt(args[2])}*\n• Ketik Y/N untuk menerima atau menolak Permainan!\n• Jika 30 detik tidak ada Jawaban dari lawan, maka pertandingan otomatis dihapus`
                   zaki.sendMessage(from, { text: starGame, mentions: [sender, args[1].replace("@", "") + "@s.whatsapp.net"] }, { quoted: msg })
                   break
                case prefix+'delcasino':
                   if (isPlayCasino(from, casino)) {
                     var csn = sesiCasino(from, casino)
                     if (csn.Z.includes(sender)) {
                       addCountCmd('#delcasino', sender, _cmd)
                       clearTimeout(csn.expired)
                       deleteCasino(from, casino)
                       textImg('Berhasil Menghapus Sesi Casino')
                     } else if (csn.Y.includes(sender)) {
                       addCountCmd('#delcasino', sender, _cmd)
                       clearTimeout(csn.expired)
                       deleteCasino(from, casino)
                       textImg('Berhasil Menghapus Sesi Casino')
                     } else if (isGroupAdmins) {
                       addCountCmd('#delcasino', sender, _cmd)
                       clearTimeout(csn.expired)
                       deleteCasino(from, casino)
                       textImg('Berhasil Menghapus Sesi Casino')
                     } else if (isOwner) {
                       addCountCmd('#delcasino', sender, _cmd)
                       clearTimeout(csn.expired)
                       deleteCasino(from, casino)
                       textImg('Berhasil Menghapu Sesi Casino')
                     } else {
                       textImg('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
                     }
                   } else {
                     reply('Tidak ada sesi yang berlangsung')
                   }
                   break
                case prefix+'suitpvp': case prefix+'suit':
                   if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   zaki.suit = zaki.suit ? zaki.suit : {}
                   if (!isGroup) return reply("Command ini khusus group.");
                   if (args.length < 2) return reply("Tag lawanmu.\n\nex : #suitpvp @tag");
                   if (Object.values(zaki.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) return reply("Selesaikan game mu yang sebelumnya terlebih dahulu.");
                   if (!msg.mentioned[0]) return reply("Tag lawanmu.\n\nex : #suitpvp @tag");
                   if (mentioned[0] === sender) return reply("Tidak bisa bermain dengan dirimu sendiri.");
                   if (mentioned[0] === botNumber) return reply("Tidak bisa bermain dengan bot.");
                   if (Object.values(zaki.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(mentioned[0]))) reply("Orang yang kamu tag/tantang sedang bermain dengan yang lain.")
                   addCountCmd('#suitpvp', sender, _cmd)
                   let timeout = 60000
                   let id = 'suit_' + new Date() * 1
                   let caption = `\`\`\`@${sender.split`@`[0]} menantang @${msg.mentioned[0].split`@`[0]} untuk bermain suit.

Silahkan @${msg.mentioned[0].split`@`[0]} untuk ketik terima/tolak.\`\`\``
                   zaki.sendMessage(from, {text: caption, mentions: [sender, msg.mentioned[0]] })
                   zaki.suit[id] = {
                     id: id,
                     p: sender,
                     p2: msg.mentioned[0],
                     status: 'wait',
                     waktu: setTimeout(() => {
                     if (zaki.suit[id]) zaki.sendMessage(from, {text: `waktu suit habis, game berakhir.`})
                       delete zaki.suit[id]
                     }, 10000000), 
                     timeout: timeout
                   }
                   gameAdd(sender, glimit)
                   break
                // Group Menu
                case prefix+'linkgrup': case prefix+'link': case prefix+'linkgc':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   addCountCmd('#linkgc', sender, _cmd)
                   var url = await zaki.groupInviteCode(from).catch(() => reply(mess.error.api))
                   url = 'https://chat.whatsapp.com/'+url
                   reply(url)
                   break
                case prefix+'setppgrup': case prefix+'setppgc':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (isImage || isQuotedImage) {
                     addCountCmd('#setppgrup', sender, _cmd)
                     var media = await zaki.downloadAndSaveMediaMessage(msg, 'image', `ppgc${from}.jpeg`)
                     if (args[1] == `'panjang'`) {
                       var { img } = await generateProfilePicture(media)
                       await zaki.query({
                         tag: 'iq',
                         attrs: {
                           to: from,
                           type:'set',
                           xmlns: 'w:profile:picture'
                         },
                         content: [
                           {
                             tag: 'picture',
                             attrs: { type: 'image' },
                             content: img
                           }
                         ]
                       })
                       fs.unlinkSync(media)
                       reply(`Sukses`)
                     } else {
                       await zaki.updateProfilePicture(from, { url: media })
                       .then( res => {
                         reply(`Sukses`)
                         fs.unlinkSync(media)
                       }).catch(() => reply(mess.error.api))
                     }
                   } else {
                     reply(`Kirim/balas gambar dengan caption ${command}`)
                   }
                   break
                case prefix+'setnamegrup': case prefix+'setnamegc':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                   addCountCmd('#setnamegc', sender, _cmd)
                   await zaki.groupUpdateSubject(from, q)
                   .then( res => { reply(`Sukses`) }).catch(() => reply(mess.error.api))
                   break
                case prefix+'setdesc': case prefix+'setdescription':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                   addCountCmd('#setdesc', sender, _cmd)
                   await zaki.groupUpdateDescription(from, q)
                   .then( res => { reply(`Sukses`) }).catch(() => reply(mess.error.api))
                   break
                case prefix+'group': case prefix+'grup':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (args.length < 2) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
                   if (args[1] == "close") {
                     addCountCmd('#group', sender, _cmd)
                     zaki.groupSettingUpdate(from, 'announcement')
                     reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
                   } else if (args[1] == "open") {
                     addCountCmd('#group', sender, _cmd)
                     zaki.groupSettingUpdate(from, 'not_announcement')
                     reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
                   } else {
                     reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
                   }
                   break
                case prefix+'revoke':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   addCountCmd('#revoke', sender, _cmd)
                   await zaki.groupRevokeInvite(from)
                   .then( res => { reply(`Sukses menyetel tautan undangan grup ini`) }).catch(() => reply(mess.error.api))
                   break
                case prefix+'delete': case prefix+'del': case prefix+'d':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                   if (!isQuotedMsg) return reply(`Balas chat dari bot yang ingin dihapus`)
                   if (!quotedMsg.fromMe) return reply(`Hanya bisa menghapus chat dari bot`)
                   addCountCmd('#delete', sender, _cmd)
                   zaki.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
                   break
                case prefix+'promote': case prefix+'pm':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (mentionUser.length !== 0) {
                     addCountCmd('#promote', sender, _cmd)
                     zaki.groupParticipantsUpdate(from, [mentionUser[0]], "promote")
                     .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai admin`, [mentionUser[0]], true) })
                     .catch(() => reply(mess.error.api))
                   } else if (isQuotedMsg) {
                     addCountCmd('#promote', sender, _cmd)
                     zaki.groupParticipantsUpdate(from, [quotedMsg.sender], "promote")
                     .then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai admin`, [quotedMsg.sender], true) })
                     .catch(() => reply(mess.error.api))
                   } else {
                     reply(`Tag atau balas pesan member yang ingin dijadikan admin`)
                   }
                   break
                case prefix+'demote':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (mentionUser.length !== 0) {
                     addCountCmd('#demote', sender, _cmd)
                     zaki.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
                     .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`, [mentionUser[0]], true) })
                     .catch(() => reply(mess.error.api))
                   } else if (isQuotedMsg) {
                     addCountCmd('#demote', sender, _cmd)
                     zaki.groupParticipantsUpdate(from, [quotedMsg.sender], "demote")
                     .then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai member biasa`, [quotedMsg.sender], true) })
                     .catch(() => reply(mess.error.api))
                   } else {
                     reply(`Tag atau balas pesan admin yang ingin dijadikan member biasa`)
                   }
                   break
                case prefix+'add':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (groupMembers.length == 257) return reply(`Anda tidak dapat menambah peserta, karena Grup sudah penuh!`)
                   var mems = []
                   groupMembers.map( i => mems.push(i.id) )
                   var number;
                   if (args.length > 1) {
                     number = q.replace(/[^0-9]/gi, '')+"@s.whatsapp.net"
                     var cek = await zaki.onWhatsApp(number)
                     if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
                     if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
                     addCountCmd('#add', sender, _cmd)
                     zaki.groupParticipantsUpdate(from, [number], "add")
                     .then( res => reply(jsonformat(res)))
                     .catch((err) => reply(jsonformat(err)))
                   } else if (isQuotedMsg) {
                     number = quotedMsg.sender
                     var cek = await zaki.onWhatsApp(number)
                     if (cek.length == 0) return reply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`)
                     if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
                     addCountCmd('#add', sender, _cmd)
                     zaki.groupParticipantsUpdate(from, [number], "add")
                     .then( res => reply(jsonformat(res)))
                     .catch((err) => reply(jsonformat(err)))
                   } else {
                     reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin dimasukkan`)
                   }
                   break
                case prefix+'kick':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   var number;
                   if (mentionUser.length !== 0) {
                     number = mentionUser[0]
                     addCountCmd('#kick', sender, _cmd)
                     zaki.groupParticipantsUpdate(from, [number], "remove")
                     .then( res => reply(jsonformat(res)))
                     .catch((err) => reply(jsonformat(err)))
                   } else if (isQuotedMsg) {
                     number = quotedMsg.sender
                     addCountCmd('#kick', sender, _cmd)
                     zaki.groupParticipantsUpdate(from, [number], "remove")
                     .then( res => reply(jsonformat(res)))
                     .catch((err) => reply(jsonformat(err)))
                   } else {
                     reply(`Tag atau balas pesan orang yang ingin dikeluarkan dari grup`)
                   }
                   break
                case prefix+'antilink':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (args.length === 1) return reply(`Pilih enable atau disable`)
                   if (args[1].toLowerCase() === 'enable') {
                     addCountCmd('#antilink', sender, _cmd)
                     if (isAntiLink) return reply(`Udah aktif`)
                     antilink.push(from)
                     fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                     reply('Antilink grup aktif')
                   } else if (args[1].toLowerCase() === 'disable') {
                     addCountCmd('#antilink', sender, _cmd)
                     if (!isAntiLink) return reply(`Udah nonaktif`)
                     let anu = antilink.indexOf(from)
                     antilink.splice(anu, 1)
                     fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                     reply('Antilink grup nonaktif')
                   } else {
                     reply(`Pilih enable atau disable`)
                   }
                   break
                case prefix+'welcome':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                   if (args.length < 2) return reply(`Pilih enable atau disable`)
                   addCountCmd('#welcome', sender, _cmd)
                   if (args[1].toLowerCase() === 'enable') {
                     if (isWelcome) return reply(`Udah aktif`)
                     welcome.push({jid: from, welcome: `Welcome @user`, left: 'Sayonara @user'})
                     fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                     reply('Welcome aktif')
                   } else if (args[1].toLowerCase() === 'disable') {
                     let anu = getPosiSaying(from, welcome)
                     welcome.splice(anu, 1)
                     fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                     reply('Welcome nonaktif')
                   } else {
                     reply(`Pilih enable atau disable`)
                   }
                   break
                case prefix+'setwelcome': case prefix+'setwelkom':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                   if (!isWelcome) return reply(`Welcome di group ini belum di aktifkan, kirim perintah ${prefix + 'welcome'} enable untuk mengaktifkan!`)
                   if (args.length < 2) return reply(`Kirim perintah *${command}* teks\nUntuk penjelasan pemakaian yang lebih detail, ketik *${command} --help*`)
                   if (args[1] === '--help') {
                     addCountCmd('#setwelcome', sender, _cmd)
                     var teksw = `Command Ini Berfungsi Untuk Mengganti Teks Welcome\n\n*Penggunaan :*\n- ${command} teks baru\n\n*List Option :*\n- @user _untuk mentions new member_\n- @pushname _untuk nama new mem_\n- @subject _untuk nama group_\n- @desc _untuk deskripsi group_\n\nContoh :\n*${command}* Hai @user selamat datang di group @subject`
                     reply(teksw)
                   } else {
                     addCountCmd('#setwelcome', sender, _cmd)
                     var posiw = getPosiSaying(from, welcome)
                     welcome[posiw].welcome = q
                     fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                     reply(`Sukses merubah teks welcome menjadi :\n\n${q}`)
                   }
                   break
                case prefix+'setleft': case prefix+'setout':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                   if (!isWelcome) return reply(`Welcome di group ini belum di aktifkan, kirim perintah ${prefix + 'left'} enable untuk mengaktifkan!`)
                   if (args.length < 2) return reply(`Kirim perintah *${command}* teks\nUntuk penjelasan pemakaian yang lebih detail, ketik *${command} --help*`)
                   if (args[1] === '--help') {
                     addCountCmd('#setleft', sender, _cmd)
                     var teksl = `Command Ini Berfungsi Untuk Mengganti Teks Left\n\n*Penggunaan :*\n- ${command} teks baru\n\n*List Option :*\n- @user _untuk mentions new member_\n- @pushname _untuk nama new mem_\n- @subject _untuk nama group_\n- @desc _untuk deskripsi group_\n\nContoh :\n*${command}* Yah @user keluar dari group @subject`
                     reply(teksl)
                   } else {
                     addCountCmd('#setleft', sender, _cmd)
                     var posil = getPosiSaying(from, welcome)
                     welcome[posil].left = q
                     fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                     reply(`Sukses merubah teks left menjadi :\n\n${q}`)
                   }
                   break
                 // Bank & Payment Menu
                case prefix+'topbalance':{
                   addCountCmd('#topbalance', sender, _cmd)
                   balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                   let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                   let arrTop = []
                   var total = 10
                   if (balance.length < 10) total = balance.length
                   for (let i = 0; i < total; i ++){
                     top += `${i + 1}. @${balance[i].id.split("@")[0]}\n• Balance : $${balance[i].balance}\n\n`
                     arrTop.push(balance[i].id)
                   }
                   mentions(top, arrTop, true)
                }
                   break
                case prefix+'buylimit':{
                   if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                   if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                   if (isNaN(args[1])) return reply(`Harus berupa angka`)
                   if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                   let ane = Number(parseInt(args[1]) * 150)
                   if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                   addCountCmd('#buylimit', sender, _cmd)
                   kurangBalance(sender, ane, balance)
                   giveLimit(sender, parseInt(args[1]), limit)
                   reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
                }
                   break
                case prefix+'transfer': case prefix+'tf':{
                   if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @0 2000`)
                   if (mentionUser.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                   if (!args[2]) return reply(`Masukkan nominal nya!`)
                   if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                   if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                   if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                   var anu = getBalance(sender, balance)
                   if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                   addCountCmd('#transfer', sender, _cmd)
                   kurangBalance(sender, parseInt(args[2]), balance)
                   addBalance(mentionUser[0], parseInt(args[2]), balance)
                   mentions(`Sukses transfer balance sebesar $${args[2]} kepada @${mentionUser[0].split("@")[0]}`, [mentionUser[0]], true)
                 }
                   break
                case prefix+'buygamelimit': case prefix+'buyglimit':{
                   if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                   if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                   if (isNaN(args[1])) return reply(`Harus berupa angka`)
                   if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                   let ane = Number(parseInt(args[1]) * 150)
                   if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                   addCountCmd('#buygamelimit', sender, _cmd)
                   kurangBalance(sender, ane, balance)
                   givegame(sender, parseInt(args[1]), glimit)
                   reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
                }
                   break
                default:
if (budy.startsWith('hi')) {
let audiov1 = fs.readFileSync('./media/audio/hiv1.mp3')
await zaki.sendMessage(from, { audio: audiov1, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Hi')) {
let audiov1 = fs.readFileSync('./media/audio/hiv1.mp3')
await zaki.sendMessage(from, { audio: audiov1, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('haruka')) {
let hrk = fs.readFileSync('./media/audio/haruka.mp3')
await zaki.sendMessage(from, { audio: hrk, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Haruka')) {
let hrk2 = fs.readFileSync('./media/audio/haruka.mp3')
await zaki.sendMessage(from, { audio: hrk2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('assalamualaikum')) {
let wlks = fs.readFileSync('./media/audio/waalaikumsallam.mp3')
await zaki.sendMessage(from, { audio: wlks, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Assalamualaikum')) {
let wlks2 = fs.readFileSync('./media/audio/waalaikumsallam.mp3')
await zaki.sendMessage(from, { audio: wlks2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('niconiconi')) {
let audiov2 = fs.readFileSync('./media/audio/nikoniko.mp3')
await zaki.sendMessage(from, { audio: audiov2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Niconiconi')) {
let audiov2 = fs.readFileSync('./media/audio/nikoniko.mp3')
await zaki.sendMessage(from, { audio: audiov2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('nico nico ni')) {
let nnnooi = fs.readFileSync('./media/audio/nikoniko.mp3')
await zaki.sendMessage(from, { audio: nnnooi, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Nico nico ni')) {
let nnnooi2 = fs.readFileSync('./media/audio/nikoniko.mp3')
await zaki.sendMessage(from, { audio: nnnooi2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Nico Nico ni')) {
let nnnooi3 = fs.readFileSync('./media/audio/nikoniko.mp3')
await zaki.sendMessage(from, { audio: nnnooi3, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Nico Nico Ni')) {
let nnnooi4 = fs.readFileSync('./media/audio/nikoniko.mp3')
await zaki.sendMessage(from, { audio: nnnooi4, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('dame')) {
let audiov2 = fs.readFileSync('./media/audio/dame.mp3')
await zaki.sendMessage(from, { audio: audiov2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Dame')) {
let audiov2 = fs.readFileSync('./media/audio/dame.mp3')
await zaki.sendMessage(from, { audio: audiov2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('huaa')) {
let hua = fs.readFileSync('./media/audio/huaa.mp3')
await zaki.sendMessage(from, { audio: hua, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Huaa')) {
let hua2 = fs.readFileSync('./media/audio/huaa.mp3')
await zaki.sendMessage(from, { audio: hua2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('ara ara')) {
let ara = fs.readFileSync('./media/audio/araara.mp3')
await zaki.sendMessage(from, { audio: ara, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Ara ara')) {
let ara2 = fs.readFileSync('./media/audio/araara.mp3')
await zaki.sendMessage(from, { audio: ara2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('baka')) {
let bka = fs.readFileSync('./media/audio/baka.mp3')
await zaki.sendMessage(from, { audio: bka, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Baka')) {
let bka2 = fs.readFileSync('./media/audio/baka.mp3')
await zaki.sendMessage(from, { audio: bka2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('bakaa')) {
let bka = fs.readFileSync('./media/audio/baka.mp3')
await zaki.sendMessage(from, { audio: bka, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Bakaa')) {
let bka2 = fs.readFileSync('./media/audio/baka.mp3')
await zaki.sendMessage(from, { audio: bka2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('jancok')) {
let jnck = fs.readFileSync('./media/audio/kasar.mp3')
await zaki.sendMessage(from, { audio: jnck, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Jancok')) {
let jnck2 = fs.readFileSync('./media/audio/kasar.mp3')
await zaki.sendMessage(from, { audio: jnck2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('minta dong')) {
let gakblh = fs.readFileSync('./media/audio/gakboleh.mp3')
await zaki.sendMessage(from, { audio: gakblh, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Minta dong')) {
let gakblh2 = fs.readFileSync('./media/audio/gakboleh.mp3')
await zaki.sendMessage(from, { audio: gakblh2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('mauga')) {
let audione = fs.readFileSync('./media/audio/mauga.mp3')
await zaki.sendMessage(from, { audio: audione, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Mauga')) {
let audione2 = fs.readFileSync('./media/audio/mauga.mp3')
await zaki.sendMessage(from, { audio: audione2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('engga')) {
let egga = fs.readFileSync('./media/audio/engga.mp3')
await zaki.sendMessage(from, { audio: egga, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Engga')) {
let egga2 = fs.readFileSync('./media/audio/engga.mp3')
await zaki.sendMessage(from, { audio: egga2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('yamte')) {
let ymt = fs.readFileSync('./media/audio/yamte.mp3')
await zaki.sendMessage(from, { audio: ymt, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Yamte')) {
let ymt2 = fs.readFileSync('./media/audio/yamte.mp3')
await zaki.sendMessage(from, { audio: ymt2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('onii chan')) {
let oicn = fs.readFileSync('./media/audio/onichan.mp3')
await zaki.sendMessage(from, { audio: oicn, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('Onii chan')) {
let oicn2 = fs.readFileSync('./media/audio/onichan.mp3')
await zaki.sendMessage(from, { audio: oicn2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('i love you')) {
let ily = fs.readFileSync('./media/audio/iloveyou.mp3')
await zaki.sendMessage(from, { audio: ily, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}
if (budy.startsWith('I love you')) {
let ily2 = fs.readFileSync('./media/audio/iloveyou.mp3')
await zaki.sendMessage(from, { audio: ily2, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
}

                  if (isCmd) {
                    if (args[0].length > 1) {
                      var detect = await Dym(command.split(prefix)[1], listCmd)
                      if (detect !== null) {
                        reply(`Mungkin yang anda maksud adalah ${prefix + detect} abaikan jika salah!`)
                      }
                      if (!isGroup && detect === null) {
                        reply(`Maaf kak fitur ${command} tidak terdaftar di list ${prefix+'menu'}`)
                      }
                    } else {
                      var detect2 = await Dym(args[1], listCmd)
                      if (!isGroup && detect2 !== null) {
                        reply(`Pastikan antara simbol/prefix jangan dipisah, contoh ${prefix+args[1]}`)
                      }
                    }
                  }
        }
          } catch (err) {
            console.log(color('[ERROR]', 'red'), err)
            zaki.sendMessage(setting.ownerNumber, { text: `${err}` })
          }
}
