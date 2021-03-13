import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

export const Faqs = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mb-2">
			<h1 className="page__Tittle">FAQs</h1>
			<div className="page_rte">
				<h3 style={{ color: "blue" }}>
					<b>Frequently asked questions</b>
					<span style={{ fontWeight: 400 }} />
				</h3>
			</div>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>Question</th>
						<th>Answer</th>
						<th />
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Why kaChing?</td>
						<td>
							It is a very simple application with which you will be able to know what percentage of your
							money is spent on food, transportation, cabs, medical, entertainment or home, among other
							categories.
						</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>I forgot my kaChing password. How can I reset it?</td>
						<td>
							Select how you want to recover your password and click Next. (answer your security question
							and reset your password )
						</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td colSpan="2">Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
			<div className="posicionFooter" />
		</div>
	);
};
