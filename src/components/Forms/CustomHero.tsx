// ACA SE COMPRAN LOS HEROES
// TIENE EJEMPLO DE RENDERIZADO SELECTIVO

// import React from 'react'
import { useState, useEffect } from "react";
import * as RPGService from "./RPGService"
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar/Navbar';
import Error_Solido from "../../assets/images/Error_Solido.png";
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
// import { Jugador } from './Jugador'

const InventoryPreview = ({ datosNav, indiceHeroePersonalizar, func }: any) => {
// LISTADO COMPLETO DE OBJETOS. ARRAY CON OBJETOS JSON
    const [listaObjetosColeccion, setListaColecc] = useState<any>([]);
// ATRIBUTOS BASE DEL HEROE ACTUAL. OBJETO JSON
    const [atributosHeroe, setAtributosHeroe] = useState<any>({
        "NOMBRE": "nombre",
        "ATAQUE": 0,
        "DEFENSA": 0,
        "VIDA": 0,
        "REGENERACION": 0,
        "CADENCIA": 0,
        "CRITICO": 0,
        "EVASION": 0,
        "ATURDIR": 0
    });
// SUMATORIA DE LOS ATRIBUTOS DE OBJETOS EQUIPADOS
    const [atributosObjetos, setAtributosObjetos] = useState<any>({
        "NOMBRE": "nombre",
        "ATAQUE": 0,
        "DEFENSA": 0,
        "VIDA": 0,
        "REGENERACION": 0,
        "CADENCIA": 0,
        "CRITICO": 0,
        "EVASION": 0,
        "ATURDIR": 0,
        "PUNTOSBATALLA": 0
    });
    // INVENTARIO DEL HEROE ACTUAL
    const [inventarioHeroe, setInventarioHeroe] = useState<any>([0, 0, 0, 0, 0]);
    // INVENTARIO DEL JUGADOR
    const [inventarioJugador, setInventarioJugador] = useState<any>([]);
    const navigate = useNavigate();
    const retirarObjeto = (event: any) => {
        // RECIBE EL INDICE DE LA RANURA DEL HEROE ELEGIDO, PARA ASI QUITAR ESE OBJETO.
        // TAMBIEN INCREMENTA ESE OBJETO EN EL INVENTARIO
        const indicesObjeto = event.target.value.split(",");
        const indiceRanura = indicesObjeto[0]
        const indiceObjeto = indicesObjeto[1]
        let objetosHeroe = inventarioHeroe
        objetosHeroe[indiceRanura] = 0
        setInventarioHeroe(objetosHeroe)
        let objetosJugador = inventarioJugador
        objetosJugador[indiceObjeto - 1] += 1
        setInventarioJugador(objetosJugador)
        recalcularSumatoriaObjetos()
    }
    const equiparObjeto = (event: any) => {
        // ELIMINA UNA CANTIDAD DEL ARRAYOBJETOS DEL JUGADOR, Y AGREGA ESE MISMO INDICE AL HEROE ACTUAL
        const elementoObjeto = event.target.value.split(", ");
        // PUEDO AGREGAR EL OBJETO, SI HAY AL MENOS UNA UNIDAD EN EL INVENTARIO
        if (elementoObjeto[11] >= 1) {
            // REVISANDO SI HAY RANURAS VACIAS PARA AGREGAR OBJETO
            const buscarIndice0 = (element: number) => element === 0;
            let objetosHeroe = inventarioHeroe
            const index0 = objetosHeroe.findIndex(buscarIndice0);
            if (-1 < index0) {
                // EQUIPANDO OBJETO AL HEROE.
                objetosHeroe[index0] = elementoObjeto[0]
                setInventarioHeroe(objetosHeroe)
                let objetosJugador = inventarioJugador
                objetosJugador[elementoObjeto[0] - 1] -= 1
                setInventarioJugador(objetosJugador)
                recalcularSumatoriaObjetos()
            } else {
                alert('EL INVENTARIO DE HEROE ESTA COMPLETO');
            }
        } else {
            alert('NO HAY MAS UNIDADES DE ESTE OBJETO');
        }
    }
    function recalcularSumatoriaObjetos() {
        // REVISA EL LISTADO DE OBJETOS EQUIPADOS, Y SUMA LOS ATRIBUTOS.
            // POR ULTIMO MODIFICA LA SUMATORIA DE ATRIBUTOS, INCLUYENDO LOS PUNTOS DE BATALLA
        let sumatoriaAtributos = {
            "ATAQUE": 0,
            "DEFENSA": 0,
            "VIDA": 0,
            "REGENERACION": 0,
            "CADENCIA": 0,
            "CRITICO": 0,
            "EVASION": 0,
            "ATURDIR": 0,
            "PUNTOSBATALLA": 0
        }
        for (let i = 0; i < inventarioHeroe.length; i++) {
            if (0 < inventarioHeroe[i]) {
                sumatoriaAtributos.ATAQUE += listaObjetosColeccion[inventarioHeroe[i] - 1]["ATAQUE"]
                sumatoriaAtributos.DEFENSA += listaObjetosColeccion[inventarioHeroe[i] - 1]["DEFENSA"]
                sumatoriaAtributos.VIDA += listaObjetosColeccion[inventarioHeroe[i] - 1]["VIDA"]
                sumatoriaAtributos.REGENERACION += listaObjetosColeccion[inventarioHeroe[i] - 1]["REGENERACION"]
                sumatoriaAtributos.CADENCIA += listaObjetosColeccion[inventarioHeroe[i] - 1]["CADENCIA"]
                sumatoriaAtributos.CRITICO += listaObjetosColeccion[inventarioHeroe[i] - 1]["CRITICO"]
                sumatoriaAtributos.EVASION += listaObjetosColeccion[inventarioHeroe[i] - 1]["EVASION"]
                sumatoriaAtributos.ATURDIR += listaObjetosColeccion[inventarioHeroe[i] - 1]["ATURDIR"]
                sumatoriaAtributos.PUNTOSBATALLA += listaObjetosColeccion[inventarioHeroe[i] - 1]["PUNTOSBATALLA"]
            }
        }
        setAtributosObjetos(sumatoriaAtributos)
    };
    useEffect(() => {
        setInventarioHeroe(datosNav["HEROE" + indiceHeroePersonalizar]["OBJETOS"])
        setInventarioJugador(datosNav["ARRAYOBJETOS"])
        async function funcionCargarHeroe() {
            const indice = indiceHeroePersonalizar
            const nombresHeroes = ["Guerrero S", "Guerrero A", "Guerrero B", "Paladin S", "Paladin A", "Paladin B", "Ballestero S", "Ballestero A", "Ballestero B", "Ninja S", "Ninja A", "Ninja B", "Novicia S", "Novicia A", "Novicia B", "Maga S", "Maga A", "Maga B", "Excomulgado S", "Excomulgado A", "Excomulgado B", "Inquisidor S", "Inquisidor A", "Inquisidor B"]
            const nivel = datosNav["HEROE" + indice]["NIVEL"]
            await RPGService.attrib({NOMBRE: nombresHeroes[indice], NIVEL: nivel})
            .then(result => {
                if (result.data.message === "HEROE CALCULADO EXITOSAMENTE!!!"){
                    setAtributosHeroe(result.data.datosHeroe)
                }
            })
            .catch(err => console.log(err));
        }
        funcionCargarHeroe()
        async function funcionCargarObjetos() {
            await RPGService.objects()
            .then(result => {
                if (result.data.message === "LISTADO DE OBJETOS OBTENIDO"){
                    setListaColecc(result.data.listado)
                }
            })
            .catch(err => console.log(err));
        }
        funcionCargarObjetos()
    // });
    // CORRECCION PARA EL DEPLOY EN NETLIFY
    }, [datosNav, indiceHeroePersonalizar]);
    function ListaAtributos() {
        // MUESTRA LOS ATRIBUTOS DEL HEROE, Y SUS OBJETOS.
        const ataqueTotal = atributosHeroe.ATAQUE + atributosObjetos.ATAQUE
        const defensaTotal = atributosHeroe.DEFENSA + atributosObjetos.DEFENSA
        const vidaTotal = atributosHeroe.VIDA + atributosObjetos.VIDA
        const regeneracionTotal = atributosHeroe.REGENERACION + atributosObjetos.REGENERACION
        const cadenciaTotal = atributosHeroe.CADENCIA + atributosObjetos.CADENCIA
        const criticoTotal = atributosHeroe.CRITICO + atributosObjetos.CRITICO
        const evasionTotal = atributosHeroe.EVASION + atributosObjetos.EVASION
        const aturdirTotal = atributosHeroe.ATURDIR + atributosObjetos.ATURDIR
        const puntosTotal = datosNav["HEROE" + indiceHeroePersonalizar]["PUNTOSBATALLA"][0] + datosNav["HEROE" + indiceHeroePersonalizar]["PUNTOSBATALLA"][1]
        return <div>
            <h4>Ataque: {ataqueTotal.toFixed(2)} = {atributosHeroe.ATAQUE.toFixed(2)} + {atributosObjetos.ATAQUE.toFixed(2)}</h4>
            <h4>Defensa: {defensaTotal.toFixed(2)} = {atributosHeroe.DEFENSA.toFixed(2)} + {atributosObjetos.DEFENSA.toFixed(2)}</h4>
            <h4>Vida: {vidaTotal.toFixed(2)} = {atributosHeroe.VIDA.toFixed(2)} + {atributosObjetos.VIDA.toFixed(2)}</h4>
            <h4>Regeneracion: {regeneracionTotal.toFixed(2)} = {atributosHeroe.REGENERACION.toFixed(2)} + {atributosObjetos.REGENERACION.toFixed(2)}</h4>
            <h4>Cadencia: {cadenciaTotal.toFixed(2)} = {atributosHeroe.CADENCIA.toFixed(2)} - {atributosObjetos.CADENCIA.toFixed(2)}%</h4>
            <h4>Critico: {Math.floor(criticoTotal)} = {Math.floor(atributosHeroe.CRITICO)} + {Math.floor(atributosObjetos.CRITICO)}</h4>
            <h4>Evasion: {Math.floor(evasionTotal)} = {Math.floor(atributosHeroe.EVASION)} + {Math.floor(atributosObjetos.EVASION)}</h4>
            <h4>Aturdir: {Math.floor(aturdirTotal)} = {Math.floor(atributosHeroe.ATURDIR)} + {Math.floor(atributosObjetos.ATURDIR)}</h4>
            <h3>Puntos de Batalla: {Math.floor(puntosTotal)} = {datosNav["HEROE" + indiceHeroePersonalizar]["PUNTOSBATALLA"][0]} + {datosNav["HEROE" + indiceHeroePersonalizar]["PUNTOSBATALLA"][1]}</h3>
        </div>;
    };
    function BotonObjeto(props: any) {
        // MUESTRA LOS OBJETOS EQUIPADOS
        // CREA UN BOTON ASIGNANDO EL INDICE DE RANURA DEL HEROE COMO value, Y ADJUNTANDO LA FUNCION retirarObjeto
        const indiceObjeto = props.indiceObjeto;
        const indiceRanura = props.indiceRanura;
        const imagenesObjetos = [Error_Solido, Espada, Escudo_ligero, Gema_de_salud, Gema_curativa, Guantes_de_habilidad, Daga_filosa, Bomba_de_humo, Mazo, Hacha_de_bronce, Rabiosa, Rompemontañas, Reliquia, Expiacion, Sacramento, Carga_incendiaria, Gorro_de_caza, Suspiro, Velo, Perla_del_olvido, Corte_siniestro, Pendiente_de_Mana, Habito_sanador, Cetro_de_la_esperanza, Ofrenda, Mascara_mortuoria, Cetro_de_necromancia, Escudo_espinado, Coraza_de_la_legion, Corona_de_huesos, Decreto, Gema_celestial, Brazalete_de_la_realeza, Sable_legendario, Egida, Gambeson_magico, Savia_vital, Gema_de_la_presteza, Puñal_para_rituales, Capa_de_evasion, Garrote_monstruoso]
        let imagen = ""
        let nombre = ""
        let puntosBatalla = ""
        if (0 < indiceObjeto) {
            if (0 < listaObjetosColeccion.length) {
                nombre = listaObjetosColeccion[indiceObjeto - 1]["NOMBRE"]
                puntosBatalla = listaObjetosColeccion[indiceObjeto - 1]["PUNTOSBATALLA"]
            }
            imagen = imagenesObjetos[indiceObjeto]
            return <div style={{display: "flex", justifyContent: "center", width: "20%", margin: "0.5em"}}>
                <div className="btn-secondary" style={{height:"5em", padding: "0.5em", width: "100%", justifyContent: "normal"}}>
                    <div style={{display: "flex"}}>
                        <img className="iconObject" src={imagen} alt="Imagen de objeto no disponible" />
                        <div style={{display: "block"}}>
                            <p className="p-squad">{nombre}</p>
                            <p className="p-squad">PB: {puntosBatalla}</p>
                        </div>
                        <button type="submit"
                        className="btn-secondary"
                        style={{backgroundColor: "red", color: "black", padding: "0.5em", justifyContent: "center"}}
                        value={[indiceRanura, indiceObjeto]}
                        onClick={retirarObjeto}
                        >Retirar objeto!</button>
                    </div>
                </div>
            </div>
        } else {
            imagen = Error_Solido
            return <div style={{display: "flex"}}>
                <div className="btn-secondary"
                style={{height:"5em", padding: "0.5em", width: "100%", justifyContent: "left"}}>
                    <img className="iconSquad" src={imagen} alt="Imagen de objeto no disponible" />
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <p className="p-squad">RANURA VACIA</p>
                    </div>
                </div>
            </div>
        }
    };
    function BotonColeccion(props: any) {
        // MUESTRA LA COLECCION DE OBJETOS, Y SUS CANTIDADES
        // CREA UN BOTON ASIGNANDO EL INDICE DE OBJETO COMO value, Y ADJUNTANDO LA FUNCION equiparObjeto
        const objeto = props.objeto;
        
        console.log(objeto)

        const indiceObjeto = props.indice;
        const imagenesObjetos = [Error_Solido, Espada, Escudo_ligero, Gema_de_salud, Gema_curativa, Guantes_de_habilidad, Daga_filosa, Bomba_de_humo, Mazo, Hacha_de_bronce, Rabiosa, Rompemontañas, Reliquia, Expiacion, Sacramento, Carga_incendiaria, Gorro_de_caza, Suspiro, Velo, Perla_del_olvido, Corte_siniestro, Pendiente_de_Mana, Habito_sanador, Cetro_de_la_esperanza, Ofrenda, Mascara_mortuoria, Cetro_de_necromancia, Escudo_espinado, Coraza_de_la_legion, Corona_de_huesos, Decreto, Gema_celestial, Brazalete_de_la_realeza, Sable_legendario, Egida, Gambeson_magico, Savia_vital, Gema_de_la_presteza, Puñal_para_rituales, Capa_de_evasion, Garrote_monstruoso]
        let imagen = ""
        imagen = imagenesObjetos[indiceObjeto]
        // INDICE DE OBJETO, NOMBRE, 8 ATRIBUTOS, PUNTOS BATALLA, CANTIDAD
        const arrayPalabra = indiceObjeto + ", " + objeto.NOMBRE + ", " + objeto.ATAQUE + ", " + objeto.DEFENSA + ", " + objeto.VIDA + ", " + objeto.REGENERACION + ", " + objeto.CADENCIA + ", " + objeto.CRITICO + ", " + objeto.EVASION + ", " + objeto.ATURDIR + ", " + objeto.PUNTOSBATALLA + ", " + inventarioJugador[indiceObjeto - 1]
        return <div style={{display: "flex", justifyContent: "center", margin: "0.5em"}}>
            <h4 style={{paddingRight: "0.5em"}}>{indiceObjeto}</h4>
            <div className="btn-secondary" style={{display: "block", height:"8em", padding: "0.5em", width: "100%", justifyContent: "normal", fontWeight: "600"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div style={{display: "flex", width: "90%"}}>
                        <img className="iconObject" src={imagen} alt="Imagen de objeto no disponible" />
                        <div style={{display: "block", paddingRight: "0.5em"}}>
                            <p className="p-squad">{objeto.NOMBRE}</p>
                            <p className="p-squad">PB: {objeto.PUNTOSBATALLA}</p>
                            <p className="p-squad">CANT: {datosNav["ARRAYOBJETOS"][indiceObjeto - 1]}</p>
                        </div>
                        <div style={{display: "block", paddingRight: "0.5em"}}>
                            <p className="p-squad">ATAQUE: {objeto.ATAQUE}</p>
                            <p className="p-squad">DEFENSA: {objeto.DEFENSA}</p>
                            <p className="p-squad">VIDA: {objeto.VIDA}</p>
                            <p className="p-squad">REGENERACION: {objeto.REGENERACION}</p>
                        </div>
                        <div style={{display: "block", paddingRight: "0.5em"}}>
                            <p className="p-squad">CADENCIA: {objeto.CADENCIA}%</p>
                            <p className="p-squad">CRITICO: {objeto.CRITICO}%</p>
                            <p className="p-squad">EVASION: {objeto.EVASION}%</p>
                            <p className="p-squad">ATURDIR: {objeto.ATURDIR}%</p>
                        </div>
                    </div>
                    <button type="submit"
                    className="btn-secondary"
                    style={{backgroundColor: "red", color: "black", padding: "0.5em", justifyContent: "center"}}
                    value={arrayPalabra}
                    onClick={equiparObjeto}
                    >Equipar!</button>
                </div>
                <div style= {{display: "flex", justifyContent: "center", fontWeight: "700"}}>
                    <p className="p-squad">RECOMENDADO: {objeto.RECOMENDADO}</p>
                </div>
            </div>
        </div>
    };
    const handleClick = async (e: any) => {
        // GUARDA LOS CAMBIOS EN LA BD
        const nombre = sessionStorage.getItem("Usuario")
        await RPGService.saveInv({NOMBRE: nombre, INDICEHEROE: indiceHeroePersonalizar, INVHEROE: inventarioHeroe, INVJUGADOR: inventarioJugador, PBOBJETOS: atributosObjetos.PUNTOSBATALLA})
        .then(result => {
            if (result.data.message === "DATOS GUARDADOS EXITOSAMENTE!!!"){
                func(result.data.datosJugador)
                navigate('/inventory');
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
                <h1 className='mb-3 text-primary'>Personalizando heroe: {atributosHeroe.NOMBRE}</h1>
                <div style={{display: "flex", overflow: "auto"}}>
                    <div style={{width : '50%', padding: "1em"}}>
                        <div className="row">
                            {listaObjetosColeccion.map((objeto: any, index: number) => {
                                if (index < 20) {
                                    return <BotonColeccion objeto={objeto} indice={index + 1} />
                                } else {
                                    return <div></div>
                                }
                            })}
                        </div>
                    </div>
                    <div style={{width : '50%', padding: "1em", float: "left"}}>
                        <div className="row">
                            {listaObjetosColeccion.map((objeto: any, index: number) => {
                                if (19 < index) {
                                    return <BotonColeccion objeto={objeto} indice={index + 1} />
                                } else {
                                    return <div></div>
                                }
                            })}
                        </div>
                    </div>
                </div>
                <br />
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h2>Equipo actual</h2>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className="row" style={{display: "flex"}}>
                        {datosNav["HEROE" + indiceHeroePersonalizar]["OBJETOS"].map((objeto: number, i: number) => {
                            return <BotonObjeto indiceObjeto={objeto} indiceRanura={i} />
                        })}
                    </div>
                </div>
                <br />
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h2>Atributos</h2>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <ListaAtributos />
                </div>
                <br />
                <div style= {{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1em"}}>
                    <button className="btn-secondary" style= {{padding: "0.5em 1.5em"}} type="submit" onClick={handleClick}>Guardar inventario</button>
                </div>
            </div>
        </div>
    )
}

export default InventoryPreview