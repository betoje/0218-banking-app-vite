import { useContext } from "react";
import UserContext from "../UserContext";

export default function AllData() {
  const { users, addUser, cUser, addCUser } = useContext(UserContext);
  const usersRows = users.map((user, index) => (
    <tr key={index}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
      <td>{user.balance}</td>
    </tr>
  ));
  const cUserRow = (
    <tr>
      <td>{cUser.name}</td>
      <td>{cUser.email}</td>
      <td>{cUser.password}</td>
      <td>{cUser.balance}</td>
    </tr>
  );

  return (
    <>
      <h5 className="dataHeader text-info">Users Information</h5>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col" className="tableCell">
              Name
            </th>
            <th scope="col" className="tableCell">
              Email
            </th>
            <th scope="col" className="tableCell">
              Password
            </th>
            <th scope="col" className="tableCell">
              Balance
            </th>
          </tr>
        </thead>
        <tbody>{usersRows}</tbody>
      </table>

      <h5 className="dataHeader text-info">Loged-In User</h5>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col" className="tableCell">
              Name
            </th>
            <th scope="col" className="tableCell">
              Email
            </th>
            <th scope="col" className="tableCell">
              Password
            </th>
            <th scope="col" className="tableCell">
              Balance
            </th>
          </tr>
        </thead>
        <tbody>{cUserRow}</tbody>
      </table>
      {/* {JSON.stringify(cUser)} */}
      <br />
    </>
  );
}
