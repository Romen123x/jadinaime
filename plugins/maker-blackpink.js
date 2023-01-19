import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.lolhuman.xyz/api/textprome/blackpink?apikey=WibuXploit&text=${response[0]}&apikey=WibuXploit`
  conn.sendFile(m.chat, res, 'xynoz.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['blackpink'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(bl|blackpink)$/i
handler.limit = true

export default handler