let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS ${htka}*
          
 🔥⚘ ʙʏ ʀᴇɴᴢ🔥
          
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮Gunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `✃ VIRTEX`,
	rows: [
	    {title: "😈Virtex 1", rowId: '.virtex1', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	    {title: "😈Virtex 2", rowId: '.virtex2', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 3", rowId: '.virtex3', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 4", rowId: '.virtex4', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 5", rowId: '.virtex5', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 6", rowId: '.virtex6', description: 'Gunakan Dengan Sebaik-Baik Nya' },
    {title: "😈Virtex 7", rowId: '.virtex7', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 8", rowId: '.virtex8', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 9", rowId: '.virtex9', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 10", rowId: '.virtex10', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 11", rowId: '.virtex11', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 12", rowId: '.virtex12', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 13", rowId: '.virtex13', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 14", rowId: '.virtex14', description: 'Gunakan Dengan Sebaik-Baik Nya' },
    {title: "😈Virtex 15", rowId: '.virtex15', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 16", rowId: '.virtex16', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 17", rowId: '.virtex17', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 18", rowId: '.virtex18', description: 'Gunakan Dengan Sebaik-Baik Nya' },
	{title: "😈Virtex 19", rowId: '.virtex19', description: 'Gunakan Dengan Sebaik-Baik Nya' },
    {title: "😈Virtex 21", rowId: '.virtex20', description: 'Gunakan Dengan Sebaik-Baik Nya' },
    {title: "😈Virtex 22", rowId: '.virtex20', description: 'Gunakan Dengan Sebaik-Baik Nya' },
    {title: "😈Virtex 23", rowId: '.virtex20', description: 'Gunakan Dengan Sebaik-Baik Nya' },
    {title: "😈Virtex 24", rowId: '.virtex20', description: 'Gunakan Dengan Sebaik-Baik Nya' },
    {title: "😈Virtex 25", rowId: '.virtex20', description: 'Gunakan Dengan Sebaik-Baik Nya' },

	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🔥Download WhatsApp Imune", rowId: '.waantivirus', description: 'Download WhatsApp Kebal' },
	    ]
        }, {
    title: `✃ BUY`,
	rows: [
	    {title: "💸Upgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "👺GASS",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtex$/i
handler.premium = true

export default handler
