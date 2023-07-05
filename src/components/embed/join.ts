import { EmbedBuilder } from 'discord.js';

interface EmbedProps {
  displayName: string;
  iconURL: string;
}

export const getJoinEmbed = ({ displayName, iconURL }: EmbedProps) => {
  const embed = new EmbedBuilder()
    .setColor(0x30b198)
    .setAuthor({
      name: displayName,
      iconURL: iconURL,
    })
    .setTimestamp()
    .setDescription(`${displayName}님이 등장하셨습니다!`);

  return embed;
};
