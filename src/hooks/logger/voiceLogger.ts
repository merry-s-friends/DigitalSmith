import { Client, VoiceState, EmbedBuilder } from 'discord.js';
import { getJoinEmbed } from 'components/embed/join';

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

        const joinEmbed = getJoinEmbed({
          displayName,
          iconURL: newState.member!.user.displayAvatarURL(),
        });

        voiceChannelIn?.send({ embeds: [joinEmbed] });
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

      if (
        oldState.channelId &&
        newState.channelId &&
        oldState.channelId !== newState.channelId
      ) {
        const displayName = newState.member!.displayName;

        const exampleEmbed = new EmbedBuilder()
          .setColor(0xffa502)
          .setAuthor({
            name: displayName,
            iconURL: newState.member!.user.displayAvatarURL(),
          })
          .setTimestamp()
          .setDescription(
            `${displayName}님이 [${oldState.channel!.name}]에서 [${
              newState.channel!.name
            }]로 이동하셨습니다!`
          );

        voiceChannelIn?.send({ embeds: [exampleEmbed] });
        voiceChannelOut?.send({ embeds: [exampleEmbed] });
      }
    }
  );
};
