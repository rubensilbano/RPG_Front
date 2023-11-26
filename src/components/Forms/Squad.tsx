// ACA SE COMPRAN LOS HEROES
// TIENE EJEMPLO DE RENDERIZADO SELECTIVO

// import React from 'react'
import { useState, useEffect } from "react";
import * as RPGService from "./RPGService"
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar/Navbar';
// import { Jugador } from './Jugador'

// DECLARARLAS ASI PROVOCA UN FALLO, QUE IMPIDE EJECUTAR func
// const Tabern = ({ datosNav }: any, { func }: any) => {
const Squad = ({ datosNav, func, nombresHeroes }: any) => {
    const [listaHeroesEscuadron, setListaEscuadron] = useState<any>([]);
    const [listaHeroesColeccion, setListaColecc] = useState<any>([]);
    const navigate = useNavigate();
    const quitarHeroeEscuadron = (event: any) => {
        // QUITA AL HEROE DE LA LISTA ESCUADRON.
        const buscarIndice = (element: number) => element === parseInt(event.target.className);
        const index = listaHeroesEscuadron.findIndex(buscarIndice);
        let arrayAux = listaHeroesEscuadron
        arrayAux[index] = 0
        setListaEscuadron(arrayAux)
        navigate('/squad');
    }
    const alternarHeroeColeccion = (event: any) => {
        // ALTERNA ENTRE AGREGAR/QUITAR AL HEROE DE LA LISTA ESCUADRON.
        const elementoHeroe = event.target.value.split(",");
        if (elementoHeroe[0] === "true") {
            // REVISANDO SI HAY RANURAS VACIAS PARA AGREGAR HEROE
            const buscarIndice0 = (element: number) => element === 0;
            const index0 = listaHeroesEscuadron.findIndex(buscarIndice0);
            if (-1 < index0) {
                // AGREGANDO HEROE AL ESCUADRON
                const buscarIndiceHeroe = (element: number) => element === parseInt(elementoHeroe[1]);
                const indexHeroe = listaHeroesEscuadron.findIndex(buscarIndiceHeroe);
                if (indexHeroe === -1) {
                    let arrayAux = listaHeroesEscuadron
                    arrayAux[index0] = parseInt(elementoHeroe[1])
                    setListaEscuadron(arrayAux)
                    navigate('/squad');
                }
            } else {
                alert('EL ESCUADRON ESTA COMPLETO');
            }
        } else {
            alert('ESTE HEROE AUN NO FUE OBTENIDO');
        }
    }
    useEffect(() => {
        const funcionCargar = () => {
            setListaEscuadron(datosNav.ESCUADRON);
            // ARMANDO LA LISTA DE HEROES EN LA COLECCION
            let listaAux = [];
            for (let index = 1; index < 25; index++) {
                const nivelHeroeActual = parseInt(datosNav["HEROE" + index]["NIVEL"]);
                let boolAux = false;
                if (0 < nivelHeroeActual) {
                    boolAux = true;
                }
                // ESTO SOLO ES ORIENTATIVO. PARA CARGAR IMAGENES VOY A NECESITAR UN BOOL
                listaAux.push([boolAux.toString(), index, nombresHeroes[index - 1], nivelHeroeActual])
                // listaAux.push([boolAux, index])
            };
            setListaColecc(listaAux);
        };
        funcionCargar()
    // });
    // CORRECCION PARA EL DEPLOY EN NETLIFY
    }, [datosNav]);
    function BotonEscuadron(props: any) {
        // CREA UN BOTON ASIGNANDO EL INDICE DE HEROE COMO className, Y ADJUNTANDO LA FUNCION quitarHeroeEscuadron
        const indice = props.indice;
        return <button type="submit"
        // className={indice}
        className={indice[0] + ", " + indice[1] + ", " + indice[2] + ", " + indice[3]}
        onClick={quitarHeroeEscuadron}
        >{indice}</button>;
    };
    function BotonColeccion(props: any) {
        // CREA UN BOTON ASIGNANDO VALIDACION E INDICE DE HEROE COMO className, Y ADJUNTANDO LA FUNCION alternarHeroeColeccion
        const indice = props.indice;
        return <button type="submit"
        className={indice[0] + ", " + indice[1] + ", " + indice[2] + ", " + indice[3]}
        value={indice}
        onClick={alternarHeroeColeccion}
        >{indice}</button>;
    };
    const handleClick = async (e: any) => {
        // ENVIA LA LISTA DE UNIDADES AL BACKEND, ESTE VALIDA LA LISTA PARA GUARDARLA COMO ESCUADRON
        await RPGService.setSquad({NOMBRE: datosNav.NOMBRE, ESCUADRON: listaHeroesEscuadron})
        .then(result => {
            if (result.data.message === "ESCUADRON GUARDADO EXITOSAMENTE!!!"){
                func(result.data.datosJugador)
                navigate('/base');
            } else if (result.data.message === "UNO DE LOS INDICES DE HEROE ES INEXISTENTE, O ESTA REPETIDO"){
                alert('UNO DE LOS INDICES DE HEROE ES INEXISTENTE, O ESTA REPETIDO');
            } else {
                alert('EL ARRAY RECIBIDO NO TIENE EL TAMAÑO CORRECTO');
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <Navbar datosNav={datosNav} />
            
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h1 className='mb-3 text-primary'>Escuadron</h1>
                    {/* FALTA APLICAR DETALLES */}
                    <div className="row">
                        {listaHeroesEscuadron.map((indiceHeroe: number) => {
                            return <BotonEscuadron indice={indiceHeroe} />
                        })}
                    </div>
                    {/* true REPRESENTA QUE EL HEROE FUE OBTENIDO, Y PUEDE AGREGARSE AL ESCUADRON */}
                    <div className="row">
                        {listaHeroesColeccion.map((indiceHeroe: []) => {
                            return <BotonColeccion indice={indiceHeroe} />
                        })}
                    </div>
                    <button type="submit" onClick={handleClick}>Guardar escuadron</button>
                </div>
            </div>
        </div>
    )
}

export default Squad