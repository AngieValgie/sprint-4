import React from "react";
import { useForm } from "react-hook-form";
import "./confirmCode.scss";
import logo from "../../../images/logo.svg";
import { codeConfirm } from "../../../services/confirmCode";

const ConfirmCode = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    codeConfirm(data.code);
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
  };
  return (
    <div className="confirmContainer">
      <img src={logo} alt="" />
      <h1>Verification</h1>
      <p>
        Enter the four-digit code from SMS <br />
        SMS not received. Send again?
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("code")} type="text" placeholder="Insert Code" />
        <button type="submit">Send Code</button>
      </form>
    </div>
  );
};

export default ConfirmCode;
