import { Context } from "../store/appContext";
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export const IncExp = () => {
	const [tipo, setTipo] = useState("");
	const [category, setCategory] = useState("");
	const [payment, setPayment] = useState("");
	const [amount, setAmount] = useState("");
	const [description, setDescription] = useState("");
	const { store, actions } = useContext(Context);

	const handleExpense = e => {
		e.preventDefault();
		if (amount === "" || category === "" || payment === "") {
			alert("Please fill all the entries");
		}

		// FETCH
		const data = { amount: amount, category: category, detail: description, payment_method: payment };
		console.log(data);

		fetch(process.env.BACKEND_URL + "/expense", {
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
				}
				return response.json();
			})
			.then(data => {
				console.log("Succesfully added expense");
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	const handleIncome = e => {
		e.preventDefault();
		if (amount === "" || description === "") {
			alert("Please fill all the entries");
		}

		// FETCH
		const data = { amount: amount, detail: description };
		console.log(data);

		fetch(process.env.BACKEND_URL + "/income", {
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
				}
				return response.json();
			})
			.then(data => {
				console.log("Succesfully added income");
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
				<h3 className="mt-2">Transactions</h3>
				<div className="">
					<form className="needs-validation">
						<div className="form-row mt-3">
							<label>Choose a type: *</label>
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
						</div>
					</form>
					{tipo == "Expense" ? (
						<form className="needs-validation" onSubmit={e => handleExpense(e)}>
							<div className="d-flex flex-column flex-grow-1">
								<div className="form-row mt-3">
									<label string="">Choose a Category: *</label>
									<select
										className="form-control"
										name="category"
										id="category"
										onChange={e => {
											setCategory(e.target.value);
										}}>
										<option value="" selected disabled hidden>
											Category
										</option>
										<option value="Home">Home</option>
										<option value="Food">Food</option>
										<option value="Transport">Transport</option>
										<option value="Services">Services</option>
										<option value="Education">Education</option>
										<option value="Clothing">Clothing</option>
										<option value="Entertainment">Entertainment</option>
									</select>
								</div>
								<div className="form-row mt-3">
									<label>Payment method: *</label>
									<select
										className="form-control"
										name="category"
										id="category"
										onChange={e => {
											setPayment(e.target.value);
										}}>
										<option value="Credit">Credit</option>
										<option value="Debit">Debit</option>
										<option value="Cash">Cash</option>
									</select>
								</div>
								<div className="form-row mt-3">
									<label>Amount: *</label>
									<input
										className="form-control"
										id="number"
										type="number"
										min="1"
										pattern="^[0-9]+"
										placeholder="Amount"
										onChange={e => {
											setAmount(e.target.value);
										}}
										required
									/>
								</div>
								<div className="form-row mt-3">
									<label>Description (optional): </label>
									<input
										type="text"
										className="form-control"
										maxLength="50"
										placeholder="Description"
										onChange={e => {
											setDescription(e.target.value);
										}}
									/>
								</div>
								<div className="mt-3 form-row justify-content-end">
									<button className="btn btn-secondary" type="reset">
										Cancel
									</button>
									<button className="btn btn-primary ml-1" type="submit">
										Add
									</button>
								</div>
							</div>
						</form>
					) : null}
					{tipo == "Income" ? (
						<form className="needs-validation" onSubmit={e => handleIncome(e)}>
							<div className="d-flex flex-column flex-grow-1">
								<div className="form-row mt-3">
									<label>Amount: *</label>
									<input
										className="form-control"
										id="number"
										type="number"
										min="1"
										pattern="^[0-9]+"
										placeholder="Amount"
										onChange={e => {
											setAmount(e.target.value);
										}}
										required
									/>
								</div>
								<div className="form-row mt-3">
									<label>Description (optional): </label>
									<input
										type="text"
										className="form-control"
										maxLength="50"
										placeholder="Description"
										onChange={e => {
											setDescription(e.target.value);
										}}
									/>
								</div>
								<div className="mt-3 form-row justify-content-end">
									<button className="btn btn-secondary" type="reset">
										Cancel
									</button>
									<button className="btn btn-primary ml-1" type="submit">
										Add
									</button>
								</div>
							</div>
						</form>
					) : null}
				</div>
			</div>
		</div>
	);
};
