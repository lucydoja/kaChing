import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import { Media } from "react-bootstrap";
import { Card, Container, Row, Col, Toast, Badge } from "react-bootstrap";
import grafico from "../../img/grafico.png";
import grafico2 from "../../img/grafico2.png";
import finances from "../../img/finances.png";
import registro from "../../img/registro1.png";
import login from "../../img/login.png";
import cuadro from "../../img/cuadro.png";
import logo from "../../img/logo.jpg";

export const Welcome = () => {
	const { store, actions } = useContext(Context);

	return (
		<div id="box-principal" className="mt-1">
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
					<li data-target="#carouselExampleIndicators" data-slide-to="1" />
					<li data-target="#carouselExampleIndicators" data-slide-to="2" />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src=".../800x400?auto=yes&bg=777&fg=555&text=First slide"
							alt="First slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide"
							alt="Second slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide"
							alt="Third slide"
						/>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>

			<div className="container mb-2 ">
				<div className="col-12">
					<h1 className="text-center" style={{ fontWeight: "800" }}>
						Welcome to KaChing!{" "}
					</h1>
					<h4 className="text-center">The Web App that allows you to take control over your finances. </h4>
				</div>
				<Media className="row p-3 shadow mt-4" style={{ background: "white" }}>
					<Media.Body className="col-lg-9 col-12 text-justify  my-auto">
						<h2 className="text-center"> What is kaChing!</h2>
						kaChing! started as the final project for our Full-Stack Developer Bootcamp at{" "}
						<a href="https://4geeksacademy.com/es/inicio" target="_blank" rel="noopener noreferrer">
							4Geeks Academy.
						</a>{" "}
						The idea is to offer you an easy tool to keep <strong>track of your finances.</strong> In this
						Web App you will be able to register your monthly incomes and expenses in a simple way, no
						spread sheets, no weird commands... Just add your transactions and watch the graphics change!
						That&apos;s it! We&apos;ll be doing all the hard work for you!{" "}
						<Link to={"/register"}>
							<span className="" href="#" role="button">
								Register
							</span>
						</Link>{" "}
						to kaChing to visualize your finances in a few clicks.
					</Media.Body>
					<Media.Body className="col-lg-3 col-12 d-flex justify-content-center mt-2 my-auto">
						<img
							width={250}
							height={250}
							className="rounded-circle"
							src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						/>
					</Media.Body>
				</Media>
				<Media className="row p-3  mt-3">
					<Media.Body
						className="col-lg-5 col-12 text-justify shadow my-3"
						style={{ background: "white", minHeight: "270px" }}>
						<h2 className="text-center mt-4">Quick Start</h2>
						<div className="mx-auto">
							<ol>
								<li>Do you need help tracking your expenses?</li>
								<li>
									<Link to={"/register"}>
										<span className="" href="#" role="button">
											Register an account
										</span>
									</Link>
								</li>
								<li>
									You are now part of kaChing!{" "}
									<Link to={"/login"}>
										<span className="" href="#" role="button">
											Log in
										</span>
									</Link>
								</li>
								<li>Record your expenses</li>
								<li>Watch your finances and set your goals</li>
								<li>Time to celebrate your achievements</li>
							</ol>
						</div>
					</Media.Body>
					<div
						id="carouselExampleIndicators"
						className="carousel slide col-lg-7 col-12 my-auto"
						data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
							<li data-target="#carouselExampleIndicators" data-slide-to="1" />
							<li data-target="#carouselExampleIndicators" data-slide-to="2" />
							<li data-target="#carouselExampleIndicators" data-slide-to="3" />
							<li data-target="#carouselExampleIndicators" data-slide-to="4" />
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img className="d-block w-100" src={grafico2} alt="First slide" />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={registro} alt="Second slide" />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={login} alt="Third slide" />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={grafico} alt="Fourth slide" />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={cuadro} alt="Fifth slide" />
							</div>
						</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</Media>
				<Media className="row p-3 shadow mt-3" style={{ background: "white" }}>
					<Media.Body className="col-lg-3 col-12 d-flex justify-content-center mb-2 my-auto">
						<img
							width={250}
							height={250}
							className="rounded-circle my-auto"
							src="http://media.bizj.us/view/img/3490261/cell-phone*1200xx3867-2175-0-202.jpg"
						/>
					</Media.Body>
					<Media.Body className="col-lg-9 col-12 text-justify my-auto">
						<h2 className="text-center"> Benefits</h2>
						<div className="row">
							<div className="text-justify mt-2 col-lg-4 col-12">
								It&apos;s FREE!! Open your free account in less than 3 minutes. No commissions, no
								strings attached, no surprises... <i className="fas fa-dollar-sign" />
							</div>
							<div className="text-justify mt-2 col-lg-4 col-12">
								Take your finances wherever you are! You can use kaChing! on any device with wi-fi!
							</div>
							<div className="text-justify mt-2 col-lg-4 col-12">
								Get graphic feedback of your finances! Can it get any easier? Of course! Every graphic
								has a summary box where you can easily read your financial status.
							</div>
						</div>
					</Media.Body>
				</Media>

				<Media className="row p-3 shadow mt-4" style={{ background: "white" }}>
					<Media.Body className="col-lg-9 col-12 text-justify  my-auto mb-2">
						<h2 className="text-center"> Trust</h2>
						Get the protection you need and the peace of mind you deserve. Keeping your financial
						information secure is absolutely essential for us. Maintaining the trust of our customers and
						partners is our top priority. Our commitment to information security for online control of their
						expenses is the reason why customers choose kaChing! when it comes to saving.
					</Media.Body>
					<Media.Body className="col-lg-3 col-12 d-flex justify-content-center mt-2 my-auto">
						<img
							width={250}
							height={250}
							className="rounded-circle my-auto"
							src="https://www.kindpng.com/picc/m/111-1111080_computer-icons-money-cash-bank-funding-transparent-background.png"
						/>
					</Media.Body>
				</Media>
				<p className="font-italic" style={{ color: "black", fontSize: "15px" }}>
					The information on this site and the products and services offered are not intended for distribution
					to any person in any country or jurisdiction where such distribution or use would be contrary to
					local law or regulation.{" "}
				</p>
				<div className="card-group mt-3">
					<div className="card m-1">
						<img
							src="https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body ">
							<h5 className="card-title">First step</h5>
							<p className="card-text">Think Beyond Income and Expenses</p>
							<p className="card-text">
								<small className="text-muted">Why don´t you save up for a real life-changer?</small>
							</p>
						</div>
					</div>
					<div className="card m-1">
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
					<div className="card m-1">
						<img
							src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Record your expenses</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Every month, I transfer part of my salary into a savings account. I think it’s
									important to save for a rainy day.
								</small>
							</p>
						</div>
					</div>
				</div>
				<div className="card-group">
					<div className="card m-1">
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
								Fortunately, you can secure long-term savings for your kids with a few strategic methods
								and accounts.
							</p>
							<p className="card-text">
								<small className="text-muted ">
									Child: Mom, can you buy me this new toy? Mother: No, it’s too expensive. Money
									doesn’t grow on trees!
								</small>
							</p>
						</div>
					</div>
					<div className="card m-1">
						<img
							src="https://images.pexels.com/photos/4052198/pexels-photo-4052198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt="think"
						/>
						<div className="card-body">
							<h5 className="card-title">Project your goals</h5>
							<p className="card-text">
								Whether you want to save up to buy your first home, jump start your retirement savings,
								or pay off debt, there´s no better time to set some financial goals with us!
							</p>
							<p className="card-text" />
							<small className="text-muted ">The best way to predict the future is to invent it</small>
						</div>
					</div>
					<div className="card m-1">
						<img
							src="https://images.pexels.com/photos/929288/pexels-photo-929288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Time to celebrate your achievements</h5>
							<p className="card-text">
								I´m hoping that I can teach you how to add a harvest season into your life and remember
								to celebrate your successes instead of reaching milestones and just moving along to the
								next one.
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

				<div className="posicionFooter" />
			</div>
		</div>
	);
};
