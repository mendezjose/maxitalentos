import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndpoint = "http://localhost:3900/api/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password, option) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });

  if (option) localStorage.setItem(tokenKey, jwt);
  else sessionStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  sessionStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt =
      localStorage.getItem(tokenKey) || sessionStorage.getItem(tokenKey);

    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey) || sessionStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
