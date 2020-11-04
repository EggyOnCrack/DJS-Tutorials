module.exports = {
    name: "hi",
    aliases: ['sup'],
    run: async (message, args, client) => {
        message.reply("hi!");
    }
}