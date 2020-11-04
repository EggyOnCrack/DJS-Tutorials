module.exports = {
    name: "ping",
    aliases: ['ms'],
    run: async (message, args, client) => {
        message.channel.send(`Pong! In ${Date.now() - message.createdTimestamp} ms!`);
    }
}