from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(300), nullable=False)
    userName = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(120), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), nullable=False)

    products = db.relationship('Product', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "password": self.password,
            "userName": self.userName,
            "phone": self.phone,
            "is_active": self.is_active
        }
    
class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    details = db.Column(db.String(300), nullable=False)
    type = db.Column(db.String(30), nullable=False)
    image = db.Column(db.String(120), nullable=False)

    cart_id = db.Column(db.Integer, db.ForeignKey('cart.id'), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f'<Product {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "details": self.details,
            "type": self.type,
            "image": self.image
        }


class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    products = db.relationship('Product', backref='cart', lazy=True)

    def serialize(self):
        return {
            'id': self.id,
            'products': self.id
        }




