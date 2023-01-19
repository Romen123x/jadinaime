let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/kanna?apikey=WibuXploit', '', '', m)
}
handler.help = ['jokowi']
handler.tags = ['anime']
handler.command = /^(jokowi)$/i

export default handler 