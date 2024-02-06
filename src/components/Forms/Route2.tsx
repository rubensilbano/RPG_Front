// ACA SE ELIGE UNA RUTA

// import React from 'react'
import * as RPGService from "./RPGService"
import { useNavigate } from "react-router-dom"
import Ruta_1_1 from "../../assets/images/Paisajes/Ruta_1_1.jpg";
import Ruta_1_2 from "../../assets/images/Paisajes/Ruta_1_2.webp";
import Ruta_1_3 from "../../assets/images/Paisajes/Ruta_1_3.jpg";
import Ruta_1_4 from "../../assets/images/Paisajes/Ruta_1_4.avif";
import Ruta_1_5 from "../../assets/images/Paisajes/Ruta_1_5.webp";
import Ruta_2_1 from "../../assets/images/Paisajes/Ruta_2_1.jpg";
import Ruta_2_2 from "../../assets/images/Paisajes/Ruta_2_2.jpg";
import Ruta_2_3 from "../../assets/images/Paisajes/Ruta_2_3.jpg";
import Ruta_2_4 from "../../assets/images/Paisajes/Ruta_2_4.avif";
import Ruta_2_5 from "../../assets/images/Paisajes/Ruta_2_5.jpg";
import Ruta_3_1 from "../../assets/images/Paisajes/Ruta_3_1.png";
import Ruta_3_2 from "../../assets/images/Paisajes/Ruta_3_2.jpg";
import Ruta_3_3 from "../../assets/images/Paisajes/Ruta_3_3.jpg";
import Ruta_3_4 from "../../assets/images/Paisajes/Ruta_3_4.jpg";
import Ruta_3_5 from "../../assets/images/Paisajes/Ruta_3_5.jpg";
import Ruta_4_1 from "../../assets/images/Paisajes/Ruta_4_1.jpg";
import Ruta_4_2 from "../../assets/images/Paisajes/Ruta_4_2.jpg";
import Ruta_4_3 from "../../assets/images/Paisajes/Ruta_4_3.jpg";
import Ruta_4_4 from "../../assets/images/Paisajes/Ruta_4_4.jpg";
import Ruta_4_5 from "../../assets/images/Paisajes/Ruta_4_5.jpg";
import Ruta_5_1 from "../../assets/images/Paisajes/Ruta_5_1.jpg";
import Ruta_5_2 from "../../assets/images/Paisajes/Ruta_5_2.webp";
import Ruta_5_3 from "../../assets/images/Paisajes/Ruta_5_3.jpg";
import Ruta_5_4 from "../../assets/images/Paisajes/Ruta_5_4.avif";
import Ruta_5_5 from "../../assets/images/Paisajes/Ruta_5_5.jpg";
import Ruta_6_1 from "../../assets/images/Paisajes/Ruta_6_1.jpg";
import Ruta_6_2 from "../../assets/images/Paisajes/Ruta_6_2.webp";
import Ruta_6_3 from "../../assets/images/Paisajes/Ruta_6_3.webp";
import Ruta_6_4 from "../../assets/images/Paisajes/Ruta_6_4.jpg";
import Ruta_6_5 from "../../assets/images/Paisajes/Ruta_6_5.webp";
import Ruta_7_1 from "../../assets/images/Paisajes/Ruta_7_1.jpg";
import Ruta_7_2 from "../../assets/images/Paisajes/Ruta_7_2.jpg";
import Ruta_7_3 from "../../assets/images/Paisajes/Ruta_7_3.jpg";
import Ruta_7_4 from "../../assets/images/Paisajes/Ruta_7_4.jpg";
import Ruta_7_5 from "../../assets/images/Paisajes/Ruta_7_5.jpg";
import Ruta_8_1 from "../../assets/images/Paisajes/Ruta_8_1.jpg";
import Ruta_8_2 from "../../assets/images/Paisajes/Ruta_8_2.jpg";
import Ruta_8_3 from "../../assets/images/Paisajes/Ruta_8_3.avif";
import Ruta_8_4 from "../../assets/images/Paisajes/Ruta_8_4.jpg";
import Ruta_8_5 from "../../assets/images/Paisajes/Ruta_8_5.jpg";
import Ruta_9_1 from "../../assets/images/Paisajes/Ruta_9_1.webp";
import Ruta_9_2 from "../../assets/images/Paisajes/Ruta_9_2.jpg";
import Ruta_9_3 from "../../assets/images/Paisajes/Ruta_9_3.webp";
import Ruta_9_4 from "../../assets/images/Paisajes/Ruta_9_4.webp";
import Ruta_9_5 from "../../assets/images/Paisajes/Ruta_9_5.jpg";
import Ruta_10_1 from "../../assets/images/Paisajes/Ruta_10_1.jpg";
import Ruta_10_2 from "../../assets/images/Paisajes/Ruta_10_2.avif";
import Ruta_10_3 from "../../assets/images/Paisajes/Ruta_10_3.avif";
import Ruta_10_4 from "../../assets/images/Paisajes/Ruta_10_4.avif";
import Ruta_10_5 from "../../assets/images/Paisajes/Ruta_10_5.avif";
import Navbar from '../Navbar/Navbar';

const Route2 = ({ datosNav, cantidadRutas, datosZona, zonaRutaElegida, func }: any) => {
    const navigate = useNavigate();
    const handleClick = async (event: any) => {
        // ENVIA EL INDICE DE RUTA AL BACKEND PARA QUE SORTEE LOS CAMPAMENTOS,
            // Y REDIRIGE AL FORMULARIO CAMPAMENTOS
        const nombre = sessionStorage.getItem("Usuario")
        // await RPGService.route({NOMBRE: nombre, zone: datosZona[0], route: event.target.className})
        await RPGService.route({NOMBRE: nombre, zone: datosZona[0], route: event.target.value})
        .then(result => {
            if (result.data.message === "CAMPAMENTOS GENERADOS"){
                // AHORA PUEDO GUARDAR LA ZONA ELEGIDA ANTERIORMENTE, JUNTO CON LA RUTA ELEGIDA
                // zonaRutaElegida([datosZona[0], event.target.className])
                zonaRutaElegida([datosZona[0], event.target.value])
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
        // className={indiceRuta}
        value={indiceRuta}
        className="btn-secondary"
        style={{backgroundColor: "red", color: "black", padding: "0.5em 1.5em", justifyContent: "center"}}
        onClick={handleClick}
        >{nombreRuta}</button>;
    };
    function SelectorBotones(props: any) {
        // DEVUELVE LA CANTIDAD DE BOTONES, DEPENDIENDO DE LAS RUTAS GENERADAS PREVIAMENTE
            // ENTRE 3 Y 5 RUTAS
        const indice = props.indice;
        let nombre = "Ruta " + indice;
        const imagenesRutas = [
            [Ruta_1_1, Ruta_1_2, Ruta_1_3, Ruta_1_4, Ruta_1_5], 
            [Ruta_2_1, Ruta_2_2, Ruta_2_3, Ruta_2_4, Ruta_2_5], 
            [Ruta_3_1, Ruta_3_2, Ruta_3_3, Ruta_3_4, Ruta_3_5], 
            [Ruta_4_1, Ruta_4_2, Ruta_4_3, Ruta_4_4, Ruta_4_5], 
            [Ruta_5_1, Ruta_5_2, Ruta_5_3, Ruta_5_4, Ruta_5_5], 
            [Ruta_6_1, Ruta_6_2, Ruta_6_3, Ruta_6_4, Ruta_6_5], 
            [Ruta_7_1, Ruta_7_2, Ruta_7_3, Ruta_7_4, Ruta_7_5], 
            [Ruta_8_1, Ruta_8_2, Ruta_8_3, Ruta_8_4, Ruta_8_5], 
            [Ruta_9_1, Ruta_9_2, Ruta_9_3, Ruta_9_4, Ruta_9_5], 
            [Ruta_10_1, Ruta_10_2, Ruta_10_3, Ruta_10_4, Ruta_10_5]
        ]
        let imagen = Ruta_1_1
        if (indice < cantidadRutas + 1) {
            imagen = imagenesRutas[datosZona[0] - 1][indice - 1]
            return <div className="btn-secondary" style={{display: "block", height:"19em", padding: "0.5em", width: "20%", margin: "0.5em 0.2em"}}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img className="landImg" src={imagen} alt="Imagen de fondo no disponible" />
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <BotonEleccion indice={indice} nombre={nombre}/>
                </div>
            </div>
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
            <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h1>Elegir ruta</h1>
                </div>
                <div style={{width : '100%'}}>
                    <div style={{display: "flex", justifyContent: "center", margin: "0em 1em"}}>
                        <SelectorBotones indice={1} />
                        <SelectorBotones indice={2} />
                        <SelectorBotones indice={3} />
                        <SelectorBotones indice={4} />
                        <SelectorBotones indice={5} />
                    </div>
                    <br />
                    <div style= {{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1em"}}>
                        <button className="btn-secondary" style= {{padding: "0.5em 1.5em"}} type="submit" onClick={handleClickReturn}>Volver</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Route2