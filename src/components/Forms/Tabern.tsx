// ACA SE COMPRAN LOS HEROES
// TIENE EJEMPLO DE RENDERIZADO SELECTIVO

// import React from 'react'
import { useState, useEffect } from "react";
import * as RPGService from "./RPGService"
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar/Navbar';
import monedasImg from "../../assets/images/Monedas.png";
import Guerrero_S from "../../assets/images/Guerrero_S.jpg";
import Guerrero_A from "../../assets/images/Guerrero_A.jpg";
import Guerrero_B from "../../assets/images/Guerrero_B.jpg";
import Paladin_S from "../../assets/images/Paladin_S.jpeg";
import Paladin_A from "../../assets/images/Paladin_A.jpeg";
import Paladin_B from "../../assets/images/Paladin_B.png";
import Ballestero_S from "../../assets/images/Ballestero_S.jpg";
import Ballestero_A from "../../assets/images/Ballestero_A.jpg";
import Ballestero_B from "../../assets/images/Ballestero_B.webp";
import Ninja_S from "../../assets/images/Ninja_S.jpg";
import Ninja_A from "../../assets/images/Ninja_A.jpg";
import Ninja_B from "../../assets/images/Ninja_B.jpg";
import Novicia_S from "../../assets/images/Novicia_S.jpg";
import Novicia_A from "../../assets/images/Novicia_A.jpg";
import Novicia_B from "../../assets/images/Novicia_B.jpg";
import Maga_S from "../../assets/images/Maga_S.jpg";
import Maga_A from "../../assets/images/Maga_A.jpg";
import Maga_B from "../../assets/images/Maga_B.jpg";
import Excomulgado_S from "../../assets/images/Excomulgado_S.jpg";
import Excomulgado_A from "../../assets/images/Excomulgado_A.webp";
import Excomulgado_B from "../../assets/images/Excomulgado_B.jpg";
import Inquisidor_S from "../../assets/images/Inquisidor_S.jpg";
import Inquisidor_A from "../../assets/images/Inquisidor_A.jpg";
import Inquisidor_B from "../../assets/images/Inquisidor_B.webp";

// DECLARARLAS ASI PROVOCA UN FALLO, QUE IMPIDE EJECUTAR func
const Tabern = ({ datosNav, func }: any) => {
    const [listaHeroesDisponibles, setLista] = useState<any>([]);
    const navigate = useNavigate();
    const handleClick = async (event: any) => {
        // HACE UN PEDIDO DE COMPRA AL BACKEND, ENVIANDO EL NOMBRE DE JUGADOR E INDICE DE HEROE
        const nombre = sessionStorage.getItem("Usuario")
        await RPGService.buyHero({NOMBRE: nombre, ID: event.target.value})
        .then(result => {
            if (result.data.message === "HEROE COMPRADO!!!"){
                func(result.data.datosJugador)
                navigate('/base');
            } else if (result.data.message === "MONEDAS INSUFICIENTES"){
                alert('MONEDAS INSUFICIENTES');
            } else {
                alert('INDICE DE HEROE INEXISTENTE');
            }
        })
        .catch(err => console.log(err));
    }
    function BotonCompra(props: any) {
        // CREA UN BOTON ASIGNANDO EL INDICE DE HEROE COMO value, Y ADJUNTANDO LA FUNCION handleClick
        const nombreHeroe = props.nombre;
        const indiceHeroe = props.indice;
        return <button type="submit"
        value={indiceHeroe}
        onClick={handleClick}
        >{"Comprar " + nombreHeroe}</button>;
    };
    function SelectorBotones(props: any) {
        // REVISA SI HAY ELEMENTOS EN LA LISTA PARA AGREGAR TEXTOS DE PRECIOS, Y BOTONES DE COMPRA
        const listaHeroes = props.lista;
        const indice = props.indice;
        if (indice < listaHeroes.length) {
            const imagenesHeroes = [Guerrero_S, Guerrero_A, Guerrero_B, Paladin_S, Paladin_A, Paladin_B, Ballestero_S, Ballestero_A, Ballestero_B, Ninja_S, Ninja_A, Ninja_B, Novicia_S, Novicia_A, Novicia_B, Maga_S, Maga_A, Maga_B, Excomulgado_S, Excomulgado_A, Excomulgado_B, Inquisidor_S, Inquisidor_A, Inquisidor_B]
            let imagen = imagenesHeroes[listaHeroes[indice][0] - 1]
            return <div className="btn-secondary" style={{display: "block", padding: "0.5em 0em", width: "20%", margin: "0.3em"}}>
                <div style={{display: "flex", justifyContent: "center", height: "11em"}}>
                    <img src={imagen} style={{maxWidth: "90%"}} alt="Imagen de heroe no disponible" />
                </div>
                <div style={{display: "block"}}>
                    <div style={{display: "flex", justifyContent: "center", padding: "0.5em 0em"}}>
                        <img src={monedasImg} style={{maxWidth: "2em", maxHeight: "2em"}} alt="Monedas" />
                        <h3 style={{margin: "0.1em"}}>{listaHeroes[indice][1]}</h3>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <BotonCompra indice={listaHeroes[indice][0]} nombre={listaHeroes[indice][2]}/>
                    </div>
                </div>
            </div>
        } else {
            return <div className="btn-secondary" style={{display: "block", padding: "0.5em 0em", width: "20%", margin: "0.3em"}}>

            <div style={{display: "flex", justifyContent: "center", height: "11em"}}>
                <h3>No hay heroe disponible</h3>
            </div>
        </div>
        }
    };
    useEffect(() => {
        // PARA EVITAR LA ADVERTENCIA EN EL build,
            // SE RECOMIENDA PONER LA DECLARACION DE LA FUNCION, DENTRO DEL MISMO useEffect.
        // ESTO ES VALIDO CUANDO TAL FUNCION SE USA UNICAMENTE EN EL useEffect.
        const funcionCargar = async () => {
            const nombre = sessionStorage.getItem("Usuario")
            await RPGService.getHeroNames({NOMBRE: nombre})
            .then(result => {
                if(result.data.message === "Success"){
                    setLista(result.data.listaHeroe);
                }
            })
            .catch(err => console.log(err));
        };
        funcionCargar()
    }, [datosNav]);
    const handleClickReturn = () => {
        navigate('/base');
    }

    return (
        <div>
            <Navbar datosNav={datosNav} />
            <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <h1 style= {{textAlign: "center"}}>Taberna</h1>
                <div style= {{display: "flex"}}>
                    <SelectorBotones lista={listaHeroesDisponibles} indice={0} />
                    <SelectorBotones lista={listaHeroesDisponibles} indice={1} />
                    <SelectorBotones lista={listaHeroesDisponibles} indice={2} />
                    <SelectorBotones lista={listaHeroesDisponibles} indice={3} />
                    <SelectorBotones lista={listaHeroesDisponibles} indice={4} />
                </div>
                <div style= {{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1em"}}>
                    <button className="btn-secondary" style= {{padding: "0.5em 1.5em"}} type="submit" onClick={handleClickReturn}>Volver</button>
                </div>
                <h4 style= {{marginLeft: "1em"}}>La lista de héroes disponibles se renueva a diario.</h4>
            </div>
        </div>
    )
}

export default Tabern