import { Context } from "../store/appContext";
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
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
			email: email.toLowerCase()
		};

		fetch(process.env.BACKEND_URL + "/api/login", {
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
				sessionStorage.setItem("access_token", data.access_token);
				sessionStorage.setItem("is_logged", "true");
				actions.logged();
				actions.getIncome();
				actions.getExpense();
				actions.getUser();
				console.log("Succesful log in");
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div className="container d-flex justify-content-center mt-2 mb-5">
			<div className="formulario mb-5">
				<h3 className="mt-2">LOG IN</h3>
				<div className="alert alert-info" role="alert">
					Welcome back to <strong>KaChing! </strong>
					we are so happy to see you again! Please log in to access your account.
				</div>
				<div className="">
					<form className="needs-validation" onSubmit={e => handleSubmit(e)}>
						<div className="form-row mt-3">
							<label>Email*</label>
							<input
								type="email"
								className="form-control"
								maxLength="120"
								onChange={e => {
									setEmail(e.target.value);
								}}
								required
							/>
							<div className="valid-feedback" />
						</div>
						<div className="form-row mt-3">
							<label>Password* &nbsp;&nbsp;</label>
							<Link to={"/reset"}>
								<p>Did you forget your password?</p>
							</Link>
							<input
								type="password"
								className="form-control"
								minLength="8"
								maxLength="120"
								onChange={e => {
									setPassword(e.target.value);
								}}
								required
							/>
							<div className="valid-feedback" />
						</div>

						<div className="mt-3 form-row justify-content-end">
							<Link to={"/"}>
								<button className="btn btn-secondary btn-md" type="reset">
									<p className="boton-link"> Cancel</p>
								</button>
							</Link>
							<button className="btn btn-primary ml-1" type="submit">
								Log in
							</button>
						</div>
						<div className="d-flex justify-content-center mt-3 row">
							<span>You don&apos;t have an account? &nbsp;</span>
							<Link to={"/register"}>
								<p> Register</p>
							</Link>
						</div>
					</form>
				</div>
			</div>

			{redirect ? <Redirect to="/finances" /> : ""}
		</div>
	);
};
