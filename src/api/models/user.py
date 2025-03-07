from ..config.db import db
from ..models.product import Product


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(300), nullable=False)
    userName = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(120), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), nullable=False)

    products = db.relationship("Product", backref="user", lazy=True)

    def __repr__(self):
        return f"<User {self.email}>"

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "password": self.password,
            "userName": self.userName,
            "phone": self.phone,
            "is_active": self.is_active,
        }
