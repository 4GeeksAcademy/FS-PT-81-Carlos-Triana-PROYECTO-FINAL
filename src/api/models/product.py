from ..config.db import db


class Product(db.Model):
    __tablename__ = "product"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    details = db.Column(db.String(300), nullable=False)
    type = db.Column(db.String(30), nullable=False)
    image = db.Column(db.String(120), nullable=False)

    cart_id = db.Column(db.Integer, db.ForeignKey("cart.id"), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return f"<Product {self.name}>"

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "details": self.details,
            "type": self.type,
            "image": self.image,
        }


class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    products = db.relationship("Product", backref="cart", lazy=True)

    def serialize(self):
        return {"id": self.id, "products": self.id}
