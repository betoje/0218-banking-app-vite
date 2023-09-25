import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import UserContext from "../UserContext";
import {Button} from 'react-bootstrap';

export default function Deposit() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  // const [activeButton, setActiveButton] = useState(true);

  const { users, addUser, cUser, addCUser } = useContext(UserContext);
  const [depositAmount, setDepositAmount] = useState(0);

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
    // setActiveButton(false);
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
    // setActiveButton(true);
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
    // setActiveButton(true);
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
    <>
      <Card
        bgcolor="success"
        header1="Deposit"
        header1Value=""
        header2="User: "
        header2Value={cName}
        header3="Current balance: "
        header3Value={cBalance}
        status={status}
        body={
          show ? (
            <>
              Amount to deposit
              <br />
              <input
                type="input"
                className="form-control"
                id="deposit-amount"
                placeholder="Enter amount to deposit"
                value={depositAmount}
                onChange={(e) => {
                  let cValue = e.currentTarget.value;
                  setDepositAmount(cValue);
                }}
              />
              <br />
              <Button
                type="submit"
                className="btn btn-light"
                // disabled={!activeButton}
                onClick={handleDeposit}
              >
                Perform deposit
              </Button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Another deposit
              </button>
            </>
          )
        }
      />
    </>
  );
}
