import { Context } from "../store/appContext";
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [user_name, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [redirect, setRedirect] = useState(false);
	const { store, actions } = useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();
		if (user_name === "" || password === "") {
			alert("Please fill all the entries");
		}

		// FETCH
		const data = {
			password: password,
			user_name: user_name
		};

		fetch("https://3000-purple-tick-m9my33f9.ws-us03.gitpod.io/login", {
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
				actions.loadFavorites();
				console.log("Succesful log in");
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div className="container d-flex justify-content-center">
			<div className="formulario-login">
				<h3 className="mt-2">Log in</h3>
				<div className="">
					<form className="needs-validation" onSubmit={e => handleSubmit(e)}>
						<div className="form-row mt-3">
							<label>Username*</label>

							<input
								type="text"
								className="form-control"
								minLength="5"
								maxLength="80"
								onChange={e => {
									setUser(e.target.value);
								}}
								required
							/>
						</div>
						<div className="form-row mt-3">
							<label>Password*</label>
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
							<button className="btn btn-secondary" type="reset">
								Cancel
							</button>
							<button className="btn btn-primary ml-1" type="submit">
								Log in
							</button>
						</div>
					</form>
				</div>
			</div>

			{redirect ? <Redirect to="/" /> : ""}
		</div>
	);
};
