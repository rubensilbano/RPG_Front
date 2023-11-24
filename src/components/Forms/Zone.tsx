// ACA SE ELIGE UNA RUTA

// import React from 'react'
import * as RPGService from "./RPGService"
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar/Navbar';

const Zone = ({ datosNav, rutasGeneradas, zonaRutaElegida, func }: any) => {
    const navigate = useNavigate();
    const handleClick = async (event: any) => {
        // ENVIA EL INDICE DE ZONA AL BACKEND PARA QUE SORTEE LAS RUTAS, Y REDIRIGE AL FORMULARIO RUTAS
        await RPGService.zone({NOMBRE: datosNav.NOMBRE, id: event.target.className})
        .then(result => {
            if (result.data.message === "RUTAS GENERADAS"){
                func(result.data.datosJugador)
                // LE ENVIO AL App, LA CANTIDAD DE RUTAS
                    // PARA QUE Route2.tsx PUEDA SABER CUANTAS RUTAS DEBE MOSTRAR
                rutasGeneradas(result.data.cantRutas)
                // SOLO GUARDO LA ZONA ELEGIDA, TODAVIA NO SE ELIGIO RUTA
                zonaRutaElegida([event.target.className, -1])
                navigate('/route');
            } else if (result.data.message === "ESTA ZONA AUN ESTA BLOQUEADA"){
                alert('ESTA ZONA AUN ESTA BLOQUEADA');
            } else {
                alert('INDICE DE ZONA INEXISTENTE');
            }
        })
        .catch(err => console.log(err));
    }
    const handleClickContinuar = (event: any) => {
        // ENVIA LOS DATOS ZONARUTA AL App, Y REDIRIGE AL FORMULARIO CAMPAMENTOS
        zonaRutaElegida(datosNav.ZONARUTA)
        navigate('/camp');
    }
    function BotonEleccion(props: any) {
        // CREA UN BOTON ASIGNANDO EL INDICE DE ZONA COMO className, Y ADJUNTANDO LA FUNCION handleClick
        const nombreZona = props.nombre;
        const indiceZona = props.indice;
        return <button type="submit"
        className={indiceZona}
        onClick={handleClick}
        >{nombreZona}</button>;
    };
    function BotonContinuar(props: any) {
        // CREA UN BOTON ADJUNTANDO LA FUNCION handleClickContinuar
        const nombreTexto = props.nombre;
        const indiceZona = props.indice;
        return <button type="submit"
        className={indiceZona}
        onClick={handleClickContinuar}
        >{nombreTexto}</button>;
    };
    function SelectorBotones(props: any) {
        // DEVUELVE UN BOTON CAMBIANDO EL TEXTO DEPENDIENDO SI LA ZONA ESTA DESBLOQUEADA
        const indice = props.indice;
        let nombre = "Zona " + indice;
        if (datosNav.ZONA < indice) {
            nombre += " BLOQUEADA"
        }
        return <BotonEleccion indice={indice} nombre={nombre}/>
    };
    function SelectorContinuar() {
        // EVALUA SI EXISTE UNA EXPEDICION EN CURSO PARA PODER CONTINUAR.
        if (-1 < datosNav.PROXCAMP) {
            const nombre = "CONTINUAR => Zona " + datosNav.ZONARUTA[0] + ", Ruta " + datosNav.ZONARUTA[1] + ", Campamento " + (datosNav.PROXCAMP + 1);
            return <div>
                <h4>ADVERTENCIA. Al elegir una nueva zona, se cancela la expedicion anterior.</h4>
                <BotonContinuar indice={datosNav.PROXCAMP} nombre={nombre}/>
                </div>
        } else {
            return <br />
        }
    };
    const handleClickReturn = () => {
        navigate('/base');
    }

    return (
        <div>
            <Navbar datosNav={datosNav} />
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h1 className='mb-3 text-primary'>Elegir zona</h1>
                    
                    <SelectorContinuar />

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

export default Zone