import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : props.history.push("/admin")
      }
    />
  );
};

export default ProtectedRoute;
