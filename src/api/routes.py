"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Expense, Income
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import datetime
from sqlalchemy import cast, DATE, INT, String
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

# Get User Data
@api.route("/user", methods=["GET"])
@jwt_required()
def get_user():

    current_user_email = get_jwt_identity()
    user = User.query.filter_by(email=current_user_email).first()

    return jsonify(user.serialize()), 200

# Reset Password
@api.route("/reset", methods=["POST"])
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

# Change first and last name


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

# Get Income Data from past 15 days
@api.route("/income", methods=["GET"])
@jwt_required()
def get_income_data():

    current_user_email = get_jwt_identity()

    today = datetime.datetime.now()
    two_weeks_ago = today - datetime.timedelta(days=15)

    current_user_income = Income.query.filter_by(user_email=current_user_email).filter(cast(Income.date, DATE)<=today).filter(cast(Income.date, DATE)>=two_weeks_ago).all()
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

# Get Expense Data from past 15 days
@api.route("/expense", methods=["GET"])
@jwt_required()
def get_expense_data():

    current_user_email = get_jwt_identity()

    today = datetime.datetime.now()
    two_weeks_ago = today - datetime.timedelta(days=15)

    current_user_expense = Expense.query.filter_by(user_email=current_user_email).filter(cast(Expense.date, DATE)<=today).filter(cast(Expense.date, DATE)>=two_weeks_ago)
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

@api.route("/finances", methods=["GET"])
@jwt_required()
def get_transaction_data():

    current_user_email = get_jwt_identity()

    today = datetime.datetime.now()
    one_year_ago = today - datetime.timedelta(days=365)
    
    # Get All Incomes and Expenses Year to Date
    income_qry_ytd = Income.query.filter(cast(Income.date, DATE)<=today).filter(cast(Income.date, DATE)>=one_year_ago)
    expense_qry_ytd = Expense.query.filter(cast(Expense.date, DATE)<=today).filter(cast(Expense.date, DATE)>=one_year_ago)

    # Get Most Recent Income and Expense
    last_income = income_qry_ytd.order_by(Income.date.desc()).first()
    last_expense = expense_qry_ytd.order_by(Expense.date.desc()).first()


    # Get Year to Date list / years_and_months returns a list of objects: {year, month}
    years_and_months = get_months_and_years_ytd(today.year, today.month)
    
    # Get Total Income and Expense by Month on Year to Date basis
    resume = []
    for each in years_and_months:
        # Total Monthly Income
        month_income_qry = income_qry_ytd.filter_by(year=each["year"], month=each["month"]).all()
        total_income_of_month = accumulate(month_income_qry, "amount")

        # Total Monthly Expense
        month_expense_qry = expense_qry_ytd.filter_by(year=each["year"], month=each["month"])
        month_expense_qry_list = month_expense_qry.all()
        total_expense_of_month = accumulate(month_expense_qry_list, "amount")

        # Get Weekly Expenses by Month
        expense_week_1 = month_expense_qry.filter(cast(Expense.day, INT)>=1).filter(cast(Expense.day, INT)<=8).all()
        expense_week_2 = month_expense_qry.filter(cast(Expense.day, INT)>=9).filter(cast(Expense.day, INT)<=15).all()
        expense_week_3 = month_expense_qry.filter(cast(Expense.day, INT)>=16).filter(cast(Expense.day, INT)<=22).all()
        expense_week_4 = month_expense_qry.filter(cast(Expense.day, INT)>=23).all()

        # Sum Total Expenses per Week
        total_expense_week_1 = accumulate(expense_week_1, "amount")
        total_expense_week_2 = accumulate(expense_week_2, "amount")
        total_expense_week_3 = accumulate(expense_week_3, "amount")
        total_expense_week_4 = accumulate(expense_week_4, "amount")

        # Get Expenses by Category
        entertainment_expense = month_expense_qry.filter(cast(Expense.category, String)=="entertainment").all()
        food_expense = month_expense_qry.filter(cast(Expense.category, String)=="food").all()
        services_expense = month_expense_qry.filter(cast(Expense.category, String)=="services").all()
        transport_expense = month_expense_qry.filter(cast(Expense.category, String)=="transport").all()
        home_expense = month_expense_qry.filter(cast(Expense.category, String)=="home").all()
        education_expense = month_expense_qry.filter(cast(Expense.category, String)=="education").all()
        clothing_expense = month_expense_qry.filter(cast(Expense.category, String)=="clothing").all()

        # Sum Total Expenses per Category
        total_entertainment_expense = accumulate(entertainment_expense, "amount")
        total_food_expense = accumulate(food_expense, "amount")
        total_services_expense = accumulate(services_expense, "amount")
        total_transport_expense = accumulate(transport_expense, "amount")
        total_home_expense = accumulate(home_expense, "amount")
        total_education_expense = accumulate(education_expense, "amount")
        total_clothing_expense = accumulate(clothing_expense, "amount")

        # Weekly Expenses per Category
        # Entertainment
        entertainment_qry = month_expense_qry.filter(cast(Expense.category, String)=="entertainment")
        entertainment_week_1 = entertainment_qry.filter(cast(Expense.day, INT)>=1).filter(cast(Expense.day, INT)<=8).all()
        entertainment_week_2 = entertainment_qry.filter(cast(Expense.day, INT)>=9).filter(cast(Expense.day, INT)<=15).all()
        entertainment_week_3 = entertainment_qry.filter(cast(Expense.day, INT)>=16).filter(cast(Expense.day, INT)<=22).all()
        entertainment_week_4 = entertainment_qry.filter(cast(Expense.day, INT)>=23).all()

        # Weekly totals: Entertainment
        total_entertainment_week_1 = accumulate(entertainment_week_1, "amount")
        total_entertainment_week_2 = accumulate(entertainment_week_2, "amount")
        total_entertainment_week_3 = accumulate(entertainment_week_3, "amount")
        total_entertainment_week_4 = accumulate(entertainment_week_4, "amount")

        # Food
        food_qry = month_expense_qry.filter(cast(Expense.category, String)=="food")
        food_week_1 = food_qry.filter(cast(Expense.day, INT)>=1).filter(cast(Expense.day, INT)<=8).all()
        food_week_2 = food_qry.filter(cast(Expense.day, INT)>=9).filter(cast(Expense.day, INT)<=15).all()
        food_week_3 = food_qry.filter(cast(Expense.day, INT)>=16).filter(cast(Expense.day, INT)<=22).all()
        food_week_4 = food_qry.filter(cast(Expense.day, INT)>=23).all()

        # Weekly totals: Food
        total_food_week_1 = accumulate(food_week_1, "amount")
        total_food_week_2 = accumulate(food_week_2, "amount")
        total_food_week_3 = accumulate(food_week_3, "amount")
        total_food_week_4 = accumulate(food_week_4, "amount")

        # Services
        services_qry = month_expense_qry.filter(cast(Expense.category, String)=="services")
        services_week_1 = services_qry.filter(cast(Expense.day, INT)>=1).filter(cast(Expense.day, INT)<=8).all()
        services_week_2 = services_qry.filter(cast(Expense.day, INT)>=9).filter(cast(Expense.day, INT)<=15).all()
        services_week_3 = services_qry.filter(cast(Expense.day, INT)>=16).filter(cast(Expense.day, INT)<=22).all()
        services_week_4 = services_qry.filter(cast(Expense.day, INT)>=23).all()

        # Weekly totals: Services
        total_services_week_1 = accumulate(services_week_1, "amount")
        total_services_week_2 = accumulate(services_week_2, "amount")
        total_services_week_3 = accumulate(services_week_3, "amount")
        total_services_week_4 = accumulate(services_week_4, "amount")

        # Transport
        transport_qry = month_expense_qry.filter(cast(Expense.category, String)=="transport")
        transport_week_1 = transport_qry.filter(cast(Expense.day, INT)>=1).filter(cast(Expense.day, INT)<=8).all()
        transport_week_2 = transport_qry.filter(cast(Expense.day, INT)>=9).filter(cast(Expense.day, INT)<=15).all()
        transport_week_3 = transport_qry.filter(cast(Expense.day, INT)>=16).filter(cast(Expense.day, INT)<=22).all()
        transport_week_4 = transport_qry.filter(cast(Expense.day, INT)>=23).all()

        # Weekly totals: Transport
        total_transport_week_1 = accumulate(transport_week_1, "amount")
        total_transport_week_2 = accumulate(transport_week_2, "amount")
        total_transport_week_3 = accumulate(transport_week_3, "amount")
        total_transport_week_4 = accumulate(transport_week_4, "amount")

        # Home
        home_qry = month_expense_qry.filter(cast(Expense.category, String)=="home")
        home_week_1 = home_qry.filter(cast(Expense.day, INT)>=1).filter(cast(Expense.day, INT)<=8).all()
        home_week_2 = home_qry.filter(cast(Expense.day, INT)>=9).filter(cast(Expense.day, INT)<=15).all()
        home_week_3 = home_qry.filter(cast(Expense.day, INT)>=16).filter(cast(Expense.day, INT)<=22).all()
        home_week_4 = home_qry.filter(cast(Expense.day, INT)>=23).all()

        # Weekly totals: Home
        total_home_week_1 = accumulate(home_week_1, "amount")
        total_home_week_2 = accumulate(home_week_2, "amount")
        total_home_week_3 = accumulate(home_week_3, "amount")
        total_home_week_4 = accumulate(home_week_4, "amount")

        # Education
        education_qry = month_expense_qry.filter(cast(Expense.category, String)=="education")
        education_week_1 = education_qry.filter(cast(Expense.day, INT)>=1).filter(cast(Expense.day, INT)<=8).all()
        education_week_2 = education_qry.filter(cast(Expense.day, INT)>=9).filter(cast(Expense.day, INT)<=15).all()
        education_week_3 = education_qry.filter(cast(Expense.day, INT)>=16).filter(cast(Expense.day, INT)<=22).all()
        education_week_4 = education_qry.filter(cast(Expense.day, INT)>=23).all()

        # Weekly totals: Education
        total_education_week_1 = accumulate(education_week_1, "amount")
        total_education_week_2 = accumulate(education_week_2, "amount")
        total_education_week_3 = accumulate(education_week_3, "amount")
        total_education_week_4 = accumulate(education_week_4, "amount")

        # Clothing
        clothing_qry = month_expense_qry.filter(cast(Expense.category, String)=="clothing")
        clothing_week_1 = clothing_qry.filter(cast(Expense.day, INT)>=1).filter(cast(Expense.day, INT)<=8).all()
        clothing_week_2 = clothing_qry.filter(cast(Expense.day, INT)>=9).filter(cast(Expense.day, INT)<=15).all()
        clothing_week_3 = clothing_qry.filter(cast(Expense.day, INT)>=16).filter(cast(Expense.day, INT)<=22).all()
        clothing_week_4 = clothing_qry.filter(cast(Expense.day, INT)>=23).all()

        # Weekly totals: Clothing
        total_clothing_week_1 = accumulate(clothing_week_1, "amount")
        total_clothing_week_2 = accumulate(clothing_week_2, "amount")
        total_clothing_week_3 = accumulate(clothing_week_3, "amount")
        total_clothing_week_4 = accumulate(clothing_week_4, "amount")

        # Payment Method Count
        credit_count = len(month_expense_qry.filter(cast(Expense.payment_method, String)=="credit").all())
        debit_count = len(month_expense_qry.filter(cast(Expense.payment_method, String)=="debit").all())
        cash_count = len(month_expense_qry.filter(cast(Expense.payment_method, String)=="cash").all())

        monthly_data = {
            "year": each["year"],
            "month": each["month"],
            "incomes": total_income_of_month,
            "expenses": {
                "total": total_expense_of_month,
                "week": [total_expense_week_1, total_expense_week_2, total_expense_week_3, total_expense_week_4]
                },
            "category": {
                "entertainment": {
                    "total": total_entertainment_expense,
                    "week": [total_entertainment_week_1, total_entertainment_week_2, total_entertainment_week_3, total_entertainment_week_4]
                },
                "food": {
                    "total": total_food_expense,
                    "week": [total_food_week_1, total_food_week_2, total_food_week_3, total_food_week_4]
                },
                "services": {
                    "total": total_services_expense,
                    "week": [total_services_week_1, total_services_week_2, total_services_week_3, total_services_week_4]
                },
                "transport": {
                    "total": total_transport_expense,
                    "week": [total_transport_week_1, total_transport_week_2, total_transport_week_3, total_transport_week_4]
                },
                "home": {
                    "total": total_home_expense,
                    "week": [total_home_week_1, total_home_week_2, total_home_week_3, total_home_week_4]
                },
                "education": {
                    "total": total_education_expense,
                    "week": [total_education_week_1, total_education_week_2, total_education_week_3, total_education_week_4]
                },
                "clothing": {
                    "total": total_clothing_expense,
                    "week": [total_clothing_week_1, total_clothing_week_2, total_clothing_week_3, total_clothing_week_4]
                }
            },
            "payment_method": {
                "credit": credit_count,
                "debit": debit_count,
                "cash": cash_count
            }
            }
        resume.append(monthly_data)


    return jsonify({"data": resume}), 200