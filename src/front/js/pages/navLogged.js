import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function NavLogged() {
	const { store, actions } = useContext(Context);
	let logged = store.isLogged;
	//cambiar condicion a != despues de unir con el back
	if (logged != true) {
		return (
			<div className="d-flex justify-content-end">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link to={"/register"}>
							<span className="mr-2 btn" href="#" role="button">
								Register
							</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to={"/login"}>
							<span className="btn" href="#" role="button">
								Log in
							</span>
						</Link>{" "}
					</li>
				</ul>
			</div>
		);
	} else {
		return (
			<div className="dropdown d-flex justify-content-end" id="dropdownDiv">
				<button
					className="btn btn-info dropdown-toggle"
					data-boundary="window"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Menu
				</button>
				<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
					<Link to={"/transactions"}>
						<span className="dropdown-item d-flex flex-grow-1" role="button">
							Transactions
						</span>
					</Link>
					<Link to={"/finances"}>
						<span className="dropdown-item d-flex flex-grow-1" role="button">
							Finances
						</span>
					</Link>
					<Link to={"/profile"}>
						<span className="dropdown-item d-flex flex-grow-1" role="button">
							Profile
						</span>
					</Link>
					<Link to={"/exchange"}>
						<span className="dropdown-item d-flex flex-grow-1" role="button">
							Currencies
						</span>
					</Link>
					<div className="dropdown-divider" />
					<Link to={"/"}>
						<span
							className="dropdown-item d-flex flex-grow-1"
							onClick={() => {
								actions.logOut();
							}}
							href="#"
							role="button">
							Log out
						</span>
					</Link>
				</div>
			</div>
		);
	}
}
