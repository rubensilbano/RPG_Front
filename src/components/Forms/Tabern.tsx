// ACA SE COMPRAN LOS HEROES
// TIENE EJEMPLO DE RENDERIZADO SELECTIVO

// import React from 'react'
import { useState, useEffect } from "react";
import * as RPGService from "./RPGService"
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar/Navbar';
// import { Jugador } from './Jugador'

// DECLARARLAS ASI PROVOCA UN FALLO, QUE IMPIDE EJECUTAR func
const Tabern = ({ datosNav, func }: any) => {
    const [listaHeroesDisponibles, setLista] = useState<any>([]);
    const navigate = useNavigate();
    const handleClick = async (event: any) => {
        // HACE UN PEDIDO DE COMPRA AL BACKEND, ENVIANDO EL NOMBRE DE JUGADOR E INDICE DE HEROE
        await RPGService.buyHero({NOMBRE: datosNav.NOMBRE, ID: event.target.className})
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
    const funcionCargar = async () => {
        await RPGService.tavern({NOMBRE: datosNav["NOMBRE"]})
        .then(result => {
            if(result.data.message === "Success"){
                setLista(result.data.listaHeroe);
            }
        })
        .catch(err => console.log(err));
    };
    function BotonCompra(props: any) {
        // CREA UN BOTON ASIGNANDO EL INDICE DE HEROE COMO className, Y ADJUNTANDO LA FUNCION handleClick
        const nombreHeroe = props.nombre;
        const indiceHeroe = props.indice;
        return <button type="submit"
        className={indiceHeroe}
        onClick={handleClick}
        >{"Comprar " + nombreHeroe}</button>;
    };
    function SelectorBotones(props: any) {
        // REVISA SI HAY ELEMENTOS EN LA LISTA PARA AGREGAR TEXTOS DE PRECIOS, Y BOTONES DE COMPRA
        const listaHeroes = props.lista;
        const indice = props.indice;
        if (indice < listaHeroes.length) {
            return <div>
                <h3>{listaHeroes[indice][1]}</h3>
                <BotonCompra indice={listaHeroes[indice][0]} nombre={listaHeroes[indice][2]}/>
                </div>
        } else {
            return <h3>No hay heroe disponible</h3>
        }
    };
    useEffect(() => {
        funcionCargar()
    });
    // CORRECCION PARA EL DEPLOY EN NETLIFY
    // }, []);
    const handleClickReturn = () => {
        navigate('/base');
    }

    return (
        <div>
            <Navbar datosNav={datosNav} />
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h1 className='mb-3 text-primary'>Taberna</h1>
                    {/* FALTA APLICAR DETALLES */}
                    <SelectorBotones lista={listaHeroesDisponibles} indice={0} />
                    <SelectorBotones lista={listaHeroesDisponibles} indice={1} />
                    <SelectorBotones lista={listaHeroesDisponibles} indice={2} />
                    <SelectorBotones lista={listaHeroesDisponibles} indice={3} />
                    <SelectorBotones lista={listaHeroesDisponibles} indice={4} />
                    <button type="submit" onClick={handleClickReturn}>Volver</button>
                </div>
            </div>
        </div>
    )
}

export default Tabern