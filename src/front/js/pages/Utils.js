import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { BarGraph } from "../component/bar";
import { ProgressBar } from "../component/progressBar";
import { PieGraph } from "../component/pie";
import PropTypes from "prop-types";

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
						your income in {categoria} (<strong>{Math.round(porcentaje / 100)}</strong> times more!!) ...
						You seriously need to reduce your expenses.
					</p>
					<hr />
					<p className="mb-0">
						You spent <strong>{expense}</strong> in {categoria}
					</p>

					<p className="mb-0">
						You earned <strong>{income}</strong> in total
					</p>
				</div>
				<ProgressBar dato={300} />
			</div>
		);
	}
	return (
		<div>
			<div className="alert alert-warning" role="alert">
				<p>
					It looks like you spent <strong>{porcentaje}%</strong> of your incomes in {categoria}!
				</p>
				<hr />
				<p className="mb-0">
					You spent <strong>{expense}</strong> in {categoria}
				</p>

				<p className="mb-0">
					You earned <strong>{income}</strong> in total
				</p>
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
	let category = props.category;
	let weekly_data = props.weekly_data;

	// hacer la suma
	let sum = weekly_data.reduce((a, b) => a + b);

	if (sum == 0) {
		return (
			<div className="alert alert-info mt-5 pt-4" role="alert">
				<p>
					It looks like you didn&apos;t register any expenses in {category} this month! So there&apos;s really
					not much to see here! I hope this means you are saving money!!
				</p>
				<hr />
				<p>
					Else, try to keep your finances up to date for a better experience or maybe you just didn&apos;t
					want to expend in {category} which is a great way to save money!
				</p>
			</div>
		);
	}

	// Encontrar el maximo
	let maximo = Math.max(...weekly_data);
	let index_max = weekly_data.indexOf(maximo);
	let week_max = index_max + 1;

	//Encontrar el minimo
	let minimo = Math.min(...weekly_data);
	let index_min = weekly_data.indexOf(minimo);
	let week_min = index_min + 1;

	//Average
	let average = sum / weekly_data.length;

	return (
		<div className="mt-3">
			<h5 className="col text-center mt-3 ">
				<strong>Monthly expenses per week</strong>
			</h5>
			<div className="alert alert-dark mt-3" role="alert">
				<p>
					It looks like <strong>week {week_max}</strong> was a tough week! That week you spent{" "}
					<strong>{maximo}</strong> in <strong>{category}</strong>. Meanwhile,{" "}
					<strong>week {week_min}</strong> was the one with the least expenses, with a total of{" "}
					<strong>{minimo}</strong>. In average you are spending {average} in {category} per week!
				</p>
				<hr />
				<p className="mb-0">
					<strong>Maximum</strong> spent per week : <strong>{maximo}</strong>
				</p>
				<p className="mb-0">
					<strong>Minimum</strong> spent per week: <strong>{minimo}</strong>
				</p>
				<p className="mb-0">
					<strong>Average</strong> spent per week: <strong>{average}</strong>
				</p>
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
		return null;
	}

	// Encontrar el maximo
	let maximo = Math.max(...data);
	let index_max = data.indexOf(maximo);
	let cat_max = categories[index_max];

	//Encontrar el minimo
	let minimo = Math.min(...data);
	let index_min = data.indexOf(minimo);
	let cat_min = categories[index_min];

	let porc_max = Math.round((100 * maximo) / sum);

	return (
		<div className="mt-3">
			<h5 className="col text-center mt-3">
				<strong>Monthly expenses per category</strong>
			</h5>
			<div className="alert alert-dark mt-3" role="alert">
				<p>
					This month you spent <strong>most</strong> of your money in {cat_max} for a total of{" "}
					<strong>{maximo}</strong>, which represents the <strong>{porc_max}%</strong> of your expenses! The
					least expenses where made in {cat_min}.
				</p>
				<hr />
				<p className="mb-0">Most expenses made in {cat_max}</p>
				<p className="mb-0">
					<strong>Porcentage</strong> expent per category:
				</p>
				{categories.map((item, index) => {
					return (
						<p className="mb-0" key={index}>
							{item}: <strong>{Math.round((data[categories.indexOf(item)] * 100) / sum)}%</strong>
						</p>
					);
				})}
			</div>
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
				height={230}
			/>
		</div>
	);
};

PieGraphCategory_function.propTypes = {
	monthly_data: PropTypes.any
};

export const PieGraphMethod_function = props => {
	let monthly_data = props.monthly_data;
	let data = [];
	let methods = ["Credit", "Debit", "Cash"];
	methods.forEach(item => {
		let valor = monthly_data["method"][item];
		data.push(valor);
	});

	// hacer la suma
	let sum = data.reduce((a, b) => a + b);

	if (sum == 0) {
		return null;
	}

	// Encontrar el maximo
	let maximo = Math.max(...data);
	let index_max = data.indexOf(maximo);
	let met_max = methods[index_max];

	//Encontrar el minimo
	let minimo = Math.min(...data);
	let index_min = data.indexOf(minimo);
	let met_min = methods[index_min];

	let porc_max = Math.round((100 * maximo) / sum);

	return (
		<div className="mt-3">
			<h5 className="col text-center mt-4">
				<strong>Types of payment methods used</strong>
			</h5>
			<div className="alert alert-dark mt-2" role="alert">
				<p>
					<strong>Most</strong> of your transactions where made with <strong>{met_max}</strong>, you used this
					method <strong>{porc_max}% </strong>
					of the time! Your least used method is {met_min}.
				</p>
				<hr />
				<p className="mb-0">Most expenses made with {met_max}</p>
				<p className="mb-0">
					<strong>Times</strong> used per method:
				</p>
				{methods.map((item, index) => {
					return (
						<p className="mb-0" key={index}>
							{item}: <strong>{data[methods.indexOf(item)]}</strong>
						</p>
					);
				})}
			</div>

			<PieGraph
				datos={data}
				labels={methods}
				colors={["rgba(231,155,222,1)", "rgba(221,219,108,1)", "rgba(18,144,151,1)"]}
				height={200}
			/>
		</div>
	);
};

PieGraphMethod_function.propTypes = {
	monthly_data: PropTypes.any
};
