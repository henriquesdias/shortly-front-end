import axios from "axios";

function signIn(body) {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/signin`);
}
function signUp(body) {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/signup`);
}
function getRanking() {
  return axios.get(`http://localhost:4000/ranking`);
}

export { signIn, signUp, getRanking };
