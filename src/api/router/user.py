from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity


from ..controllers.user import (
    user_register_controller,
    user_login_controller,
    user_update_controller,
    user_delete_controller,
)

user_router = Blueprint("/", __name__)


@user_router.route("/")
def user_api():
    return jsonify({"msg": "user endpoint"})


@user_router.route("/", methods=["POST"])
def register():
    return user_register_controller(request)


@user_router.route("/auth", methods=["POST"])
def login():
    return user_login_controller(request)


@user_router.route("/<int:id>", methods=["PUT"])
@jwt_required()
def update_user(id):
    return user_update_controller(request, id)


@user_router.route("/<int:id>", methods=["DELETE"])
@jwt_required()
def delete(id):
    return user_delete_controller(id)


@user_router.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    id = get_jwt_identity()
    print("user id--->", id)
    return jsonify({"msg": "OK", "user_id": id})
