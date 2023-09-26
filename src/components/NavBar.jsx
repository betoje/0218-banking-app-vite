// React
import { useContext, useEffect, useState } from "react";
// React Router
import { Link, NavLink, Outlet } from "react-router-dom";
// React Context
import UserContext from "../UserContext";
// React Icons
import { AiOutlineUser } from "react-icons/ai";
// React Bootstrap
import {
  Nav,
  Navbar,
  NavDropdown,
  Image,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
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
      <Navbar expand="sm" className="bg-body-tertiary mb-4">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <strong>REACTbank </strong>
            <Image src={reactLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="home-tooltip">"home page"</Tooltip>}
              >
              <Nav.Link className="navlink" as={NavLink} to="/home">
                Home
              </Nav.Link>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="createaccount-tooltip">"create account page"</Tooltip>}
              >
              <Nav.Link className="navlink" as={NavLink} to="/createaccount">
                Create Account
              </Nav.Link>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="login-tooltip">"login page"</Tooltip>}
              >
              <Nav.Link className="navlink" as={NavLink} to="/login">
                Login
              </Nav.Link>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="deposit-tooltip">"deposit page"</Tooltip>}
              >
                <Nav.Link className="navlink" as={NavLink} to="/deposit">
                  Deposit
                </Nav.Link>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="withdraw-tooltip">"withdraw page"</Tooltip>}
              >
              <Nav.Link className="navlink" as={NavLink} to="/withdraw">
                Withdraw
              </Nav.Link>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="balance-tooltip">"balance page"</Tooltip>}
              >
              <Nav.Link className="navlink" as={NavLink} to="/balance">
                Balance
              </Nav.Link>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="deposit-tooltip">"alldata page"</Tooltip>}
              >
              <Nav.Link className="navlink" as={NavLink} to="/alldata">
                Users({users.length})
                <AiOutlineUser />
                <span>{cUser.name}</span>
              </Nav.Link>
              </OverlayTrigger>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
