import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";

export const PieGraph = props => {
	const data = {
		labels: ["Home", "Food", "Transport", "Services", "Education", "Clothing", "Entertainment"],
		datasets: [
			{
				label: "Expenses",
				data: props.datos,
				backgroundColor: [
					"rgba(0,0,128, 0.2)",
					"rgba(128,0,0, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(255,0,0, 0.2)",
					"rgba(0,128,0, 0.2)",
					"rgba(255,0,255, 0.2)"
				],
				borderColor: [
					"rgba(0,0,128, 1)",
					"rgba(128,0,0, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(255,0,0, 1)",
					"rgba(0,128,0, 1)",
					"rgba(255,0,255, 1)"
				],
				borderWidth: 1
			}
		]
	};
	return (
		<div className="mt-3 ">
			<h5 className="col text-center">
				<strong>Monthly expenses per category</strong>
			</h5>
			<div className="row mt-3 ">
				<div className="col graficos">
					<Pie
						data={data}
						height={200}
						width={250}
						options={
							{
								//title: { display: true, text: "Monthly expenses per category", fontSize: 20 }
							}
						}
					/>
				</div>
			</div>
		</div>
	);
};

PieGraph.propTypes = {
	datos: PropTypes.any
};
