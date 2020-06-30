import React from "react";
import auth from "../services/authService";
import Navbar from "./navbar";

const User = (props) => {
  const user = auth.getCurrentUser();
  return (
    <React.Fragment>
      <Navbar {...props} />
      <div className="container mt-4">{user.name}</div>;
    </React.Fragment>
  );
};

export default User;
