import { EmbedBuilder } from 'discord.js';
import { EmbedProps } from 'types';

export const getJoinEmbed = ({ name, iconURL }: EmbedProps) => {
  const embed = new EmbedBuilder()
    .setColor(0x30b198)
    .setAuthor({
      name,
      iconURL,
    })
    .setTimestamp()
    .setDescription(`${name}님이 등장하셨습니다!`);

  return embed;
};
