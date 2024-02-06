// INICIA SESION DE USUARIO. SI ES CORRECTA, ENVIA EL NOMBRE DE USUARIO AL App.tsx
    // PARA ASI OPERAR UNICAMENTE SOBRE ESE REGISTRO
// INCLUYE EJEMPLO DE TRASPASO DE PROPS HIJO A PADRE.

import { FormEvent, useState } from "react";
import * as RPGService from "./RPGService"
import { useNavigate, Link } from "react-router-dom"
import './login-register.css';

const Login = ({ func }: any) => {
    const [NOMBRE, setNombre] = useState("");
    const [CLAVE, setClave] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await RPGService.login({NOMBRE, CLAVE})
        .then(result => {
            if(result.data.message === "Success"){
                sessionStorage.setItem("Usuario", result.data.datosUsuario["NOMBRE"]);
                func(result.data.datosUsuario)
                navigate('/base');
            }
            else{
                alert('User does not exist or Wrong password! Please try again.');
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="divLogin" style={{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="divInside">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit} style={{margin: "10% 5%"}}>
                        <div className="text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>NOMBRE USUARIO</strong>
                            </label>
                            <input 
                                type="NOMBRE" 
                                placeholder="Ingrese nombre de usuario"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setNombre(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>CLAVE</strong>
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
                        <button type="submit" className="btn btn-primary" style={{width: "90%"}}>Login</button>
                    </form>
                    <p style={{marginBlockEnd: "0.25em"}}>¿Aun no esta registrado?</p>
                    <div style={{marginBlockEnd: "1em"}}>
                        <Link to='/register' className="btn btn-secondary">Registrarse</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login