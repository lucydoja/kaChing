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
			<h1 className="page__Tittle">FAQs</h1>
			<div className="page_rte">
				<h3 style={{ color: "blue" }}>
					<b>Frequently asked questions</b>
					<span style={{ fontWeight: 400 }} />
				</h3>
			</div>
			<ListGroup>
				<ListGroup.Item>
					Why kaChing? Because is a very simple application with which you will be able to know what
					percentage of your money is spent on food, transportation, cabs, medical, entertainment or home,
					among other
				</ListGroup.Item>
				<ListGroup.Item variant="primary">
					I forgot my password, how do I gain access to my account? Don´t worry and be happy =) Select how you
					want to recover your password and click Next. (answer your security question and reset your password
					)
				</ListGroup.Item>
				<ListGroup.Item variant="secondary">
					Do I need a balance to pay and have access katChing? No You don´t need to have funds in your PayPal
					balance to use cheKing
				</ListGroup.Item>
				<ListGroup.Item variant="success">Do I need to verify my identity? </ListGroup.Item>
				<ListGroup.Item variant="danger">How do I update my personal details? </ListGroup.Item>
				<ListGroup.Item variant="warning">
					I had a kaChing account in the past. How can I reactivate it?{" "}
				</ListGroup.Item>
				<ListGroup.Item variant="info">How do I close my katChing account? </ListGroup.Item>
				<ListGroup.Item variant="light">
					My email and password are both correct but I still can´t log in. Why? Simply go to the Login page
					and click the Forgot your password? link.{" "}
				</ListGroup.Item>
				<ListGroup.Item variant="dark">
					Where can I use kaChing? From anywhere, as long as you have a device and internet access.
				</ListGroup.Item>
			</ListGroup>
			<Container>
				<Row>
					<Col xs={6} md={4}>
						<Image
							src="https://browser-scarlet-bird-9mgxxue5.ws-us03.gitpod.io/workspace/Proyecto-Final-4Geeks/src/front/img/logo.jpg"
							rounded
						/>
					</Col>
					<Col xs={6} md={4}>
						<Image
							src="https://i.pinimg.com/564x/04/94/cf/0494cff4277231581994a2e363f52dd2.jpg"
							roundedCircle
						/>
					</Col>
					<Col xs={6} md={4}>
						<Image src="http://www.tencanal10.tv/wp-content/uploads/2018/04/Untitled-1-8.jpg" thumbnail />
					</Col>
				</Row>
			</Container>

			<div className="posicionFooter" />
		</div>
	);
};
