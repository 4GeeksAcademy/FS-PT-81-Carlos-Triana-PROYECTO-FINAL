import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Update = () => {

    const { store, action } = useContext(Context);

    return (
        <div>
            actualizar
        </div>
    )

}