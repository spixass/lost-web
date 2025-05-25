const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.on('ready', () => {
  console.log(`Bot prisijungė kaip ${client.user.tag}`);
});

async function assignRole(discordId) {
  const guild = await client.guilds.fetch(config.guildId);
  const member = await guild.members.fetch(discordId);
  await member.roles.add(config.approvedRoleId);
}

client.login(config.botToken);

module.exports = { assignRole };