"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Expense, Income
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import datetime

api = Blueprint('api', __name__)

### Routes ###

# Register User
@api.route('/register', methods=["POST"])
def create_user():
    
    email = request.json["email"]
    password = request.json["password"]
    first_name = request.json["first_name"]
    last_name = request.json["last_name"]
    security_question = request.json["security_question"]
    security_answer = request.json["security_answer"]

    if not (email and password and first_name and last_name and security_question and security_answer):
        return jsonify({"error": "Invalid"}), 400
    
    check_email = User.query.filter_by(email=email).first()
    if check_email:
        return jsonify({"error": "Email already exists"})

    hashed_password = generate_password_hash(password)
    hashed_security_answer = generate_password_hash(security_answer)

    new_user = User(email=email, password=hashed_password, first_name=first_name, last_name=last_name, security_question=security_question, security_answer=hashed_security_answer)

    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user.serialize()), 200

# Login User
@api.route('/login', methods=["POST"])
def login():
    if request.method == "POST":
        
        email = request.json["email"]
        password = request.json["password"]

        # Validate
        if not email:
            return jsonify({"error": "em"}), 400
        if not password:
            return jsonify({"error": "pas"}), 400

        user = User.query.filter_by(email=email).first()

        if not user:
            return jsonify({"error": "usr"}), 400
        
        if not check_password_hash(user.password, password):
            return jsonify({"error": "pashas"}), 400
        
        # Create Token
        access_token = create_access_token(identity=email)

        return jsonify({"access_token": access_token}), 200

