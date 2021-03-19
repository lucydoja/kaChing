from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# User Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(500), unique=False, nullable=False)
    first_name = db.Column(db.String(200), unique=False, nullable=False)
    last_name = db.Column(db.String(200), unique=False, nullable=False)
    security_question = db.Column(db.String(200), unique=False, nullable=False)
    security_answer = db.Column(db.String(500), unique=False, nullable=False)
    expenses = db.relationship('Expense', backref='user', lazy=True)
    incomes = db.relationship('Income', backref='user', lazy=True)

    def __init__(self, email, password, first_name, last_name, security_question, security_answer):
        self.email = email
        self.password = password
        self.first_name = first_name
        self.last_name = last_name
        self.security_question = security_question
        self.security_answer = security_answer

    def __repr__(self):
        return '<User %r>' % self.email

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
    user_email = db.Column(db.String(120), db.ForeignKey('user.email'), nullable=False)
    category = db.Column(db.String(120), unique=False, nullable=False)
    payment_method = db.Column(db.String(120), unique=False, nullable=False)
    amount = db.Column(db.Integer, unique=False, nullable=False)
    detail = db.Column(db.String(280), unique=False, nullable=True)
    front_id = db.Column(db.String(300), unique=True, nullable=False)
    date = db.Column(db.DateTime, unique=False, nullable=False)
    year = db.Column(db.Integer, unique=False, nullable=False)
    month = db.Column(db.Integer, unique=False, nullable=False)
    day = db.Column(db.Integer, unique=False, nullable=False)

    def __repr__(self):
        return '<Expense %r>' % self.id

    def serialize(self):
        return {
            "id": self.front_id,
            "user_email": self.user_email,
            "category": self.category,
            "payment_method": self.payment_method,
            "amount": self.amount,
            "detail": self.detail,
            "date": self.date
        }

# Income Model
class Income(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_email = db.Column(db.String(120), db.ForeignKey('user.email'), nullable=False)
    amount = db.Column(db.Integer, unique=False, nullable=False)
    detail = db.Column(db.String(280), unique=False, nullable=True)
    front_id = db.Column(db.String(300), unique=True, nullable=False)
    date = db.Column(db.DateTime, unique=False, nullable=False)
    year = db.Column(db.Integer, unique=False, nullable=False)
    month = db.Column(db.Integer, unique=False, nullable=False)
    day = db.Column(db.Integer, unique=False, nullable=False)

    def __repr__(self):
        return '<Income %r>' % self.id

    def serialize(self):
        return {
            "id": self.front_id,
            "user_email": self.user_email,
            "amount": self.amount,
            "detail": self.detail,
            "date": self.date
        }
