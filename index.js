const Discord = require('discord.js')
const client = new Discord.Client() //const bot = new Discord.Client()
const { token, prefix } = require('./config.json')

client.on('ready', () => {
    console.log(`${client.user.username} is online!`)
})

client.on('message', async message => {
    if (message.content.startsWith(`${prefix}ping`)) {
        message.reply('Pong!')
    }
})

client.login(token)