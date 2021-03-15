import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import { Media } from "react-bootstrap";
import { Card, Container, Row, Col, Toast, Badge } from "react-bootstrap";

export const Welcome = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mb-2 " id="box-principal">
			<Image
				src="https://media.giphy.com/media/13ln9K5TWkNTLa/giphy.gif"
				style={{ width: "100%", height: "250px" }}
			/>

			<Media style={{ background: "#B9DCDC" }}>
				<Media.Body>
					<h5 style={{ color: "B9DCDC" }}>
						{" "}
						<i className="far fa-piggy-bank" />
					</h5>
					<p className="font-italic" style={{ color: "#AEB6BF" }}>
						<img
							width={1000}
							height={400}
							className="ml-12"
							src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt="Generic placeholder"
						/>

						<Media style={{ background: "#FCF3CF" }}>
							<Media.Body>
								<h5 style={{ color: "#33C6FF" }}>What is kaChing?</h5>
								<p className="font-italic" style={{ color: "#AEB6BF" }}>
									Remember the days when you dropped your spare change into a piggy bank or a jar? Now
									Let us help you to save your money and make a budget to how you should spend your
									money Saving money is at the heart of all good financial plans. Learn how to save
									money consistently even when it seems like there isn´t any money left to spare.
								</p>
								<p className="font-italic" style={{ color: "#AEB6BF " }}>
									Here are smart financial steps to take if you need help overcoming your barriers to
									saving. <i className="fas fa-hand-holding-usd" />{" "}
								</p>
							</Media.Body>
							<img
								width={270}
								height={270}
								className="ml-3"
								src="https://browser-pink-marmoset-rq234xd1.ws-us03.gitpod.io/workspace/Proyecto-Final-4Geeks/src/front/img/logo.jpg"
								alt="Generic placeholder"
							/>
						</Media>
						<div>
							<h1>
								Example heading <Badge variant="secondary">First</Badge>
							</h1>
							<h2>
								Example heading <Badge variant="secondary">Second</Badge>
							</h2>
							<h3>
								Example heading <Badge variant="secondary">Third</Badge>
							</h3>
							<h4>
								Example heading <Badge variant="secondary">Fourth</Badge>
							</h4>
							<h5>
								Example heading <Badge variant="secondary">Fifth</Badge>
							</h5>
							<h6>
								Example heading <Badge variant="secondary">Go ahead</Badge>
							</h6>
						</div>
					</p>
					<p className="font-italic" style={{ color: "#AEB6BF" }}>
						Here are smart financial steps to take if you need help overcoming your barriers to saving.{" "}
						<i className="fas fa-hand-holding-usd" />{" "}
					</p>
				</Media.Body>
			</Media>

			<Media style={{ background: "#FCF3CF" }}>
				<Media.Body>
					<h5 style={{ color: "#33C6FF" }}>What is kaChing?</h5>
					<p className="font-italic" style={{ color: "#AEB6BF" }}>
						Remember the days when you dropped your spare change into a piggy bank or a jar? Now Let us help
						you to save your money and make a budget to how you should spend your money Saving money is at
						the heart of all good financial plans. Learn how to save money consistently even when it seems
						like there isn´t any money left to spare.
					</p>
					<p className="font-italic" style={{ color: "#AEB6BF " }}>
						Here are smart financial steps to take if you need help overcoming your barriers to saving.{" "}
						<i className="fas fa-hand-holding-usd" />{" "}
					</p>
				</Media.Body>
				<img
					width={270}
					height={270}
					className="ml-3"
					src="https://images.pexels.com/photos/5849564/pexels-photo-5849564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt="Generic placeholder"
				/>
			</Media>

			<Media style={{ background: "#FCF3CF" }}>
				<img
					width={250}
					height={250}
					className="mr-3"
					src="https://images.pexels.com/photos/5849556/pexels-photo-5849556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt="Generic placeholder"
				/>
				<Media.Body>
					<h5 style={{ color: "#33C6FF" }}>Benefits of KaChing</h5>
					<p style={{ color: "#AEB6BF " }}>
						You open your account free in less than 3 minutes and you can close it with a single click., No
						commissions. No strings attached. No surprises. <i className="fas fa-dollar-sign" />
					</p>
				</Media.Body>
			</Media>

			<Spinner animation="grow" variant="warning" />

			<Spinner animation="grow" variant="primary" />

			<div className="card-group">
				<div className="card">
					<img
						src="https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">First step</h5>
						<p className="card-text">Think Beyond Income and Expenses</p>
						<p className="card-text">
							<small className="text-muted">Why don´t you save up for a real life-changer?</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img
						src="https://images.pexels.com/photos/390392/pexels-photo-390392.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
						alt="think"
					/>
					<div className="card-body">
						<h5 className="card-title">Second step</h5>
						<p className="card-text">Don´t have an account? Register One!</p>
						<p className="card-text">
							<small className="text-muted">Trying to save up. It´s the easiest way to do it</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img
						src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Record your expenses</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This card has even longer content than the first to show that equal height action.
						</p>
						<p className="card-text">
							<small className="text-muted">
								Every month, I transfer part of my salary into a savings account. I think it’s important
								to save for a rainy day.
							</small>
						</p>
					</div>
				</div>
			</div>
			<div className="card-group">
				<div className="card">
					<img
						src="https://images.pexels.com/photos/6194333/pexels-photo-6194333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title" />
						<p className="card-text">Create a Children´s Savings Kaching</p>
						<p className="card-text">
							{" "}
							Fortunately, you can secure long-term savings for your kids with a few strategic methods and
							accounts.
						</p>
						<p className="card-text">
							<small className="text-muted ">
								Child: Mom, can you buy me this new toy? Mother: No, it’s too expensive. Money doesn’t
								grow on trees!
							</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img
						src="https://images.pexels.com/photos/4052198/pexels-photo-4052198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="think"
					/>
					<div className="card-body">
						<h5 className="card-title">Project your goals</h5>
						<p className="card-text">
							Whether you want to save up to buy your first home, jump start your retirement savings, or
							pay off debt, there´s no better time to set some financial goals with us!
						</p>
						<p className="card-text" />
						<small className="text-muted ">The best way to predict the future is to invent it</small>
					</div>
				</div>
				<div className="card">
					<img
						src="https://images.pexels.com/photos/929288/pexels-photo-929288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Time to celebrate your achievements</h5>
						<p className="card-text">
							I´m hoping that I can teach you how to add a harvest season into your life and remember to
							celebrate your successes instead of reaching milestones and just moving along to the next
							one.
						</p>
						<p className="card-text">
							<small className="text-muted" />
						</p>
						<p className="card-text">
							<small className="text-muted ">
								Trust in dreams, for in them is hidden the gate to eternity
							</small>
						</p>
					</div>
				</div>
			</div>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						img="https://browser-pink-marmoset-rq234xd1.ws-us03.gitpod.io/workspace/Proyecto-Final-4Geeks/src/front/img/grafico.png"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<div className="posicionFooter" />
		</div>
	);
};
