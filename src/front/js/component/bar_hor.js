import React, { Component } from "react";
import PropTypes from "prop-types";

export const BarHorGraph = props => {
	return (
		<div className="mt-3">
			<h5 className="text-center">
				<strong>Porcentage of income spent</strong>
			</h5>
			<div className="progress-bar mt-2 mb-3">
				<div className="filler" style={{ width: `${props.dato}%` }} />
			</div>
		</div>
	);
};

BarHorGraph.propTypes = {
	dato: PropTypes.integer
};
