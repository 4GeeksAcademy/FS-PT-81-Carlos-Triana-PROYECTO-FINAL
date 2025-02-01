import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";



export const Perfil = () => {

    const { store, actions } = useContext(Context)

    const navigate = useNavigate()


    useEffect(() => {
        if (!localStorage.getItem('token')) navigate('/')
        actions.getUserData()
    }, [])

    const handleLogout = () => {
        actions.logout()
        navigate('/')
    }

    return (
        
            <div className="text-center mt-5">
        {store.user ? (
            <>
                <h2>
                    <span>Hi {store.user.userName} welcome</span>
                </h2>
                <p> {store.user.email} </p>
            </>
        ) : (
            <p>Loading...</p>
        )}
        <button onClick={handleLogout}> Cerrar session </button>
    </div>
        
    )

}