import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function NavLogged() {
	const { store, actions } = useContext(Context);
	let logged = store.isLogged;
	//cambiar condicion a != despues de unir con el back
	if (logged == "true") {
		return (
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
		);
	} else {
		return (
			<div className="dropdown d-flex justify-content-end" id="dropdownDiv">
				<button
					className="btn btn-dark dropdown-toggle"
					data-boundary="window"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Menu
				</button>
				<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
					<Link to={"/expenses"}>
						<span className="dropdown-item d-flex flex-grow-1" role="button">
							Expenses
						</span>
					</Link>
					<Link to={"/finances"}>
						<span className="dropdown-item d-flex flex-grow-1" role="button">
							My Finances
						</span>
					</Link>
					<Link to={"/perfil"}>
						<span className="dropdown-item d-flex flex-grow-1" role="button">
							Profile
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
