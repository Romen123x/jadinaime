let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (!(who in global.db.data.users)) return m.reply(`User ${who} not in database`)
  let user = global.db.data.users[who]
  const caption = `
โงใ *BANK CEK* ใ
โ ๐ *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
โ ๐ณ *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : 'โ๏ธ'}
โ ๐๏ธ *Bank:* ${user.bank} / ${user.fullatm}
โ ${rpg.emoticon('money')} *Money:* ${user.money}
โ ${rpg.emoticon('chip')} *Chip:* ${user.chip}
โ ๐ค *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : 'โ๏ธ'}
โ ๐ *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
โ ๐ *Registered:* ${user.registered ? 'Yes':'No'}
โโโยทยทยท
`.trim()
  conn.sendButton(m.chat, `*${htki} ๐ฑ ๐ฐ ๐ฝ ๐บ ${htka}*`, caption, 'https://telegra.ph/file/0451b07945f7f9633b59b.jpg', [`ษชษดแด แดษดแดแดสส`, '.inv'],m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false
export default handler