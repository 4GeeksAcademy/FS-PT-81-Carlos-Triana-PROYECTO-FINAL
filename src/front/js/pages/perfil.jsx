import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { UpdateForm } from "../component/UpdateForm.jsx";



export const Perfil = () => {

    const { store, actions } = useContext(Context)

    const navigate = useNavigate()


    useEffect(() => {
        if (!localStorage.getItem('token')) navigate('/')
        actions.getUserData()

    }, [])

    const handleLogout = () => {
        const confirmLogout = window.confirm("¿Estás seguro de querer cerrar la sesión actual? Tendrás que volver a iniciarla para acceder a las funciones.");
        if (confirmLogout) {
            actions.logout()
            navigate('/')
        }
    };

    const handleDeleteUser = () => {
        const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar tu cuenta? Esta acción es irreversible.");
        if (confirmDelete) {
            actions.deleteUser(store.user, store.user.id);
            navigate('/');
        }
    };

    const handleUpdateUser = () => {
        const confirmUpdate = window.confirm("¿Estás seguro de que quieres modificar tu perfil?");
        if (confirmUpdate) {
        actions.updateUser(store.user, store.user.id);
        navigate('/perfil');
        }
    };

    return (

        <div className="text-center mt-5">

            {store.user ? (
                <>
                    <h2>
                        <span>Hi {store.user.userName} welcome</span>
                    </h2>
                </>
            ) : (
                <i className="fa-duotone fa-thin fa-spinner-scale"></i>
            )}

            <div>
                <button onClick={handleLogout} className="btn btn-outline-primary w-50"> Cerrar session </button>
            </div>
            <div>
                <button onClick={handleDeleteUser} className="btn btn-outline-danger w-50"> Eliminar cuenta </button>
            </div>
            <div className="Modal">
                <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Actualizar perfil
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center mt-5">
                                    <h2 className="mb-5"> ACTUALICE SU PERFIL </h2>
                                    <div className="d-flex justify-content-center">
                                        <UpdateForm />
                                    </div>
                                    <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button onClick={handleUpdateUser} className="btn btn-primary">Confirmar cambios</button>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}