import { Context } from "../store/appContext";
import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import shortid from "shortid";
import "../../styles/expenses.scss";

export const Transactions = () => {
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
		const data = {
			amount: amount,
			category: category,
			detail: description,
			payment_method: payment,
			id: shortid.generate()
		};
		console.log(data);
		actions.addExpense(data);
		document.getElementById("formulario-transactions").reset();
		setDescription("");
		setAmount("");
	};

	const handleIncome = e => {
		e.preventDefault();
		if (amount === "") {
			alert("Please fill all the entries");
		}
		const data = { amount: amount, detail: description, id: shortid.generate() };
		actions.addIncome(data);
		document.getElementById("formulario-transactions").reset();
		setDescription("");
		setAmount("");
	};

	return (
		<div className="container d-flex justify-content-center mt-2 mb-5">
			<div className="formulario mb-5 mt-3">
				<h3 className="mt-2">TRANSACTIONS</h3>
				<div className="alert alert-info" role="alert">
					This step is very important! Don&apos;t forget to upload your <strong>expenses</strong> and{" "}
					<strong>incomes</strong> so you can keep track of your money here in <strong>KaChing! </strong>
				</div>
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
						<div>
							<form
								className="needs-validation"
								id="formulario-transactions"
								onSubmit={e => handleExpense(e)}>
								<div className="d-flex flex-column flex-grow-1">
									<div className="form-row mt-3">
										<label string="">Choose a Category: *</label>
										<select
											className="form-control"
											name="category"
											onChange={e => {
												setCategory(e.target.value);
											}}
											id="select-category"
											required>
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
										<label>Payment method: *</label>
										<select
											className="form-control"
											id="select-payment"
											name="category"
											onChange={e => {
												setPayment(e.target.value);
											}}
											required>
											<option value="" selected disabled hidden>
												Payment method
											</option>
											<option value="credit">Credit</option>
											<option value="debit">Debit</option>
											<option value="cash">Cash</option>
										</select>
									</div>
									<div className="form-row mt-3">
										<label>Amount: *</label>
										<input
											className="form-control"
											id="number"
											type="number"
											min="1"
											max="10000000"
											pattern="^[0-9]+"
											placeholder="Amount"
											onChange={e => {
												setAmount(parseInt(e.target.value));
											}}
											required
										/>
									</div>
									<div className="form-row mt-3">
										<label>Description: *</label>
										<input
											type="text"
											className="form-control"
											maxLength="30"
											placeholder="Description"
											onChange={e => {
												setDescription(e.target.value);
											}}
											required
										/>
									</div>
									<div className="mt-3 form-row justify-content-end">
										<button className="btn btn-outline-dark" type="reset">
											Cancel
										</button>
										<button className="btn btn-info ml-1" type="submit">
											Add
										</button>
									</div>
								</div>
							</form>
							{/*--------- And here is when the code of form are end--------------- */}
							{/* table where we put the information about category, payment and others... */}
							{store.expenses.length != 0 ? (
								<div>
									<div className="alert alert-danger mt-3" role="alert">
										Be careful, your won&apos;t be able to delete your transactions after 15 days!
									</div>
									<div className="contiene-tabla">
										<table className="table-transactions1  mt-3">
											<thead>
												<tr className="table-names  text-center">
													<th className="columna-tabla">&nbsp;&nbsp;Category&nbsp;&nbsp;</th>
													<th className="columna-tabla">&nbsp;&nbsp;Method&nbsp;&nbsp;</th>
													<th className="columna-tabla">&nbsp;&nbsp;Amount&nbsp;&nbsp;</th>
													<th className="columna-tabla">
														&nbsp;&nbsp;Description&nbsp;&nbsp;
													</th>
													<th className="columna-tabla2">&nbsp;&nbsp;Delete&nbsp;&nbsp;</th>
												</tr>
											</thead>
											<tbody className="mt-2">
												{store.expenses.map((item, index) => (
													<tr key={index} className="contenido-transactions text-center ">
														<td className="columna-tabla">
															<span className="m-1">{item.category}</span>
														</td>
														<td className="columna-tabla">
															<span className="m-1">{item.payment_method}</span>
														</td>
														<td className="columna-tabla">
															<span className="m-1">{item.amount}</span>
														</td>
														<td className="columna-tabla">
															<span className="m-1">{item.detail}</span>
														</td>
														<td className="columna-tabla2">
															<i
																className="fas fa-times fa-sm"
																onClick={() => actions.deleteExpense(item.id)}
															/>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							) : /* And here is when the code of table ends */
							null}
						</div>
					) : null}
					{tipo == "Income" ? (
						<div>
							<form
								className="needs-validation"
								id="formulario-transactions"
								onSubmit={e => handleIncome(e)}>
								<div className="d-flex flex-column flex-grow-1">
									<div className="form-row mt-3">
										<label>Amount: *</label>
										<input
											className="form-control"
											id="number"
											type="number"
											min="1"
											max="10000000"
											pattern="^[0-9]+"
											placeholder="Amount"
											onChange={e => {
												setAmount(parseInt(e.target.value));
											}}
											required
										/>
									</div>
									<div className="form-row mt-3">
										<label>Description: *</label>
										<input
											type="text"
											className="form-control"
											maxLength="30"
											placeholder="Description"
											onChange={e => {
												setDescription(e.target.value);
											}}
											required
										/>
									</div>
									<div className="mt-3 form-row justify-content-end">
										<button className="btn btn-outline-dark" type="reset">
											Cancel
										</button>
										<button className="btn btn-info ml-1" type="submit">
											Add
										</button>
									</div>
								</div>
							</form>
							{/*--------- And here is when the code of form are end--------------- */}
							{/* table where we put the information about category, payment and others... */}
							{store.incomes.length != 0 ? (
								<div>
									<div className="alert alert-danger mt-3" role="alert">
										Be careful, your won&apos;t be able to delete your transactions after 15 days!
									</div>
									<table className="table-transactions table-reflow mt-3">
										<thead className="mt-2">
											<tr className="p-2 table-names table-reflow text-center">
												<th className="columna-tabla">&nbsp;&nbsp;Amount &nbsp;&nbsp;</th>
												<th className="columna-tabla">&nbsp;&nbsp;Description&nbsp;&nbsp;</th>
												<th className="columna-tabla2">&nbsp;&nbsp;Delete&nbsp;&nbsp;</th>
											</tr>
										</thead>
										<tbody className="mt-2">
											{store.incomes.map((item, index) => (
												<tr key={index} className="contenido-transactions text-center mt-3">
													<td className="columna-tabla">
														<span>{item.amount}</span>
													</td>
													<td className="columna-tabla">
														<span>{item.detail}</span>
													</td>
													<td className="columna-tabla2">
														<i
															className="fas fa-times fa-sm"
															onClick={() => actions.deleteIncome(item.id)}
														/>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							) : /* And here is when the code of table ends */
							null}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};
