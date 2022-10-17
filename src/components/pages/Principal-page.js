import PageContainerStyle from "../../styles/Page-container";
import Title from "../Title";
import Ranking from "../Ranking";
import Header from "../Header";

export default function PrincipalPage() {
  return (
    <PageContainerStyle>
      <Header></Header>
      <Title></Title>
      <Ranking></Ranking>
      <p>Crie sua conta para usar nosso serviço</p>
    </PageContainerStyle>
  );
}
