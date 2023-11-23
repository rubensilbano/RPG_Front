// ACA SE ELIGE UNA RUTA

// import React from 'react'
import * as RPGService from "./RPGService"
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar/Navbar';

const Route2 = ({ datosNav, cantidadRutas, datosZona, zonaRutaElegida, func }: any) => {
    const navigate = useNavigate();
    const handleClick = async (event: any) => {
        // ENVIA EL INDICE DE RUTA AL BACKEND PARA QUE SORTEE LOS CAMPAMENTOS,
            // Y REDIRIGE AL FORMULARIO CAMPAMENTOS
        await RPGService.route({NOMBRE: datosNav.NOMBRE, zone: datosZona[0], route: event.target.className})
        .then(result => {
            if (result.data.message === "CAMPAMENTOS GENERADOS"){
                // AHORA PUEDO GUARDAR LA ZONA ELEGIDA ANTERIORMENTE, JUNTO CON LA RUTA ELEGIDA
                zonaRutaElegida([datosZona[0], event.target.className])
                func(result.data.datosJugador)
                navigate('/camp');
            } else if (result.data.message === "INDICE DE RUTA INEXISTENTE"){
                alert('INDICE DE RUTA INEXISTENTE');
            } else {
                alert('INDICE DE ZONA INEXISTENTE');
            }
        })
        .catch(err => console.log(err));
    }
    function BotonEleccion(props: any) {
        // CREA UN BOTON ASIGNANDO EL INDICE DE RUTA COMO className, Y ADJUNTANDO LA FUNCION handleClick
        const nombreRuta = props.nombre;
        const indiceRuta = props.indice;
        return <button type="submit"
        className={indiceRuta}
        onClick={handleClick}
        >{nombreRuta}</button>;
    };
    function SelectorBotones(props: any) {
        // DEVUELVE LA CANTIDAD DE BOTONES, DEPENDIENDO DE LAS RUTAS GENERADAS PREVIAMENTE
            // ENTRE 3 Y 5 RUTAS
        const indice = props.indice;
        let nombre = "Ruta " + indice;
        if (indice < cantidadRutas + 1) {
            return <BotonEleccion indice={indice} nombre={nombre}/>
        } else {
            return <div></div>
        }
    };
    const handleClickReturn = () => {
        navigate('/zone');
    }

    return (
        <div>
            <Navbar datosNav={datosNav} />
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h1 className='mb-3 text-primary'>Elegir ruta</h1>

                    <SelectorBotones indice={1} />
                    <SelectorBotones indice={2} />
                    <SelectorBotones indice={3} />
                    <SelectorBotones indice={4} />
                    <SelectorBotones indice={5} />

                    <button type="submit" onClick={handleClickReturn}>Volver</button>
                </div>
            </div>
        </div>
    )
}

export default Route2