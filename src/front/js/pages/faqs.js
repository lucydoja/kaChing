import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import pig from "../../img/pig.png";

export const Faqs = () => {
	const { store, actions } = useContext(Context);

	return (
		<div id="box-principal">
			<div className="container mb-2">
				<h3 className="page__Tittle my-4">FAQs (Frequently asked questions)</h3>

				<div className="align-self-center ">
					<div
						className=" m-3 p-2 text-center shadow flex-grow-1"
						style={{
							minHeight: "60px",
							border: "1px solid grey"
						}}>
						<div className="mb-2">
							<strong>Why should I choose kaChing?</strong>
						</div>
						<div>
							<i className="fas fa-wallet" /> Because is a very simple web app that will allow you to
							track your finances easily. Also, you can divide your expenses by categories like food,
							transportation, education, among others.
						</div>
					</div>

					<div
						className="m-3 p-2 text-center shadow flex-grow-1"
						style={{
							minHeight: "60px",
							border: "1px solid grey"
						}}>
						<div className="mb-2">
							<strong>Do I need to pay to have access to katChing?</strong>
						</div>{" "}
						<div>
							<i className="fas fa-balance-scale" /> No, you don&apos;t need to pay to use kaChing.
						</div>
					</div>
					<div
						className="m-3 p-2 text-center shadow flex-grow-1"
						style={{
							minHeight: "60px",
							border: "1px solid grey"
						}}>
						<div className="mb-2">
							<strong>Do I need to verify my identity?</strong>
						</div>
						<div>
							<i className="far fa-id-badge" /> No! Just your name, last name and e-mail.
						</div>
					</div>
					<div
						className="m-3 p-2 text-center shadow flex-grow-1"
						style={{
							minHeight: "60px",
							border: "1px solid grey"
						}}>
						<div className="mb-2">
							<strong>How do I update my personal details?</strong>
						</div>{" "}
						<div>
							<i className="fas fa-address-card" /> Go to your profile and click on the EDIT button.
							There, you&apos;ll be able to change your first and last name, your e-mail can&apos;t be
							changed.
						</div>
					</div>
					<div
						className="m-3 p-2 text-center shadow flex-grow-1"
						style={{
							minHeight: "60px",
							border: "1px solid grey"
						}}>
						<div className="mb-2">
							<strong>I had a kaChing account in the past. How can I reactivate it?</strong>
						</div>
						<div>
							<i className="fas fa-unlock-alt" /> Of course, you only need to enter your email address and
							password.
						</div>
					</div>
					<div
						className="m-3 p-2 text-center shadow flex-grow-1"
						style={{
							minHeight: "60px",
							border: "1px solid grey"
						}}>
						<div className="mb-2">
							<strong>I forgot my password, how do I gain access to my account? </strong>
						</div>
						<div>
							<i className="far fa-smile-wink" /> Don&apos;t worry and be happy! Simply go to the LOG IN
							page and click the &apos;Forgot your password?&apos; link and follow the steps!
						</div>
					</div>
					<div
						className="m-3 p-2 text-center shadow flex-grow-1"
						style={{
							minHeight: "60px",
							border: "1px solid grey"
						}}>
						<div className="mb-2">
							<strong>
								My email and password are both correct but I still can&apos;t log in. What can I do?
							</strong>
						</div>
						<div>
							<i className="far fa-frown" /> We recomend going through the password reset, this will most
							likely fix your problem.
						</div>
					</div>
					<div
						className="m-3 p-2 text-center shadow flex-grow-1"
						style={{
							minHeight: "60px",
							border: "1px solid grey"
						}}>
						<div className="mb-2">
							<strong>Where can I use kaChing?</strong>
						</div>{" "}
						<div>
							<i className="fas fa-globe-americas" /> From anywhere, as long as you have a device and
							internet access.
						</div>
					</div>
				</div>
			</div>
			<div className="posicionFooter" />
		</div>
	);
};
