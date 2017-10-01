# Curated by Cary McEwan. Stay tuned. 
# Twitter   :: @Cary_MakinMoves
# Instagram :: @Cary_MakinMoves
# LinkedIn  :: https://www.linkedin.com/in/cary-mcewan-000b64140/

import requests, json

def lambda_handler(event, context):
    endpoint = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true'
    headers = {
        'Ocp-Apim-Subscription-Key': ''
    }
    payload = {
        'url': event['queryStringParameters']['firstFace']
    }

    request = requests.Session()
    response = request.post(url=endpoint, headers=headers, data=json.dumps(payload))
    firstFace = response.json()[0]['faceId']

    payload = {
        'url': event['queryStringParameters']['secondFace']
    }
    response = request.post(url=endpoint, headers=headers, data=json.dumps(payload))
    secondFace = response.json()[0]['faceId']

    payload = {
        'faceId1': firstFace,
        'faceId2': secondFace
    }
    compareEndpoint = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/verify'
    response = request.post(url=compareEndpoint, headers=headers, data=json.dumps(payload))

    return {
           "isBase64Encoded": True,
           "statusCode": 200,
           "headers": {
               "Access-Control-Allow-Origin" : "*", # Required for CORS support to work
               "Access-Control-Allow-Credentials" : True # Required for cookies, authorization headers with HTTPS
           },
           "body": json.dumps({'isIdentical' : response.json()['isIdentical']})
           }

