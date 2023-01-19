let handler = async (m, { conn, usedPrefix }) => { 
      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 30000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `${global.wm}
❒ Pulsa Indosat : 081227607864
❒ Dana : 081227607864
❒ Gopay : 081227607864
❒ Ovo : 081227607864

Note : Donasi Seikhlasnya, Agar Bot Dapat Beroperasi Lebih Lama Dan Supaya Owner Samangat Untuk Menambah Fitur² Baru, Dan Memperbaiki Fitur² Yang Eror

Sekian *Terima Kasih*`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: false
      }}}}}}, {})
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler