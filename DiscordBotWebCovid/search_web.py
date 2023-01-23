import requests
from bs4 import BeautifulSoup

class RunWebScan:
    def __init__(self):
        self.url = 'https://www.worldometers.info/coronavirus/usa/'

    def key_words_search_words(self, user_message):
        words = user_message.split()[1:]
        keywords = '-'.join(words)
        search_words = ' '.join(words)
        print(keywords)
        return keywords, search_words
    
    def search(self, keywords):
        # create requests and get the response
    
        response = requests.get(self.url+keywords+'s')
        print(response)
        content = response.content
        # pase the html and pull the data we want 
        soup = BeautifulSoup(content, 'html.parser')
        result_links = soup.findAll('a')
        print(result_links)
        return result_links
    
    def send_link(self, result_links, search_words): 
        send_link = set()
        for link in result_links:
            text = link.text.lower()
            if search_words in text:  
              send_link.add(link.get('href'))
        return send_link