import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, isAuth, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                return isAuth ? 
                    children : <Redirect to='/login' />
            }} 
        />
    )
}

export default PrivateRoute;