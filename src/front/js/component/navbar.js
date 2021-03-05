import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
			<div className="posicionNav" />
			<nav className="navbar navbar-expand-lg mb-2 pr-0 flex-nowrap fixed-top">
				<div className="container-fluid row">
					<Link to="/">
						<span className="navbar-brand mb-0">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png"
								alt="star wars logo"
								className="logo-nav ml-2"
							/>
						</span>
					</Link>
					<div className="d-flex justify-content-end">
						{" "}
						<Link to={"/register"}>
							<span className="btn btn-outline-light mr-2" href="#" role="button">
								Register
							</span>
						</Link>
						<Link to={"/login"}>
							<span className="btn btn-outline-light" href="#" role="button">
								Log in
							</span>
						</Link>{" "}
					</div>
				</div>
			</nav>
		</div>
	);
};
