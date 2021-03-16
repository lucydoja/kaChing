import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

export const BarGraph = props => {
	const data = {
		labels: ["week 1", "week 2", "week 3", "week 4"],
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
						height={270}
						options={{
							//title: { display: true, text: "Monthly expenses per week", fontSize: 20 },
							scales: {
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
