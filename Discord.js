const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Bot is online!');
});

client.login('MTMxNzA1OTI5NzM1MTQzODM0Nw.Gz_JBE.-QPnUgVpQlk5gZnp3QKbkFlpoScZaeSPV9-6PY');
