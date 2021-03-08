import { Context } from "../store/appContext";
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export const Register = () => {
	const [first_name, setFirst] = useState("");
	const [last_name, setLast] = useState("");
	const [user_name, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || password === "" || first_name === "" || last_name === "" || user_name === "") {
			alert("Please fill all the entries");
		}

		// FETCH
		const data = {
			email: email,
			password: password,
			first_name: first_name,
			last_name: last_name,
			user_name: user_name
		};

		fetch("https://3000-purple-tick-m9my33f9.ws-us03.gitpod.io/register", {
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
				console.log("New user was registered");
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div className="container d-flex justify-content-center mt-2 mb-5">
			<div className="formulario mb-5">
				<h3 className="mt-2">Register</h3>
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
							<label>First Name*</label>
							<input
								type="text"
								className="form-control"
								maxLength="120"
								onKeyDown={() => {
									return "/[a-z, ]/i.test(event.key)";
								}}
								onChange={e => {
									setFirst(e.target.value);
								}}
								required
							/>
							<div className="valid-feedback" />
						</div>
						<div className="form-row mt-3">
							<label>Last Name*</label>
							<input
								type="text"
								className="form-control"
								maxLength="120"
								onKeyDown={() => {
									return "/[a-z, ]/i.test(event.key)";
								}}
								onChange={e => {
									setLast(e.target.value);
								}}
								required
							/>
							<div className="valid-feedback" />
						</div>
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
							<label>Password*</label>
							<input
								type="password"
								minLength="8"
								maxLength="120"
								className="form-control"
								onChange={e => {
									setPassword(e.target.value);
								}}
								required
							/>
							<div className="valid-feedback" />
						</div>

						<div className="mt-3 form-row justify-content-end">
							<button className="btn btn-secondary btn-md" type="reset">
								Cancel
							</button>
							<button className="btn btn-primary ml-2 btn-md" type="submit">
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className="posicionFooter" />
			{redirect ? <Redirect to="/login" /> : ""}
		</div>
	);
};
