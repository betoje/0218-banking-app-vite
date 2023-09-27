// React
import { useContext, useEffect, useState } from "react";
// React Context
import UserContext from "../UserContext";
// React Bootstrap
import { Button, Form, Row, Col, Container } from "react-bootstrap";
// Components
import Card from "./Card";

export default function Withdraw() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");

  const { users, addUser, cUser, addCUser } = useContext(UserContext);
  const [withdrawAmount, setWithdrawAmount] = useState("");

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
    if (field > cBalance) {
      setStatus("Error: " + label + " greater than available funds");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleWithdraw() {
    console.log(withdrawAmount);
    if (!validate(withdrawAmount, "Withdraw amount")) return;
    setCBalance(cBalance - parseInt(withdrawAmount));
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
            header1="Withdraw"
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
                    <Form.Label>Amount to withdraw:</Form.Label>
                    <Form.Control
                      type="input"
                      id="withdraw-amount"
                      placeholder="Enter amount to withdraw"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.currentTarget.value)}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="secondary"
                    onClick={handleWithdraw}
                    disabled={withdrawAmount === ""}
                  >
                    Perform withdraw
                  </Button>
                </>
              ) : (
                <>
                  <h5>Success</h5>
                  <Button type="submit" variant="secondary" onClick={clearForm}>
                    Another withdraw
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