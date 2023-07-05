import { Client } from 'discord.js';
import { setupVoiceLogger } from './index';

export const LOGGER = Object.freeze({
  VOICE_ROOM: (client: Client) => setupVoiceLogger(client),
});
