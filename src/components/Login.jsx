// React
import { useContext, useEffect, useState } from "react";
// React Context
import UserContext from "../UserContext";
// React Bootstrap
import { Button, Form, Row, Col, Container } from "react-bootstrap";
// Components
import Card from "./Card";

export default function Login() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { users, addUser, cUser, addCUser } = useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 4000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    console.log(name, password);
    console.log(JSON.stringify(users));
    setStatus("Validation Error");
    for (const user of users) {
      if ((name !== user.name) & (name !== user.email)) continue;
      if (password !== user.password) continue;
      setStatus("Validation Succeded");
      addCUser(user.name, user.email, user.password, user.balance);
    }
    setShow(false);
  }

  function clearForm() {
    setName("");
    setPassword("");
    setStatus("");
    setShow(true);
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card
            bgcolor="light"
            txtcolor="info"
            header1="Login"
            header1Value=""
            status={status}
            body={
              show ? (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Name or Email:</Form.Label>
                    <Form.Control
                      type="input"
                      id="name"
                      placeholder="Enter name or email"
                      value={name}
                      onChange={(e) => setName(e.currentTarget.value)}
                    />
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
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="secondary"
                    onClick={handleLogin}
                    disabled={name === "" && password === ""}
                  >
                    Validate user
                  </Button>
                </>
              ) : (
                <>
                  {/* <h5>Success</h5> */}
                  <Button type="submit" variant="secondary" onClick={clearForm}>
                    login another account
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