import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Last } from "react-bootstrap/esm/PageItem";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [first_name, setfirst_name] = useState("");
	const [last_name, setlast_name] = useState("");

	// // fetch de metodo put
	const data = {
		first_name: first_name,
		last_name: last_name
	};
	fetch(process.env.BACKEND_URL + "/profileMain", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(response => console.log("Success:", response.json()))
		.catch(error => console.error("Error:", error));

	return (
		<div className="container mb-2">
			{/* Title*/}
			<div className="row">
				<div className="container breadcrumb">Profile</div>
			</div>

			<div className="col-lg-4 form-group d-flex flex-column">
				<label htmlFor="Name">Name</label>
				<br />
				{store.user.first_name}
				<br />
				<label htmlFor="lastName">LastName</label>
				<br />
				{store.user.last_name}
				<br />
				<Link to={"/profile"}>
					<span className="btn btn-outline-info btn-sm" role="button">
						Edit Profile
					</span>
				</Link>
				{""}
			</div>
			<div className="posicionFooter" />
		</div>
	);
};
