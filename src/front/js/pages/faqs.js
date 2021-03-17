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
			<h1 className="page__Tittle" style={{ background: "white" }}>
				{" "}
				<span className="badge bg-white" style={{ padding: "3%" }}>
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
					Why kaChing? <i className="fas fa-wallet" /> Because is a very simple application with which you
					will be able to know what percentage of your money is spent on food, transportation, cabs, medical,
					entertainment or home, among other
				</ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">
					I forgot my password, how do I gain access to my account? Don´t worry and be happy{" "}
					<i className="far fa-smile-wink" /> Select how you want to recover your password and click Next.
					(answer your security question and reset your password )
				</ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">
					Do I need a balance to pay and have access katChing? <i className="fas fa-balance-scale" /> No You
					don´t need to have funds in your katChing balance to use kaChing
				</ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">
					Do I need to verify my identity? <i className="far fa-id-badge" /> Only your e-mail
				</ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">
					How do I update my personal details? <i className="fas fa-address-card" /> Your first and last name,
					mail cannot be changed
				</ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">
					I had a kaChing account in the past. How can I reactivate it? <i className="fas fa-unlock-alt" /> Of
					course, you only need to enter your email address and password.
				</ListGroup.Item>

				<ListGroup.Item variant=".bg-light mb-2">
					My email and password are both correct but I still can´t log in. Why? <i className="far fa-frown" />{" "}
					Simply go to the Login page and click the Forgot your password? link.{" "}
				</ListGroup.Item>
				<ListGroup.Item variant=".bg-light mb-2">
					Where can I use kaChing? <i className="fas fa-globe-americas" /> From anywhere, as long as you have
					a device and internet access.{" "}
				</ListGroup.Item>
			</ListGroup>
			<div className="text-center " id="pig">
				<img src={pig} alt="pBANK " />
			</div>

			<div className="posicionFooter" />
		</div>
	);
};
