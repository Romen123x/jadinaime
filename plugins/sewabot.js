let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/f379e1da4434fb7f53896.jpg'
let text = `━━ꕥ〔 *𝚂𝙴𝚆𝙰 & 𝙿𝚁𝙴𝙼𝙸𝚄𝙼* 〕ꕥ━⬣

〔 𝚂𝙴𝚆𝙰 〕
✾ 15 ʜᴀʀɪ 3,5ᴋ / ɢʀᴏᴜᴘ
✾ 30 ʜᴀʀɪ 7ᴋ / ɢʀᴏᴜᴘ
✾ 45 ʜᴀʀɪ 10,5ᴋ / ɢʀᴏᴜᴘ
✾ 60 ʜᴀʀɪ 14ᴋ / ɢʀᴏᴜᴘ
✾ ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ / ɢʀᴏᴜᴘ 

〔 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 〕
✾ 15 ʜᴀʀɪ 5ᴋ
✾ 30 ʜᴀʀɪ 10ᴋ
✾ 45 ʜᴀʀɪ 15ᴋ
✾ 60 ʜᴀʀɪ 20ᴋ
✾ ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ

〔 ꜰɪᴛᴜʀ 448+ 〕
✾ ᴡᴇʟᴄᴏᴍᴇ
✾ ᴋɪᴄᴋ
✾ ᴀɴᴛɪʟɪɴᴋ
✾ ꜱᴛɪᴋᴇʀ
✾ ꜱᴏᴜɴᴅ
✾ ᴀɴɪᴍᴇ
✾ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
✾ ꜱᴇɴᴅ ʙᴜɢ
✾ ɢᴀᴍᴇ ʀᴘɢ
✾ ᴅʟʟ

ᴊɪᴋᴀ ᴍɪɴᴀᴛ, ꜱɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ᴏᴡɴᴇʀ ᴀᴛᴀᴜ ᴋᴇᴛɪᴋ .ᴘᴀʏ ᴅᴀɴ ᴋɪʀɪᴍ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴀʏᴀʀᴀɴ ᴋᴇ ᴏᴡɴᴇʀ
`
const templateButtons = [
    {index: 1, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sewabot', 'premium']
handler.tags = ['info', 'main']
handler.command = /^(sewa|premium)$/i

export default handler