let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (!(who in global.db.data.users)) return m.reply(`User ${who} not in database`)
  let user = global.db.data.users[who]
  const caption = `
▧「 *BANK CEK* 」
│ 📛 *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
│ 💳 *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
│ 🏛️ *Bank:* ${user.bank} / ${user.fullatm}
│ ${rpg.emoticon('money')} *Money:* ${user.money}
│ ${rpg.emoticon('chip')} *Chip:* ${user.chip}
│ 🤖 *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
│ 🌟 *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
│ 📑 *Registered:* ${user.registered ? 'Yes':'No'}
└──···
`.trim()
  conn.sendButton(m.chat, `*${htki} 𝙱 𝙰 𝙽 𝙺 ${htka}*`, caption, 'https://telegra.ph/file/0451b07945f7f9633b59b.jpg', [`ɪɴᴠᴇɴᴛᴏʀʏ`, '.inv'],m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false
export default handler