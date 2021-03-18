import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Exchange = () => {
	const [USDCRC, setUSDCRC] = useState("");
	const [first, setFirst] = useState("USD");
	const [second, setSecond] = useState("CRC");
	const [rate, setRate] = useState("");
	const [amount, setAmount] = useState("");
	const [result, setResult] = useState("");

	function getExchange() {
		fetch(`https://v6.exchangerate-api.com/v6/b8c46a1b76e331fd931c3c4d/pair/${first}/${second}`)
			.then(resp => resp.json())

			.then(data => {
				let change = data.conversion_rate;
				// setRate(change);
				getresult(change);
			})

			.catch(error => console.log("Error loading message from backend", error));
	}
	function getresult(vari) {
		setResult(Math.round(amount * vari * 100) / 100);
	}

	return (
		<div className="container d-flex justify-content-center mt-2">
			<div className="formulario2 mb-5 mt-3 rounded shadow p-2 row exchange">
				<h3 className="mt-2">Currency Converter</h3>
				<div className="d-flex flex-column">
					<div className="col-md">
						<label className="ml">From</label>
					</div>
					<div className="col-sm">
						<select className="form-control" value={first} onChange={e => setFirst(e.target.value)}>
							<option value="CRC">Costa Rica Colon</option>
							<option value="USD">United States Dollar</option>
							<option value="MXN">Mexican Peso</option>
							<option value="CLP">Chilean Peso</option>
							<option value="ARS">Argentine Peso</option>
							<option value="COP">Colombian Peso</option>
							<option value="PEN">Peruvian Sol</option>
							<option value="PAB">Panamanian Balboa</option>
							<option value="CAD">Canadian Dollar</option>
							<option value="EUR">Euro</option>
						</select>
					</div>
					<br />
					<div className="col-md">
						<label className="ml">To</label>
					</div>
					<div className="col-sm">
						<select className="form-control" value={second} onChange={e => setSecond(e.target.value)}>
							<option value="CRC">Costa Rica Colon</option>
							<option value="USD">United States Dollar</option>
							<option value="MXN">Mexican Peso</option>
							<option value="CLP">Chilean Peso</option>
							<option value="ARS">Argentine Peso</option>
							<option value="COP">Colombian Peso</option>
							<option value="PEN">Peruvian Sol</option>
							<option value="PAB">Panamanian Balboa</option>
							<option value="CAD">Canadian Dollar</option>
							<option value="EUR">Euro</option>
						</select>
					</div>
					<br />
					<div className="col-md">
						<label className="ml">Amount</label>
					</div>
					<div className="col-md">
						<input
							onChange={e => setAmount(e.target.value)}
							id="number"
							type="number"
							min="1"
							max="10000"
							pattern="^[0-9]+"
							placeholder="Amount"
							className="form-control"
							required
						/>
					</div>
					<br />
					<div className="d-flex justify-content-center">
						<label className="ml">
							<h5>
								<strong>Result</strong>
							</h5>
						</label>
					</div>
					<div className="col-sm">
						<div className="d-flex justify-content-center">
							<div className="p-2">
								{amount} {first} = <strong>{result}</strong> {second}
							</div>
						</div>
					</div>

					<button
						onClick={() => {
							getExchange();
						}}
						className="btn btn-info btn-lg">
						Convert
					</button>
				</div>
			</div>
			<div>
				<div className="posicionFooter" />
			</div>
		</div>
	);
};
