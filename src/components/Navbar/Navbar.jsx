// import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = ({datosNav}) => {
  const [cantHeroes, setCantHeroes] = useState(0);
  useEffect(() => {
    // AHORA LA CANTIDAD DE HEROES VA A SER UN VALOR EN EL REGISTRO.
      // ESTO DEBIDO A QUE ME PARECE INCORRECTO REALIZAR ESTA SERIE DE CALCULOS EN EL FRONTEND Y BACKEND.

    // CUENTA LA CANTIDAD DE HEROES
    /*
    let cantidad = 0;
    for (let index = 1; index < 25; index++) {
      const nivelHeroeActual = parseInt(datosNav["HEROE" + index]["NIVEL"]);
      if (0 < nivelHeroeActual) {
        cantidad += 1;
      };
    };
    setCantHeroes(cantidad);
    */
  }, []);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <h3>{datosNav.NOMBRE}</h3>
        <h3>{"Nivel: " + datosNav.NIVEL}</h3>
        <h3>{datosNav.EXPERIENCIA + "/" + (50 * ((datosNav.NIVEL + 1)**2 + (datosNav.NIVEL + 1) - 2))}</h3>
      </div>
      <div className="container">
        <h3>{datosNav.CANTIDAD + "/24"}</h3>
        <h3>{datosNav.MONEDAS}</h3>
        <h3>{datosNav.ACCION + "/100"}</h3>
      </div>
      
      {/* ESTO ES DEL ANTERIOR NAVBAR */}
      {/* SOLO SE CREO ESTE DIV PARA CENTRAR LOS Link, CON LA className container */}
      {/* <div className="container">
        <Link className="navbar-brand" to="/">
          My favourite videos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          // FALTA REVISAR HACIA ARRIBA
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/new-video">
                Create new video
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
      
    </nav>
  );
};

export default Navbar;
