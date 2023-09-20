import { useContext } from "react";
import UserContext from "../UserContext";

export default function Balance() {
  const { users, addUser, cUser, addCUser } = useContext(UserContext);

  return (
    <>
      <h1>Balance</h1>
      <h3>User: {cUser.name}</h3>
      <h4>Balance: {cUser.balance}</h4>
    </>
  );
}
