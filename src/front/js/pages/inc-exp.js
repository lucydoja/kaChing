import { Context } from "../store/appContext";
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export const IncExp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [tipo, setTipo] = useState("");
	const [redirect, setRedirect] = useState(false);
	const { store, actions } = useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || password === "") {
			alert("Please fill all the entries");
		}

		// FETCH
		const data = {
			password: password,
			email: email
		};

		fetch(process.env.BACKEND_URL + "/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => {
				if (!response.ok) {
					response.text().then(text => alert(text));
					throw Error(response.statusText);
				} else {
					setRedirect(true);
				}
				return response.json();
			})
			.then(data => {
				sessionStorage.setItem("user_token", data.token);
				sessionStorage.setItem("is_logged", "true");
				actions.logged();
				console.log("Succesful log in");
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div className="container d-flex justify-content-center mt-2 mb-5">
			<div className="formulario mb-5">
				<div className="alert alert-info" role="alert">
					This step is very important! Don&apos;t forget to upload your <strong>expenses</strong> and{" "}
					<strong>incomes</strong> so you can keep track of your money here in <strong>KaChing! </strong>
				</div>
				<h3 className="mt-2">Expenses / Income</h3>
				<div className="">
					<form className="needs-validation" onSubmit={e => handleSubmit(e)}>
						<div className="form-row mt-3">
							<select
								className="form-control"
								name="security"
								id="security"
								onChange={e => {
									setTipo(e.target.value);
								}}
								required>
								<option value="" selected disabled hidden>
									Type
								</option>
								<option value="Expense">Expense</option>
								<option value="Income">Income</option>
							</select>
							{tipo == "Expense" ? (
								<div className="">
									<div className="form-row mt-3">
										<label string="">Choose a Category:</label>
										<select className="form-control" name="category" id="category">
											<option value="" selected disabled hidden>
												Category
											</option>
											<option value="home">Home</option>
											<option value="food">Food</option>
											<option value="transport">Transport</option>
											<option value="services">Services</option>
											<option value="education">Education</option>
											<option value="clothing">Clothing</option>
											<option value="entertainment">Entertainment</option>
										</select>
									</div>
									<div className="form-row mt-3">
										<label string="cars">Payment method:</label>
										<select className="form-control" name="category" id="category">
											<option value="Card">Card</option>
											<option value="Cash">Cash</option>
										</select>
									</div>
									<div className="form-row mt-3">
										<input
											className="form-control"
											id="number"
											type="number"
											min="1"
											pattern="^[0-9]+"
											placeholder="$Amount"
											required
										/>
									</div>
									<div className="form-row mt-3">
										<input
											type="text"
											className="form-control"
											maxLength="30"
											placeholder="Description"
										/>
									</div>
									<div className="form-row mt-3">
										<button type="reset" className="btn btn-danger">
											Cancel
										</button>
										<button type="submit" className="btn btn-success">
											Submit
										</button>
									</div>
								</div>
							) : null}
							{tipo == "Income" ? (
								<div className="form-row mt-3">
									<button type="reset" className="btn btn-danger">
										Cancel
									</button>
									<button type="submit" className="btn btn-success">
										Submit
									</button>
								</div>
							) : null}
							<div className="valid-feedback" />
						</div>
					</form>
				</div>
			</div>

			{redirect ? <Redirect to="/" /> : ""}
		</div>
	);
};
