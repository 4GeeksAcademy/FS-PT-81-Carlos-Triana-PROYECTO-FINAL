from flask import jsonify
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash

from ..config.db import db
from ..models.user import User


def user_register_controller(request):
    userName = request.json.get("userName", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    phone = request.json.get("phone", None)
    if not email or not password or not userName or not phone:
        return jsonify({"msg": "Faltan casillas por rellenar"}), 400
    exist = User.query.filter_by(email=email).first()
    if exist:
        return jsonify({"msg": "este usuario ya existe"})
    hashed_password = generate_password_hash(password)
    new_user = User(
        userName=userName,
        email=email,
        password=hashed_password,
        phone=phone,
        is_active=True,
    )
    db.session.add(new_user)
    db.session.commit()
    token = create_access_token(identity=str(new_user.id))
    return jsonify({"msg": "ok", "token": token})


def user_login_controller(request):
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if not email or not password:
        return jsonify({"msg": "faltan datos"}), 400
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"msg": "no se econtro ningun usuario"}), 404
    if not check_password_hash(user.password, password):
        return jsonify({"msg": "datos de correo o contraseña no aceptado"}), 404
    token = create_access_token(identity=str(user.id))
    return jsonify({"msg": "ok", "token": token})


def user_update_controller(request, id):
    userName = request.json.get("userName", None)
    phone = request.json.get("phone", None)
    user = User.query.get(id)
    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    if userName:
        exist = User.query.filter_by(userName=userName).first()
        if exist and exist.id != id:
            return jsonify({"msg": "El nombre de usuario ya existe"}), 400
    if userName:
        user.userName = userName
    if phone:
        user.phone = phone
    db.session.commit()
    return jsonify(
        {"msg": "Usuario actualizado correctamente", "update_user": user.serialize()}
    )


def user_delete_controller(id):
    current_user_id = get_jwt_identity()
    current_user_id = int(current_user_id)
    if current_user_id != id:
        return (
            jsonify(
                {
                    "msg": "No tienes permiso para eliminar este usuario.",
                    "current_user_id": current_user_id,
                    "requested_id": id,
                }
            ),
            403,
        )
    user = User.query.get(id)
    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    db.session.delete(user)
    db.session.commit()
    return jsonify({"msg": "Usuario eliminado exitosamente"}), 200


# @api.route('/protected', methods=["GET"])
# @jwt_required()
# def protected():
#     id = get_jwt_identity()
#     print('user id--->', id)
#     user = User.query.get(id)
#     return jsonify({"msg": "OK", 'user': user.serialize()})
