import React from "react";
import LoginForm from "./LoginForm";
import Home from "./Home";
import { UseUseContext } from "../context/UserContext";

const Auth = () => {
  const user = UseUseContext();
  return <div>{user.isGuestUser ? <LoginForm /> : <Home />}</div>;
};

export default Auth;
