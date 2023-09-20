import { useContext, useState } from "react";
import UserContext from "../UserContext";

export default function Deposit() {
  const { users, addUser, cUser, addCUser } = useContext(UserContext);
  for (const user of users ) {
    if (cUser.name === user.name) {
      console.log(user.balance);
      user.balance = user.balance + 100;
      cUser.balance=user.balance;
      console.log(user.balance);
      break;
    }
  }

  return (
    <>
      <h1>Deposit</h1>
      <h3>User: {cUser.name}</h3>
      <h4>Balance: {cUser.balance}</h4>
    </>
  );
}
