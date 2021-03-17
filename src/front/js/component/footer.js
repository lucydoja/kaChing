import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer py-3 text-center">
		<Link to={"/aboutUs"} className="m-0 p-0">
			<p className="boton-link2 m-0 p-0">Made by kaChing!</p>
		</Link>

		<a className="boton-link2 m-0 p-0" href="https://www.micit.go.cr/" target="_blank" rel="noopener noreferrer">
			With the support of MICITT
		</a>
	</footer>
);
