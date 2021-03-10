import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";

export const Finances = () => {
	const { store, actions } = useContext(Context);

	const [month, setMonth] = useState("");
	const [category, setCategory] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		console.log(month);
		console.log(category);
	};

	const data = {
		labels: ["Home", "Food", "Transport", "Services", "Education", "Clothing", "Entertainment"],
		datasets: [
			{
				label: "Expenses",
				data: [90000, 49000, 30000, 50000, 20000, 8000, 15000],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)"
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)"
				],
				borderWidth: 1
			}
		]
	};

	return (
		<div className="container d-flex justify-content-center mt-2">
			<div className="formulario2 mb-5 row">
				<h3 className="mt-2">Your Finances</h3>
				<div>
					<form onSubmit={e => handleSubmit(e)}>
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
								<option value="nov-2020">November 2020</option>
								<option value="dic-2020">December 2020</option>
								<option value="jan-2021">January 2021</option>
								<option value="feb-2021">February 2021</option>
								<option value="mar-2021">March 2021</option>
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
								<option value="all">All</option>
								<option value="home">Home</option>
								<option value="food">Food</option>
								<option value="transport">Transport</option>
								<option value="services">Services</option>
								<option value="education">Education</option>
								<option value="clothing">Clothing</option>
								<option value="entertainment">Entertainment</option>
							</select>
						</div>
						<div className="form-row mt-3 justify-content-center">
							<button className="btn btn-primary" type="submit">
								Show me my money!
							</button>
						</div>
					</form>
				</div>
				<div className="row mt-3 ">
					<div className="col graficos">
						<Bar
							data={data}
							height={250}
							options={{
								title: { display: true, text: "Monthly expenses", fontSize: 25 },
								scales: {
									xAxes: [
										{
											scaleLabel: {
												display: true,
												labelString: "Weeks"
											}
										}
									],
									yAxes: [
										{
											scaleLabel: {
												display: true,
												labelString: "Total money spend"
											}
										}
									]
								}
							}}
							yAxisID="Total expenses"
						/>
					</div>
				</div>
			</div>

			<div className="posicionFooter" />
		</div>
	);
};
