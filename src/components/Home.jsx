// React
import { useContext, useEffect, useState } from "react";
// React Context
import UserContext from "../UserContext";
// React Router
import { Link } from "react-router-dom";
// React Bootstrap
import { Button, Form, Row, Col, Container } from "react-bootstrap";
// Components
import Card from "./Card";

export default function Home() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card
              txtcolor="info"
              header1="REACTbank Landing Module x"
              headerValue1=""
              txtcolor2="secondary"
              title="Welcome to the REACTbank"
              text="You can create an account or move around using the navigation bar."
              body={
                <>
                  <img
                    src="react.svg"
                    className="img-fluid w-50"
                    alt="Responsive image"
                  />
                  <br /><br />
                  <Link to="/createaccount/" className="nav-link">
                    <Button type="button" className="btn btn-secondary">
                      Create Account
                    </Button>
                  </Link>
                </>
              }
            ></Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}