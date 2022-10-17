import { useNavigate } from "react-router-dom";

import HeaderStyle from "../styles/Header";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <ul>
        <li>Entrar</li>
        <li
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          Cadastre-se
        </li>
      </ul>
    </HeaderStyle>
  );
}
