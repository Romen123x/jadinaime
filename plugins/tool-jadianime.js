import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    await m.reply(`${global.wait}`)
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://restapi.frteam.xyz/toanime?img=${url}&apikey=RyHar`
    await conn.sendFile(m.chat, meme, 'anime.png', 'Nih Kak', m)
}
handler.help = ['jadianime']
handler.tags = ['tools']
handler.command = /^(jadianime)$/i

handler.limit = true

export default handler