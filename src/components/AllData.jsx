import { useContext } from "react";
import UserContext from "../UserContext";

export default function AllData() {
  const { users, addUser, cUser, addCUser } = useContext(UserContext);

  return (
    <>
      <h1>All Data</h1>
      {JSON.stringify(users)}
      <br />
      {JSON.stringify(cUser)}
      <br />
    </>
  );
}
