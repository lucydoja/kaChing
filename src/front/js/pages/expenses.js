import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import shortid from "shortid";
import "../../styles/expenses.scss";

export const Expenses = () => {
	const { store, actions } = useContext(Context);
	const [category, setCategory] = useState("");
	const [payment, setPayment] = useState("");
	const [amount, setAmount] = useState("");
	const [description, setDescription] = useState("");
	const [tarea, setTarea] = useState("");
	const [arrayTareas, setArrayTareas] = useState([]);
	const agregarTarea = e => {
		e.preventDefault();
		const data = { category, payment, description, amount };
		console.log(data);
		setArrayTareas([
			...arrayTareas,

			// id: shortid.generate(),
			data
		]);
	};

	const eliminaTarea = id => {
		let newList = arrayTareas.filter(item => item.id !== id);
		setArrayTareas(newList);
	};
	return (
		<div className="container mb-2">
			<div className="row">
				<div className="container breadcrumb">Finance record</div>
			</div>
			<div className="row d-flex flex-column">
				<form onSubmit={e => agregarTarea(e)}>
					<div className="col-lg-4 form-group d-flex flex-column">
						<label string="">Choose a Category:</label>
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
						<label string="cars">Payment method:</label>
						<select
							className="form-control"
							name="payment"
							id="payment"
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
						<label string="cars">Payment Amount*:</label>
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
						<label string="cars">Some Description*:</label>
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
						<button type="reset" className="btn btn-danger">
							Cancel
						</button>
						<button type="submit" className="btn btn-success">
							Submit
						</button>
					</div>
				</form>
				{/* table where we put the information about category, payment ... */}
				<table className="table table-responsive">
					<thead>
						<tr className="dlist-group-item shadow">
							<th>Category</th>
							<th>Payment Method</th>
							<th>Payment Amount</th>
							<th>Description</th>
						</tr>
					</thead>
					{arrayTareas.map((item, index) => (
						<div key={index}>
							<tbody>
								<tr className="dlist-group-item shadow">
									<th scope="row" />
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
										<button
											type="button"
											className="btn btn-outline-danger "
											onClick={() => eliminaTarea(item.id)}>
											<i className="fas fa-times" />
										</button>
									</td>
								</tr>
							</tbody>
						</div>
					))}
				</table>

				{/* <ul className="container">
					{arrayTareas.map(item => (
						<tr className="list-group-item shadow" key={item.id}>
							<span className="d-flex justify-content-between">
								{item.data.category} {item.data.payment} {item.data.description} {item.data.amount}
							</span>
							<button
								type="button"
								className="btn btn-outline-danger "
								onClick={() => eliminaTarea(item.id)}>
								<i className="fas fa-times" />
							</button>
						</tr>
					))}
				</ul> */}
			</div>
			<div className="posicionFooter" />
		</div>
	);
};
