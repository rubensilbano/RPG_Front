// ACA SE ELIGE UNA RUTA

// import React from 'react'
import * as RPGService from "./RPGService"
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar/Navbar';

// DECLARARLAS ASI PROVOCA UN FALLO, QUE IMPIDE EJECUTAR func
const Camp = ({ datosNav, datosZona, func, getResultado }: any) => {
    const navigate = useNavigate();
    const handleClick = async (event: any) => {
        // ENVIA EL INDICE DE CAMPAMENTO AL BACKEND PARA QUE EJECUTE UN COMBATE
            // Y REDIRIGE AL FORMULARIO RESULTADO
        await RPGService.battle({NOMBRE: datosNav.NOMBRE, zone: datosZona[0], route: datosZona[1], camp: parseInt(event.target.className) - 1})
        .then(result => {
            if (result.data.message === "RESULTADOS"){
                func(result.data.datosJugador)
                // AHORA TENGO QUE MOSTRAR LOS RESULTADOS EN EL FORMULARIO RESULTADOS
                getResultado(result.data.lisrespuesta)
                navigate('/result');
            } else if (result.data.message === "SIN ENEMIGOS") {
                // EVALUO Y SALVO EL HIPOTETICO CASO EN QUE SE INTENTO COMBATIR CONTRA UNA LISTA SIN ENEMIGOS
                func(result.data.datosJugador)
                navigate('/zone');
            } else {
                alert(result.data.message);
            }
        })
        .catch(err => console.log(err));
    }
    function BotonEleccion(props: any) {
        // CREA UN BOTON ASIGNANDO EL INDICE DE CAMPAMENTO COMO className, Y ADJUNTANDO LA FUNCION handleClick
        const nombreCamp = props.nombre;
        const indiceCamp = props.indice;
        return <button type="submit"
        className={indiceCamp}
        onClick={handleClick}
        >{nombreCamp}</button>;
    };
    function SelectorBotones(props: any) {
        // DEVUELVE UN BOTON O TEXTO, DEPENDIENDO SI EL CAMPAMENTO ESTA: SUPERADO, DISPONIBLE, BLOQUEADO
        const indice = props.indice;
        let nombre = "Campamento " + indice;
        const indiceReal = indice - 1
        let elemento = <h4>{nombre}</h4>;
        if (parseInt(datosNav.PROXCAMP) === indiceReal) {
            elemento = <BotonEleccion indice={indice} nombre={nombre}/>
        } else if (datosNav.PROXCAMP < indiceReal) {
            nombre += " BLOQUEADO";
            elemento = <h4>{nombre}</h4>;
        } else if (indiceReal < datosNav.PROXCAMP) {
            nombre = "VICTORIA!!!";
            elemento = <h4>{nombre}</h4>;
        }
        return elemento
    };
    const handleClickReturn = () => {
        navigate('/base');
    }

    return (
        <div>
            <Navbar datosNav={datosNav} />
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h1 className='mb-3 text-primary'>Elegir campamento y pelear</h1>
                    <br />
                    <h4>Atacar un campamento requiere 1 punto de accion.</h4>
                    <SelectorBotones indice={1} />
                    <SelectorBotones indice={2} />
                    <SelectorBotones indice={3} />
                    <SelectorBotones indice={4} />
                    <SelectorBotones indice={5} />
                    <SelectorBotones indice={6} />
                    <SelectorBotones indice={7} />
                    <SelectorBotones indice={8} />
                    <SelectorBotones indice={9} />
                    <SelectorBotones indice={10} />

                    <button type="submit" onClick={handleClickReturn}>Volver</button>
                </div>
            </div>
        </div>
    )
}

export default Camp