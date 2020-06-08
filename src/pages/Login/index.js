import React, { useState } from "react";
import Container from "./styles";
import { NavLink } from "react-router-dom";
import Input from "../../styles/components/Input";
import Button from "../../styles/components/Button";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  return (
    <Container>
      <div className="login-body">
        <div className="login-holder">
          <div className="login-text">
            <h1>Fuzzy Trader</h1>
          </div>
          <form>
            <div>
              <Input
                value={user.email}
                placeholder="Email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div>
              <Input
                type="password"
                value={user.password}
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
          </form>
          <hr className="line" />
          <div className="login-footer">
            <h6>Lost your password?</h6>
            <h6>Sign Up</h6>
            <div className="button-holder">
              <NavLink exact to="/home">
                <Button primary="true" label="Login" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
