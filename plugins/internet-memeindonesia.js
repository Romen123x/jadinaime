let fetch = require('node-fetch')
let handler = async (m, { text }) => {
m.reply(wait)
 let url = await fetch('https://api.lolhuman.xyz/api/meme/memeindo?apikey=WibuXploit')
  let barbar = await url.json()
conn.sendFile(m.chat, barbar.result, 'memeindo', JSON.stringify(barbar, null, 2), m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^(meme)$/i
handler.limit = true
export default handler