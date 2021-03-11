import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Perfil = () => {
	const { store, actions } = useContext(Context);
	const [total, setTotal] = useState(0);
	const [periodicity, setPeriodicity] = useState("");
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		if (periodicity === "Periodicity") {
			alert("Please select periodicity");
		}

		const data = {
			total: total,
			periodicity: periodicity,
			name: name,
			lastname: lastname
		};
	};
	return (
		<div className="container mb-2">
			<div className="row">
				<div className="col-md">
					<h1 className="text-center">General Information</h1>
				</div>
			</div>
			<hr />
			<div className="d-flex justify-content-center">
				<form className="rounded shadow p-2" style={{ width: "550px" }} onSubmit={e => handleSubmit(e)}>
					<div className="form-row">
						<div className="col-md d-flex">
							<label>Total Income </label>
							<input
								type="number"
								min="0"
								className="form-control"
								placeholder="$1000"
								required
								onChange={e => setTotal(e.target.value)}
							/>
						</div>
						<div className="col-md">
							<select className="custom-select" required onChange={e => setPeriodicity(e.target.value)}>
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
							<label>Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Name"
								required
								onChange={e => setName(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<label>Last Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Last Name"
								required
								onChange={e => setLastname(e.target.value)}
							/>
						</div>
					</div>
					<div className="submit-row d-flex justify-content-center my-2">
						<button type="submit" className="btn btn-primary mr-1">
							Accept
						</button>
						<button type="reset" className="btn btn-danger ml-1">
							Cancel
						</button>
					</div>
				</form>
			</div>
			<div className="row mt-3">
				<div className="col-md">
					<p className="text-center">
						<Link to="/reset">Change Password</Link>
					</p>
				</div>
			</div>
			<div className="posicionFooter" />
		</div>
	);
};
