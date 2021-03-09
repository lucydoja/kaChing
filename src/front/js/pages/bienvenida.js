import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Bienvenida = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mb-2">
			<div className="alert alert-success" role="alert">
				<h4 className="alert-heading">What is Katching?</h4>
				<p>
					Remember the days when you dropped your spare change into a piggy bank or a jar? Now Let us help you
					to save your money and make a budget to how you should spend your money Saving money is at the heart
					of all good financial plans. Learn how to save money consistently even when it seems like there
					isn´t any money left to spare.
				</p>
				Here are smart financial steps to take if you need help overcoming your barriers to saving.
				<p className="mb-0" />
			</div>
			<div className="alert alert-warning " role="alert">
				<h5 className="alert-heading">Benefits of Katching</h5>
				<p />
				Here are smart financial steps to take if you need help overcoming your barriers to saving.
				<p className="mb-0" />
			</div>
			<div className="card-group">
				<div className="card">
					<img
						src="https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">First step</h5>
						<p className="card-text">Think Beyond Income and Expenses</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
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
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This card has even longer content than the first to show that equal height action.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
			</div>

			<div className="posicionFooter" />
		</div>
	);
};
