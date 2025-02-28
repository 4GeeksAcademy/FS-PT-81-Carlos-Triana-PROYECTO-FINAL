import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const UpdateForm = () => {
    const { store, actions } = useContext(Context);

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: ''
    });

    const [error, setError] = useState('');

    // Si deseas cargar los datos actuales del usuario (por ejemplo, al inicializar el componente)
    useEffect(() => {
        // Si ya tienes datos del usuario en el store, inicializa el formulario con esos valores
        if (store.user) {
            setFormData({
                userName: store.user.userName || '',
                email: store.user.email || '',
                phone: store.user.phone || ''
            });
        }
    }, [store.user]);

    const handleChange = async (e) => {
        const { name, value } = e.target;

        // Actualiza el estado local del formulario
        setFormData({ ...formData, [name]: value });

        // Puedes aquí llamar a las acciones para actualizar el estado global en el contexto
        try {
            await actions.updateUser({ [name]: value });
            setError('');
        } catch (err) {
            setError("Hubo un problema al actualizar.");
        }
    };

    return (
        <form className="d-flex flex-column w-75 p-2 rounded-3 shadow p-3 ">
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
                <label htmlFor="userName" className="form-label ms-3 d-flex justify-content-start"> Nombre de usuario </label>
                <input
                    id="userName"
                    type="text"
                    className="form-control bg-transparent"
                    onChange={handleChange}
                    name="userName"
                    placeholder="Pepito"
                    value={formData.userName}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label ms-3 d-flex justify-content-start"> Correo electrónico </label>
                <input
                    id="email"
                    type="email"
                    className="form-control bg-transparent"
                    onChange={handleChange}
                    name="email"
                    placeholder="pepe@gmail.pe"
                    value={formData.email}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="phone" className="form-label ms-3 d-flex justify-content-start"> Número de móvil </label>
                <input
                    id="phone"
                    type="tel"
                    className="form-control bg-transparent"
                    onChange={handleChange}
                    name="phone"
                    placeholder="675 89 09"
                    value={formData.phone}
                />
            </div>
        </form>
    );
};

