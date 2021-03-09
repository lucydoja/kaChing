import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";

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
					<div className="d-flex justify-content-end">
						{" "}
						<Link to={"/register"}>
							<span className="btn btn-outline-dark ml-2 mr-2" href="#" role="button">
								Register
							</span>
						</Link>
						<Link to={"/login"}>
							<span className="btn btn-outline-dark" href="#" role="button">
								Log in
							</span>
						</Link>{" "}
					</div>
				</div>
			</nav>
		</div>
	);
};
