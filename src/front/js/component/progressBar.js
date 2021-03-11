import React, { Component } from "react";
import PropTypes from "prop-types";

export const ProgressBar = props => {
	return (
		<div className="mt-5 mb-5">
			<h5 className="text-center">
				<strong>Porcentage of income spent</strong>
			</h5>
			<div className="progress-bar mt-2 ">
				<div className="filler" style={{ width: `${props.dato}%` }}>
					<span className="mb-1">
						<strong>{props.dato}%</strong>
					</span>
				</div>
			</div>
			<div className="d-flex justify-content-between mb-5">
				<span>0%</span>
				<span>100%</span>
			</div>
		</div>
	);
};

ProgressBar.propTypes = {
	dato: PropTypes.integer
};
