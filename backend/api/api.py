from flask import Flask
import pyrebase
import json

config = {
        "apiKey": "AIzaSyD2a8Rdcnj1fPFi_ZlQf5SNEMlezWjwWfk",
        "authDomain": "firsttest-92ed3.firebaseapp.com",
        "databaseURL": "https://firsttest-92ed3.firebaseio.com",
        "projectId": "firsttest-92ed3",
        "storageBucket": "firsttest-92ed3.appspot.com",
        "messagingSenderId": "656800904558"
}

firebase = pyrebase.initialize_app(config)
app = Flask(__name__)

def firebase_init():
    db = firebase.database()
    return db.child("users").get().val()

@app.route("/returnVictimData")
def returnVictims():
    users = firebase_init()
    print(users)
    return json.dumps(users)


