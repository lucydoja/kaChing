"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Expense, Income
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import datetime
from sqlalchemy import cast, DATE, func
from api.analysisutils import get_months_and_years_ytd, accumulate

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
            return jsonify({"error": "Invalid"}), 400
        if not password:
            return jsonify({"error": "Invalid"}), 400

        user = User.query.filter_by(email=email).first()

        if not user:
            return jsonify({"error": "Invalid"}), 400
        
        if not check_password_hash(user.password, password):
            return jsonify({"error": "Invalid"}), 400
    

        # Create Token
        access_token = create_access_token(identity=email)

        return jsonify({"access_token": access_token}), 200

# Add Income Data
@api.route("/income", methods=["POST"])
@jwt_required()
def create_user_income():

    current_user_email = get_jwt_identity()
    amount = request.json["amount"]
    detail = request.json["detail"]
    date = datetime.datetime.now()
    year = date.year
    month = date.month
    day = date.day

    if not (amount and detail):
        return jsonify({"error": "Invalid"}), 400

    new_income = Income(user_email=current_user_email, amount=amount, detail=detail, date=date, year=year, month=month, day=day)

    db.session.add(new_income)
    db.session.commit()

    return jsonify({"msg": "accepted"}), 200

# Get Income Data
@api.route("/income", methods=["GET"])
@jwt_required()
def get_income_data():

    current_user_email = get_jwt_identity()

    current_user_income = Income.query.filter_by(user_email=current_user_email).all()
    income_list = list(map(lambda income: income.serialize(), current_user_income))

    return jsonify({"data": income_list}), 200

# Delete Income Data
@api.route("/income", methods=["DELETE"])
@jwt_required()
def delete_user_income():

    current_user_email = get_jwt_identity()
    income_id = request.json["id"]

    if not income_id:
        return jsonify({"error": "Missing parameter"}), 400

    income_to_delete = Income.query.filter_by(user_email=current_user_email, id=income_id).first()

    if not income_to_delete:
        return jsonify({"error": "data not found"}), 400

    db.session.delete(income_to_delete)
    db.session.commit()

    return jsonify({"msg": "income deleted"}), 200

# Add Expense Data
@api.route("/expense", methods=["POST"])
@jwt_required()
def create_user_expense():

    current_user_email = get_jwt_identity()
    category = request.json["category"]
    payment_method = request.json["payment_method"]
    amount = request.json["amount"]
    detail = request.json["detail"]
    date = datetime.datetime.now()
    year = date.year
    month = date.month
    day = date.day

    if not (category and payment_method and amount and detail):
        return jsonify({"error": "Missing parameter"})

    new_expense = Expense(user_email=current_user_email, category=category, payment_method=payment_method, amount=amount, detail=detail, date=date, year=year, month=month, day=day)

    db.session.add(new_expense)
    db.session.commit()

    return jsonify({"msg": "accepted"}), 200

# Get Expense Data
@api.route("/expense", methods=["GET"])
@jwt_required()
def get_expense_data():

    current_user_email = get_jwt_identity()

    current_user_expense = Expense.query.filter_by(user_email=current_user_email).all()
    expense_list = list(map(lambda expense: expense.serialize(), current_user_expense))

    return jsonify({"data": expense_list}), 200

# Delete Expense Data
@api.route("/expense", methods=["DELETE"])
@jwt_required()
def delete_expense_data():

    current_user_email = get_jwt_identity()
    expense_id = request.json["id"]

    if not expense_id:
        return jsonify({"error": "Missing parameter"}), 400

    expense_to_delete = Expense.query.filter_by(user_email=current_user_email, id=expense_id).first()

    if not expense_to_delete:
        return jsonify({"error": "data not found"}), 400

    db.session.delete(expense_to_delete)
    db.session.commit()

    return jsonify({"msg": "expense deleted"}), 200

# Reset Password
@api.route("reset", methods=["POST"])
def reset_password():
    if request.method == "POST":

        email = request.json["email"]
        new_password = request.json["password"]
        security_question = request.json["security_question"]
        security_answer = request.json["security_answer"]

        # Validate
        if not (email and new_password and security_question and security_answer):
            return jsonify({"error": "Invalid parameter"}), 400
        
        user = User.query.filter_by(email=email).first()

        if not user:
            return jsonify({"error": "Invalid parameter"}), 400

        if user.security_question != security_question:
            return jsonify({"error": "Invalid parameter"}), 400

        if not check_password_hash(user.security_answer, security_answer):
            return jsonify({"error": "Invalid parameter"}), 400
        
        # Create and set new password
        new_password_hashed = generate_password_hash(new_password)
        user.password = new_password_hashed
        db.session.commit()

        return jsonify({"msg": "Password changed successfully"}), 200

@api.route("/transactions", methods=["GET"])
@jwt_required()
def get_transaction_data():

    current_user_email = get_jwt_identity()

    today = datetime.datetime.now()
    one_year_ago = datetime.datetime.now() - datetime.timedelta(days=365)
    
    # Get All Incomes Year to Date
    income_qry_ytd = Income.query.filter(cast(Income.date, DATE)<=today).filter(cast(Income.date, DATE)>=one_year_ago)

    # Get Most Recent Income
    last = income_qry_ytd.order_by(Income.date.desc()).first()
    most_recent_year = last.date.year
    most_recent_month = last.date.month

    # years_and_months returns a list of objects: {year, month}
    years_and_months = get_months_and_years_ytd(most_recent_year, most_recent_month)
    
    # Get Total Income by Month on Year to Date basis
    income_resume = []
    for each in years_and_months:
        month_income_qry = income_qry_ytd.filter_by(year=each["year"], month=each["month"]).all()
        # accumulate(list, value_to_accumulate)
        total_income_of_month = accumulate(month_income_qry, amount)
        monthly_income = {"year": each["year"], "month": each["month"], "incomes": total_income_of_month}
        income_resume.append(monthly_income)


    return jsonify({"time": income_resume}), 200