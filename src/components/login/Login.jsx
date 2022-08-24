import React, { useState, useEffect } from "react";
import UseAuth from "../../hooks/UseAuth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import axios from "../../api/axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  const { login, loggedIn } = UseAuth();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, [loggedIn, navigate]);

  const handleLogin = () => {
    const details = {
      email: email,
      password: password,
    };

    axios
      .post("https://authorshub.herokuapp.com/users/login", details)
      .then((res) => {
        const author = res.data.author;
        const id = res.data.id;
        const token = res.data.token;

        if (token) {
          console.log("account");
          localStorage.setItem('author', author)
          localStorage.setItem("token", token);
          localStorage.setItem("id", id);
        }
        login(author, id, token);

        console.log(login);
      })
      .catch((err) => {
        console.log("--------err" + err);
      });

    setEmail("");
    setPassword("");
  };

  const clear = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container-wrapper">
      <div className="img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Login"
        ></img>
      </div>
      <div className="form-wrapper">
        <Stack spacing={4} className="login-form">
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <p>
            Don't have an account?{" "}
            <Link to={"/register"}>
              <span className="link-style">Sign Up</span>
            </Link>
          </p>
          <div className="login-btn">
            <Button
              size="md"
              height="48px"
              width="100px"
              border="2px"
              borderColor="rgb(76, 55, 15).500"
              onClick={clear}
            >
              Clear
            </Button>

            <Button
              size="md"
              height="48px"
              width="100px"
              border="2px"
              borderColor="rgb(76, 55, 15).500"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </Stack>
      </div>

      {/* </form> */}
    </div>
  );
};
