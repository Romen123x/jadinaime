import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let res = 'https://api.lolhuman.xyz/api/sticker/patrick?apikey=WibuXploit'
	conn.sendFile(m.chat, res, 'xynz.webp', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.command = /^(spatrick)$/i
handler.tags = ['premium', 'sticker']
handler.help = ['spatrick']
handler.premium = true
handler.limit = true

export default handler