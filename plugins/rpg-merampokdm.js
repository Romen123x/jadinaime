
// let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
let dapat = (Math.floor(Math.random() * 100000))
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  let __timers = (new Date - global.db.data.users[m.sender].lastrob)
  let _timers = (604800000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  if (new Date - global.db.data.users[m.sender].lastrob > 604800000){
  if (10000 > users[who].diamond) throw 'ᴛᴀʀɢᴇᴛ ɢᴀᴀᴅᴀ 💎ᴅɪᴀᴍᴏɴᴅ ʙᴏᴅᴏʜ, ᴋɪꜱᴍɪɴ ᴅɪᴀ'
  users[who].diamond -= dapat * 1
  users[m.sender].diamond += dapat * 1
  global.db.data.users[m.sender].lastrob = new Date * 1
  conn.reply(m.chat, `ʙᴇʀʜᴀꜱɪʟ ᴍᴇʀᴀᴍᴘᴏᴋ ᴅɪᴀᴍᴏɴᴅ ᴛᴀʀɢᴇᴛ ꜱᴇʙᴇꜱᴀʀ 💎${dapat}`, m)

}else conn.reply(m.chat, `Anda Sudah merampok diamond dan berhasil sembunyi , tunggu ${timers} untuk merampok diamond lagi`, m)
}
handler.help = ['merampokdm *@tag*']
handler.tags = ['rpg']
handler.command = /^merampokdm$/
handler.premium = true
handler.group = true

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}