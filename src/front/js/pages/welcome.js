import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import { Media } from "react-bootstrap";
import { Card, Container, Row, Col, Toast, Badge } from "react-bootstrap";
import grafico from "../../img/grafico.png";
import finances from "../../img/finances.png";
import registro from "../../img/registro.png";
import logo from "../../img/logo.jpg";

export const Welcome = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mb-2 " id="box-principal">
			<Image
				src="https://media.giphy.com/media/13ln9K5TWkNTLa/giphy.gif"
				style={{ width: "100%", height: "250px" }}
			/>

			<Media style={{ background: "white" }}>
				<Media.Body>
					<h5 style={{ color: "black" }}>
						{" "}
						<i className="far fa-piggy-bank" />
					</h5>

					<p className="font-italic" style={{ color: "black" }}>

						<Media style={{ background: "#white", padding: "3%" }}>

							<Media.Body>
								<h1 style={{ color: "black" }}>
									Welcome to KaChing! the app that allows you to take control over your finances.{" "}
								</h1>
								<p className="font-italic" style={{ color: "black" }}>
									Protection you need, peace of mind you deserve. Keeping your financial information
									secure is absolutely essential for us. Synonymous with security and simplicity.
									Maintaining the trust of our customers and partners is our top priority. Our
									commitment to information security for online control of their expenses is the
									reason why customers choose kaChing when it comes to saving. Password & Security
									Question Best practices for protecting your sensitive data.
								</p>
								<p className="font-italic" style={{ color: "black" }}>
									Here are smart financial steps to take if you need help overcoming your barriers to
									saving. <i className="fas fa-hand-holding-usd" />{" "}
								</p>
							</Media.Body>
							<img
								width={270}
								height={270}
								className="ml-3 rounded-circle"
								id="userphone"
								src="http://media.bizj.us/view/img/3490261/cell-phone*1200xx3867-2175-0-202.jpg"
							/>
						</Media>
						<div>
							<h1 style={{ marginLeft: "25px" }}>Get the most benefit from your KaChing account.</h1>

							<ol style={{ marginLeft: "25px" }}>
								<li>Think Beyond Income and Expenses</li>
								<li>
									Don´t have an account?{" "}
									<Link to={"/register"}>
										<span className="mr-2 btn" style={{ color: "blue" }} href="#" role="button">
											RegisterOne
										</span>
									</Link>
								</li>
								<li>Record your expenses</li>
								<li>Create a Children´s Savings Kaching </li>
								<li>Project your goals</li>
								<li>Time to celebrate your achievements</li>
							</ol>
						</div>
					</p>
					<p className="font-italic" style={{ color: "black", marginLeft: "25px" }}>
						The easiest and safest way to save and manage your finances.{" "}
						<i className="fas fa-hand-holding-usd" />{" "}
					</p>
				</Media.Body>
			</Media>

			<Media style={{ background: "white", padding: "3%" }}>
				<Media.Body>


					<h5 style={{ color: "black" }} /> <i className="fas fa-comment-dollar" />{" "}
					<h5 style={{ color: "black" }}>What is KaChing? </h5>
					<p className="font-italic" style={{ color: "black" }}>

						Remember the days when you dropped your spare change into a piggy bank or a jar? Now Let us help
						you to save your money and make a budget to how you should spend your money Saving money is at
						the heart of all good financial plans. Learn how to save money consistently even when it seems
						like there isn´t any money left to spare.
					</p>
					<p className="font-italic" style={{ color: "black" }}>
						The information on this site and the products and services offered are not intended for
						distribution to any person in any country or jurisdiction where such distribution or use would
						be contrary to local law or regulation. <i className="fas fa-hand-holding-usd" />{" "}
					</p>
				</Media.Body>
				<img
					width={270}
					height={270}
					className="ml-3 rounded-circle"
					id="hand"
					src="https://www.kindpng.com/picc/m/111-1111080_computer-icons-money-cash-bank-funding-transparent-background.png"
					alt="Generic placeholder"
				/>
			</Media>

			<Media style={{ background: "white", padding: "5%" }}>
				<img
					width={250}
					height={250}
					className="mr-3 rounded-circle"
					src="https://images.all-free-download.com/images/graphicthumb/practical_business_financial_picture_01_hd_pictures_170385.jpg"
					alt="Generic placeholder"
				/>
				<Media.Body style={{ background: "white" }}>
					<h5 style={{ color: "black" }}>Benefits of KaChing</h5>
					<p style={{ color: "black" }}>
						You open your account free in less than 3 minutes and you can close it with a single click., No
						commissions. No strings attached. No surprises. <i className="fas fa-dollar-sign" />
					</p>
				</Media.Body>
			</Media>

			<div className="card-group" style={{ marginTop: "0px" }}>
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
					<img className="d-block w-100" src={registro} alt="registro" />
					<Carousel.Caption>
						<h3 style={{ color: "B9DCDC" }}>Registre</h3>
						<p style={{ color: "B9DCDC" }}>One click away</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={finances} alt="finances" />

					<Carousel.Caption>
						<h3 />
						<p />
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={grafico} alt="grafico" />

					<Carousel.Caption>
						<h3 />
						<p />
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<div className="posicionFooter" />
		</div>
	);
};
