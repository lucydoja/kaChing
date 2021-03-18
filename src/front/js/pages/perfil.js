import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Perfil = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState(store.user.first_name);
	const [lastname, setLastname] = useState(store.user.last_name);
	const [editar, setEditar] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const data = {
			first_name: name.toLowerCase(),
			last_name: lastname.toLowerCase()
		};
		// // fetch de metodo put

		let access_token = sessionStorage.getItem("access_token");
		fetch(process.env.BACKEND_URL + "/api/profile", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + access_token
			},
			body: JSON.stringify(data)
		})
			.then(response => {
				if (!response.ok) {
					alert("The data submitted is incorrect");
					throw Error(response.statusText);
				}
			})
			.then(data => {
				setEditar(false);
				actions.getUser();
				console.log("Succesful change in profile");
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return editar ? (
		<div className="container d-flex justify-content-center mt-2">
			<form className="formulario2 my-5 rounded shadow p-2 exchange" onSubmit={e => handleSubmit(e)}>
				<h3 className="mt-3">PROFILE</h3>
				<div className="form-row my-2">
					<div className="col-md">
						<label className="ml-2">Name</label>
						<input
							type="text"
							className="form-control"
							maxLength="120"
							placeholder={name}
							onChange={e => setName(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className="form-row my-2">
					<div className="col-md">
						<label className="ml-2">Last Name</label>
						<input
							type="text"
							className="form-control"
							maxLength="120"
							placeholder={lastname}
							onChange={e => setLastname(e.target.value)}
							required
						/>
					</div>
				</div>
				<p className="text-center mt-2">
					<Link to="/reset">Change Password</Link>
				</p>
				<div className="submit-row d-flex justify-content-center my-2">
					<button type="reset" className="btn btn-primary mr-2" onClick={e => setEditar(false)}>
						Cancel
					</button>
					<button type="submit" className="btn btn-outline-dark ml-2">
						Change
					</button>
				</div>
			</form>

			<div className="posicionFooter" />
		</div>
	) : (
		<div className="container d-flex justify-content-center mt-2">
			<form className="formulario2 my-5 rounded shadow p-2 exchange">
				<h3 className="mt-3">PROFILE</h3>
				<div className="form-row my-2">
					<div className="col-md">
						<label className="ml-2">Name</label>
						<div className="form-control"> {name} </div>
					</div>
				</div>
				<div className="form-row my-2">
					<div className="col-md">
						<label className="ml-2">Last Name</label>
						<div className="form-control"> {lastname} </div>
					</div>
				</div>
				<div className="form-row mt-2">
					<div className="col-md">
						<label className="ml-2">Email **</label>
						<div className="form-control"> {store.user.email} </div>
					</div>
				</div>
				<span className="ml-2 mt-0" style={{ fontSize: "12px" }}>
					**It is not possible to edit your registered e-mail
				</span>
				<p className="text-center mt-2">
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
