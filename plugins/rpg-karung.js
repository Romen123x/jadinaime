let handler = async (m, {
	conn,
	usedPrefix
}) => {
	let botol = global.db.data.users[m.sender].botol
	let kardus = global.db.data.users[m.sender].kardus
	let kaleng = global.db.data.users[m.sender].kaleng
	let gelas = global.db.data.users[m.sender].gelas
	let plastik = global.db.data.users[m.sender].plastik

	let ndy = `
*《 ISI KARUNG MU 》*
    
 *🍾 = Botol [ ${botol} ]*
 *📦 = Kardus [ ${kardus} ]*
 *🏮 = Kaleng [ ${kaleng} ]*
 *🧋 = Gelas [ ${gelas} ]*
 *📜 = Plastik [ ${plastik} ]*   
 `.trim()
	conn.reply(m.chat, ndy, m)
}

handler.help = ['Karung']
handler.tags = ['rpg']
handler.command = /^(karung)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
