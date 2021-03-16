import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { Card, Container, Row, Col } from "react-bootstrap";
import pig from "../../img/pig.png";

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
			<ListGroup id="faqs">
				<ListGroup.Item variant=".bg-light mb-2 style  box-shadow: 5px 10px #888888">
					Why kaChing? Because is a very simple application with which you will be able to know what
					percentage of your money is spent on food, transportation, cabs, medical, entertainment or home,
					among other <i className="far fa-piggy-bank" />
				</ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">
					I forgot my password, how do I gain access to my account? Don´t worry and be happy =) Select how you
					want to recover your password and click Next. (answer your security question and reset your password
					)
				</ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">
					Do I need a balance to pay and have access katChing? No You don´t need to have funds in your
					katChing balance to use cheKing
				</ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">Do I need to verify my identity? </ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">How do I update my personal details? </ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">
					I had a kaChing account in the past. How can I reactivate it?{" "}
				</ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">How do I close my katChing account? </ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">
					My email and password are both correct but I still can´t log in. Why? Simply go to the Login page
					and click the Forgot your password? link.{" "}
				</ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">
					Where can I use kaChing? From anywhere, as long as you have a device and internet access.
				</ListGroup.Item>
			</ListGroup>
			<div className="text-center " id="pig">
				<img src={pig} alt="pBANK " />
			</div>

			<div className="posicionFooter" />
		</div>
	);
};
