import React from 'react'
import { Redirect } from 'react-router-dom';
import { Login } from '../pages/login';


const user = null;
const user = { id: username }

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest}>
            {user ? (<Component />) : (<Redirect to= "login"/>)}

        </Route>
    );
}
