import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";

export const Finances = () => {
	const { store, actions } = useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();
	};

	const data = {
		labels: ["Home", "Food", "Transport", "Services", "Education", "Clothing", "Entertainment"],
		datasets: [
			{
				label: "Gastos",
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
		<div className="container mb-2">
			<div className="row">
				<div className="container breadcrumb">Your Finances</div>
				<div className="container breadcrumb">Mi cambio en Branch Andres</div>
			</div>
			<div className="row d-flex flex-column">
				<form onSubmit={e => handleSubmit(e)}>
					<div className="col-lg-4 form-group d-flex flex-column">
						<label htmlFor="month">Select Month</label>

						<select className="form-control" name="month" id="month">
							<option value="nov-2020">November 2020</option>
							<option value="dic-2020">December 2020</option>
							<option value="jan-2021">January 2021</option>
							<option value="feb-2021">February 2021</option>
							<option value="mar-2021">March 2021</option>
						</select>
					</div>

					<div className="col-lg-4 form-group d-flex flex-column">
						<label htmlFor="category">Select Category</label>

						<select className="form-control" name="category" id="category">
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
					<div className="col-lg-4 d-flex flex-column">
						<button className="btn btn-success" type="submit">
							Show me my money!
						</button>
					</div>
				</form>
			</div>
			<div className="col-12 border my-5" />
			<div className="row">
				<div className="col">
					<Bar data={data} />
				</div>
			</div>
			<div className="posicionFooter" />
		</div>
	);
};
