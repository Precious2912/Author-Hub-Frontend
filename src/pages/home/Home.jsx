import React from 'react'
// import {Link} from 'react-router-dom'
import { NavBar } from '../../components/navbar'
import {Footer} from '../../components/footer'
import ImageSlider from "../../components/slider/imageSlider";

export const Home = () => {

  const slides = [
    { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
    { url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80"},
    { url: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    { url: "https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    { url: "https://images.unsplash.com/photo-1596123068611-c89d922a0f0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
  ];
  const containerStyles = {
    width: "auto",
    height: "620px",
    margin: "0 auto"
  };

  const overlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "400%",
    fontWeight: "Bold",
    color: "#fff"
  }

  const subHero = {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white"
  }


  return (
    <> 
    <NavBar link={"./register"} name={"Register"} link2={"./login"} name2={"Login"} />
    <div style={containerStyles}>
        <ImageSlider slides={slides} />
        <h1 style={overlayStyle}>Welcome to Home Page</h1>
        <h5 style={subHero}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
    </div>
    <Footer />
    </>
  )
}