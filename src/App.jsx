import { useState } from "react";
import reactLogo from "./assets/react.svg";

// React Components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Balance from "./components/Balance";
import AllData from "./components/AllData";

// React Router
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// React Context
import { UserProvider } from "./UserContext";

// Styles
import "./App.css";

const router = createHashRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/createaccount",
        element: <CreateAccount />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/withdraw",
        element: <Withdraw />,
      },
      {
        path: "/balance",
        element: <Balance />,
      },
      {
        path: "/alldata",
        element: <AllData />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <UserProvider>
        <RouterProvider router={router} />
        {/* <HashRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/alldata" element={<AllData />} />
          </Routes>
        </HashRouter> */}
      </UserProvider>
    </div>
  );
}

export default App;
