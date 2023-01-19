
let handler = async (m, { conn, usedPrefix }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastrokets)
    let _timers = (3600000 - __timers)
    let user = global.db.data.users[m.sender]
    let order = global.db.data.users[m.sender].rokets
    let timers = clockString(_timers) 
    let name = `${user.registered ? user.name : conn.getName(m.sender)}`

    
    if (user.health < 80) return m.reply(`Anda Harus Memiliki Minimal 80Health`)
    if (new Date - global.db.data.users[m.sender].lastrokets > 3600000) {
let ngerok1 = `${Math.floor(Math.random() * 1000)}`
let ngerok2 = `${Math.floor(Math.random() * 1000)}`
let ngerok4 = `${Math.floor(Math.random() * 5000)}`
let ngerok3 = `${Math.floor(Math.random() * 1000)}`
let ngerok5 = `${Math.floor(Math.random() * 1000)}`

.trim()

let ngrk1 = (ngerok1 * 200)
let ngrk2 = (ngerok2 * 100) 
let ngrk3 = (ngerok3 * 100)
let ngrk4 = (ngerok4 * 100)
let ngrk5 = (ngerok5 * 120)

let zero1 = `${ngrk1}`
let zero2 = `${ngrk2}`
let zero3 = `${ngrk3}`
let zero4 = `${ngrk4}`
let zero5 = `${ngrk5}`

let rokit = `🌕


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████
🚀

👨‍🚀 Memulai penerbangan....
`

let rokit2 = `🌕


🚀
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Dalam penerbangan....
`

let rokit3 = `🌕🚀


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Sampai di tujuan....
`

let rokit4 = `🌕🚀

➕ Sukses Mendarat.... 👨‍🚀`

let hsl = `
*—[ Hasil Ngroket ${name} ]—*
 ➕ 💹 Uang = [ ${zero4} ]
 ➕ ✨ Exp = [ ${zero5} ] 		 
 ➕ 😍 Mendarat Selesai = +1
 ➕  📥Total Mendarat Sebelumnya : ${order}
`


global.db.data.users[m.sender].money += ngrk4
global.db.data.users[m.sender].exp += ngrk5
global.db.data.users[m.sender].rokets += 1
global.db.data.users[m.sender].health -= 80


setTimeout(() => {
                     conn.reply(m.chat, hsl, m)
                     }, 27000) 
               
                     setTimeout(() => {
                     conn.reply(m.chat, rokit4, m)
                      }, 25000)
                
                     setTimeout(() => {
                     conn.reply(m.chat, rokit3, m)
                     }, 20000) 
                        
                     setTimeout(() => {
                     conn.reply(m.chat, rokit2, m)
                     }, 15000) 
                    
                     setTimeout(() => {
                     conn.reply(m.chat, rokit, m)
                     }, 10000) 
                     
                     setTimeout(() => {
                     conn.reply(m.chat, `🔍 ${name} Mencari Lokasi.....`, m)
                     }, 0) 
  user.lastrokets = new Date * 1
    } else conn.sendButton(m.chat, `Silahkan Tunggu ${timers} Untuk Menggunakan Fitur Ini Lagi...`, wm, null, [['inventory', '.inv']], m )
}
handler.help = ['roket']
handler.tags = ['rpg']
handler.command = /^(roket|ngroket|groket|jadiroket)$/i

handler.register = true
handler.limit = true

export default handler


function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
