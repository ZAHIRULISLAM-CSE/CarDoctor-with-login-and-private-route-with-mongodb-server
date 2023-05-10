import { Button, Navbar } from "flowbite-react";
import React from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="mt-8">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button outline={true} gradientDuoTone="pinkToOrange">
            Appointment
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
