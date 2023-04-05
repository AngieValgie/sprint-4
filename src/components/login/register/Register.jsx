import React from "react";
import "./register.scss";
import { useForm } from "react-hook-form";

const Register = () => {
  useForm();
  return (
    <section className="register">
      <h2>Create account</h2>
      <form className="formRegister">
        <div className="inputs">
          <label htmlFor="" className="formLabel">
            {" "}
            NAME
            <input type="text" className="formInput" />
          </label>

          <label htmlFor="" className="formLabel">
            {" "}
            EMAIL
            <input type="text" className="formInput" />
          </label>

          <label htmlFor="" className="formLabel">
            {" "}
            PASSWORD
            <input type="text" className="formInput" />
          </label>
        </div>
        <button className="input__Button">Sing in</button>
      </form>
    </section>
  );
};

export default Register;
