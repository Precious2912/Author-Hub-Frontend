import React, { useState } from "react";
import {Link, useNavigate } from 'react-router-dom'
import './Register.css'
import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import axios from "../../api/axios";

export const Register = () => {
  let navigate = useNavigate()
  const [inputs, setInputs] = useState({
    author: '',
    dateRegistered: '',
    age: '',
    email: '',
    password: '',
    confirm_password: '',
    address: ''
  })
  // const [loginError, setLoginError] = useState("");

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleRegister = async (e) => {
    axios
    .post("https://authorshub.herokuapp.com/users/signup", inputs)
    .then((res) => {
      alert('created')
      navigate('/login', {replace: true})
    })
    .catch((err) => {
      alert('email already exists')
      console.log("--------err" + err);
    });

  setInputs('')
};

const handleInputs = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setInputs({...inputs, [name]: value})
}

const clear = () => {
  setInputs('')
};


  return (
    <div className="register-page-container">
      <div className="img-container-register">
        <img src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Sign Up"></img>
      </div>
      <div className="form-container-register">
      <Stack spacing={4} onSubmit={handleRegister}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            name="author"
            value={inputs.author || ""}
            placeholder="Author"
            onChange={handleInputs}
          />
        </InputGroup>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            name="dateRegistered"
            value={inputs.dateRegistered || ""}
            placeholder="Date Registered"
            onChange={handleInputs}
          />
        </InputGroup>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            name="age"
            value={inputs.age || ""}
            placeholder="Age"
            onChange={handleInputs}
          />
        </InputGroup>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            name="email"
            value={inputs.email || ""}
            placeholder="Email"
            onChange={handleInputs}
          />
        </InputGroup>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            name="password"
            value={inputs.password || ""}
            placeholder="Enter password"
            onChange={handleInputs}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            name="confirm_password"
            value={inputs.confirm_password || ""}
            placeholder="Confirm Password"
            onChange={handleInputs}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            name="address"
            value ={inputs.address || ""}
            placeholder="Address"
            onChange={handleInputs}
          />
        </InputGroup>

        <p>Already have an account? <Link to={'/login'}><span className="link-style">Login</span></Link></p>

        <div className="btn">
        <Button
          size="md"
          height="48px"
          width="100px"
          border="1px"
          borderColor="rgb(76, 55, 15).500"
          onClick={clear}
        >
          Clear
        </Button>

        <Button
          size="md"
          height="48px"
          width="100px"
          border="1px"
          borderColor="rgb(76, 55, 15).500"
          type="submit"
          onClick={handleRegister}
        >
          Register
        </Button>
        </div>

      </Stack>
      </div>
    </div>
  );
};
