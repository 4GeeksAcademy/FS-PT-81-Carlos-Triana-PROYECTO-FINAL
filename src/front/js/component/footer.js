import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer container-fluid bg-white py-1 px-4 d-flex justify-content-center border-top fixed-bottom">
    <Link to="/" className="text-dark" style={{ textDecoration: 'none' }}>
      <i className="fa-solid fa-house mx-3"></i>
      <p className="text-center mb-0">Inicio</p>
    </Link>
  </footer>
);
