// ACA SE COMPRAN LOS HEROES
// TIENE EJEMPLO DE RENDERIZADO SELECTIVO

// import React from 'react'
import { useState, useEffect } from "react";
import * as RPGService from "./RPGService"
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar/Navbar';
import Error_Solido from "../../assets/images/Error_Solido.png";
import Error_Transparente from "../../assets/images/Error_Transparente.png";
import Transparente from "../../assets/images/Transparente.png";
import Guerrero_S_icon from "../../assets/images/Guerrero_S_icon.jpg";
import Guerrero_A_icon from "../../assets/images/Guerrero_A_icon.jpg";
import Guerrero_B_icon from "../../assets/images/Guerrero_B_icon.jpg";
import Paladin_S_icon from "../../assets/images/Paladin_S_icon.jpeg";
import Paladin_A_icon from "../../assets/images/Paladin_A_icon.jpeg";
import Paladin_B_icon from "../../assets/images/Paladin_B_icon.png";
import Ballestero_S_icon from "../../assets/images/Ballestero_S_icon.jpg";
import Ballestero_A_icon from "../../assets/images/Ballestero_A_icon.jpg";
import Ballestero_B_icon from "../../assets/images/Ballestero_B_icon.png";
import Ninja_S_icon from "../../assets/images/Ninja_S_icon.jpg";
import Ninja_A_icon from "../../assets/images/Ninja_A_icon.jpg";
import Ninja_B_icon from "../../assets/images/Ninja_B_icon.jpg";
import Novicia_S_icon from "../../assets/images/Novicia_S_icon.jpg";
import Novicia_A_icon from "../../assets/images/Novicia_A_icon.jpg";
import Novicia_B_icon from "../../assets/images/Novicia_B_icon.jpg";
import Maga_S_icon from "../../assets/images/Maga_S_icon.jpg";
import Maga_A_icon from "../../assets/images/Maga_A_icon.jpg";
import Maga_B_icon from "../../assets/images/Maga_B_icon.jpg";
import Excomulgado_S_icon from "../../assets/images/Excomulgado_S_icon.jpg";
import Excomulgado_A_icon from "../../assets/images/Excomulgado_A_icon.png";
import Excomulgado_B_icon from "../../assets/images/Excomulgado_B_icon.jpg";
import Inquisidor_S_icon from "../../assets/images/Inquisidor_S_icon.jpg";
import Inquisidor_A_icon from "../../assets/images/Inquisidor_A_icon.jpg";
import Inquisidor_B_icon from "../../assets/images/Inquisidor_B_icon.png";
import './squad.css';
// import { Jugador } from './Jugador'

const Squad = ({ datosNav, func }: any) => {
    const [listaHeroesEscuadron, setListaEscuadron] = useState<any>([]);
    const [listaHeroesColeccion, setListaColecc] = useState<any>([]);
    const navigate = useNavigate();
    const quitarHeroeEscuadron = (event: any) => {
        // QUITA AL HEROE DE LA LISTA ESCUADRON.
        // const buscarIndice = (element: number) => element === parseInt(event.target.value);
        const buscarIndice = (element: [number, string]) => element[0] === parseInt(event.target.value);
        const index = listaHeroesEscuadron.findIndex(buscarIndice);
        let arrayAux = listaHeroesEscuadron
        // arrayAux[index] = 0
        arrayAux[index] = [0, "Ranura VACIA"]
        setListaEscuadron(arrayAux)
        navigate('/squad');
    }
    const alternarHeroeColeccion = (event: any) => {
        // AGREGA AL HEROE A LA LISTA ESCUADRON.
        const elementoHeroe = event.target.value.split(", ");
        if (elementoHeroe[0] === "true") {
            // REVISANDO SI HAY RANURAS VACIAS PARA AGREGAR HEROE
            const buscarIndice0 = (element: [number, string]) => element[0] === 0;
            const index0 = listaHeroesEscuadron.findIndex(buscarIndice0);
            if (-1 < index0) {
                // AGREGANDO HEROE AL ESCUADRON. PRIMERO REVISA QUE NO ESTE REPETIDO.
                const buscarIndiceHeroe = (element: [number, string]) => element[0] === parseInt(elementoHeroe[1]);
                const indexHeroe = listaHeroesEscuadron.findIndex(buscarIndiceHeroe);
                if (indexHeroe === -1) {
                    let arrayAux = listaHeroesEscuadron
                    arrayAux[index0] = [parseInt(elementoHeroe[1]), elementoHeroe[2], elementoHeroe[3], elementoHeroe[4], elementoHeroe[5], elementoHeroe[6]]
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
            // ARMANDO LA LISTA DE HEROES EN EL ESCUADRON
            // INICIALMENTE SOLO COPIABA LA LISTA ESCUADRON, PERO AHORA QUIERO MOSTRAR NOMBRE, NIVEL, Y DEMAS
            const nombresHeroes = ["Guerrero S", "Guerrero A", "Guerrero B", "Paladin S", "Paladin A", "Paladin B", "Ballestero S", "Ballestero A", "Ballestero B", "Ninja S", "Ninja A", "Ninja B", "Novicia S", "Novicia A", "Novicia B", "Maga S", "Maga A", "Maga B", "Excomulgado S", "Excomulgado A", "Excomulgado B", "Inquisidor S", "Inquisidor A", "Inquisidor B"]
            const posicionHeroes = ["VANGUARDIA", "VANGUARDIA", "RETAGUARDIA", "CENTRO", "RETAGUARDIA", "RETAGUARDIA", "CENTRO", "CENTRO"]
            const recomendacionHeroes = ["Vida Daño Defensa", "Defensa Regeneracion Vida", "Daño Critico Cadencia", "Daño Cadencia Evasion", "Daño Regeneracion Critico", "Daño Critico Cadencia", "Daño Vida Regeneracion", "Evasion Daño Vida"]
            let listaAuxEscuadron = [];
            for (let i = 0; i < datosNav.ESCUADRON.length; i++) {
                let listaAuxiliar = [];
                listaAuxiliar.push(datosNav.ESCUADRON[i])
                if ( 0 < datosNav.ESCUADRON[i]) {
                    listaAuxiliar.push(nombresHeroes[datosNav.ESCUADRON[i] - 1])
                    const nivelHeroeActual = parseInt(datosNav["HEROE" + datosNav.ESCUADRON[i]]["NIVEL"]);
                    listaAuxiliar.push(nivelHeroeActual)
                    const indiceCorto = Math.floor((datosNav.ESCUADRON[i] / 3))
                    listaAuxiliar.push(posicionHeroes[indiceCorto])
                    listaAuxiliar.push(recomendacionHeroes[indiceCorto])
                    const pbHeroe = parseInt(datosNav["HEROE" + datosNav.ESCUADRON[i]]["PUNTOSBATALLA"][0]) + parseInt(datosNav["HEROE" + datosNav.ESCUADRON[i]]["PUNTOSBATALLA"][1])
                    listaAuxiliar.push(pbHeroe)
                } else {
                    listaAuxiliar.push("Ranura VACIA")
                    listaAuxiliar.push("")
                    listaAuxiliar.push("")
                    listaAuxiliar.push("")
                    listaAuxiliar.push("")
                }
                listaAuxEscuadron.push(listaAuxiliar)
            }
            setListaEscuadron(listaAuxEscuadron);
            // ARMANDO LA LISTA DE HEROES EN LA COLECCION
            let listaAux = [];
            for (let index = 1; index < 25; index++) {
                const nivelHeroeActual = parseInt(datosNav["HEROE" + index]["NIVEL"]);
                let boolAux = false;
                if (0 < nivelHeroeActual) {
                    boolAux = true;
                }
                // EL INDICE [0] SOLO ES ORIENTATIVO. PARA CARGAR IMAGENES VOY A NECESITAR IMAGENES
                const indiceCorto = Math.floor(((index - 1) / 3))
                const pbHeroe = parseInt(datosNav["HEROE" + index]["PUNTOSBATALLA"][0]) + parseInt(datosNav["HEROE" + index]["PUNTOSBATALLA"][1])
                listaAux.push([boolAux.toString(), index, nombresHeroes[index - 1], nivelHeroeActual, posicionHeroes[indiceCorto], recomendacionHeroes[indiceCorto], pbHeroe])
            };
            setListaColecc(listaAux);
        };
        funcionCargar()
    }, [datosNav]);
    function BotonEscuadron(props: any) {
        // CREA UN BOTON ASIGNANDO LOS DATOS DE UN HEROE COMO value, Y ADJUNTANDO LA FUNCION quitarHeroeEscuadron
        const indice = props.indice;
        const index = props.index;
        const imagenesHeroes = [Guerrero_S_icon, Guerrero_A_icon, Guerrero_B_icon, Paladin_S_icon, Paladin_A_icon, Paladin_B_icon, Ballestero_S_icon, Ballestero_A_icon, Ballestero_B_icon, Ninja_S_icon, Ninja_A_icon, Ninja_B_icon, Novicia_S_icon, Novicia_A_icon, Novicia_B_icon, Maga_S_icon, Maga_A_icon, Maga_B_icon, Excomulgado_S_icon, Excomulgado_A_icon, Excomulgado_B_icon, Inquisidor_S_icon, Inquisidor_A_icon, Inquisidor_B_icon]
        let imagen = ""
        if (0 < indice[0]) {
            imagen = imagenesHeroes[indice[0] - 1]
            return <div style={{display: "flex", justifyContent: "center"}}>
                <h2 style={{paddingRight: "0.5em"}}>{index + 1}</h2>
                <div className="btn-secondary" style={{display: "block", height:"10em", padding: "0.5em", width: "100%"}}>
                    <div style={{display: "flex"}}>
                        <img className="iconSquad" src={imagen} alt="Imagen de heroe no disponible" />
                        <div style={{display: "flex"}}>
                            <div style={{display: "block"}}>
                                <p className="p-squad">{indice[1]}</p>
                                <p className="p-squad">{indice[3]}</p>
                                <p className="p-squad">PB:{indice[5]}</p>
                            </div>
                            <div style={{display: "block", marginLeft: "1em"}}>
                                <p className="p-squad">Nivel:{indice[2]}/30</p>
                                <p className="p-squad">{indice[4]}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <button type="submit"
                        value={indice}
                        onClick={quitarHeroeEscuadron}
                        className="btn-secondary"
                        style={{backgroundColor: "red", color: "black", padding: "0.5em 1.5em", justifyContent: "center"}}
                        >Retirar!</button>
                    </div>
                </div>
            </div>
        } else {
            imagen = Error_Solido
            return <div style={{display: "flex"}}>
                <h2 style={{paddingRight: "0.5em"}}>{index + 1}</h2>
                <div className="btn-secondary"
                style={{height:"10em", padding: "0.5em", width: "100%", justifyContent: "left"}}>
                    <img className="iconSquad" src={imagen} alt="Imagen de heroe no disponible" />
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <p className="p-squad">RANURA VACIA</p>
                    </div>
                </div>
            </div>
        }
    };
    function BotonColeccion(props: any) {
        // CREA UN BOTON ASIGNANDO VALIDACION Y DATOS DE UN HEROE COMO value, Y ADJUNTANDO LA FUNCION alternarHeroeColeccion
        const indice = props.indice;
        const posicion = props.posicion;
        const imagenesHeroes = [Guerrero_S_icon, Guerrero_A_icon, Guerrero_B_icon, Paladin_S_icon, Paladin_A_icon, Paladin_B_icon, Ballestero_S_icon, Ballestero_A_icon, Ballestero_B_icon, Ninja_S_icon, Ninja_A_icon, Ninja_B_icon, Novicia_S_icon, Novicia_A_icon, Novicia_B_icon, Maga_S_icon, Maga_A_icon, Maga_B_icon, Excomulgado_S_icon, Excomulgado_A_icon, Excomulgado_B_icon, Inquisidor_S_icon, Inquisidor_A_icon, Inquisidor_B_icon]
        const arrayPalabra = indice[0] + ", " + indice[1] + ", " + indice[2] + ", " + indice[3] + ", " + indice[4] + ", " + indice[5] + ", " + indice[6]
        let imagen = ""
        let imagenVacio = Error_Transparente
        imagen = imagenesHeroes[indice[1] - 1]
        if (indice[0] === "true") {
            imagenVacio = Transparente
        }
        return <div style={{display: "flex", justifyContent: "center"}}>
            <h2 style={{paddingRight: "0.5em"}}>{posicion + 1}</h2>
            <div className="btn-secondary" style={{display: "block", height:"10em", padding: "0.5em", width: "100%"}}>
                <div style={{display: "flex"}}>
                    <div style={{display: "flex", width: "20%"}}>
                        <img className="iconSquad" src={imagen} style={{paddingRight: "0rem"}}alt="Imagen de heroe no disponible" />
                        <img className="iconSquad" src={imagenVacio} style={{position: "relative", left: "-7rem"}} alt="Imagen no disponible" />
                    </div>
                    <div style={{display: "flex"}}>
                        <div style={{display: "block"}}>
                            <p className="p-squad">{indice[2]}</p>
                            <p className="p-squad">{indice[4]}</p>
                            <p className="p-squad">PB:{indice[6]}</p>
                        </div>
                        <div style={{display: "block", marginLeft: "1em"}}>
                            <p className="p-squad">Nivel:{indice[3]}/30</p>
                            <p className="p-squad">{indice[5]}</p>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button type="submit"
                    value={arrayPalabra}
                    onClick={alternarHeroeColeccion}
                    className="btn-secondary"
                    style={{backgroundColor: "red", color: "black", padding: "0.5em 1.5em", justifyContent: "center"}}
                    >Agregar!</button>
                </div>
            </div>
        </div>
    };
    const handleClick = async (e: any) => {
        // ENVIA LA LISTA DE UNIDADES AL BACKEND, ESTE VALIDA LA LISTA PARA GUARDARLA COMO ESCUADRON
        let listaEscuadronGuardar = [];
        for (let i = 0; i < listaHeroesEscuadron.length; i++) {
            listaEscuadronGuardar.push(listaHeroesEscuadron[i][0])
        }
        const nombre = sessionStorage.getItem("Usuario")
        await RPGService.setSquad({NOMBRE: nombre, ESCUADRON: listaEscuadronGuardar})
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
                <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h1 className='mb-3 text-primary'>Escuadron</h1>
                    </div>
                    <div style={{display: "flex", overflow: "auto"}}>
                        <div style={{display: "block", width : '50%', padding: "1em"}}>
                            {listaHeroesEscuadron.map((indiceHeroe: [], index: number) => {
                                if (index < 5) {
                                    return <BotonEscuadron indice={indiceHeroe} index={index}/>
                                } else {
                                    return <div></div>
                                }
                            })}
                        </div>
                        <div style={{display: "block", width : '50%', padding: "1em", float: "left"}}>
                            {listaHeroesEscuadron.map((indiceHeroe: [], index: number) => {
                                if (4 < index) {
                                    return <BotonEscuadron indice={indiceHeroe} index={index}/>
                                } else {
                                    return <div></div>
                                }
                            })}
                        </div>
                    </div>
                    <br />
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h2>Coleccion</h2>
                    </div>
                    <div style={{display: "block"}}>
                        <div style={{display: "flex", overflow: "auto"}}>
                            <div className="row" style={{display: "block", width : '50%', padding: "1em"}}>
                                {listaHeroesColeccion.map((indiceHeroe: [], index: number) => {
                                    if (index < 12) {
                                        return <BotonColeccion indice={indiceHeroe} posicion={index}/>
                                    } else {
                                        return <div></div>
                                    }
                                })}
                            </div>
                            <div className="row" style={{display: "block", width : '50%', padding: "1em"}}>
                                {listaHeroesColeccion.map((indiceHeroe: [], index: number) => {
                                    if (11 < index && index < 24) {
                                        return <BotonColeccion indice={indiceHeroe} posicion={index}/>
                                    } else {
                                        return <div></div>
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    <br />
                    <div style= {{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1em"}}>
                        <button className="btn-secondary" style= {{padding: "0.5em 1.5em"}} type="submit" onClick={handleClick}>Guardar escuadron</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Squad