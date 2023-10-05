import discord


async def get_role_by_guild(guild: discord.Guild, role_id: int):
    # Get Cached Roles
    role = guild.get_role(id)

    # If the role is not cached, request directly to the Discord server
    if role == None:
        role = discord.utils.get(await guild.fetch_roles(), id=role_id)

    return role
