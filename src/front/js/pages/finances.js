import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { BarGraph } from "../component/bar";
import { BarHorGraph } from "../component/bar_hor";
import { PieGraph } from "../component/pie";

export const Finances = () => {
	const { store, actions } = useContext(Context);

	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");
	const [category, setCategory] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (year === "" || month === "" || category === "") {
			alert("Please fill all the entries");
		}
		const data = {
			year: year,
			month: month,
			category: category
		};

		fetch(process.env.BACKEND_URL + "/finances", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => {
				if (!response.ok) {
					response.text().then(text => alert(text));
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(data => {
				console.log("Succesfull data recovery");
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div className="container d-flex justify-content-center mt-2">
			<div className="formulario2 mb-5 row">
				<h3 className="mt-2">Your Finances</h3>
				<div>
					<form onSubmit={e => handleSubmit(e)}>
						<div className="form-row mt-3">
							<label htmlFor="month">Select Year</label>
							<select
								onChange={e => setYear(e.target.value)}
								className="form-control"
								name="month"
								id="month">
								<option value="" selected disabled hidden>
									Year
								</option>
								<option value="2020">2020</option>
								<option value="2021">2021</option>
								<option value="2022">2022</option>
							</select>
						</div>
						<div className="form-row mt-3">
							<label htmlFor="month">Select Month</label>
							<select
								onChange={e => setMonth(e.target.value)}
								className="form-control"
								name="month"
								id="month">
								<option value="" selected disabled hidden>
									Month
								</option>
								<option value="january">January</option>
								<option value="february">February</option>
								<option value="mar-2021">March</option>
								<option value="jan-2021">April</option>
								<option value="feb-2021">May</option>
								<option value="mar-2021">June</option>
								<option value="jan-2021">July</option>
								<option value="feb-2021">August</option>
								<option value="mar-2021">September</option>
								<option value="mar-2021">October</option>
								<option value="nov-2020">November</option>
								<option value="dic-2020">December</option>
							</select>
						</div>

						<div className="form-row mt-3">
							<label htmlFor="category">Select Category</label>

							<select
								onChange={e => setCategory(e.target.value)}
								className="form-control"
								name="category"
								id="category">
								<option value="" selected disabled hidden>
									Category
								</option>
								<option value="All">All</option>
								<option value="Home">Home</option>
								<option value="Food">Food</option>
								<option value="Transport">Transport</option>
								<option value="Services">Services</option>
								<option value="Education">Education</option>
								<option value="Clothing">Clothing</option>
								<option value="Entertainment">Entertainment</option>
							</select>
						</div>
						<div className="form-row mt-3 justify-content-center">
							<button className="btn btn-primary" type="submit">
								Show me my money!
							</button>
						</div>
					</form>
				</div>
				<BarHorGraph datos={[80]} dato={80} />
				<BarGraph datos={[90000, 49000, 50000, 10000]} />
				<PieGraph datos={[90000, 49000, 50000, 10000, 234234, 234234, 11210]} />
			</div>

			<div className="posicionFooter" />
		</div>
	);
};
