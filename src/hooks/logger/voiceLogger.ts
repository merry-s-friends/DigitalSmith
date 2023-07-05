import { Client, VoiceState } from 'discord.js';
import { getJoinEmbed, getLeaveEmbed } from '../../components/embed';

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
          name: displayName,
          iconURL: newState.member!.user.displayAvatarURL(),
        });

        voiceChannelIn?.send({ embeds: [joinEmbed] });
      }

      // 퇴장 메시지
      if (oldState.channelId && !newState.channelId) {
        const displayName = newState.member!.displayName;

        const leaveEmbed = getLeaveEmbed({
          name: displayName,
          iconURL: newState.member!.user.displayAvatarURL(),
        });

        voiceChannelOut?.send({ embeds: [leaveEmbed] });
      }

      /* 이동 */
      if (
        oldState.channelId &&
        newState.channelId &&
        oldState.channelId !== newState.channelId
      ) {
        const displayName = newState.member!.displayName;

        const joinEmbed = getJoinEmbed({
          name: displayName,
          iconURL: newState.member!.user.displayAvatarURL(),
        });

        const leaveEmbed = getLeaveEmbed({
          name: displayName,
          iconURL: newState.member!.user.displayAvatarURL(),
        });

        voiceChannelIn?.send({ embeds: [joinEmbed] });
        voiceChannelOut?.send({ embeds: [leaveEmbed] });
      }
    }
  );
};
