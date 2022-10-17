import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > ul {
    display: flex;
    font-size: 14px;
    li:first-child {
      color: #5d9040;
      cursor: pointer;
    }
    li:last-child {
      color: #9c9c9c;
      margin-left: 22px;
      cursor: pointer;
    }
  }
`;

export default HeaderStyle;
