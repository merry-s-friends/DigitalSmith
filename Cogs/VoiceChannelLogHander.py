import discord
from discord.ext import commands
from common import const
import datetime

class VoiceChannelLogHandler(commands.Cog):
    def __init__(self, bot: discord.Client):
        self.bot = bot

    @commands.Cog.listener()
    async def on_voice_state_update(
        self,
        member:  discord.Member | discord.User,
        before: discord.VoiceState,
        after: discord.VoiceState,
    ):
        # ignore if channel is not changed
        if before.channel and after.channel and before.channel.id == after.channel.id:
            return

        # join voice channel
        if after.channel:
            join_log_embed = discord.Embed(
                title=f"맴버가 들어왔어요.",
                color=0x30b198,
                timestamp=datetime.datetime.now(),
            )
            join_log_embed.set_author(
                name=member.display_name,
                icon_url=member.display_avatar.url,
            )
            join_log_embed.set_footer(
                text="DIGITAL SMITH",
                icon_url=const.SERVER_ICON_URL
            )
            await after.channel.send(embed=join_log_embed)

        # leave voice channel
        if before.channel:
            leave_log_embed = discord.Embed(
                title=f"맴버가 나갔어요.",
                color=0xef476f,
                timestamp=datetime.datetime.now(),
            )
            leave_log_embed.set_author(
                name=member.display_name,
                icon_url=member.display_avatar.url,
            )
            leave_log_embed.set_footer(
                text="DIGITAL SMITH",
                icon_url=const.SERVER_ICON_URL
            )
            await before.channel.send(embed=leave_log_embed)

async def setup(bot):
    await bot.add_cog(VoiceChannelLogHandler(bot))