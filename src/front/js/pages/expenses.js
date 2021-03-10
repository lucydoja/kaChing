import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import shortid from "shortid";

export const Expenses = () => {
	const { store, actions } = useContext(Context);

	const [tarea, setTarea] = React.useState("");
	const [arrayTareas, setArrayTareas] = React.useState([]);
	const agregarTarea = e => {
		e.preventDefault();

		setArrayTareas([
			...arrayTareas,
			{
				id: shortid.generate(),
				nombreTarea: tarea
			}
		]);
		setTarea("");
	};

	const eliminaTarea = id => {
		let newList = arrayTareas.filter(item => item.id !== id);
		setArrayTareas(newList);
		//-----------------------------------------------//
	};
	return (
		<div className="container mb-2">
			<div className="row">
				<div className="container breadcrumb">Finance record</div>
			</div>
			<div className="row d-flex flex-column">
				<form onSubmit={agregarTarea}>
					<div className="col-lg-4 form-group d-flex flex-column">
						<label string="">Choose a Category:</label>
						<select
							className="form-control"
							name="category"
							id="category"
							onChange={e => setTarea(e.target.value)}
							value={tarea}>
							<option value="" selected disabled hidden>
								Choose a Category
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
						<select
							className="form-control"
							name="category"
							id="category"
							onChange={e => setTarea(e.target.value)}
							value={tarea}>
							<option value="" selected disabled hidden>
								Choose your Payment
							</option>
							<option value="Card">Card</option>
							<option value="Cash">Cash</option>
							<option value="credit">credit</option>
						</select>
					</div>
					<div className="col-lg-4 form-group d-flex flex-column">
						<input
							onChange={e => setTarea(e.target.value)}
							value={tarea}
							id="number"
							type="number"
							min="1"
							pattern="^[0-9]+"
							placeholder="$Amount"
						/>
					</div>
					<div className="form-row mt-3">
						<input type="text" className="form-control" maxLength="30" placeholder="Description" />
					</div>
					<div className="form-row mt-3">
						<button type="reset" className="btn btn-danger">
							Cancel
						</button>
						<button type="submit" className="btn btn-success">
							Submit
						</button>
					</div>
				</form>
				<ul className="list-group ">
					{arrayTareas.map(item => (
						<tr className="list-group-item shadow d-flex justify-content-between" key={item.id}>
							<span className="lead">{item.nombreTarea}</span>

							<button
								type="button"
								className="btn btn-outline-danger "
								onClick={() => eliminaTarea(item.id)}>
								<i className="fas fa-times" />
							</button>
						</tr>
					))}
				</ul>
			</div>
			<div className="posicionFooter" />
		</div>
	);
};