import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrincipalPage from "./pages/Principal-page";
import ResetStyle from "../styles/Reset";
import SignUp from "./pages/Sign-up";

export default function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<PrincipalPage />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
