import { areJidsSameUser } from '@adiwajshing/baileys'
const leaderboards = [
  'level',
  'exp',
  'limit',
  'money',
  'iron',
  'gold',
  'diamond',
  'emerald',
  'trash',
  'joinlimit',
  'potion',
  'petFood',
  'wood',
  'rock',
  'string',
  'common',
  'uncommon',
  'mythic',
  'legendary',
  'pet',
  'bank',
  'chip',
  'atm'
]
let handler = async (m, { conn, args, participants, usedPrefix, command }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return { ...value, jid: key }
  })
  let imgr = flaaa.getRandom()
  let leaderboard = leaderboards.filter(v => v && users.filter(user => user && user[v]).length)
  let type = (args[0] || '').toLowerCase()
  const getPage = (item) => Math.ceil((users.filter(user => user && user[item]).length) / 0)
  let wrong = `ð á´Êá´©á´ ÊÉªsá´ :
${leaderboard.map(v => `
â® ${rpg.emoticon(v)} - ${v}
`.trim()).join('\n')}
ââââââââââââââââââââââââ
ðð»ââ á´Éªá´© :
â® á´á´ á´ Éªá´á´¡ á´ÉªÒÒá´Êá´É´á´ Êá´á´á´á´ÊÊá´á´Êá´:
${usedPrefix}${command} [type]
â á´xá´á´á´©Êá´:
${usedPrefix}${command} legendary`.trim()
  if (!leaderboard.includes(type)) 
  return conn.sendButton(m.chat,'*ââââã ð»ð´ð°ð³ð´ðð±ð¾ð°ðð³ ãââââ*', wrong, `${imgr + 'LeaderBoard'}`, [
[`âï¸ á´xá´©`, `${usedPrefix}lb exp`],
[`ð° á´á´É´á´Ê`, `${usedPrefix}lb money`]
], m)
  let page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(type)) : 0
  let sortedItem = users.map(toNumber(type)).sort(sort(type))
  let userItem = sortedItem.map(enumGetKey)
  // let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  let text = `
ð Êá´É´á´: ${userItem.indexOf(m.sender) + 1} á´á´á´ á´Ò ${userItem.length}

                    *â¢ ${rpg.emoticon(type)} ${type} â¢*

${sortedItem.slice(page * 0, page * 5 + 5).map((user, i) => `${i + 1}.*ï¹${user[type]}ï¹*- ${participants.some(p => areJidsSameUser(user.jid, p.id)) ? `${conn.getName(user.jid)} \nwa.me/` : 'ÒÊá´á´ á´á´Êá´Ê É¢Êá´á´á´©\n @'}${user.jid.split`@`[0]}`).join`\n\n`}
`.trim()
  return conn.sendButton(m.chat, `*âã ð¶ð»ð¾ð±ð°ð» ð»ð´ð°ð³ð´ðð±ð¾ð°ðð³ ãâ*`, text, `${imgr + 'LeaderBoard'}`, [
[`á´á´á´© 50`, `${usedPrefix}lb ${type} 9`],
[`á´á´á´© 100`, `${usedPrefix}lb ${type} 19`]
], m, {
    mentions: [...userItem.slice(page * 0, page * 5 + 5)].filter(v => !participants.some(p => areJidsSameUser(v, p.id)))})
}
handler.help = ['leaderboard [jumlah user]', 'lb [jumlah user]']
handler.tags = ['xp']
handler.command = /^(leaderboard|lb)$/i

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}


/**
 * Detect Number
 * @param {Number} x 
 */
function isNumber(number) {
  if (!number) return number
  number = parseInt(number)
  return typeof number == 'number' && !isNaN(number)
}