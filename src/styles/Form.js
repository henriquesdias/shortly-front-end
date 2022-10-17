import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  color: black;
  input {
    margin-bottom: 25px;
    height: 60px;
    border-radius: 12px;
    border: 2px solid #ddebd5;
    max-width: 769px;
    width: 80%;
    font-size: 14px;
  }
  button {
    width: 182px;
    height: 60px;
    border-radius: 12px;
    background-color: #5d9040;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: #376d17;
    }
  }
`;

export default FormStyle;
