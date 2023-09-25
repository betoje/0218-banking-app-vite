// React
import { createContext, useState } from "react";
// React Context
const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [cUser, setCUser] = useState({});
  const addUser = (name, email, password, balance = 0) => {
    setUsers((prevState) => [...prevState, { name, email, password, balance }]);
  };
  const addCUser = (name = 'test', email ="test@test.com", password = "1234", balance = 0) => {
      setCUser({name, email, password, balance});
  }

  return (
    <UserContext.Provider value={{users, addUser, cUser, addCUser}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;