import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {

	const location = useLocation();

	return (
		<div className="d-flex fixed-top">
			{location.pathname === "/" && (
				<nav className="navbar containe bg-body p-3 mb-5 w-100 text border-bottom">
					<i className="fa-solid fa-taxi fa-2xl"></i>
					<p className="mb-0 ms-5"> TAXIFLASH </p>
					<Link to="/login" className="text" style={{ textDecoration: 'none' }}>
						<i className="fa-solid fa-user mx-3"></i>
					</Link>
				</nav>
			)}
		</div>

	);
};
