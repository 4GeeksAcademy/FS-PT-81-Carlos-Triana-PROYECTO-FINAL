import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";



export const Formulario = ({ type }) => {

    const { store, actions } = useContext(Context);

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        phone: ''
    })

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submit', formData, 'type->', type)
        type == 'login' ? actions.login(formData) : actions.register(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column w-75 p-2 rounded-3 shadow p-3 ">
            <div className="mb-3 ">
                <label htmlFor="exampleInputUserName" className="form-label ms-3 d-flex justify-content-start"> Nombre de usuario </label>
                <input type="text" className="form-control bg-transparent" onChange={handleChange} name="userName" placeholder="Pepito" value={formData.userName} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label ms-3 d-flex justify-content-start"> Correo electrónico </label>
                <input type="email" className="form-control bg-transparent" onChange={handleChange} name="email" placeholder="pepe@gmail.pe" value={formData.email} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword" className="form-label ms-3 d-flex justify-content-start"> Contraseña </label>
                <input type="password" className="form-control bg-transparent" onChange={handleChange} name="password" placeholder="Pepeloco123" value={formData.password} />
            </div>
            <div className="mb-3 ">
                <label htmlFor="exampleInputNumberPhone" className="form-label ms-3 d-flex justify-content-start"> Número de móvil </label>
                <input type="tel" className="form-control bg-transparent" onChange={handleChange} name="phone" placeholder="675 89 09" value={formData.phone} />
            </div>
            <div className="d-flex justify-content-between py-3">
                <button type="reset" className="btn btn-danger b-0"> Cancelar </button>
                <button type="submit" className="btn btn-primary"> Continuar </button>
            </div>
        </form>
    )

}