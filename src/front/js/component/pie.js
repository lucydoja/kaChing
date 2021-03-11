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
					"rgba(231,155,222,1)",
					"rgba(99,223,238,1)",
					"rgba(128,127,192,1)",
					"rgba(167,65,65,1)",
					"rgba(18,144,151,1)",
					"rgba(221,219,108,1)",
					"rgba(15,68,121,1)"
				],
				borderColor: [
					"rgba(231,155,222,1)",
					"rgba(99,223,238,1)",
					"rgba(128,127,192,1)",
					"rgba(167,65,65,1)",
					"rgba(18,144,151,1)",
					"rgba(221,219,108,1)",
					"rgba(15,68,121,1)"
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
