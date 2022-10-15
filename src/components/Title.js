import TitleStyle from "../styles/Title";
import logo from "../styles/logo.png";

export default function Title() {
  return (
    <TitleStyle>
      <span>Shortly</span>
      <img src={logo} alt="logo" />
    </TitleStyle>
  );
}
