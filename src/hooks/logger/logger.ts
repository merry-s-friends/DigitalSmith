import { Client } from 'discord.js';
import { setupVoiceLogger } from './voiceLogger';

export const LOGGER = Object.freeze({
  VOICE_ROOM: (client: Client) => setupVoiceLogger(client),
});
