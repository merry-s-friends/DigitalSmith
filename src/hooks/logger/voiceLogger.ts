import { Client, VoiceState, EmbedBuilder } from 'discord.js';

export const setupVoiceLogger = (client: Client) => {
  client.on(
    'voiceStateUpdate',
    async (oldState: VoiceState, newState: VoiceState) => {
      const voiceChannelIn = newState.channel;
      const voiceChannelOut = oldState.channel;

      // 봇 배제
      if (newState.member && newState.member.user.bot) return;

      // 입장 메시지
      if (!oldState.channelId && newState.channelId) {
        const displayName = newState.member!.displayName;

        const exampleEmbed = new EmbedBuilder()
          .setColor(0x30b198)
          .setAuthor({
            name: displayName,
            iconURL: newState.member!.user.displayAvatarURL(),
          })
          .setTimestamp()
          .setDescription(`${displayName}님이 등장하셨습니다!`);

        voiceChannelIn?.send({ embeds: [exampleEmbed] });
      }

      // 퇴장 메시지
      if (oldState.channelId && !newState.channelId) {
        const displayName = newState.member!.displayName;

        const exampleEmbed = new EmbedBuilder()
          .setColor(0xef476f)
          .setAuthor({
            name: `${displayName}`,
            iconURL: newState.member!.user.displayAvatarURL(),
          })
          .setTimestamp()
          .setDescription(`${displayName}님이 퇴장하셨습니다!`);

        voiceChannelOut?.send({ embeds: [exampleEmbed] });
      }
    }
  );
};
