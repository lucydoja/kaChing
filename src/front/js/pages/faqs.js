import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { Card, Container, Row, Col } from "react-bootstrap";

export const Faqs = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mb-2">
			<h1 className="page__Tittle" style={{ background: "B9DCDC" }}>
				{" "}
				<span className="badge bg-secondary">
					FAQs <i className="fas fa-piggy-bank" />{" "}
				</span>
			</h1>
			<div className="page_rte">
				<h3 style={{ color: "black" }}>
					<b>Frequently asked questions</b>
					<span style={{ fontWeight: 400 }} />
				</h3>
			</div>
			<ListGroup>
				<ListGroup.Item variant="warning">
					Why kaChing? Because is a very simple application with which you will be able to know what
					percentage of your money is spent on food, transportation, cabs, medical, entertainment or home,
					among other <i className="far fa-piggy-bank" />
				</ListGroup.Item>
				<ListGroup.Item variant="warning">
					I forgot my password, how do I gain access to my account? Don´t worry and be happy =) Select how you
					want to recover your password and click Next. (answer your security question and reset your password
					)
				</ListGroup.Item>
				<ListGroup.Item variant="warning">
					Do I need a balance to pay and have access katChing? No You don´t need to have funds in your PayPal
					balance to use cheKing
				</ListGroup.Item>
				<ListGroup.Item variant="warning">Do I need to verify my identity? </ListGroup.Item>
				<ListGroup.Item variant="warning">How do I update my personal details? </ListGroup.Item>
				<ListGroup.Item variant="warning">
					I had a kaChing account in the past. How can I reactivate it?{" "}
				</ListGroup.Item>
				<ListGroup.Item variant="warning">How do I close my katChing account? </ListGroup.Item>
				<ListGroup.Item variant="warning">
					My email and password are both correct but I still can´t log in. Why? Simply go to the Login page
					and click the Forgot your password? link.{" "}
				</ListGroup.Item>
				<ListGroup.Item variant="warning">
					Where can I use kaChing? From anywhere, as long as you have a device and internet access.
				</ListGroup.Item>
			</ListGroup>
			<div className="text-center">
				<img
					src="data:image/png;base64,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"
					className="rounded"
					alt="pigbank"
				/>
			</div>

			<div className="posicionFooter" />
		</div>
	);
};
