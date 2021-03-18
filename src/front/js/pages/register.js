import { Context } from "../store/appContext";
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";

export const Register = () => {
	const [first_name, setFirst] = useState("");
	const [last_name, setLast] = useState("");
	const [email, setEmail] = useState("");
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");
	const [securityQ, setSecurityQ] = useState("");
	const [securityA, setSecurityA] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (
			email === "" ||
			password1 === "" ||
			password2 === "" ||
			first_name === "" ||
			last_name === "" ||
			securityA === "" ||
			securityQ === ""
		) {
			alert("Please fill all the entries");
		} else if (password1 != password2) {
			alert("Your confimation password must be identical to password ");
		}

		// FETCH
		const data = {
			email: email.toLowerCase(),
			password: password2,
			first_name: first_name.toLowerCase(),
			last_name: last_name.toLowerCase(),
			security_answer: securityA.toLowerCase(),
			security_question: securityQ
		};
		console.log(data);

		fetch(process.env.BACKEND_URL + "/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => {
				if (!response.ok) {
					alert("The data submitted is incorrect");
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
				<h3 className="mt-2">REGISTER</h3>
				<div className="alert alert-info" role="alert">
					Welcome to <strong>KaChing! </strong>
					the app that allows you to take control over your finances. Please leave your information bellow to
					be part of this awesome community!
				</div>
				<div className="">
					<form className="needs-validation" onSubmit={e => handleSubmit(e)}>
						<div className="form-row mt-3">
							<label>First Name*</label>
							<input
								type="text"
								className="form-control"
								maxLength="120"
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
									setPassword1(e.target.value);
								}}
								required
							/>
							<div className="valid-feedback" />
						</div>
						<div className="form-row mt-3">
							<label>Confirm password*</label>
							<input
								type="password"
								minLength="8"
								maxLength="120"
								className="form-control"
								onChange={e => {
									setPassword2(e.target.value);
								}}
								required
							/>
							<div className="valid-feedback" />
						</div>
						<div className="form-row mt-3">
							<label>Pick a security question* &nbsp;</label>
							<OverlayTrigger
								key="top"
								placement="top"
								overlay={
									<Tooltip id={`tooltip-top`}>
										This will be your security question if you forget your password
									</Tooltip>
								}>
								<a>
									<i className="fas fa-info-circle" />
								</a>
							</OverlayTrigger>
							<select
								className="form-control"
								name="security"
								id="security"
								onChange={e => {
									setSecurityQ(e.target.value);
								}}
								required>
								<option value="" selected disabled hidden>
									Security question
								</option>
								<option value="Name your first pet">Name your first pet</option>
								<option value="First city you lived in">First city you lived in</option>
								<option value="Favorite dish">Favorite dish</option>
							</select>
							<div className="valid-feedback" />
						</div>

						<div className="form-row mt-3">
							<label>Security answer* &nbsp;</label>
							<OverlayTrigger
								key="top"
								placement="top"
								overlay={
									<Tooltip id={`tooltip-top`}>
										This will be your security answer if you forget your password
									</Tooltip>
								}>
								<a>
									<i className="fas fa-info-circle" />
								</a>
							</OverlayTrigger>
							<input
								type="text"
								className="form-control"
								maxLength="120"
								onChange={e => {
									setSecurityA(e.target.value);
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

							<button className="btn btn-primary ml-2 btn-md" type="submit">
								Register
							</button>
						</div>
						<div className="d-flex justify-content-center mt-3 row">
							<span>You already have an account? &nbsp;</span>
							<Link to={"/login"}>
								<p> Log in</p>
							</Link>
						</div>
					</form>
				</div>
			</div>
			<div className="posicionFooter" />
			{redirect ? <Redirect to="/login" /> : ""}
		</div>
	);
};
