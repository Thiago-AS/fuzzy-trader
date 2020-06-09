import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Wallet from "./pages/Wallet"
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path={["/wallet"]}>
        <Layout>
          <Switch>
            <PrivateRoute path="/wallet" component={Wallet} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
