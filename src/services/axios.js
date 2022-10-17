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
function getMyUrls(config) {
  return axios.get(`http://localhost:4000/users/me`, config);
}
function postUrl(body, config) {
  return axios.post(`http://localhost:4000/urls/shorten`, config, body);
}

export { signIn, signUp, getRanking, getMyUrls, postUrl };
