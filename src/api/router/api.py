from flask import Blueprint

from .user import user_router

api = Blueprint("api", __name__)

api.register_blueprint(user_router, url_prefix="/user")
