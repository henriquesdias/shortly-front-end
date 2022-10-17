import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import UserContext from "../context/user";
import HeaderStyle from "../styles/Header";

function HeaderWhenUserIsLogged() {
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <span>Seja bem vindo(a), Pessoa!</span>
      <div>
        <span>Home</span>
        <span>Ranking</span>
        <span
          onClick={() => {
            localStorage.removeItem("user");
            setUser(null);
          }}
        >
          Sair
        </span>
      </div>
    </div>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <HeaderStyle>
      {user ? (
        <HeaderWhenUserIsLogged></HeaderWhenUserIsLogged>
      ) : (
        <ul>
          <li
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Entrar
          </li>
          <li
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Cadastre-se
          </li>
        </ul>
      )}
    </HeaderStyle>
  );
}
