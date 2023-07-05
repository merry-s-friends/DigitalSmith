import { Client, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import { setupVoiceLogger } from 'hooks/logger';

config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user!.tag}!`);
});

setupVoiceLogger(client); // 음성 로거 기능 설정
//setupMessageResponder(client); // 메시지 응답 기능 설정

client.login(process.env.TOKEN);
