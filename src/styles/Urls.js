import styled from "styled-components";

const UrlsStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  > div:first-child {
    form {
      display: flex;
      margin-bottom: 50px;
    }
    input {
      max-width: 769px;
      width: 80%;
      height: 60px;
      border-radius: 12px;
      border: 2px solid #ddebd5;
    }
    button {
      width: 182px;
      height: 60px;
      border-radius: 12px;
      background-color: #5d9040;
      border: none;
      color: white;
      font-weight: bold;
      margin-left: 69px;
      cursor: pointer;
      &:hover {
        background-color: #376d17;
      }
    }
  }
  ul {
    width: 100%;
    li {
      height: 62px;
      width: 100%;
      max-width: 1000px;
      border-radius: 12px;
      border: 2px solid #ddebd5;
      color: white;
      font-size: 14px;
      display: flex;
      margin-bottom: 40px;
      div:first-child {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        background-color: #80cc74;
        border-radius: 12px 0 0 12px;
        width: 90%;
        padding: 0 10px;
        span:first-child {
          max-width: 200px;
          overflow-x: auto;
        }
      }
      div:last-child {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        background-color: white;
        height: 100%;
        color: red;
      }
    }
  }
`;

export default UrlsStyle;
