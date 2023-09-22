import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import UserContext from "../UserContext";

export default function Withdraw() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");

  const { users, addUser, cUser, addCUser } = useContext(UserContext);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

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

  useEffect(()=>{
    for (const user of users) {
      if (cName === user.name) {
        user.balance = cBalance;
        cUser.balance = cBalance;
        console.log(cBalance);
        break;
      }
    }
  }, [cBalance])

  return (
    <>
      <Card
        bgcolor="success"
        // txtcolor="dark"
        header1="Withdraw"
        header1Value=""
        header2="User: "
        header2Value={cName}
        header3="Current balance: "
        header3Value={cBalance}
        status={status}
        body={
          show ? (
            <>
              Amount to withdraw
              <br />
              <input
                type="input"
                className="form-control"
                id="withdraw-amount"
                placeholder="Enter amount to withdraw"
                value={withdrawAmount}
                onChange={(e) =>
                  setWithdrawAmount(e.currentTarget.value)
                }
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleWithdraw}
              >
                Perform withdraw
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Another withdraw
              </button>
            </>
          )
        }
      />
    </>
  );
}
