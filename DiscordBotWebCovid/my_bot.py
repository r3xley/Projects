import discord
import os
import search_web


web_run = search_web.RunWebScan()
intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)

no_result_message =  'no'
@client.event
async def on_message(message):
    if message.content == client.user:
        return
    
    message_content = message.content.lower()

    if message.content.startswith(f'$hello'):
        await message.channel.send('''Please read my manual by typing $help or $commands while I'm away.''')

        
    if f'$search' in message_content:

        key_words, search_words = web_run.key_words_search_words(message_content)
        result_links = web_run.search(key_words)
        links = web_run.send_link(result_links, search_words)
    
        if len(links) > 0:
            for link in links:
             await message.channel.send(link)
        else:
            await message.channel.send(no_result_message) 
        
print(dir(web_run))





client.run('MTA0NzcwNDUwNDg4OTUwNzkyMQ.GXOErB.v4PcN8oH-jofaOVQISu0rcOr5lQWue4C4Fv6b8')