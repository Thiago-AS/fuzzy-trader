import React, { useState } from "react";
import Container from "./styles";
import Input from "../../styles/components/Input";
import Button from "../../styles/components/Button";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });
  const [register, setRegister] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [_, setError] = useState(false);
  const [mode, setMode] = useState("login");

  const submitLogin = async () => {
    try {
      let response;
      if (mode === "login") response = await api.post("auth/login", user);
      else response = await api.post("auth/register", register);

      sessionStorage.setItem("jwt", response.data.token);
      history.push("/wallet");
    } catch (err) {
      console.log(err.response);
      alert(`Failed to login\n${err.response.data.error}`);
      setError(true);
    }
  };

  return (
    <Container>
      <div className="login-body">
        <div className="login-holder">
          <div className="login-text">
            <h1>Fuzzy Trader</h1>
          </div>
          <form>
            {mode === "login" ? (
              <>
                <div>
                  <Input
                    value={user.email}
                    placeholder="Email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    value={user.password}
                    placeholder="Password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <Input
                    value={register.email}
                    placeholder="Email"
                    onChange={(e) =>
                      setRegister({ ...register, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Input
                    value={register.name}
                    placeholder="Name"
                    onChange={(e) =>
                      setRegister({ ...register, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    value={register.password}
                    placeholder="Password"
                    onChange={(e) =>
                      setRegister({ ...register, password: e.target.value })
                    }
                  />
                </div>
              </>
            )}
          </form>
          <hr className="line" />
          <div className="login-footer">
            <h6>Lost your password?</h6>
            <div className="button-holder">
              <Button
                label={mode === "login" ? "sign up" : "login"}
                onClick={() => setMode(mode === "login" ? "sign up" : "login")}
                color="#262931"
              />
            </div>
            <div className="button-holder">
              <Button label={mode} onClick={() => submitLogin()} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
