import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Carrusel } from "../component/carrusel.jsx";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.jsx";
import { CardOfSell } from "../component/cardsOfSell.jsx";


export const UserHome = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        if (!localStorage.getItem('token')) navigate('/')
        actions.getUserData()

    }, [])

    return (
        <div>
            <div className="w-100 mt-5 pt-5 d-flex justify-content-center bg-white">
                <Carrusel />
            </div>
            <div className="my-5 bg-white" style={{ overflowX: "auto" }}>
                <Card />
            </div>
            <div className=" mb-5 pb-5">
                <CardOfSell />
            </div>
        </div>
    );
};