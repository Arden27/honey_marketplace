import React from "react";
import Image from "next/image";

export default function RegisterBar() {
  return (
    <section className="register-bar">
      <div className="register-bar__text-wrapper m-0 p-0 flex container ">
        <h3 className="register-bar__text">
          Załóż konto i zyskaj <span>5%</span> rabatu
        </h3>
      </div>

      <div className="register-bar__btn-wrapper">
        <a className="register-bar__btn button-big">Zarejestruj się</a>
      </div>
    </section>
  );
}
