import React from "react";
import useAuth from "../../hooks/useAuth";
import Login from "../../Authentication/Login/Login";

const PrivateRoute = ({ children }) => {
    const { access_token } = useAuth();
    if (!access_token) {
        return <Login {...children.props} />;
    }
    return children;
};

export default PrivateRoute;
