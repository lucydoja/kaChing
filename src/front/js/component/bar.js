import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

export const BarGraph = props => {
	const data = {
		labels: [1, 2, 3, 4],
		datasets: [
			{
				label: "Expenses",
				data: props.datos,
				backgroundColor: [
					"rgba(18,144,151,1)",
					"rgba(18,144,151,1)",
					"rgba(18,144,151,1)",
					"rgba(18,144,151,1)"
				],
				borderColor: ["rgba(18,144,151,1)", "rgba(18,144,151,1)", "rgba(18,144,151,1)", "rgba(18,144,151,1)"],
				borderWidth: 1
			}
		]
	};
	return (
		<div className="">
			<div className="row ">
				<div className="col graficos">
					<Bar
						data={data}
						height={250}
						options={{
							//title: { display: true, text: "Monthly expenses per week", fontSize: 20 },
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
										},
										ticks: {
											beginAtZero: true
										}
									}
								]
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
};

BarGraph.propTypes = {
	datos: PropTypes.any
};
