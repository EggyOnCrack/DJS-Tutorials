const Discord = require('discord.js')
const client = new Discord.Client() //const bot = new Discord.Client()
const { prefix, token } = require('./config.json');
const fs = require('fs');

client.on('ready', () => {
    console.log(`${client.user.username} is online!`)
});

const commandFiles = fs.readdirSync('./commands').filter(f => f.endsWith('.js'));

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

for (const cmds of commandFiles) {
    const command = require(`./commands/${cmds}`);
    client.commands.set(command.name, command);
    if(command.aliases) {
        for (const alias of command.aliases) {
            client.commands.set(alias, command);
        }
    }
    console.log(`${command.name} loaded!`);
}

client.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmdName = args.shift();

    if(!client.commands.has(cmdName)) return;
    const command = client.commands.get(cmdName);
    command.run(message, args, client);
})

client.login(token);