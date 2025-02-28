import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {

  const location = useLocation();

  // Verificar si la ruta actual es "/", "/login" o "/register"
  //if (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register") {
   // return null; // No renderizar el footer en esas rutas
  //}

  return (
    <footer className="footer container-fluid bg-dark text-secondary py-1 px-4 d-flex justify-content-around border-top fixed-bottom">
      <h2> by your game by Carlos </h2>
    </footer>
  );
};

