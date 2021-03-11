import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { View1 } from "./pages/view1";
import { ResetPass } from "./pages/resetPassword";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Finances } from "./pages/finances";
import { Expenses } from "./pages/expenses";
import { Expenses2 } from "./pages/expenses_copy";
import { Welcome } from "./pages/welcome";
import { Transactions } from "./pages/transactions";

import { Perfil } from "./pages/perfil";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="contenedor d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/view1">
							<View1 />
						</Route>
						<Route exact path="/expenses">
							<Expenses />
						</Route>
						<Route exact path="/expensescopy">
							<Expenses2 />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/reset">
							<ResetPass />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/finances">
							<Finances />
						</Route>
						<Route exact path="/welcome">
							<Welcome />
						</Route>
						<Route exact path="/transactions">
							<Transactions />
						</Route>
						<Route exact path="/profile">
							<Perfil />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
