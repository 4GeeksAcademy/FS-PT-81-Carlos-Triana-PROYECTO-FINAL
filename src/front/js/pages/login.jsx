import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Formulario } from "../component/formulario.jsx";
import { Link } from "react-router-dom";

export const Login = () => {

	const { store, action } = useContext(Context);

	return (
		<div className="">
			<div className="text-center mt-5">
				<h2 className="mb-5 text-shadow"> INICIAR SESSION </h2>
				<div className="d-flex justify-content-center">
					<Formulario type={'login'} />
				</div>
				<div className="mt-5 text-black">
					<Link to="/register" className=" p-2">Regístrarse</Link>
				</div>
			</div>
		</div>
	);

};