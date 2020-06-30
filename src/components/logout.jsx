import auth from "../services/authService";

const Logout = () => {
  // Cookies.remove("maxitalentos_authtoken");
  auth.logout();
  window.location = "/";
};

export default Logout;
