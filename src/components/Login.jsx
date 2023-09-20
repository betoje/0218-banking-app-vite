import React from "react";
import ReactDOM from "react-dom/client";

import Card from "./Card";
import { useContext, useState } from "react";
import UserContext from "../UserContext";

export default function Login() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {users, addUser, cUser, addCUser} = useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    // console.log(name, email, password);
    console.log(name, password);
    console.log(JSON.stringify(users));
    // if (!validate(name, "name")) return;
    // if (!validate(email, "email")) return;
    // if (!validate(password, "password")) return;

    setStatus("Validation Error");
    for (const user of users ) {
      // if ((name !== user.name) & (email !== user.email) ) continue;
      if ((name !== user.name) & (name !== user.email) ) continue;
      // if (email !== user.email) continue;
      if (password !== user.password) continue;
      setStatus("Validation Succeded");
      addCUser(user.name, user.email, user.password, user.balance);
    }
    setShow(false);
  }

  function clearForm() {
    setName("");
    // setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <>
      <h1>Login</h1>
      <Card
        bgcolor="primary"
        header="Validate User"
        status={status}
        body={
          show ? (
            <>
              Name or Email
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter name or email"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              {/* <br />
              Email address
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              /> */}
              <br />
              Password
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleLogin}
              >
                Validate User
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
                Try Again
              </button>
            </>
          )
        }
      />
    </>
  );
}
