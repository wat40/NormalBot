// index.js
// Check and install dependencies if needed
try {
  require('dotenv');
} catch (error) {
  console.log('Installing dependencies...');
  const { execSync } = require('child_process');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('Dependencies installed successfully');
  } catch (installError) {
    console.error('Failed to install dependencies:', installError.message);
    process.exit(1);
  }
}

// Load environment variables
try {
  require('dotenv').config();
} catch (error) {
  console.log('dotenv not available, using process.env directly');
}

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

// Debug: Check if token is available
if (!process.env.BOT_TOKEN) {
  console.error('BOT_TOKEN not found in environment variables!');
  console.log('Available environment variables:', Object.keys(process.env));
  process.exit(1);
}

console.log('Starting bot with token:', process.env.BOT_TOKEN.substring(0, 10) + '...');
client.login(process.env.BOT_TOKEN); 