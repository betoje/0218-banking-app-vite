// React
import { useContext, useEffect, useState } from "react";
// React Router
import { Link, NavLink, Outlet } from "react-router-dom";
// React Context
import UserContext from "../UserContext";
// React Icons
import { AiOutlineUser } from "react-icons/ai";
// React Bootstrap
import { Nav, Navbar, NavDropdown, Image, Container } from "react-bootstrap";
// Components
import Card from "./Card";
// Assets
import reactLogo from "../assets/react.svg";
// Styles
import "./NavBar.css";

function NavBar() {
  const { users, addUser, cUser, addCUser } = useContext(UserContext);

  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary">
        {/* <Navbar expand="lg" bg="light" data-bs-theme="light"> */}
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <strong>REACTbank </strong>
            <Image src={reactLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navlink" as={NavLink} to="/createaccount">
                Create Account
              </Nav.Link>
              <Nav.Link className="navlink" as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link className="navlink" as={NavLink} to="/deposit">
                Deposit
              </Nav.Link>
              <Nav.Link className="navlink" as={NavLink} to="/withdraw">
                Withdraw
              </Nav.Link>
              <Nav.Link className="navlink" as={NavLink} to="/balance">
                Balance
              </Nav.Link>
              <Nav.Link className="navlink" as={NavLink} to="/alldata">
                Users({users.length})
                <AiOutlineUser />
                <span>{cUser.name}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
