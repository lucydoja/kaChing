import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Perfil = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mb-2">
			<div className="row">
				<div className="col-md">
					<h1 className="text-center">General Information</h1>
				</div>
			</div>
			<hr />
			<div className="d-flex justify-content-center">
				<form className="rounded shadow p-2" style={{ width: "550px" }}>
					<div className="form-row">
						<div className="col-md d-flex">
							<label>Total Income </label>
							<input type="number" min="0" className="form-control" placeholder="$1000" />{" "}
						</div>
						<div className="col-md">
							<select className="custom-select">
								<option selected disabled>
									Periodicity
								</option>
								<option>Diary</option>
								<option>Weekly</option>
								<option>Biweekly</option>
								<option>Monthly</option>
							</select>
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<label>Email</label>
							<input type="email" className="form-control" placeholder="@gmail.com" />
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<label>Name</label>
							<input type="text" className="form-control" placeholder="Name" />
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<label>Last Name</label>
							<input type="text" className="form-control" placeholder="Last Name" />
						</div>
					</div>
					<div className="submit-row d-flex justify-content-center my-2">
						<button type="submit" className="btn btn-primary">
							Accept
						</button>
					</div>
				</form>
			</div>
			<div className="row mt-3">
				<div className="col-md">
					<p className="text-center">
						<Link to="/">Change Password</Link>
					</p>
				</div>
			</div>
			<div className="posicionFooter" />
		</div>
	);
};
