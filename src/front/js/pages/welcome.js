import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";

export const Welcome = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mb-2 " id="box-principal">
			<Image
				src="https://lh3.googleusercontent.com/proxy/JJ1-aef2DlMLsFOkuurSGjnR80oJEXMT7DI5tl01-hmstUCu5dJvI701mroD-MD_4yb6PzbkHAHuUX5YKn5n_KE-BU_NZi5SFCaiZPGqhH1Yr4OYDjyhmA"
				style={{ width: "100%", height: "250px" }}
			/>
			<Spinner animation="grow" variant="warning" /> ARE YOU READY?
			<div className="alert alert-primary" role="alert">
				<h4 className="alert-heading ">What is kaChing?</h4>
				<p className="font-italic">
					Remember the days when you dropped your spare change into a piggy bank or a jar? Now Let us help you
					to save your money and make a budget to how you should spend your money Saving money is at the heart
					of all good financial plans. Learn how to save money consistently even when it seems like there
					isn´t any money left to spare.
				</p>
				<p className="font-italic">
					Here are smart financial steps to take if you need help overcoming your barriers to saving.
				</p>
				<p className="mb-0" />
			</div>
			<div className="alert alert-warning font-italic" role="alert">
				<h5 className="alert-heading">Benefits of KaChing</h5>
				<p />
				You open your account free in less than 3 minutes and you can close it with a single click., No
				commissions. No strings attached. No surprises.
				<p className="mb-0" />
			</div>
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
						src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="First step"
					/>
					<Carousel.Caption>
						<h3>1° STEP</h3>
						<p>Create an account.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://i.giphy.com/media/3dB5OgH1xd4je/giphy.webp"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="" alt="Third slide" />

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
