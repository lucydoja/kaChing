import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Expenses = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mb-2">
			<div className="row">
				<div className="breadcrumb">Finance record</div>
			</div>
			<div className="row">
				<form>
					<label string="cars">Choose a Category:</label>
					<select name="category" id="category">
						<option value="home">Home</option>
						<option value="food">Food</option>
						<option value="transport">Transport</option>
						<option value="services">Services</option>
						<option value="education">Education</option>
						<option value="clothing">Clothing</option>
						<option value="entertainment">Entertainment</option>
					</select>
					<label string="cars">Payment method:</label>
					<select name="category" id="category">
						<option value="Card">Card</option>
						<option value="Cash">Cash</option>
					</select>
					<input id="number" type="number" min="1" pattern="^[0-9]+" placeholder="$Amount" required />
					<textarea maxLength="20" placeholder="Description" required />
					<button type="submit">Submit</button>
					<button type="reset">Cancel</button>
				</form>
			</div>
			<div className="posicionFooter" />
		</div>
	);
};
