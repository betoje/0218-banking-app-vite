import { useContext } from "react";
import UserContext from "../UserContext";

export default function Withdraw() {
  const { users, addUser, cUser, addCUser } = useContext(UserContext);

  return (
    <>
      <h1>Withdraw</h1>
      <h3>User: {cUser.name}</h3>
      <h4>Balance: {cUser.balance}</h4>
    </>
  );
}
