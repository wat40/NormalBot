// index.js
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new Discord client with necessary intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return; // Ignore bot messages
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

client.login(process.env.BOT_TOKEN); 