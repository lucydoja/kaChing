import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { BarGraph } from "../component/bar";
import { ProgressBar } from "../component/progressBar";
import { PieGraph } from "../component/pie";
import PropTypes from "prop-types";

export const ProgressBar_function2 = props => {
	const { store, actions } = useContext(Context);

	let data = store.expenses;
	let expense = 0;
	//borrar la de data y datos , cambiar data por datos, amount por expenses o incomes
	for (let i = 0; i < data.length; i++) {
		expense = expense + data[i]["amount"];
	}
	let datos = store.incomes;
	let income = 0;
	for (let i = 0; i < datos.length; i++) {
		income = income + datos[i]["amount"];
	}
	if (income == 0) {
		return (
			<div className="alert alert-danger mt-3" role="alert">
				<p>
					It looks like you didn&apos;t upload any incomes for this month! Be more consistent to take full
					advantage of the whole <strong>kaChing!</strong> experience.
				</p>
				<hr />
				<p className="mb-0">
					You spent {expense} in {props.category}
				</p>
				<p className="mb-0">You earned {income} in total</p>
			</div>
		);
	}

	let porcentaje = Math.round((100 * expense) / income);
	if (porcentaje == 100) {
		return (
			<div>
				<div className="alert alert-danger mt-3" role="alert">
					<p>
						This isn&apos;t looking good, you spent <strong>ALL</strong> your money in {props.category}!
						Someone is not taking care of their finances, try to save some money!{" "}
					</p>
					<hr />
					<p className="mb-0">
						You spent {expense} in {props.category}
					</p>

					<p className="mb-0">You earned {income} in total</p>
				</div>
				<ProgressBar dato={porcentaje} />
			</div>
		);
	} else if (porcentaje > 100) {
		return (
			<div>
				<div className="alert alert-danger mt-3" role="alert">
					<p>
						{" "}
						WOW! It looks like you&apos;re in <strong>DEBT</strong>! You spent <strong>MORE</strong> than
						your income in {props.category} ({Math.round(porcentaje / 100)} times more!!) ... You seriously
						need to reduce your expenses.
					</p>
					<hr />
					<p className="mb-0">
						You spent {expense} in {props.category}
					</p>

					<p className="mb-0">You earned {income} in total</p>
				</div>
				<ProgressBar dato={300} />
			</div>
		);
	}
	return (
		<div>
			<div className="alert alert-warning" role="alert">
				<p>
					It looks like you spent {porcentaje}% of your incomes in {props.category}!
				</p>
				<hr />
				<p className="mb-0">
					You spent {expense} in {props.category}
				</p>

				<p className="mb-0">You earned {income} in total</p>
			</div>
			<ProgressBar dato={porcentaje} />
		</div>
	);
};

ProgressBar_function2.propTypes = {
	category: PropTypes.string
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
        resume=[{
            year: "",
            month: 1-12,
            incomes: total,
            expenses: {total: total del mes,
                        week : [dato1 , dato 2 , dato 3 , dato 4]}
            category:{
                Entertainment : {total: total en el mes,
                                week: [dato 1, dato 2, dato 3, dato 4]}
                Food: ,
                ....
            },
            method:{
                credit: veces usadas en el mes,
                card: ,
                ...
            },
        }}, ....]*/
export const ProgressBar_function = props => {
	let categoria = props.category;
	let monthly_data = props.monthly_data;
	let expense;
	if (categoria == "Total") {
		expense = monthly_data["expenses"]["total"];
	} else {
		expense = monthly_data["category"][categoria]["total"];
	}

	let income = monthly_data["incomes"];
	if (income == 0) {
		return (
			<div className="alert alert-danger mt-3" role="alert">
				<p>
					It looks like you didn&apos;t upload any incomes for this month! Be more consistent to take full
					advantage of the whole <strong>kaChing!</strong> experience.
				</p>
				<hr />
				<p className="mb-0">
					You spent {expense} in {categoria}
				</p>
				<p className="mb-0">You earned {income} in total</p>
			</div>
		);
	}

	let porcentaje = Math.round((100 * expense) / income);
	if (porcentaje == 100) {
		return (
			<div>
				<div className="alert alert-danger mt-3" role="alert">
					<p>
						This isn&apos;t looking good, you spent <strong>ALL</strong> your money in {categoria}! Someone
						is not taking care of their finances, try to save some money!{" "}
					</p>
					<hr />
					<p className="mb-0">
						You spent {expense} in {categoria}
					</p>

					<p className="mb-0">You earned {income} in total</p>
				</div>
				<ProgressBar dato={porcentaje} />
			</div>
		);
	} else if (porcentaje > 100) {
		return (
			<div>
				<div className="alert alert-danger mt-3" role="alert">
					<p>
						{" "}
						WOW! It looks like you&apos;re in <strong>DEBT</strong>! You spent <strong>MORE</strong> than
						your income in {categoria} ({Math.round(porcentaje / 100)} times more!!) ... You seriously need
						to reduce your expenses.
					</p>
					<hr />
					<p className="mb-0">
						You spent {expense} in {categoria}
					</p>

					<p className="mb-0">You earned {income} in total</p>
				</div>
				<ProgressBar dato={300} />
			</div>
		);
	}
	return (
		<div>
			<div className="alert alert-warning" role="alert">
				<p>
					It looks like you spent {porcentaje}% of your incomes in {categoria}!
				</p>
				<hr />
				<p className="mb-0">
					You spent {expense} in {categoria}
				</p>

				<p className="mb-0">You earned {income} in total</p>
			</div>
			<ProgressBar dato={porcentaje} />
		</div>
	);
};

ProgressBar_function.propTypes = {
	category: PropTypes.string,
	monthly_data: PropTypes.any
};

export const BarGraph_function = props => {
	let categoria = props.category;
	let weekly_data = props.weekly_data;

	// hacer la suma
	let sum = weekly_data.reduce((a, b) => a + b);

	if (sum == 0) {
		return (
			<div className="alert alert-warning mt-3" role="alert">
				<p>
					It looks like you did&apos;t register any expenses in {categoty} this month! Try to keep up your
					finances up to date for a better experience or maybe you just didn&apos;t want to expend in{" "}
					{category} which is a great way to save money!
				</p>
			</div>
		);
	}

	// Encontrar el maximo
	let maximo = Math.max(weekly_data);
	let index_max = weekly_data.indexOf(maximo);
	let week_max = index_max + 1;

	//Encontrar el minimo
	let minimo = Math.min(weekly_data);
	let index_min = weekly_data.indexOf(minimo);
	let week_min = index_min + 1;

	//Average
	let average = sum / weekly_data.length;

	return (
		<div>
			<div className="alert alert-dark mt-3" role="alert">
				<p>
					It looks like week {week_max} was a though week! That week you spent {maximo} in {category}.
					Meanwhile, week {week_min} was the one with the least expenses, with a total of {minimo}. In average
					you are spending {average} in {category} per week!
				</p>
				<hr />
				<p className="mb-0">Maximum spent per week : {maximo}</p>
				<p className="mb-0">Minimum spent per week: {minimo}</p>
				<p className="mb-0">Average spent per week: {average}</p>
			</div>
			<BarGraph datos={weekly_data} />
		</div>
	);
};

BarGraph_function.propTypes = {
	weekly_data: PropTypes.any,
	category: PropTypes.string
};

export const PieGraphCategory_function = props => {
	let monthly_data = props.monthly_data;
	let data = [];
	let categories = ["Home", "Food", "Transport", "Services", "Education", "Clothing", "Entertainment"];
	categories.forEach(item => {
		let valor = monthly_data["category"][item]["total"];
		data.push(valor);
	});

	// hacer la suma
	let sum = data.reduce((a, b) => a + b);

	if (sum == 0) {
		<div className="alert alert-warning mt-3" role="alert">
			<p>
				It looks seems that you did&apos;t register any expenses this month! Try to keep up your finances up to
				date for a better experience in <strong>kaChing!</strong>
			</p>
		</div>;
	}

	<PieGraph
		datos={data}
		labels={categories}
		colors={[
			"rgba(231,155,222,1)",
			"rgba(99,223,238,1)",
			"rgba(128,127,192,1)",
			"rgba(167,65,65,1)",
			"rgba(18,144,151,1)",
			"rgba(221,219,108,1)",
			"rgba(15,68,121,1)"
		]}
	/>;
};

ProgressBar_function.propTypes = {
	monthly_data: PropTypes.any
};
