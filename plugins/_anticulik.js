import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `
        ╭━━〔 𝚂𝙴𝚆𝙰 〕
        ┊✾ 15 ʜᴀʀɪ 3,5ᴋ / ɢʀᴏᴜᴘ
        ┊✾ 30 ʜᴀʀɪ 7ᴋ / ɢʀᴏᴜᴘ
        ┊✾ 45 ʜᴀʀɪ 10,5ᴋ / ɢʀᴏᴜᴘ
        ┊✾ 60 ʜᴀʀɪ 14ᴋ / ɢʀᴏᴜᴘ
        ┊✾ ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ / ɢʀᴏᴜᴘ 
        ╰━━━━━━━━⬣

        ╭━━〔 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 〕
        ┊✾ 15 ʜᴀʀɪ 5ᴋ 
        ┊✾ 30 ʜᴀʀɪ 10ᴋ 
        ┊✾ 45 ʜᴀʀɪ 15ᴋ 
        ┊✾ 60 ʜᴀʀɪ 20ᴋ 
        ┊✾ ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ
        ╰━━━━━━━━⬣
        
        ⫹⫺ PAYMENT:
        ✾ Pulsa Indosat: [085692672176]
        ✾ Dana: [085692672176]
        ✾ Gopay: [085692672176]
        
Jika berminat hubungi: @${global.owner[0]} untuk order:)
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
