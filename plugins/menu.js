//📮 Made In Xynoz 
//Subscribe YouTube Xynoz!
//Tq To Jangan Di Hpus!!
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
let tags = {
  'main': 'Main',
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'nsfw': 'Nsfw',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis & Logo',
  'audio': 'Audio',
  'maker': 'Maker',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner', 
  'info': 'Info',
  'virus': 'Virtex Menu',
  'random': 'Random Sfx',
  'randoms': 'Random',
  'sound': 'Sound',
}
const defaultMenu = {
  before: `*〔 llı INFO USER ıll 〕*
 
⛓️ *Name:* %name
⛓️ *Tag:* %tag
⛓️ *Status:* %ryhar
⛓️ *Limit:* %limit
⛓️ *Role:* %role
⛓️ *Level:* %level [ %xp4levelup Xp For Levelup]
⛓️ *Xp:* %exp / %maxexp
⛓️ *Total Xp:* %totalexp


 *〔 llı TODAY ıll 〕*
 
⛓️ *Time:* %wib Wib
⛓️ *Days:* %week %weton
⛓️ *Date:* %date
⛓️ *Islamic Date:* %dateIslamic


 *〔 llı INFO ıll 〕*
 
⛓️ *Bot Name:* %me
⛓️ *Mode:* Public
⛓️ *Platform:* Linux
⛓️ *Type:* Node.Js
⛓️ *Baileys:* Multi Device
⛓️ *Uptime:* %muptime
⛓️ *Database:* %rtotalreg dari %totalreg


 *〔 llı INFO COMMAND ıll 〕*
 
 *🅟* = Premium
 *🅛* = Limit

%readmore`.trimStart(),
  header: '┏━━━ꕥ *〘 %category 〙*\n│',
    body: '┃⮕ %cmd %islimit %isPremium',
  footer: '│\n┗━━━━━━━━━ꕥ\n',
  after: `  ${'✧\n┬ 📮 *Note* :\n│ 𝙹𝙸𝙺𝙰 𝙼𝙴𝙻𝙰𝙽𝙶𝙶𝙰𝚁 𝚃𝙾𝚂 𝙰𝙺𝙰𝙽 𝙳𝙸 𝙱𝙰𝙽 𝙿𝙴𝚁𝙼𝙰𝙽𝙴𝙽! ^_^\n┗━━━━━━━━━━━━━━━━┈─◂'}`,
}
let handler = async (m, { conn, usedPrefix, __dirname }) => {
  try {
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let tag = `@${m.sender.split('@')[0]}`
    let name = await conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    let nama = `${user.registered ? user.name : conn.getName(m.sender)}`
    let ryhar = `${m.sender.split`@`[0] == nomorown ? 'Developer' : (user.premiumTime >= 1 ? 'Premium User' : 'Free User')}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '🅛' : '')
                .replace(/%isPremium/g, menu.premium ? '🅟' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: usedPrefix, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, tag, ryhar, wib, nama,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    const menu = './media/menu.jpg'
    const valor = './thumbnail.jpg'
    let url = 'https://telegra.ph/file/ef5a4364dc9e3b3418693.jpg'
    await conn.sendButton(m.chat, `${wish()} *${nama}* 🍂\n`, text.trim(), elainajpg.getRandom(), [['ᴀ ᴜ ᴛ ʜ ᴏ ʀ', '.owner'], ['ꜱ ᴇ ᴡ ᴀ ʙ ᴏ ᴛ', '.sewa'], ['ᴅ ᴏ ɴ ᴀ ꜱ ɪ', '.donasi']], m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
/*let vn = `./mp3/way-back-home.m4a`
await conn.sendFile(m.chat, vn, 'way-back-home.mp3', null, m, true, {
type: 'audioMessage',
ptt: true })*/
}
handler.help = ['menu']
handler.tags = ['info', 'main']

handler.command = /^(menu)$/i
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Selamat Malam')
  }
  if (time >= 4) {
    wishloc = ('Selamat Pagi')
  }
  if (time >= 11) {
    wishloc = ('Selamat Siang')
  }
  if (time >= 15) {
    wishloc = ('️ Selamat Sore')
  }
  if (time >= 18) {
  	wishloc = ('Selamat Malam')
  }
  if (time >= 23) {
    wishloc = ('Selamat Malam')
  }
  return wishloc
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
