import styled from "styled-components";

const PageContainerStyle = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  max-width: 1150px;
  width: 90%;
  margin: 0 auto;
  > p {
    font-size: 36px;
    font-weight: bold;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;

export default PageContainerStyle;
