import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, command, text }) => {
	if (!text) return conn.reply(m.chat, 'Masukan Teksnya', m)
	let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
	let res = `https://api.lolhuman.xyz/api/ttp?apikey=WibuXploit&text=${teks}`
	let stiker = await sticker(false, res, global.stickpack, global.stickauth)
	conn.sendFile(m.chat, stiker, 'RyHar.webp', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.command = /^(ttp)$/i
handler.tags = ['sticker']
handler.help = ['ttp']

handler.limit = true

export default handler