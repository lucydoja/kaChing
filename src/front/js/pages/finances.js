import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { BarGraph } from "../component/bar";
import { ProgressBar } from "../component/progressBar";
import { PieGraph } from "../component/pie";
import { string } from "prop-types";

export const Finances = () => {
	const { store, actions } = useContext(Context);
	const [category, setCategory] = useState("Total");

	// esto es para que siempre le salga el resumen del mes actual
	var date = new Date();
	let current_month_num = date.getMonth();
	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	let current_month = months[current_month_num];
	// +1 porque en javascript los meses empiezan en 0 y en python en 1!
	const [month, setMonth] = useState(current_month_num + 1);

	let current_year = date.getFullYear();
	const [year, setYear] = useState(current_year);

	// llamar a la funcion de get informacion aqui para que tome en cuenta los datos recientemente agregados en el view de trans

	const dato_progressBar = () => {
		/*
        monthly={
            year: "",
            month: 1-12,
            incomes: total,
            expenses: total,
            category:{
                Entertainment : {total: total en el mes,
            week: { 1: total semana 1 ,
            2:total semana 2,
        }}
                Food: ,
                ....
            },
            method:{
                credit: veces usadas,
                card: ,
                ...
            },
            week : {
                1 : {
                Entertainment : total expenses,
                Food: ,
                ....
                },
                2: ....
            }
            
        }
		let datos = store.resume.filter(item => item.year === year);
		datos = datos.filter(item => item.month === month);
		if (category != "Total") {
			datos = datos.filter(item => item.category === category);
        }*/
		let data = store.expenses;
		let expense = 0;
		//borrar la de data y datos , cambiar data por datos, amount por expenses o incomes
		for (let i = 0; i < data.length; i++) {
			expense = expense + data[i].amount;
		}
		let datos = store.incomes;
		let income = 0;
		for (let i = 0; i < datos.length; i++) {
			income = income + datos[i].amount;
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
						You spent {expense} in {category}
					</p>
					<p className="mb-0">You earned {income} in total</p>
				</div>
			);
		}

		console.log(income);
		//meterle un math floor al porcentaje
		let porcentaje = Math.round((100 * expense) / income);
		if (porcentaje == 100) {
			return (
				<div>
					<div className="alert alert-danger mt-3" role="alert">
						<p>
							This isn&apos;t looking good, you spent <strong>ALL</strong> your money in {category}!
							Someone is not taking care of their finances, try to save some money!{" "}
						</p>
						<hr />
						<p className="mb-0">
							You spent {expense} in {category}
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
							WOW! It looks like you&apos;re in <strong>DEBT</strong>! You spent <strong>MORE</strong>{" "}
							than your income in {category} ({Math.round(porcentaje / 100)} times more!!) ... You
							seriously need to reduce your expenses.
						</p>
						<hr />
						<p className="mb-0">
							You spent {expense} in {category}
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
						It looks like you spent {porcentaje}% of your incomes in {category}!
					</p>
					<hr />
					<p className="mb-0">
						You spent {expense} in {category}
					</p>

					<p className="mb-0">You earned {income} in total</p>
				</div>
				<ProgressBar dato={porcentaje} />
			</div>
		);
	};

	return (
		<div className="container d-flex justify-content-center mt-2">
			<div className="formulario2 mb-5 row">
				<h3 className="mt-2">Your Finances</h3>
				<div>
					<form /*onSubmit={e => handleSubmit(e}*/>
						<div className="form-row mt-3">
							<label htmlFor="month">Select Year</label>
							<select
								onChange={e => setYear(parseInt(e.target.value))}
								className="form-control"
								name="month"
								id="month">
								<option value="" selected disabled hidden>
									{year}
								</option>
								<option value="2020">2020</option>
								<option value="2021">2021</option>
								<option value="2022">2022</option>
							</select>
						</div>
						<div className="form-row mt-3">
							<label htmlFor="month">Select Month</label>
							<select
								onChange={e => setMonth(parseInt(e.target.value))}
								className="form-control"
								name="month"
								id="month">
								<option value="" selected disabled hidden>
									{current_month}
								</option>
								<option value="1">January</option>
								<option value="2">February</option>
								<option value="3">March</option>
								<option value="4">April</option>
								<option value="5">May</option>
								<option value="6">June</option>
								<option value="7">July</option>
								<option value="8">August</option>
								<option value="9">September</option>
								<option value="10">October</option>
								<option value="11">November</option>
								<option value="12">December</option>
							</select>
						</div>
						<div className="form-row mt-3">
							<label htmlFor="category">Select Category</label>

							<select
								onChange={e => setCategory(e.target.value)}
								className="form-control"
								name="category"
								id="category">
								<option value="Total">All</option>
								<option value="Home">Home</option>
								<option value="Food">Food</option>
								<option value="Transport">Transport</option>
								<option value="Services">Services</option>
								<option value="Education">Education</option>
								<option value="Clothing">Clothing</option>
								<option value="Entertainment">Entertainment</option>
							</select>
						</div>
					</form>
				</div>
				<h5 className="text-center mt-5">
					<strong>Porcentage of income spent</strong>
				</h5>
				{dato_progressBar()}
				<h5 className="col text-center mt-3 ">
					<strong>Monthly expenses per week</strong>
				</h5>
				<BarGraph datos={[90000, 49000, 50000, 10000]} />
				{category == "All" ? (
					<div>
						<h5 className="col text-center mt-4">
							<strong>Monthly expenses per category</strong>
						</h5>
						<PieGraph
							datos={[90000, 49000, 50000, 10000, 234234, 234234, 11210]}
							labels={["Home", "Food", "Transport", "Services", "Education", "Clothing", "Entertainment"]}
							colors={[
								"rgba(231,155,222,1)",
								"rgba(99,223,238,1)",
								"rgba(128,127,192,1)",
								"rgba(167,65,65,1)",
								"rgba(18,144,151,1)",
								"rgba(221,219,108,1)",
								"rgba(15,68,121,1)"
							]}
						/>{" "}
						{/*Por categoria */}
					</div>
				) : null}
				<h5 className="col text-center mt-4">
					<strong>Types of payment methods used</strong>
				</h5>
				<PieGraph
					datos={[90000, 49000, 50000]}
					labels={["Card", "Debit", "Cash"]}
					colors={["rgba(231,155,222,1)", "rgba(221,219,108,1)", "rgba(18,144,151,1)"]}
				/>{" "}
				{/*Por modo de pago */}
			</div>

			<div className="posicionFooter" />
		</div>
	);
};
