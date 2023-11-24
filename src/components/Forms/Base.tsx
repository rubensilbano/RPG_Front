// ALTA DE USUARIOS

// import React from 'react'
// import {ChangeEvent, FormEvent, useState, useEffect} from "react";
// import * as RPG from "./RPGService"
import { Link } from "react-router-dom"
// import Navbar2 from '../Navbar/Navbar2';
import Navbar from '../Navbar/Navbar';
// import { Jugador } from './Jugador'

// const Base = (datosNav: Jugador) => {
const Base = ({datosNav}: any) => {

    // NO CREO NECESITAR NADA DE ESTO
    // const [NOMBRE, setNombre] = useState("");
    // const [CLAVE, setClave] = useState("");
    // const navigate = useNavigate();

    /*
    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        await RPG.createPlayer({NOMBRE, CLAVE})
        .then(result => {
            if(result.data.message === "YA EXISTE UN JUGADOR CON ESE NOMBRE"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/');
            }
            else{
                alert("Registered successfully! Please Login to proceed.")
                navigate('/');
            }
        })
        .catch(err => console.log(err));
    };
    */
    
    return (
        <div>
            <Navbar datosNav={datosNav} />
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h1 className='mb-3 text-primary'>Base</h1>

                    {/* FALTA ESPECIFICAR LAS DEMAS RUTAS A CADA COMPONENTE */}
                    <Link to='/tavern' className="btn btn-secondary">Taberna</Link>
                    <Link to='/squad' className="btn btn-secondary">Escuadron</Link>
                    <Link to='/base' className="btn btn-secondary">Equipar</Link>
                    <Link to='/zone' className="btn btn-secondary">Explorar</Link>

                </div>
            </div>
        </div>
    )
}

export default Base