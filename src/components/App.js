import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrincipalPage from "./pages/Principal-page";
import ResetStyle from "../styles/Reset";
import SignUp from "./pages/Sign-up";
import SignIn from "./pages/Sign-in";
import UserContext from "../context/user";

import { useState, useContext } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  if (localStorage.getItem("user") !== null && user === null) {
    const user = JSON.parse(localStorage.getItem("user"));
    delete user.password;
    setUser(user);
  }
  return (
    <BrowserRouter>
      <ResetStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<PrincipalPage />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
