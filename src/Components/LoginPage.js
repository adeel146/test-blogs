import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import LoginCard from "./LoginCard";
import "./loginPage.scss";

const LogIn = () => {
  const navigate = useNavigate();
  let location = localStorage.getItem("isAuthenticated");
  useEffect(() => {
    location && navigate("blogs");
  }, [location]);

  return (
    <div className="login-page">
      <LoginCard />
    </div>
  );
};

export default LogIn;
