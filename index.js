const API_KEY = 'YOUR_API_KEY_HERE'
const Bot = require('node-telegram-bot-api')
const bot = new Bot(API_KEY, { polling: true })

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function delay() {
    return (Math.random() * 2 + 1) * 1200
}

const mrMessages = [
    'mr',
    'merge',
    'мр',
    'мерж',
    'мёрж',
    'открыл'
]

const responseMessages = [
    'ок, спасибо',
    '👌🏻',
    '👌🏻',
    '👌🏻',
    'Отлично',
]

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if(msg.text.toLowerCase().includes('ерсын, поздоровайся') && msg.from.username === 'MarkoTesla'){
        setTimeout(()=>{
            bot.sendMessage(chatId, "Всем привет")
        }, delay())
        return
    }
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if((msg.text.toLowerCase().includes('доброе') || msg.text.toLowerCase().includes('привет')) && msg.from.username === 'YersinAbdirazak'){
        setTimeout(()=>{
            bot.sendMessage(chatId, "Всем доброе утро, ребята!")
        }, delay())
        return
    }
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    mrMessages.map(item=>{
        if(msg.text.toLowerCase().includes(item)){
            setTimeout(()=>{
                bot.sendMessage(chatId, responseMessages[getRandomInt(0, 5)])
            }, delay())
            return
        }
    })
    console.log(msg);
    console.log(delay, 'delay');
    console.log(msg.text.toLowerCase(), 'textTLC');
});

// npm init -y
// npm i node-telegram-bot-api
// node index.js
// run in terminal to start