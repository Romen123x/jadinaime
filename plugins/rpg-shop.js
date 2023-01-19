const items = {
    buy: {
        limit: {
            exp: 999
        },
        chip: {
            money: 1000000
        },
        exp: {
            money: 200
        },
        potion: {
           money: 1250
        },
        trash: {
            money: 40
        },
        wood: {
            money: 700
        },
        rock: {
            money: 850
        },
        string: {
            money: 400
        },
        iron: { 
        	money: 3000
        },
        diamond: {
            money: 500000
        },
        emerald: {
            money: 100000
        },
        gold: {
            money: 100000
        },
        common: {
            money: 2000
        },
        uncommon: {
            money: 20000
        },
        mythic: {
            money: 75000
        },
        legendary: {
            money: 100000
        },
        petfoot: {
            money: 3500
        },
        fox: {
            money: 200000
        },
        cat: {
            money: 200000
        },
        dog: {
            money: 200000
        },
        horse: {
            money: 200000
        },
        robo: {
            money: 500000
        },
        pet: {
            money: 120000
        },
        anggur: {
            money: 2000
        },
        apel: {
            money: 2000
        },
        jeruk: {
            money: 2000
        },
        mangga: {
            money: 2000
        },
        pisang: {
            money: 2000
        },
        bibitanggur: {
            money: 2000
        },
        bibitapel: {
            money: 2000
        },
        bibitjeruk: {
        	money: 2000
        },
        bibitmangga: {
        	money: 2000
        },
        bibitpisang: {
        	money: 2000
        },
        botol: {
        	money: 100
        },
        kardus: {
            money: 100
        },
        kaleng: {
            money: 100
        },
        gelas: {
            money: 100
        },
        plastik: {
            money: 100
        }
    },
    sell: {
        limit: {
            exp: 999
        },
        chip: {
            money: 1000000
        },
        exp: {
            money: 100
        },
        potion: {
           money: 625
        },
        trash: {
            money: 20
        },
        wood: {
            money: 350
        },
        rock: {
            money: 425
        },
        string: {
            money: 200
        },
        iron: { 
        	money: 1500
        },
        diamond: {
            money: 250000
        },
        emerald: {
            money: 50000
        },
        gold: {
            money: 50000
        },
        common: {
            money: 1000
        },
        uncommon: {
            money: 10000
        },
        mythic: {
            money: 37500
        },
        legendary: {
            money: 50000
        },
        petfood: {
            money: 1750
        },
        fox: {
            money: 100000
        },
        cat: {
            money: 100000
        },
        dog: {
            money: 100000
        },
        horse: {
            money: 100000
        },
        robo: {
            money: 100000
        },
        pet: {
            money: 60000
        },
        anggur: {
            money: 1000
        },
        apel: {
            money: 1000
        },
        jeruk: {
            money: 1000
        },
        mangga: {
            money: 1000
        },
        pisang: {
            money: 1000
        },
        bibitanggur: {
            money: 1000
        },
        bibitapel: {
            money: 1000
        },
        bibitjeruk: {
        	money: 1000
        },
        bibitmangga: {
        	money: 1000
        },
        bibitpisang: {
        	money: 1000
        },
        botol: {
        	money: 1000
        },
        kardus: {
            money: 1000
        },
        kaleng: {
            money: 1000
        },
        gelas: {
            money: 1000
        },
        plastik: {
            money: 1000
        }
    }
}

let handler = async (m, { command, usedPrefix, args }) => {
let imgr = flaaa.getRandom()
    let user = global.db.data.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    
    let text = ''
    let footer = ''
    let image = ''
    let buttons = ''
    text = (command.toLowerCase() == 'buy' ?
(`
*${htki} BUY ${htka}*
`.trim()) : 
(`
*${htki} SELL ${htka}*
`.trim())
)
    footer = (command.toLowerCase() == 'buy' ?
(`
🔖 ɪᴛᴇᴍs ʟɪsᴛ :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `⮕ 1 ${global.rpg.emoticon(v)}${v} ﹫ ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ ʙᴜʏ ɪᴛᴇᴍs:
${usedPrefix}${command} [item] [quantity]
★ ᴇxᴀᴍᴩʟᴇ:
${usedPrefix}${command} potion 10
`.trim()) : 
(`
🔖 ɪᴛᴇᴍs ʟɪsᴛ :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `⮕ 1 ${global.rpg.emoticon(v)}${v} ﹫ ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ sᴇʟʟ ɪᴛᴇᴍs:
${usedPrefix}${command} [item] [quantity]
★ ᴇxᴀᴍᴩʟᴇ:
${usedPrefix}${command} potion 10
`.trim())
)
    image = (command.toLowerCase() == 'buy' ?
(imgr + 'buy') : 
(imgr + 'sell')
)
    buttons = (command.toLowerCase() == 'buy' ?
([
[`ʙᴜʏ ʟɪᴍɪᴛ`, `${usedPrefix}buy limit`],
[`ʙᴜʏ ᴩᴏᴛɪᴏɴ`, `${usedPrefix}buy potion`]
]) : 
([
[`sᴇʟʟ ᴩᴏᴛɪᴏɴ`, `${usedPrefix}sell potion`],
[`sᴇʟʟ ᴛʀᴀsʜ`, `${usedPrefix}sell trash`]
])
)
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return conn.sendButton(m.chat, text, footer, image, buttons, m)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return conn.sendButton(m.chat,
`*–『 INSUFFICIENT CREDIT 』–*`, 
`ʏᴏᴜ ɴᴇᴇᴅ ᴇxᴛʀᴀ *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} ᴛᴏ ʙᴜʏ *${total}* ${global.rpg.emoticon(item)}${item}.
ʏᴏᴜ'ᴠᴇ *${user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} ɪɴ ʙᴀɢ.
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
ᴏᴩᴇɴ ᴄʀᴀᴛᴇs & ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs.
⮕ ᴛᴏ ᴏᴩᴇɴ ᴄʀᴀᴛᴇs:
.open crate
⮕ ᴛᴏ ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs:
.adventure | .daily | .monthly
`.trim(), imgr + 'lowcredit', [
[`ᴀsᴋ ᴛᴏ ᴀʟʟ`, `${usedPrefix}tagall sᴏᴍᴇʙᴏᴅʏ ᴩʟᴇᴀsᴇ sᴇɴᴅ *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} ᴛᴏ ᴍᴇ.
⮕ ᴛᴏ ᴛʀᴀɴsғᴇʀ ${paymentMethod}:
${usedPrefix}transfer ${paymentMethod} ${(listItems[item][paymentMethod] * total) - user[paymentMethod]} @${conn.getName(m.sender)}`]
], m)
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return conn.sendButton(m.chat,
`*${htki} BOUGHT ${htka}*`,
`ʏᴏᴜ *ʙᴏᴜɢʜᴛ ${total} ${global.rpg.emoticon(item)}${item}*.
`.trim(), imgr + 'bought', [
[`ɪɴᴠᴇɴᴛᴏʀʏ`, `${usedPrefix}inventory`]
], m)
    } else {
        if (user[item] < total) return m.reply(`You don't have enough *${global.rpg.emoticon(item)}${item}* to sell, you only have ${user[item]} items`)
        user[item] -= total
        user.money += listItems[item].money * total
        return conn.sendButton(m.chat,
`*${htki} SOLD ${htka}*`,
`ʏᴏᴜ *sᴏʟᴅ ${total} ${global.rpg.emoticon(item)}${item}*.
`.trim(), imgr + 'sold', [
[`ɪɴᴠᴇɴᴛᴏʀʏ`, `${usedPrefix}inventory`]
], m)
    }
}

handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i

handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}