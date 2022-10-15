import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrincipalPage from "./pages/principal-page";
import ResetStyle from "../styles/Reset";

export default function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<PrincipalPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
