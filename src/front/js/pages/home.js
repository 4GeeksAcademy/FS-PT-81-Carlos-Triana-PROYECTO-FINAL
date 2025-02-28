import React, { useContext } from "react";
import "../../styles/home.css";
import { Carrusel } from "../component/carrusel.jsx";

export const Home = () => {

	return (
		<div className="">
			
			<div className="text-center d-flex justify-content-center">
				<Carrusel />
			</div>
			<div className="text-center d-flex justify-content-center">
				<div className="my-5 text-center w-75">
					<p>
					<i className="fa-solid fa-triangle-exclamation me-2 text-warning"></i>
						Por favor inicie sesión o registrese en el ícono superior derecho
						<i className="fa-solid fa-user mx-2"></i>
						si desea acceder a todas las funciones
					</p>
				</div>
			</div>
		</div>
	);
};
