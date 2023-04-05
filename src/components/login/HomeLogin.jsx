import React from "react";
import "./login.scss";
import logo from "../../images/logo.svg";
import { useForm } from "react-hook-form";
import { BsFillTelephoneFill } from "react-icons/bs";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import Swal from "sweetalert2";

const HomeLogin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const generateRecaptcha = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptch-container",
        {
          size: "invisible",
          callback: () => {},
        },
        auth
      );
    } catch (error) {
      console.log(error);
    }
  };
  const sendCode = (number, recaptchaVerifier) => {
    signInWithPhoneNumber(auth, `${number}`, recaptchaVerifier)
      .then((response) => {
        window.confirmationResult = response;
        Swal.fire(
          "Excelente",
          `Te enviaremos un mensaje para confirmar a  ${number}`,
          "success"
        ).then(() => {
          navigate("/codeV");
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Ops!",
          `Ocurrió un error al realizar tu solicitud ${error.message}`,
          "error"
        );
      });
  };

  const onSubmit = (data) => {
    generateRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    sendCode(`+57${data.number}`, appVerifier);
  };
  return (
    <section className="secHomeLogin">
      <img src={logo} alt="" />
      <h3>Sing in</h3>
      <p>Login or create an account with your phone number to start ordering</p>
      <form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">
          <BsFillTelephoneFill className="telIcon" />
          +57
          <input
            {...register("number")}
            type="text"
            placeholder="Phone Number"
          />
        </label>
        <div id="recaptch-container"></div>
        <button type="submit">Send Code</button>
      </form>
    </section>
  );
};

export default HomeLogin;
