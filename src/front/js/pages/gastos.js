import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Gastos = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mb-2">
			{/* Aqui va a ir todo el contenido que le metamos a esta vista*/}

			<div className="posicionFooter" />
		</div>
	);
};
