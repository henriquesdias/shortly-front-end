import TitleStyle from "../styles/Title";
import logo from "../styles/logo.png";

import { useNavigate } from "react-router-dom";

export default function Title() {
  const navigate = useNavigate();
  return (
    <TitleStyle
      onClick={() => {
        navigate("/");
      }}
    >
      <span>Shortly</span>
      <img src={logo} alt="logo" />
    </TitleStyle>
  );
}
