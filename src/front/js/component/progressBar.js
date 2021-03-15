import React, { Component } from "react";
import PropTypes from "prop-types";

export const ProgressBar = props => {
	return (
		<div className=" mb-5">
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
