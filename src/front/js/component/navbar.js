import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const location = useLocation();

	return (
		<div className="d-flex justify-content-center text-white">
			{location.pathname === "/" && (
				<nav className="navbar border-bottom  bg-dark px-3"
					style={{
						height: '60px',
						position: 'fixed',
						top: 0,
						left: 0,
						width: '100%',
						zIndex: 1000
					}}
				>
					<div className="d-flex align-items-center me-3">
						<i className="fa-solid fa-earth-europe fa-xl"></i>
						<div>
							<h5 className="text-center mb-0"> WORLD OF </h5>
							<h5 className="mb-0 mx-1"> VIDEOGAMES </h5>
						</div>
						<i className="fa-solid fa-gamepad fa-xl"></i>
					</div>
					<Link to="/login" className="text-white" style={{ textDecoration: 'none' }}>
						<i className="fa-solid fa-user fa-xl"></i>
					</Link>
				</nav>
			)}
			{location.pathname === "/userHome" && (
				<nav className="navbar border-bottom bg-dark w-100 px-3 d-flex justify-content-between align-items-center"
					style={{
						height: '60px',
						position: 'fixed',
						top: 0,
						left: 0,
						width: '100%',
						zIndex: 1000
					}}
				>
					<div className="d-flex justify-content-between align-items-center w-100" style={{ height: "50px" }}>
						<div className="d-flex align-items-center">
							<div className="d-flex align-items-center me-3">
								<i className="fa-solid fa-earth-europe fa-xl"></i>
								<div>
									<h5 className="text-center mb-0"> WORLD OF </h5>
									<h5 className="mb-0 mx-1"> VIDEOGAMES </h5>
								</div>
								<i className="fa-solid fa-gamepad fa-xl"></i>
							</div>
							<Link to="/userHome" className="text-white me-3" style={{ textDecoration: 'none' }}>
								<h3> Tienda </h3>
							</Link>
							<h3 className="me-3"> Bibliteca </h3>
							<div className="text-center mb-2">
								{store.user ? (
									<>
										<h3 className="my-4">
											<span> {store.user.userName} </span>
										</h3>
									</>
								) : (
									<div className="d-flex">
										<p className="m-2 mb-0">User Name</p>
										<div className="spinner-border" role="status">
											<span className="visually-hidden">Loading...</span>
										</div>
									</div>
								)}
							</div>
						</div>
						<div className="d-flex align-items-center justify-content-end ">
							<div className="container-fluid mb-1">
								<form className="d-flex">
									<input className="form-control me-2 bg-transparent text-white" type="search" placeholder="Search" aria-label="Search" />
									<button className="btn btn-outline-success" type="submit">
										<i className="fa-solid fa-magnifying-glass"></i>
									</button>
								</form>
							</div>
							<Link className="text-white" style={{ textDecoration: 'none' }}>
								<i className="fa-solid fa-house fa-xl mx-3"></i>
								<p className="text-center mb-0">Inicio</p>
							</Link>
							<Link to="/perfil" className="text-white" style={{ textDecoration: 'none' }}>
								<i className="fa-solid fa-user fa-xl mx-3"></i>
								<p className="text-center mb-0">Perfil</p>
							</Link>
							<div className="">
								<i className="fa-solid fa-cart-shopping fa-xl mx-3"></i>
								<p className="text-center mb-0">Carrito</p>
							</div>
						</div>
					</div>
				</nav>
			)}
		</div>
	);
};
