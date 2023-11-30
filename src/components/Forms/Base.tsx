// ALTA DE USUARIOS

// import React from 'react'
// import {ChangeEvent, FormEvent, useState, useEffect} from "react";
import { useEffect } from "react";
// import * as RPG from "./RPGService"
import { Link } from "react-router-dom"
// import Navbar2 from '../Navbar/Navbar2';
import Navbar from '../Navbar/Navbar';
// import { Jugador } from './Jugador'

// const Base = (datosNav: Jugador) => {
const Base = ({ datosNav, saveNombresHeroes }: any) => {

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
    useEffect(() => {
        // PARA EVITAR LA ADVERTENCIA EN EL build,
            // SE RECOMIENDA PONER LA DECLARACION DE LA FUNCION, DENTRO DEL MISMO useEffect.
        // ESTO ES VALIDO CUANDO TAL FUNCION SE USA UNICAMENTE EN EL useEffect.
        function funcionCargarNombresHeroes() {
            // ACA VAMOS A PEDIR EL STRING DE UN ARCHIVO DE CONSTANTES
            saveNombresHeroes(["Guerrero S", "Guerrero A", "Guerrero B", "Paladin S", "Paladin A", "Paladin B", "Ballestero S", "Ballestero A", "Ballestero B", "Ninja S", "Ninja A", "Ninja B", "Novicia S", "Novicia A", "Novicia B", "Maga S", "Maga A", "Maga B", "Excomulgado S", "Excomulgado A", "Excomulgado B", "Inquisidor S", "Inquisidor A", "Inquisidor B"])
            // return
        };
        funcionCargarNombresHeroes()
    // }, [datosNav]);
    }, [saveNombresHeroes]);

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