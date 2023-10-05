import discord
from discord.ext import commands
from typing import Optional
from common import const
import datetime
import utils
from common.roles import roles


class RoleHandler(commands.Cog):
    def __init__(self, bot: discord.Client):
        self.bot = bot

    class change_role_button(discord.ui.Button):
        def __init__(self, label: str, emoji: str, style: discord.ButtonStyle, role_id: int):
            super().__init__(label=label, emoji=emoji, style=style)
            self.role_id = role_id

        async def callback(self, interaction: discord.Interaction):
            role = interaction.user.get_role(self.role_id)
            # already has role
            if role:
                await interaction.user.remove_roles(role)
                await interaction.response.send_message(
                    f"{role.mention} 역할이 삭제되었습니다!",
                    ephemeral=True
                )
                return 
            # not has role
            role = await utils.get_role_by_guild(interaction.guild, self.role_id)
            await interaction.user.add_roles(role)

            await interaction.response.send_message(f"{role.mention} 역할이 추가되었습니다!", ephemeral=True)

    @commands.Cog.listener()
    async def on_ready(self):
        role_channel = await utils.get_channel_by_id(self.bot, const.ROLE_CHANNEL_ID)
        await role_channel.purge(limit=100)

        for embed_data in roles:
            embed = discord.Embed(
                title=embed_data.title,
                description=embed_data.description,
                color=embed_data.color
            )

            view = discord.ui.View(timeout=None)

            for role_data in embed_data.roles:
                view.add_item(self.change_role_button(
                    label=role_data.label,
                    emoji=role_data.emoji,
                    style=discord.ButtonStyle.primary,
                    role_id=role_data.role_id,
                ))

            await role_channel.send(embed=embed, view=view)

async def setup(bot):
    await bot.add_cog(RoleHandler(bot))
