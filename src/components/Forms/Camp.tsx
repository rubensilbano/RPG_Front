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
        const nombre = sessionStorage.getItem("Usuario")
        await RPGService.battle({NOMBRE: nombre, zone: datosZona[0], route: datosZona[1], camp: parseInt(event.target.value) - 1})
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
        value={indiceCamp}
        className="btn-secondary" 
        style={{backgroundColor: "red", color: "black", padding: "0.5em 1.5em", justifyContent: "center"}}
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
            elemento = <div style={{display: "flex", justifyContent: "center"}}>
                <BotonEleccion indice={indice} nombre={nombre}/>
            </div>
        } else if (datosNav.PROXCAMP < indiceReal) {
            nombre += " BLOQUEADO";
            elemento = <div style={{display: "flex", justifyContent: "center"}}>
                <h4 style={{margin: "0.5em"}}>{nombre}</h4>
            </div>
        } else if (indiceReal < datosNav.PROXCAMP) {
            nombre = "VICTORIA!!!";
            elemento = <div style={{display: "flex", justifyContent: "center"}}>
                <h4 style={{margin: "0.5em"}}>{nombre}</h4>
            </div>
        }
        return elemento
        
    };
    function TextoAccionNecesario() {
        // DEVUELVE UN TEXTO MOSTRANDO LA CANTIDAD DE PUNTOS DE ACCION NECESARIOS
        let puntosNecesarios = 1
        switch (parseInt(datosZona[0])) {
            case 1:
                puntosNecesarios = 2
                break;
            case 2:
                puntosNecesarios = 2
                break;
            case 3:
                puntosNecesarios = 3
                break;
            case 4:
                puntosNecesarios = 3
                break;
            case 5:
                puntosNecesarios = 3
                break;
            case 6:
                puntosNecesarios = 4
                break;
            case 7:
                puntosNecesarios = 4
                break;
            case 8:
                puntosNecesarios = 4
                break;
            case 9:
                puntosNecesarios = 5
                break;
            case 10:
                puntosNecesarios = 5
                break;
        }
        return <h4>{"Atacar un campamento requiere " + puntosNecesarios + " puntos de accion."}</h4>;
    };
    const handleClickReturn = () => {
        navigate('/base');
    }

    return (
        <div>
            <Navbar datosNav={datosNav} />
            <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <h1>Elegir campamento y pelear</h1>
                <TextoAccionNecesario />
                <br />
                
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{display: "block"}}>
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
                    </div>
                </div>
                <br />
                <div style= {{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1em"}}>
                    <button className="btn-secondary" style= {{padding: "0.5em 1.5em"}} type="submit" onClick={handleClickReturn}>Volver</button>
                </div>
            </div>
        </div>
    )
}

export default Camp