import { Client } from 'discord.js';
import { setupVoiceLogger } from 'hooks/logger';

export const LOGGER = Object.freeze({
  VOICE_ROOM: (client: Client) => setupVoiceLogger(client),
});
