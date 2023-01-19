let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' _*Sukses Menghidupkan WibuXploit Botz🤖*_ ')
}


handler.tags = ['owner']
handler.command = /^(boton)$/i

handler.owner = true
handler.group = true
handler.admin = false
handler.private = true

export default handler
