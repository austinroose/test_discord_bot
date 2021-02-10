const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', msg => {
    console.log(msg.content)
    if (msg.content === "ping") {
        msg.reply("pong")
    }
}); 

console.log(process.env.DISCORD_TOKEN)
client.login(process.env.DISCORD_TOKEN)