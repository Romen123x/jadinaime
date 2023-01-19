let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' _*Sukses mematikan Bot 📴*_ ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['bot(on/off)']
handler.tags = ['owner']
handler.command = /^(botoff)$/i

hanlder.owner = true
handler.admin = false
handler.group = true
handler.private = true

export default handler
