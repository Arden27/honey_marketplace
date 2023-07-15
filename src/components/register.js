import React from "react";
import Image from "next/image";

export default function Register() {
	return (
		<section className="register">
			<div className="register--text-wrapper">
				<h3 className="register--text">Załóż konto i zyskaj <span>5%</span> rabatu</h3>

			</div>

			<div className="register--btn-wrapper">
				<a className="register--btn button-big">Zarejestruj się</a>
			</div>
		</section>
	);
}
