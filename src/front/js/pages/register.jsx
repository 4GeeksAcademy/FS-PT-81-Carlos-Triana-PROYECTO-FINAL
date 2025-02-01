import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Formulario } from "../component/formulario.jsx";
import { Link } from "react-router-dom";

export const Register = () => {

    const { store, action } = useContext(Context);

    return (
        <div className="">
            <div className="text-center mt-5">
                <h2 className="mb-5"> REGISTRARSE </h2>
                <div className="d-flex justify-content-center">
                    <Formulario type={'register'} />
                </div>
                <div className="mt-5">
                <Link to="/login" className="">Iniciar sección</Link>
                </div>
            </div>
        </div>
    );

};