import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import mile from "../../img/img_mile.jpg";
import andres from "../../img/img_andres.jpg";
import gaby from "../../img/img_gaby.jpg";

export const About = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mb-2">
			<div className="row">
				<div className="col-md">
					<h1 className="text-center">About Us</h1>
				</div>
			</div>
			<br />
			<div className="card-deck">
				<div className="card">
					<img
						src="https://scontent.fmty1-1.fna.fbcdn.net/v/t1.0-9/137543451_10214935951191387_330915055320850787_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGxVvUcP84cSU1LNMb04qdGI6NsI9S-_d0jo2wj1L793Sl5sdUvK5Jnb3oI3ri5fmk&_nc_ohc=vOeLSvtJ2ekAX-sRpv1&_nc_ht=scontent.fmty1-1.fna&oh=b0877dc3d540ae5b7e75e86189e69af7&oe=6071A091"
						className="card-img-top rounded"
						alt=""
					/>
					<div className="card-body">
						<h3 className="card-title">
							<i>Lucia Domiguez</i>
						</h3>
						<a
							href="https://github.com/lucydoja"
							target="__blank"
							className="btn btn-outline-info btn-block">
							Info
						</a>
					</div>
				</div>
				<div className="card">
					<img
						src="https://scontent.fmty1-1.fna.fbcdn.net/v/t1.0-9/135228938_3611721285574419_8567827109732476147_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFzqNw4c-QXcFjIiXqsTy7rDPx9B9eKOF8M_H0H14o4XzvrnrI9uwUpPIWWgv1iJN8&_nc_ohc=2UU1HBFzMmwAX95VRng&_nc_ht=scontent.fmty1-1.fna&oh=54dd7ff719e235c9717fb11e5caf63d2&oe=607274A5"
						className="card-img-top rounded"
						alt=""
					/>
					<div className="card-body">
						<h3 className="card-title">
							<i>Abraham Chichilla</i>
						</h3>
						<a
							href="https://github.com/abraham1798"
							target="__blank"
							className="btn btn-outline-info btn-block">
							Info
						</a>
					</div>
				</div>
				<div className="card">
					<img src={mile} className="card-img-top rounded" alt="..." />
					<div className="card-body">
						<h3 className="card-title">
							<i>Milena Peñaranda</i>
						</h3>
						<a
							href="https://github.com/MILENA1988"
							target="__blank"
							className="btn btn-outline-info btn-block">
							Info
						</a>
					</div>
				</div>
				<div className="card">
					<img src={andres} className="card-img-top  rounded" alt="..." />
					<div className="card-body">
						<h3 className="card-title">
							<i>
								Andres
								<br />
								Born
							</i>
						</h3>
						<a
							href="https://github.com/andresborn"
							target="__blank"
							className="btn btn-outline-info btn-block">
							Info
						</a>
					</div>
				</div>
				<div className="card">
					<img src={gaby} className="card-img-top  rounded" alt="..." />
					<div className="card-body">
						<h3 className="card-title">
							<i>Gabriela Sanchez</i>
						</h3>
						<a
							href="https://github.com/gaby-oop"
							target="__blank"
							className="btn btn-outline-info btn-block">
							Info
						</a>
					</div>
				</div>
			</div>
			<div className="posicionFooter" />
		</div>
	);
};
