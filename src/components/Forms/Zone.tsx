// ACA SE ELIGE UNA RUTA

// import React from 'react'
import * as RPGService from "./RPGService"
import { useNavigate } from "react-router-dom"
// import Error_Transparente from "../../assets/images/Error_Transparente.png";
// import Transparente from "../../assets/images/Transparente.png";
import Zona_1 from "../../assets/images/Paisajes/Zona_1.jpg";
import Zona_2 from "../../assets/images/Paisajes/Zona_2.webp";
import Zona_3 from "../../assets/images/Paisajes/Zona_3.webp";
import Zona_4 from "../../assets/images/Paisajes/Zona_4.jpg";
import Zona_5 from "../../assets/images/Paisajes/Zona_5.jpg";
import Zona_6 from "../../assets/images/Paisajes/Zona_6.webp";
import Zona_7 from "../../assets/images/Paisajes/Zona_7.jpg";
import Zona_8 from "../../assets/images/Paisajes/Zona_8.avif";
import Zona_9 from "../../assets/images/Paisajes/Zona_9.jpg";
import Zona_10 from "../../assets/images/Paisajes/Zona_10.webp";
import Navbar from '../Navbar/Navbar';
import './zone.css';

const Zone = ({ datosNav, rutasGeneradas, zonaRutaElegida, func }: any) => {
    const navigate = useNavigate();
    const handleClick = async (event: any) => {
        // ENVIA EL INDICE DE ZONA AL BACKEND PARA QUE SORTEE LAS RUTAS, Y REDIRIGE AL FORMULARIO RUTAS
        const nombre = sessionStorage.getItem("Usuario")
        await RPGService.zone({NOMBRE: nombre, id: event.target.value})
        .then(result => {
            if (result.data.message === "RUTAS GENERADAS"){
                func(result.data.datosJugador)
                // LE ENVIO AL App, LA CANTIDAD DE RUTAS
                    // PARA QUE Route2.tsx PUEDA SABER CUANTAS RUTAS DEBE MOSTRAR
                rutasGeneradas(result.data.cantRutas)
                // SOLO GUARDO LA ZONA ELEGIDA, TODAVIA NO SE ELIGIO RUTA
                zonaRutaElegida([event.target.value, -1])
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
        value={indiceZona}
        className="btn-secondary"
        style={{backgroundColor: "red", color: "black", padding: "0.5em 1.5em", justifyContent: "center"}}
        onClick={handleClick}
        >{nombreZona}</button>;
    };
    function BotonContinuar(props: any) {
        // CREA UN BOTON ADJUNTANDO LA FUNCION handleClickContinuar
        const nombreTexto = props.nombre;
        const indiceZona = props.indice;
        return <button type="submit"
        value={indiceZona}
        className="btn-secondary"
        style={{backgroundColor: "red", color: "black", padding: "0.5em 1.5em", justifyContent: "center"}}
        onClick={handleClickContinuar}
        >{nombreTexto}</button>;
    };
    function SelectorBotones(props: any) {
        // DEVUELVE UN BOTON CAMBIANDO EL TEXTO DEPENDIENDO SI LA ZONA ESTA DESBLOQUEADA
        const indice = props.indice;
        let puntosBatalla = " - PB recomendados: "
        switch (indice) {
            case 1:
                puntosBatalla += "0"
                break;
            case 2:
                puntosBatalla += "1260"
                break;
            case 3:
                puntosBatalla += "2520"
                break;
            case 4:
                puntosBatalla += "3780"
                break;
            case 5:
                puntosBatalla += "5040"
                break;
            case 6:
                puntosBatalla += "6300"
                break;
            case 7:
                puntosBatalla += "7560"
                break;
            case 8:
                puntosBatalla += "8820"
                break;
            case 9:
                puntosBatalla += "10080"
                break;
            case 10:
                puntosBatalla += "11340"
                break;
        }
        let nombre = "Zona " + indice + puntosBatalla;
        if (datosNav.ZONA < indice) {
            nombre = "Zona " + indice + " BLOQUEADA"
        }

        const imagenesZonas = [Zona_1, Zona_2, Zona_3, Zona_4, Zona_5, Zona_6, Zona_7, Zona_8, Zona_9, Zona_10]

        let imagen = Zona_1
        // let imagenVacio = Error_Transparente
        imagen = imagenesZonas[indice - 1]
        // if (indice[0] === "true") {
        //     imagenVacio = Transparente
        // }
        return <div className="btn-secondary" style={{display: "block", height:"19em", padding: "0.5em", width: "20%", margin: "0.5em 0.2em"}}>
            {/* <div style={{display: "flex", width: "10%"}}> */}
            <div style={{display: "flex", justifyContent: "center"}}>
                <img className="landImg" src={imagen} alt="Imagen de fondo no disponible" />
                {/* <img className="landImg" src={imagen} style={{paddingLeft: "9rem"}}alt="Imagen de fondo no disponible" /> */}
                {/* <img className="landImg" src={imagenVacio} style={{position: "relative", left: "-10rem"}} alt="Imagen no disponible" /> */}
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <BotonEleccion indice={indice} nombre={nombre}/>
            </div>
        </div>
    }
    function SelectorContinuar() {
        // EVALUA SI EXISTE UNA EXPEDICION EN CURSO PARA PODER CONTINUAR.
        if (-1 < datosNav.PROXCAMP) {
            const nombre = "CONTINUAR => Zona " + datosNav.ZONARUTA[0] + ", Ruta " + datosNav.ZONARUTA[1] + ", Campamento " + (datosNav.PROXCAMP + 1);
            return <div>
                <br />
                <div style={{padding: "1em", border: "1px solid black"}}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h4>ADVERTENCIA. Al elegir una nueva zona, se cancela la expedicion anterior.</h4>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <BotonContinuar indice={datosNav.PROXCAMP} nombre={nombre}/>
                    </div>
                </div>
                <br />
            </div>
        } else {
            return <div></div>
        }
    };
    function PBEscuadron() {
        // SUMA Y MUESTRA LOS PB DEL ESCUADRON ACTUAL
        let sumatoria = 0
        for (let i = 0; i < datosNav["ESCUADRON"].length; i++) {
            if (0 < datosNav["ESCUADRON"][i]) {
                sumatoria += datosNav["HEROE" + datosNav["ESCUADRON"][i]]["PUNTOSBATALLA"][0]
                sumatoria += datosNav["HEROE" + datosNav["ESCUADRON"][i]]["PUNTOSBATALLA"][1]
            }
        }
        return <h4 style={{paddingLeft: "1.5em"}}>PB del escuadron actual: {sumatoria}</h4>
    };
    const handleClickReturn = () => {
        navigate('/base');
    }

    return (
        <div>
            <Navbar datosNav={datosNav} />
            <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h1>Elegir zona</h1>
                </div>
                <PBEscuadron />
                <div style={{display: "flex", justifyContent: "center"}}>
                    <SelectorContinuar />
                </div>
                <div style={{display: "block", width : '100%'}}>
                    <div style={{display: "flex", justifyContent: "center", margin: "0em 1em"}}>
                        <SelectorBotones indice={1} />
                        <SelectorBotones indice={2} />
                        <SelectorBotones indice={3} />
                        <SelectorBotones indice={4} />
                        <SelectorBotones indice={5} />
                    </div>
                    <div style={{display: "flex", justifyContent: "center", margin: "0em 1em"}}>
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

export default Zone