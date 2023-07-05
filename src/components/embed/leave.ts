import { EmbedBuilder } from 'discord.js';
import { EmbedProps } from 'types';

export const getLeaveEmbed = ({ name, iconURL }: EmbedProps) => {
  const embed = new EmbedBuilder()
    .setColor(0xef476f)
    .setAuthor({
      name,
      iconURL,
    })
    .setTimestamp()
    .setDescription(`${name}님이 퇴장하셨습니다!`);

  return embed;
};
