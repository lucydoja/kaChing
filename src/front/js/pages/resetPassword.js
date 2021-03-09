import { Context } from "../store/appContext";
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export const ResetPass = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");
	const [securityQ, setSecurityQ] = useState("");
	const [securityA, setSecurityA] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || password1 === "" || password2 === "" || securityA === "" || securityQ === "") {
			alert("Please fill all the entries");
		} else if (password1 != password2) {
			alert("Your confimation password must be identical to your new password ");
		}

		// FETCH
		const data = {
			email: email,
			password: password2,
			securityA: securityA,
			securityQ: securityQ
		};
		console.log(data);

		fetch(process.env.BACKEND_URL + "/reset", {
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
				console.log("Password reset");
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};
	return (
		<div className="container d-flex justify-content-center mt-2 mb-5">
			<div className="formulario mb-5">
				<div className="alert alert-info" role="alert">
					Oh no! It seams that you forgot your <strong>KaChing! </strong>
					password, please fill the information bellow to reset it!
				</div>
				<h3 className="mt-2">Reset Password</h3>
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
							<label>Pick your security question*</label>
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
							<label>Answer*</label>
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
						<div className="form-row mt-3">
							<label>New password*</label>
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
						<div className="mt-3 form-row justify-content-end">
							<Link to={"/login"}>
								<button className="btn btn-secondary btn-md" type="reset">
									<p className="boton-link"> Cancel</p>
								</button>
							</Link>

							<button className="btn btn-primary ml-2 btn-md" type="submit">
								Reset Password
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
