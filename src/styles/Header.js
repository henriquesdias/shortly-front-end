import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  > ul {
    display: flex;
    font-size: 14px;
    justify-content: flex-end;
    width: 100%;
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
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > span {
      color: #5d9040;
    }
    div {
      span {
        margin: 0 10px;
        color: #9c9c9c;
        cursor: pointer;
      }
      span:last-child {
        text-decoration: underline;
      }
    }
  }
`;

export default HeaderStyle;
