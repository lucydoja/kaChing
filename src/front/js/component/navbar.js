import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
import { NavLogged } from "../pages/navLogged";

export const Navbar = () => {
	return (
		<div>
			<div className="posicionNav" />
			<nav className="navbar navbar-expand-lg mb-2 pr-0 flex-nowrap fixed-top">
				<div className="container-fluid row">
					<Link to="/">
						<span className="navbar-brand m-0">
							<img src={logo} alt="kaChing!" className="logo-nav" />
						</span>
					</Link>
					<NavLogged />
				</div>
			</nav>
		</div>
	);
};
