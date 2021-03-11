import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import shortid from "shortid";
import "../../styles/expenses.scss";

export const Expenses2 = () => {
	const { store, actions } = useContext(Context);
	const [category, setCategory] = useState("");
	const [payment, setPayment] = useState("");
	const [amount, setAmount] = useState("");
	const [description, setDescription] = useState("");
	const [tarea, setTarea] = useState("");
	const [arrayTareas, setArrayTareas] = useState([]);
	const agregarTarea = e => {
		e.preventDefault();
		const data = { category, payment, description, amount, id: shortid.generate() };

		actions.addExpense(data);
	};

	const eliminaTarea = id => {
		let newList = arrayTareas.filter(item => item.data.id !== id);
		setArrayTareas(newList);
	};
	return (
		<div className="container mb-2">
			<div className="row">
				<div className="container breadcrumb">Finance record</div>
			</div>
			<div className="row d-flex flex-column">
				{/* --------------Here is initial form----------------------- */}
				<form onSubmit={e => agregarTarea(e)}>
					<div className="col-lg-4 form-group d-flex flex-column">
						<label htmlFor="category">Choose a Category:</label>
						<select
							className="form-control"
							name="category"
							id="category"
							onChange={e => setCategory(e.target.value)}>
							<option selected value="Choose a Category">
								Choose your Category
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
					<div className="col-lg-4 form-group d-flex flex-column">
						<label htmlFor="Payment">Payment method:</label>
						<select
							className="form-control"
							name="payment"
							id="payment"
							required
							onChange={e => setPayment(e.target.value)}>
							<option selected value="Choose your Payment">
								Choose your Payment
							</option>
							<option value="Card">Card</option>
							<option value="Cash">Cash</option>
							<option value="credit">Credit</option>
						</select>
					</div>

					<div className="col-lg-4 form-group d-flex flex-column">
						<label htmlFor="amount">Payment Amount*:</label>
						<input
							onChange={e => setAmount(e.target.value)}
							value={amount}
							id="number"
							type="number"
							min="1"
							pattern="^[0-9]+"
							placeholder="$Amount"
							required
						/>
					</div>
					<div className="col-lg-4 form-group d-flex flex-column">
						<label htmlFor="description">Some Description*:</label>
						<input
							onChange={e => setDescription(e.target.value)}
							value={description}
							type="text"
							className="form-control"
							maxLength="30"
							placeholder="Description"
							required
						/>
					</div>
					<div className="col-lg-4 form-group ">
						<button type="reset" value="Borrar" className="btn btn-danger">
							Cancel
						</button>
						<button type="submit" className="btn btn-success">
							Submit
						</button>
					</div>
				</form>
				{/*--------- And here is when the code of form are end--------------- */}
				{/* table where we put the information about category, payment and others... */}
				<table className="table-transactions table-reflow">
					<thead>
						<tr className="table table-reflow text-center">
							<th>Category</th>

							<th>Payment Method</th>

							<th>Payment Amount</th>

							<th>Description</th>
							<th>Delete</th>
						</tr>
					</thead>

					<tbody className="">
						{store.expenses.map((item, index) => (
							<tr key={index} className="contenido-transactions text-center ">
								<td>
									<span>{item.category}</span>
								</td>
								<td>
									<span>{item.payment}</span>
								</td>
								<td>
									<span>{item.amount}</span>
								</td>
								<td>
									<span>{item.description}</span>
								</td>
								<td>
									<i className="fas fa-times fa-sm" onClick={() => actions.deleteExpense(item.id)} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{/* And here is when the code of table ends */}
			</div>

			<div className="posicionFooter" />
		</div>
	);
};
