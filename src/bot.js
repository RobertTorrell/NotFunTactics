require('dotenv').config();

const { Client, Intents } = require('discord.js')

const intents = new Intents([Intents.FLAGS.GUILDS, 
    Intents.FLAGS.DIRECT_MESSAGES, 
    Intents.FLAGS.GUILD_MESSAGES]);

const client = new Client({ intents: intents });

client.on('ready', () => {
    console.log(client.user.tag + ': Vamo fino andamo loggeado');
});

client.on('message', (message) => {
    if(message.content === 'Ping'){
        message.reply("Pong");
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
