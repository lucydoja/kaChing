import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Perfil = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [editar, setEditar] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const data = {
			firt_name: name,
			last_name: lastname
		};
		// // fetch de metodo put

		fetch(process.env.BACKEND_URL + "/api/profile", {
			method: "PUT",
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
			})
			.then(data => {
				console.log("Succesful change profile");
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return editar ? (
		<div className="container d-flex justify-content-center mt-2">
			<div className="formulario2 my-5 rounded shadow p-2">
				<h3 className="mt-2">PROFILE</h3>
				<div className="form-row my-2">
					<div className="col-md">
						<label className="ml-2">Name</label>
						<input
							type="text"
							className="form-control"
							placeholder={store.user.first_name}
							required
							onChange={e => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className="form-row my-2">
					<div className="col-md">
						<label className="ml-2">Last Name</label>
						<input
							type="text"
							className="form-control"
							placeholder={store.user.last_name}
							required
							onChange={e => setLastname(e.target.value)}
						/>
					</div>
				</div>
				<p className="text-center">
					<Link to="/reset">Change Password</Link>
				</p>
				<div className="submit-row d-flex justify-content-center my-2">
					<button type="reset" className="btn btn-primary mr-2" onClick={e => setEditar(false)}>
						Cancel
					</button>
					<button type="submit" className="btn btn-outline-dark ml-2">
						Accept
					</button>
				</div>
			</div>

			<div className="posicionFooter" />
		</div>
	) : (
		<div className="container d-flex justify-content-center mt-2">
			<form className="formulario2 my-5 rounded shadow p-2">
				<h2 className="mt-2 text-center">Profile</h2>
				<div className="form-row my-2">
					<div className="col-md">
						<label className="ml-2">Name</label>
						<div className="form-control"> {store.user.first_name} </div>
					</div>
				</div>
				<div className="form-row my-2">
					<div className="col-md">
						<label className="ml-2">Last Name</label>
						<div className="form-control"> {store.user.last_name} </div>
					</div>
				</div>
				<p className="text-center">
					<Link to="/reset">Change Password</Link>
				</p>
				<div className="submit-row d-flex justify-content-center my-2">
					<button type="reset" className="btn btn-primary mr-1" onClick={e => setEditar(true)}>
						Editar
					</button>
				</div>
			</form>

			<div className="posicionFooter" />
		</div>
	);
};
