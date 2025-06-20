import { Client, PermissionsBitField } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const PERMISSIONS = PermissionsBitField.Flags;
const getPermissionName = (flagValue) => {
    const name = Object.keys(PERMISSIONS).find(key => PERMISSIONS[key] === flagValue);
    return name || 'Unknown Permission';
};

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'MessageContent'],
});


client.on('ready', async () => {
    console.log(`${client.user.tag} is online and ready!`);
    client.user.setActivity("Pixels in the sky!", { type: 4 }); 

    const activityInterval = setInterval(() => {
        const activities = [
            { name: "Pixels in the sky!", type: 4 }, 
            { name: "The Palette and Canvas", type: 0 }, 
            { name: "Synthwave of Pixels!", type: 3 }, 
        ];
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        client.user.setActivity(randomActivity.name, { type: randomActivity.type });
    }, 10 * 60 * 1000);
});

export { client, PERMISSIONS, getPermissionName };