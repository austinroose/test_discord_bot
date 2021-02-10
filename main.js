require('dotenv').config()
const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    const is_admin = message.member.roles.highest.name === 'adminid'
    if (is_admin) {
        if (!message.guild) return;

        if (message.content === '/leave') {
            if (message.member.voice.channel) {
                const disconnection = await message.member.voice.channel.leave();
            }
        }
    
        if (message.content === '/join') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
        } else {
            message.reply('You need to join a voice channel first!');
        }
        }
    }
  });

client.login(process.env.DISCORD_TOKEN)