import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import UserContext from "../UserContext";

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
    <>
      <Card
        bgcolor="secondary"
        header1="Balance"
        header1Value=""
        header2="User: "
        header2Value={cName}
        header3="Current balance: "
        header3Value={cBalance}
      />
    </>
  );
}
