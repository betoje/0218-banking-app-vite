import reactLogo from "../assets/react.svg";
// React Icons
import { AiOutlineUser } from "react-icons/ai";
// React Router
import { Link, Outlet } from "react-router-dom";
// React Bootstrap
import { Nav, Navbar, NavDropdown, Image, Container } from "react-bootstrap";
// React Context
import UserContext from "../UserContext";
import { useContext } from "react";

function NavBar() {
  const { users, addUser, cUser, addCUser } = useContext(UserContext);

  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <strong>REACTbank </strong>
            <Image src={reactLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navlink" as={Link} to="/createaccount">
                Create Account
              </Nav.Link>
              <Nav.Link className="hover-zoom navlink" as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/deposit">
                Deposit
              </Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/withdraw">
                Withdraw
              </Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/balance">
                Balance
              </Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/alldata">
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
