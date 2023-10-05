import discord

async def get_channel_by_id(bot: discord.Client, channel_id: int):
    # Get Cached Channel
    channel = bot.get_channel(channel_id)

    # If the channel is not cached, request directly to the Discord server
    if channel == None:
        channel = await bot.fetch_channel(channel_id)

    return channel
