import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, token, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                return token ? 
                    children : <Redirect to='/login' />
            }} 
        />
    )
}

export default PrivateRoute;