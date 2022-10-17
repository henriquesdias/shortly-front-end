import axios from "axios";

function signIn(body) {
  return axios.post(`http://localhost:4000/signin`, body);
}
function signUp(body) {
  return axios.post(`http://localhost:4000/signup`, body);
}
function getRanking() {
  return axios.get(`http://localhost:4000/ranking`);
}

export { signIn, signUp, getRanking };
