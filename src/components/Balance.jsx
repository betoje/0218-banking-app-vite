// React
import { useContext, useEffect, useState } from "react";
// React Context
import UserContext from "../UserContext";
// React Bootstrap
import { Button, Form, Row, Col, Container } from "react-bootstrap";
// Components
import Card from "./Card";

export default function Balance() {
  const { users, addUser, cUser, addCUser } = useContext(UserContext);

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

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card
            bgcolor="light"
            txtcolor="info"
            header1="Balance"
            header1Value=""
            header2="User: "
            header2Value={cName}
            header3="Current balance: $ "
            header3Value={cBalance}
          />
        </Col>
      </Row>
    </Container>
  );
}
