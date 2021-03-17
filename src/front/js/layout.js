import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { ResetPass } from "./pages/resetPassword";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Finances } from "./pages/finances";
import { Welcome } from "./pages/welcome";
import { Transactions } from "./pages/transactions";
import { Perfil } from "./pages/perfil";
import { About } from "./pages/about";
import { Faqs } from "./pages/faqs";
import { Exchange } from "./pages/exchange";

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
						<Route exact path="/" component={Welcome} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/reset" component={ResetPass} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/finances" component={Finances} />
						<Route exact path="/transactions" component={Transactions} />
						<Route exact path="/profile" component={Perfil} />
						<Route exact path="/faqs" component={Faqs} />
						<Route exact path="/exchange" component={Exchange} />
						<Route exact path="/about" component={About} />

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
