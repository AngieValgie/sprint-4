import React from "react";
import "./login.scss";
import logo from "../../images/logo.svg";

const HomeLogin = () => {
  return (
    <section>
      <img src={logo} alt="" />
      <h3>Sing in</h3>
      <p>Login or create an account with your phone number to start ordering</p>
    </section>
  );
};

export default HomeLogin;
