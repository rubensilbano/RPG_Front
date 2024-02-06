// import React from "react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import monedasImg from "../../assets/images/Monedas.png";
import accionImg from "../../assets/images/Action.png";
import './Navbar.css';

const Navbar = ({ datosNav }) => {
  function BarrasExp(props) {
    // RECIBE EXPERIENCIA ACTUAL Y PROX NIVEL, MUESTRA DOS BARRAS
    const experiencia = props.exp
    const ancho = (parseInt(experiencia[0]) / parseInt(experiencia[1])) * 200
    return <div>
      <div className="barrasNavBar expTotalNavBar">
        <div className="barrasNavBar expRestanteNavBar" style={{ width: ancho }}></div>
      </div>
    </div>
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container left">
        <h3>{datosNav.NOMBRE}</h3>
        <h3>{"Nivel: " + datosNav.NIVEL + "/100"}</h3>
        <h3>{"Exp: " + datosNav.EXPERIENCIA + "/" + (50 * ((datosNav.NIVEL + 1)**2 + (datosNav.NIVEL + 1) - 2))}</h3>
        <BarrasExp exp={[datosNav.EXPERIENCIA, (50 * ((datosNav.NIVEL + 1)**2 + (datosNav.NIVEL + 1) - 2))]} />
      </div>
      <div className="container right">
        <h3>{"Heroes: " + datosNav.CANTIDAD + "/24"}</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img className="icon" src={monedasImg} alt="Monedas:" />
          <h3 style={{ paddingLeft: 10 }}>{datosNav.MONEDAS}</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img className="icon" src={accionImg} alt="Accion:" />
          <h3>{datosNav.ACCION + "/100"}</h3>
        </div>
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
