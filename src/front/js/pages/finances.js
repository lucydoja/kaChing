import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { BarGraph } from "../component/bar";
import { PieGraph } from "../component/pie";
import { string } from "prop-types";
import { ProgressBar_function2, BarGraph_function } from "./Utils";

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

	let datos = store.resume.filter(item => item.year === year);
	datos = datos.filter(item => item.month === month);
	// poner un if datos undefined  no muestre nada, you dont have records por this specific date

	let monthly_data = datos[0];

	//poner condicional que si expenses es igual a 0 entonces no muestre ni picha porque no tiene sentido

	/*
    if (category == "Total"){
        let weekly_data = monthly_data["expenses"]["week"];
    }else{
        let weekly_data = monthly_data["category"][category]["week"]
    }
    */

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
				<ProgressBar_function2 category={category} />
				{/*<ProgressBar_function category={category} monthly_data={monthly_data} /> */}
				<h5 className="col text-center mt-3 ">
					<strong>Monthly expenses per week</strong>
				</h5>
				<BarGraph datos={[90000, 49000, 50000, 10000]} />
				{/*
                <BarGraph_function category={category} weekly_data={weekly_data} />
                */}
				{category == "Total" ? (
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
					labels={["Credit", "Debit", "Cash"]}
					colors={["rgba(231,155,222,1)", "rgba(221,219,108,1)", "rgba(18,144,151,1)"]}
				/>{" "}
				{/*Por modo de pago */}
			</div>

			<div className="posicionFooter" />
		</div>
	);
};
