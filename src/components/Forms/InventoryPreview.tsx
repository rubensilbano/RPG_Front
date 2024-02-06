// ACA SE COMPRAN LOS HEROES
// TIENE EJEMPLO DE RENDERIZADO SELECTIVO

// import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar/Navbar';
import Error_Solido from "../../assets/images/Error_Solido.png";
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
import Espada from "../../assets/images/Objetos/Espada.svg";
import Escudo_ligero from "../../assets/images/Objetos/Escudo_ligero.png";
import Gema_de_salud from "../../assets/images/Objetos/Gema_de_salud.png";
import Gema_curativa from "../../assets/images/Objetos/Gema_curativa.png";
import Guantes_de_habilidad from "../../assets/images/Objetos/Guantes_de_habilidad.webp";
import Daga_filosa from "../../assets/images/Objetos/Daga_filosa.png";
import Bomba_de_humo from "../../assets/images/Objetos/Bomba_de_humo.svg";
import Mazo from "../../assets/images/Objetos/Mazo.webp";
import Hacha_de_bronce from "../../assets/images/Objetos/Hacha_de_bronce.png";
import Rabiosa from "../../assets/images/Objetos/Rabiosa.jpg";
import Rompemontañas from "../../assets/images/Objetos/Rompemontañas.jpg";
import Reliquia from "../../assets/images/Objetos/Reliquia.png";
import Expiacion from "../../assets/images/Objetos/Expiacion.jpg";
import Sacramento from "../../assets/images/Objetos/Sacramento.jpg";
import Carga_incendiaria from "../../assets/images/Objetos/Carga_incendiaria.webp";
import Gorro_de_caza from "../../assets/images/Objetos/Gorro_de_caza.jpg";
import Suspiro from "../../assets/images/Objetos/Suspiro.webp";
import Velo from "../../assets/images/Objetos/Velo.png";
import Perla_del_olvido from "../../assets/images/Objetos/Perla_del_olvido.png";
import Corte_siniestro from "../../assets/images/Objetos/Corte_siniestro.jpg";
import Pendiente_de_Mana from "../../assets/images/Objetos/Pendiente_de_Mana.png";
import Habito_sanador from "../../assets/images/Objetos/Habito_sanador.jpg";
import Cetro_de_la_esperanza from "../../assets/images/Objetos/Cetro_de_la_esperanza.png";
import Ofrenda from "../../assets/images/Objetos/Ofrenda.png";
import Mascara_mortuoria from "../../assets/images/Objetos/Mascara_mortuoria.jpg";
import Cetro_de_necromancia from "../../assets/images/Objetos/Cetro_de_necromancia.webp";
import Escudo_espinado from "../../assets/images/Objetos/Escudo_espinado.svg";
import Coraza_de_la_legion from "../../assets/images/Objetos/Coraza_de_la_legion.png";
import Corona_de_huesos from "../../assets/images/Objetos/Corona_de_huesos.jpg";
import Decreto from "../../assets/images/Objetos/Decreto.png";
import Gema_celestial from "../../assets/images/Objetos/Gema_celestial.png";
import Brazalete_de_la_realeza from "../../assets/images/Objetos/Brazalete_de_la_realeza.webp";
import Sable_legendario from "../../assets/images/Objetos/Sable_legendario.jpg";
import Egida from "../../assets/images/Objetos/Egida.webp";
import Gambeson_magico from "../../assets/images/Objetos/Gambeson_magico.avif";
import Savia_vital from "../../assets/images/Objetos/Savia_vital.jpg";
import Gema_de_la_presteza from "../../assets/images/Objetos/Gema_de_la_presteza.png";
import Puñal_para_rituales from "../../assets/images/Objetos/Puñal_para_rituales.jpg";
import Capa_de_evasion from "../../assets/images/Objetos/Capa_de_evasion.webp";
import Garrote_monstruoso from "../../assets/images/Objetos/Garrote_monstruoso.avif";
import './inventoryPreview.css';
// import { Jugador } from './Jugador'

const InventoryPreview = ({ datosNav, setIndiceHeroe }: any) => {
    const [listaHeroesEscuadron, setListaEscuadron] = useState<any>([]);
    const [listaObjetosColeccion, setListaColecc] = useState<any>([]);
    const navigate = useNavigate();
    const elegirHeroePersonalizar = (event: any) => {
        // ENVIA EL INDICE DEL HEROE ELEGIDO, PARA PODER EDITAR SU LISTA DE OBJETOS.
        const elementoHeroe = event.target.value.split(",");
        setIndiceHeroe(elementoHeroe[0])
        navigate('/customize');
    }
    useEffect(() => {
        const funcionCargar = () => {
            // ARMANDO LA LISTA DE HEROES EN EL ESCUADRON
            const nombresHeroes = ["Guerrero S", "Guerrero A", "Guerrero B", "Paladin S", "Paladin A", "Paladin B", "Ballestero S", "Ballestero A", "Ballestero B", "Ninja S", "Ninja A", "Ninja B", "Novicia S", "Novicia A", "Novicia B", "Maga S", "Maga A", "Maga B", "Excomulgado S", "Excomulgado A", "Excomulgado B", "Inquisidor S", "Inquisidor A", "Inquisidor B"]
            let listaAuxEscuadron = [];
            for (let i = 0; i < datosNav.ESCUADRON.length; i++) {
                let listaAuxiliar = [];
                listaAuxiliar.push(datosNav.ESCUADRON[i])
                if ( 0 < datosNav.ESCUADRON[i]) {
                    listaAuxiliar.push(nombresHeroes[datosNav.ESCUADRON[i] - 1])
                    const nivelHeroeActual = parseInt(datosNav["HEROE" + datosNav.ESCUADRON[i]]["NIVEL"]);
                    listaAuxiliar.push(nivelHeroeActual)
                    listaAuxiliar.push(datosNav["HEROE" + datosNav.ESCUADRON[i]]["OBJETOS"])
                    const pbHeroe = parseInt(datosNav["HEROE" + datosNav.ESCUADRON[i]]["PUNTOSBATALLA"][0]) + parseInt(datosNav["HEROE" + datosNav.ESCUADRON[i]]["PUNTOSBATALLA"][1])
                    listaAuxiliar.push(pbHeroe)
                } else {
                    listaAuxiliar.push("Ranura VACIA")
                    listaAuxiliar.push("")
                    listaAuxiliar.push("")
                    listaAuxiliar.push("")
                }
                listaAuxEscuadron.push(listaAuxiliar)
            }
            setListaEscuadron(listaAuxEscuadron);
            // ARMANDO LA LISTA DE OBJETOS EN EL INVENTARIO
            let listaAux = [];
            const nombresObjetos = 
            [
                "Espada ", "Escudo ligero ", "Gema de salud ", "Gema curativa ",
                "Guantes de habilidad ", "Daga filosa ", "Bomba de humo ", "Mazo ",
                "Hacha de bronce ", "Rabiosa ", "Rompemontañas ",
                "Reliquia ", "Expiacion ", "Sacramento ",
                "Carga incendiaria ", "Gorro de caza ", "Suspiro ",
                "Velo ", "Perla del olvido ", "Corte siniestro ",
                "Pendiente de Mana ", "Habito sanador ", "Cetro de la esperanza ",
                "Ofrenda ", "Mascara mortuoria ", "Cetro de necromancia ",
                "Escudo espinado ", "Coraza de la legion ", "Corona de huesos ",
                "Decreto ", "Gema celestial ", "Brazalete de la realeza ",
                "Sable legendario ", "Egida ", "Gambeson magico ", "Savia vital ",
                "Gema de la presteza ", "Puñal para rituales ", "Capa de evasion ", "Garrote monstruoso "
            ]
            for (let i = 0; i < datosNav["ARRAYOBJETOS"].length; i++) {
                listaAux.push([i, nombresObjetos[i], datosNav["ARRAYOBJETOS"][i]])
            }
            setListaColecc(listaAux);
        };
        funcionCargar()
        // async function funcionCargarObjetos() {
        //     await RPGService.objects()
        //     .then(result => {
        //         if (result.data.message === "LISTADO DE OBJETOS OBTENIDO"){
        //             setListaObjetos(result.data.listado)
        //         }
        //     })
        //     .catch(err => console.log(err));
        // }
        // funcionCargarObjetos()
    }, [datosNav]);
    function BotonEscuadron(props: any) {
        // CREA UN BOTON ASIGNANDO LOS DATOS DE UN HEROE COMO value, Y ADJUNTANDO LA FUNCION elegirHeroePersonalizar
        const indice = props.indice;
        const imagenesHeroes = [Guerrero_S_icon, Guerrero_A_icon, Guerrero_B_icon, Paladin_S_icon, Paladin_A_icon, Paladin_B_icon, Ballestero_S_icon, Ballestero_A_icon, Ballestero_B_icon, Ninja_S_icon, Ninja_A_icon, Ninja_B_icon, Novicia_S_icon, Novicia_A_icon, Novicia_B_icon, Maga_S_icon, Maga_A_icon, Maga_B_icon, Excomulgado_S_icon, Excomulgado_A_icon, Excomulgado_B_icon, Inquisidor_S_icon, Inquisidor_A_icon, Inquisidor_B_icon]
        const imagenesObjetos = [Error_Solido, Espada, Escudo_ligero, Gema_de_salud, Gema_curativa, Guantes_de_habilidad, Daga_filosa, Bomba_de_humo, Mazo, Hacha_de_bronce, Rabiosa, Rompemontañas, Reliquia, Expiacion, Sacramento, Carga_incendiaria, Gorro_de_caza, Suspiro, Velo, Perla_del_olvido, Corte_siniestro, Pendiente_de_Mana, Habito_sanador, Cetro_de_la_esperanza, Ofrenda, Mascara_mortuoria, Cetro_de_necromancia, Escudo_espinado, Coraza_de_la_legion, Corona_de_huesos, Decreto, Gema_celestial, Brazalete_de_la_realeza, Sable_legendario, Egida, Gambeson_magico, Savia_vital, Gema_de_la_presteza, Puñal_para_rituales, Capa_de_evasion, Garrote_monstruoso]
        let imagen = Error_Solido
        if (0 < indice[0]) {
            imagen = imagenesHeroes[indice[0] - 1]
            return <div style={{display: "flex", justifyContent: "center"}}>
                <div className="btn-secondary" style={{margin: "0.5em", height:"7em", padding: "0.5em", justifyContent: "normal"}}>
                    <img className="iconSquad" src={imagen} alt="Imagen de heroe no disponible" />
                    <div style={{display: "block"}}>
                        <p className="p-squad">{indice[1]}</p>
                        <p className="p-squad">Nivel: {indice[2]}/30</p>
                        <p className="p-squad">PB: {indice[4]}</p>
                    </div>
                    <img className="iconObject" src={imagenesObjetos[indice[3][0]]} alt=""/>
                    <img className="iconObject" src={imagenesObjetos[indice[3][1]]} alt=""/>
                    <img className="iconObject" src={imagenesObjetos[indice[3][2]]} alt=""/>
                    <img className="iconObject" src={imagenesObjetos[indice[3][3]]} alt=""/>
                    <img className="iconObject" src={imagenesObjetos[indice[3][4]]} alt=""/>
                    <button type="submit"
                    value={indice}
                    onClick={elegirHeroePersonalizar}
                    className="btn-secondary"
                    style={{backgroundColor: "red", color: "black", padding: "0.5em 1.5em", justifyContent: "center"}}
                    >Inventario</button>
                </div>
            </div>
        } else {
            return <div style={{display: "flex", justifyContent: "center"}}>
                <div className="btn-secondary" style={{height:"7em", padding: "0.5em", width: "50%", justifyContent: "normal"}}>
                    <img className="iconSquad" src={imagen} alt="Imagen de heroe no disponible" />
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <p className="p-squad">RANURA VACIA</p>
                    </div>
                </div>
            </div>
        }
    };
    function BotonColeccion(props: any) {
        // EN REALIDAD NO ES UN BOTON
        // CREA UN DIV, SOLO PARA MOSTRAR CADA UNO DE LOS OBJETOS Y CANTIDADES DE ESTOS
        const indiceObjeto = props.indiceObjeto;
        const index = props.index;
        const imagenesObjetos = [Error_Solido, Espada, Escudo_ligero, Gema_de_salud, Gema_curativa, Guantes_de_habilidad, Daga_filosa, Bomba_de_humo, Mazo, Hacha_de_bronce, Rabiosa, Rompemontañas, Reliquia, Expiacion, Sacramento, Carga_incendiaria, Gorro_de_caza, Suspiro, Velo, Perla_del_olvido, Corte_siniestro, Pendiente_de_Mana, Habito_sanador, Cetro_de_la_esperanza, Ofrenda, Mascara_mortuoria, Cetro_de_necromancia, Escudo_espinado, Coraza_de_la_legion, Corona_de_huesos, Decreto, Gema_celestial, Brazalete_de_la_realeza, Sable_legendario, Egida, Gambeson_magico, Savia_vital, Gema_de_la_presteza, Puñal_para_rituales, Capa_de_evasion, Garrote_monstruoso]
        let imagen = ""
        imagen = imagenesObjetos[indiceObjeto[0] + 1]
        return <div style={{display: "flex", justifyContent: "center", width: "20%", margin: "0.5em"}}>
            <h4 style={{paddingRight: "0.5em"}}>{index + 1}</h4>
            <div className="btn-secondary" style={{height:"4em", padding: "0.5em", width: "100%", justifyContent: "normal"}}>
                <div style={{display: "flex"}}>
                    <img className="iconObject" src={imagen} alt="Imagen de objeto no disponible" />
                    <div style={{display: "block"}}>
                        <p className="p-squad">{indiceObjeto[1]}</p>
                        <p className="p-squad">{"CANT:" + indiceObjeto[2]}</p>
                    </div>
                </div>
            </div>
        </div>
    };
    const handleClickVolver = async (e: any) => {
        navigate('/base');
    }

    return (
        <div>
            <Navbar datosNav={datosNav} />
            
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h1 className='mb-3 text-primary'>Inventario</h1>
                </div>
                {/* FALTA APLICAR DETALLES */}
                <div style={{display: "flex", padding: "0em 1em"}}>
                    {listaObjetosColeccion.map((indiceObjeto: [], index: number) => {
                        if (index < 5) {
                            return <BotonColeccion indiceObjeto={indiceObjeto} index={index}/>
                        } else {
                            return <div></div>
                        }
                    })}
                </div>
                <div style={{display: "flex", padding: "0em 1em"}}>
                    {listaObjetosColeccion.map((indiceObjeto: [], index: number) => {
                        if (4 < index && index < 10) {
                            return <BotonColeccion indiceObjeto={indiceObjeto} index={index}/>
                        } else {
                            return <div></div>
                        }
                    })}
                </div>
                <div style={{display: "flex", padding: "0em 1em"}}>
                    {listaObjetosColeccion.map((indiceObjeto: [], index: number) => {
                        if (9 < index && index < 15) {
                            return <BotonColeccion indiceObjeto={indiceObjeto} index={index}/>
                        } else {
                            return <div></div>
                        }
                    })}
                </div>
                <div style={{display: "flex", padding: "0em 1em"}}>
                    {listaObjetosColeccion.map((indiceObjeto: [], index: number) => {
                        if (14 < index && index < 20) {
                            return <BotonColeccion indiceObjeto={indiceObjeto} index={index}/>
                        } else {
                            return <div></div>
                        }
                    })}
                </div>
                <div style={{display: "flex", padding: "0em 1em"}}>
                    {listaObjetosColeccion.map((indiceObjeto: [], index: number) => {
                        if (19 < index && index < 25) {
                            return <BotonColeccion indiceObjeto={indiceObjeto} index={index}/>
                        } else {
                            return <div></div>
                        }
                    })}
                </div>
                <div style={{display: "flex", padding: "0em 1em"}}>
                    {listaObjetosColeccion.map((indiceObjeto: [], index: number) => {
                        if (24 < index && index < 30) {
                            return <BotonColeccion indiceObjeto={indiceObjeto} index={index}/>
                        } else {
                            return <div></div>
                        }
                    })}
                </div>
                <div style={{display: "flex", padding: "0em 1em"}}>
                    {listaObjetosColeccion.map((indiceObjeto: [], index: number) => {
                        if (29 < index && index < 35) {
                            return <BotonColeccion indiceObjeto={indiceObjeto} index={index}/>
                        } else {
                            return <div></div>
                        }
                    })}
                </div>
                <div style={{display: "flex", padding: "0em 1em"}}>
                    {listaObjetosColeccion.map((indiceObjeto: [], index: number) => {
                        if (34 < index && index < 40) {
                            return <BotonColeccion indiceObjeto={indiceObjeto} index={index}/>
                        } else {
                            return <div></div>
                        }
                    })}
                </div>
                <br />
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h2>Coleccion</h2>
                </div>
                <div className="row">
                    {listaHeroesEscuadron.map((indiceHeroe: []) => {
                        return <BotonEscuadron indice={indiceHeroe} />
                    })}
                </div>
                <br />
                <div style= {{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1em"}}>
                    <button className="btn-secondary" style= {{padding: "0.5em 1.5em"}} type="submit" onClick={handleClickVolver}>Volver</button>
                </div>
            </div>
        </div>
    )
}

export default InventoryPreview