import styled from "styled-components";

import PageContainerStyle from "../../styles/Page-container";
import Title from "../Title";
import Ranking from "../Ranking";

export default function PrincipalPage() {
  return (
    <PageContainerStyle>
      <HeaderStyle>
        <ul>
          <li>Entrar</li>
          <li>Cadastre-se</li>
        </ul>
      </HeaderStyle>
      <Title></Title>
      <Ranking></Ranking>
      <p>Crie sua conta para usar nosso serviço</p>
    </PageContainerStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > ul {
    display: flex;
    font-size: 14px;
    li:first-child {
      color: #5d9040;
    }
    li:last-child {
      color: #9c9c9c;
      margin-left: 22px;
    }
  }
`;
