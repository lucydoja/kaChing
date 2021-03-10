from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# User Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    security_question = db.Column(db.String(80), unique=False, nullable=False)
    security_answer = db.Column(db.String(80), unique=False, nullable=False)
    expenses = db.relationship('Expense', backref='user', lazy=True)
    incomes = db.relationship('Income', backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name
        }

# Expense Model
class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    category = db.Column(db.String(120), unique=False, nullable=False)
    payment_method = db.Column(db.String(120), unique=False, nullable=False)
    amount = db.Column(db.Integer, unique=False, nullable=False)
    detail = db.Column(db.String(280), unique=False, nullable=True)
    date = db.Column(db.DateTime, unique=False, nullable=False)

    def __repr__(self):
        return '<Expense %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "category": self.category,
            "payment_method": self.payment_method,
            "amount": self.amount,
            "detail": self.detail,
            "date": self.date
        }

# Income Model
class Income(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    amount = db.Column(db.Integer, unique=False, nullable=False)
    detail = db.Column(db.String(280), unique=False, nullable=True)
    date = db.Column(db.DateTime, unique=False, nullable=False)

    def __repr__(self):
        return '<Income %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "amount": self.amount,
            "detail": self.detail,
            "date": self.date
        }
