from flask import Flask
from flask_restx import Api
from flask_cors import CORS
from api.v1.person.controller.person_controller import NS_PERSON
from api.v1.status.controller.status import NS_STATUS

app = Flask(__name__)
api = Api(app=app, version="0.0")
CORS(app=app)

api.add_namespace(NS_STATUS)
api.add_namespace(NS_PERSON)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
