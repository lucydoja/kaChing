import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "../pages/login";
import { Context } from "../store/appContext";

export function PrivateRoute({ component: Component, ...rest }) {
	const { store, actions } = useContext(Context);

	return <Route {...rest}>{store.user ? <Component /> : <Redirect to="/login" />}</Route>;
}
