import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
    console.log(props);
    const {component: Component, ...rest} = props;
    console.log("props", props)
    console.log("rest", rest)
    return <Route
        {...rest}
        render={(props) => {
            console.log("props2", props);
            if (localStorage.getItem("token")){
                return <Component {...props} />
            } else {
                return <Redirect to="/login" />
            }
        }}
        />
}

export default PrivateRoute