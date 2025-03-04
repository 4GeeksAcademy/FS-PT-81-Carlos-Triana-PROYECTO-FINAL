"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from flask_cors import CORS

# from flask_swagger import swagger

# from api.utils import APIException, generate_sitemap
# from api.models import db
# from api.routes import api
# from api.admin import setup_admin
# from api.commands import setup_commands
# from flask_jwt_extended import JWTManager

from .api.config.db import db
from .api.router.api import api

load_dotenv()

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv(
    "DATABASE_URL", "sqlite:///project.db"
)

app.config["JWT_SECRET_KEY"] = os.getenv("FLASK_APP_KEY")
jwt = JWTManager(app)

migrate = Migrate(app, db)

db.init_app(app)

with app.app_context():
    db.create_all()

CORS(api)
app.register_blueprint(api, url_prefix="/api")

# @app.errorhandler(APIException)
# def handle_invalid_usage(error):
#     return jsonify(error.to_dict()), error.status_code


@app.route("/")
def hello():
    return "Working"


# this only runs if `$ python src/main.py` is executed
if __name__ == "__main__":
    PORT = int(os.environ.get("PORT", 3001))
    app.run(host="0.0.0.0", port=PORT, debug=True)
