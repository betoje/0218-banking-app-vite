// React
import { useContext, useEffect, useState } from "react";
// React Context
import UserContext from "../UserContext";
// React Bootstrap
import { Button, Form, Row, Col, Container } from "react-bootstrap";
// Components
import Card from "./Card";

export default function Deposit() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");

  const { users, addUser, cUser, addCUser } = useContext(UserContext);
  const [depositAmount, setDepositAmount] = useState("");

  let uName, uBalance;
  for (const user of users) {
    if (cUser.name === user.name) {
      console.log(user.balance);
      uName = user.name;
      uBalance = user.balance;
      break;
    }
  }
  const [cName, setCName] = useState(uName);
  const [cBalance, setCBalance] = useState(uBalance);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label + " required");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    console.log(field, parseInt(field));
    if (isNaN(field)) {
      setStatus("Error: " + label + " not a number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field <= 0) {
      setStatus("Error: " + label + " must be greater than cero");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleDeposit() {
    console.log(depositAmount);
    if (!validate(depositAmount, "Deposit amount")) return;
    setCBalance(cBalance + parseInt(depositAmount));
    console.log(cName, cBalance);
    setShow(false);
  }

  function clearForm() {
    setCBalance(cBalance);
    setShow(true);
  }

  useEffect(() => {
    for (const user of users) {
      if (cName === user.name) {
        user.balance = cBalance;
        cUser.balance = cBalance;
        console.log(cBalance);
        break;
      }
    }
  }, [cBalance]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card
            bgcolor="light"
            txtcolor="info"
            header1="Deposit"
            header1Value=""
            header2="User: "
            header2Value={cName}
            header3="Current balance: $ "
            header3Value={cBalance}
            status={status}
            body={
              show ? (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Amount to deposit:</Form.Label>
                    <Form.Control
                      type="input"
                      id="deposit-amount"
                      placeholder="Enter amount to deposit"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.currentTarget.value)}
                    />
                  </Form.Group>
                  <br />
                  <Button
                    type="submit"
                    className="btn btn-secondary"
                    onClick={handleDeposit}
                    disabled={depositAmount === ""}
                  >
                    Perform deposit
                  </Button>
                </>
              ) : (
                <>
                  <h5>Success</h5>
                  <Button type="submit" variant="secondary" onClick={clearForm}>
                    Another deposit
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
