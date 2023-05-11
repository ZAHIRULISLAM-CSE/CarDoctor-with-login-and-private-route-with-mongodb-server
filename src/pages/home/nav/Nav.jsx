import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Nav = () => {
  const { user,handleLogout } = useContext(AuthContext);

  const signOut=()=>{
    handleLogout()
  }

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
          {/* <Link to="/checkout">CheckOut</Link> */}
          {user ? (
            <div className="flex gap-4">
              <p>{user.email}</p>
              <button onClick={signOut}>Sign Out</button>
            </div>
          ) : (
            <div className="flex gap-5">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
