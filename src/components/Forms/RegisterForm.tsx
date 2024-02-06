// ALTA DE USUARIOS

// import React from 'react'
// import {ChangeEvent, FormEvent, useState, useEffect} from "react";
import { FormEvent, useState } from "react";
import * as RPGService from "./RPGService"
import { useNavigate, Link } from "react-router-dom"

const RegisterForm = () => {
    const [NOMBRE, setNombre] = useState("");
    const [CLAVE, setClave] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        await RPGService.createPlayer({NOMBRE, CLAVE})
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

    return (
        <div>
            <div className="divLogin" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="divInside">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit} style={{margin: "10% 5%"}}>
                        <div className="text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >NUEVO NOMBRE USUARIO</strong>
                            </label>
                            <input 
                                type="NOMBRE"
                                placeholder="Ingrese nombre de usuario"
                                className="form-control" 
                                id="exampleInputname" 
                                onChange={(event) => setNombre(event.target.value)}
                                required
                            />
                        </div>
                        <div className="text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>NUEVA CLAVE</strong>
                            </label>
                            <input 
                                type="CLAVE" 
                                placeholder="Ingrese Clave"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setClave(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{width: "90%"}}>Crear Usuario</button>
                    </form>
                    <p style={{marginBlockEnd: "0.25em"}}>¿Esta registrado?</p>
                    <div style={{marginBlockEnd: "1em"}}>
                        <Link to='/' className="btn btn-secondary">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm