import styled from "styled-components";

const RankingStyle = styled.div`
  width: 90%;
  margin: 50px auto 0 auto;

  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 36px;
      font-weight: bold;
      margin-left: 10px;
    }
  }
  > div:last-child {
    border-radius: 24px 24px 0 0;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    margin-top: 35px;
    height: 241px;
    padding: 19px 0 30px 40px;
    overflow: auto;
    ul {
      display: flex;
      flex-direction: column;
    }
    li {
      display: inline-flex;
      font-size: 22px;
      span {
        margin: 0 10px 23px 5px;
      }
    }
  }
`;

export default RankingStyle;
