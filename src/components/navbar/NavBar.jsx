import React from "react";
import { Logo } from "../logo";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Button, Stack } from "@chakra-ui/react";

export const NavBar = () => {
  const logo = "OVAT";
  return (
    <div id="nav-container">
      <Logo name={logo} />
      <Stack direction="row" spacing={4} align="center">
        <Link to="/register">
          <Button colorScheme="orange" variant="solid">
            Register
          </Button>
        </Link>
        <Link to="/login">
          <Button colorScheme="orange" variant="solid">
            Login
          </Button>
        </Link>
      </Stack>
    </div>
  );
};
