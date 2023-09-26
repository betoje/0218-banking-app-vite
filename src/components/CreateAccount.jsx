// React
import { useContext, useEffect, useState } from "react";
// React Context
import UserContext from "../UserContext";
// React Bootstrap
import { Button, Form, Row, Col, Container } from "react-bootstrap";
// Components
import Card from "./Card";

export default function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {users, addUser, cUser, addCUser} = useContext(UserContext)

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label + " is required");
      setTimeout(() => setStatus(""), 4000);
      return false;
    }
    if (label === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!regex.test(field)) {
        setStatus("Error: Invalid " + label);
        setTimeout(() => setStatus(""), 4000);
        return false;
      }
    }
    if (label === 'password') {
      if (field.length < 8) {
        setStatus("Error: " + label + " less than 8 characters length");
        setTimeout(() => setStatus(""), 4000);
        return false;
      }
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    addUser(name, email, password);
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card
 
        // bgcolor="info"
        bgcolor="primary"
        header1="Create account"
        header1Value=""
        status={status}

        body={
          show ? (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="input"
                  id="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                {/* {status === "Error: name" ? (
                  <Form.Text muted>Name field can't be empty</Form.Text>
                ) : null} */}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                {/* {status === "Error: email" ? (
                  <Form.Text muted>Email field can't be empty</Form.Text>
                ) : null} */}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
                {/* {status === "Error: password" ? (
                  <Form.Text muted>
                    Password must be at least 8 characters long
                  </Form.Text>
                ) : null} */}
              </Form.Group>

              <Button
                  type="submit"
                  variant="light"
                  onClick={handleCreate}
                  disabled={name === "" && email === "" && password === ""}
                >
                  Create account
              </Button>
              </>
              ) : (
                <>
                  <h5>Success</h5>
                  <Button type="submit" variant="light" onClick={clearForm}>
                    Create another account
                  </Button>
                </>
              )
            }
          />
        </Col>
      </Row>
    </Container>
  );
}