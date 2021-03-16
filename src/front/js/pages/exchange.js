import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/exchange.scss";

export const Exchange = () => {
	const { store, actions } = useContext(Context);
	{
		/* esta es la api que se va utilizar: https://api.cambio.today/v1/quotes/EUR/USD/json?quantity=1&key=8111|*sOE3drT9Umj0PzGr0Ok8rqqD_LDJS_q */
	}
	return (
		<div className="container mb-2">
			titulo
			<br />
			<div className="row" id="header">
				<div className="container breadcrumb">Currency Converter</div>
			</div>
			<br />
			<form onSubmit>
				<div className="col-lg-4 form-group d-flex flex-column">
					<label htmlFor="Amount">Amount</label>
				</div>
				<div className="col-lg-4 form-group d-flex flex-column">
					<input
						id="number"
						type="number"
						min="1"
						max="100000"
						pattern="^[0-9]+"
						placeholder="$Amount"
						required
					/>
				</div>
				<div className="col-lg-4 form-group d-flex flex-column">
					<label htmlFor="From">From</label>
				</div>
				<div className="col-lg-4 form-group d-flex flex-column">
					<select className="form-control" name="From" id="From" onChange>
						<option value="USD">United States Dollar</option>
						<option value="CRC">Costa Rica Colon</option>
						<option value="MXN">Mexican Peso</option>
						<option value="CLP">Chilean Peso</option>
						<option value="ARS">Argentine Peso</option>
						<option value="COP">Colombian Peso</option>
						<option value="PEN">Peruvian Sol</option>
						<option value="PAB">Panamanian Balboa</option>
						<option value="CAD">Canadian Dollar</option>
					</select>
				</div>
				<div className="col-lg-4 form-group d-flex flex-column">
					<label htmlFor="To">To</label>
				</div>
				<div className="col-lg-4 form-group d-flex flex-column">
					<select className="form-control" name="To" id="To" onChange>
						<option value="CRC">Costa Rica Colon</option>
						<option value="USD">United States Dollar</option>

						<option value="MXN">Mexican Peso</option>
						<option value="CLP">Chilean Peso</option>
						<option value="ARS">Argentine Peso</option>
						<option value="COP">Colombian Peso</option>
						<option value="PEN">Peruvian Sol</option>
						<option value="PAB">Panamanian Balboa</option>
						<option value="CAD">Canadian Dollar</option>
					</select>
				</div>
				<div className="col-lg-4 form-group d-flex flex-column">
					<label htmlFor="To">Result</label>
				</div>
				<div className="col-lg-4 form-group d-flex flex-column">{/*  etiqueta donde llame el resultado */}</div>
				<div className="col-lg-4 form-group ">
					<button type="reset" value="Borrar" className="btn btn-danger">
						Cancel
					</button>
					<button type="submit" className="btn btn-success">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};
