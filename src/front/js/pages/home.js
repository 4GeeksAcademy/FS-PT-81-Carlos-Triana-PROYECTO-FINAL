import React, { useContext } from "react";
import "../../styles/home.css";
import { Carrusel } from "../component/carrusel.jsx";

export const Home = () => {

	return (
		<div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
			<div className="mt-5 text-start" style={{width:'100%'}}>
				
			</div>
			<Carrusel />

		</div>
	);
};
