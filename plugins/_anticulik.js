import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `
        β­ββγ ππ΄ππ° γ
        ββΎ 15 Κα΄ΚΙͺ 3,5α΄ / Ι’Κα΄α΄α΄
        ββΎ 30 Κα΄ΚΙͺ 7α΄ / Ι’Κα΄α΄α΄
        ββΎ 45 Κα΄ΚΙͺ 10,5α΄ / Ι’Κα΄α΄α΄
        ββΎ 60 Κα΄ΚΙͺ 14α΄ / Ι’Κα΄α΄α΄
        ββΎ α΄α΄Κα΄α΄Ι΄α΄Ι΄ 30α΄ / Ι’Κα΄α΄α΄ 
        β°βββββββββ¬£

        β­ββγ πΏππ΄πΌπΈππΌ γ
        ββΎ 15 Κα΄ΚΙͺ 5α΄ 
        ββΎ 30 Κα΄ΚΙͺ 10α΄ 
        ββΎ 45 Κα΄ΚΙͺ 15α΄ 
        ββΎ 60 Κα΄ΚΙͺ 20α΄ 
        ββΎ α΄α΄Κα΄α΄Ι΄α΄Ι΄ 30α΄
        β°βββββββββ¬£
        
        β«Ήβ«Ί PAYMENT:
        βΎ Pulsa Indosat: [085692672176]
        βΎ Dana: [085692672176]
        βΎ Gopay: [085692672176]
        
Jika berminat hubungi: @${global.owner[0]} untuk order:)
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
