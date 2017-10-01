# Curated by Cary McEwan. Stay tuned. 
# Twitter   :: @Cary_MakinMoves
# Instagram :: @Cary_MakinMoves
# LinkedIn  :: https://www.linkedin.com/in/cary-mcewan-000b64140/

import requests, json

endpoint = 'https://0uhycibtdb.execute-api.us-east-1.amazonaws.com/prod/compareFaces'
face1 = 'https://www.famousbirthdays.com/headshots/jaden-smith-1.jpg'
face2 = 'https://s3.amazonaws.com/shellhacks/yesitworked.jpg'
query = {
    'firstFace': face1,
    'secondFace': face2
}
print requests.get(url=endpoint, params=query).content
# print requests.get('https://dtzwqfkqs0.execute-api.us-east-1.amazonaws.com/prod/scrapePrices?productID=cp9654').content