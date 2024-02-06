// SOLO MUESTRA LOS RESULTADOS DE UN COMBATE

// import React from 'react'
// import * as RPGService from "./RPGService"
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
import './result.css';

const Result = ({ datosNav, resultado }: any) => {
    /*
    resultado = [
        0- BOOL VICTORIA/DERROTA,
        1- ARRAY PV HEROES(RESTANTES/TOTAL),
        2- ARRAY PV ENEMIGOS(RESTANTES/TOTAL),
        3- ARRAY PV RESTANTES DEL GANADOR(HEROES/ENEMIGOS),
        4- MONEDAS Y EXP
        5- EXPERIENCIA DEL ESCUADRON(ACTUAL/PROX. NIVEL), NIV ACTUAL, ¿SUBIO NIVEL?
        6- RESUMEN DE ATAQUES Y CURACIONES
        7- ESTADISTICAS GRUPALES
        8- OBJETOS GANADOS]
    */
    // OBJETOS GANADOS, [INDICE OBJETO, CANTIDAD]
    const [listaObjetosUnicos, setListaObjetosUnicos] = useState<any>([[0, "Vacio", 0]]);
    const [indiceBotonera, setIndiceBotonera] = useState<number>(0);
    const navigate = useNavigate();
    const handleClickContinuar = (e: any) => {
        navigate('/camp');
    }
    const handleClickVolver = (e: any) => {
        navigate('/base');
    }
    function SelectorUnidades(props: any) {
        // RECIBE NOMBRE, VIDA ACTUAL, Y VIDA MAXIMA
        const vida = new Array<[number, number]>(props.vida)
        const ancho = (vida[0][0] / vida[0][1]) * 100
        return <div>
            <div className="barrasProgresivas total">
                <div className="barrasProgresivas restante" style={{ width: ancho }}></div>
            </div>
            <h4 style={{ marginTop: "0.1em", marginBottom: "0em" }}>{props.nombre}</h4>
            <h4 style={{ marginTop: "0em", marginBottom: "1em" }}>{vida[0][0]}/{vida[0][1]}</h4>
        </div>
    };
    function BarrasExp(props: any) {
        // RECIBE NOMBRE, VIDA ACTUAL, Y VIDA MAXIMA
        const experiencia = new Array<[number, number]>(props.vida)
        const ancho = (experiencia[0][0] / experiencia[0][1]) * 100
        const index = props.index;
        let imagen = Error_Solido
        const imagenesHeroes = [Guerrero_S_icon, Guerrero_A_icon, Guerrero_B_icon, Paladin_S_icon, Paladin_A_icon, Paladin_B_icon, Ballestero_S_icon, Ballestero_A_icon, Ballestero_B_icon, Ninja_S_icon, Ninja_A_icon, Ninja_B_icon, Novicia_S_icon, Novicia_A_icon, Novicia_B_icon, Maga_S_icon, Maga_A_icon, Maga_B_icon, Excomulgado_S_icon, Excomulgado_A_icon, Excomulgado_B_icon, Inquisidor_S_icon, Inquisidor_A_icon, Inquisidor_B_icon]
        imagen = imagenesHeroes[datosNav.ESCUADRON[index]]
        return <div className="btn-secondary" style={{display: "flex", justifyContent: "left"}}>
            <img className="iconSquad" style={{padding: "0.5em"}} src={imagen} alt="Imagen de heroe no disponible" />
            <div>
                <div>
                    <div className="barrasProgresivas expTotal">
                        <div className="barrasProgresivas expRestante" style={{ width: ancho }}></div>
                    </div>
                </div>
                <h4>{props.props}</h4>
            </div>
        </div>
    };
    function BotonRecompensas(props: any) {
        // EVALUA SI EXISTE UNA EXPEDICION EN CURSO PARA PODER CONTINUAR.
        const valor = props.valor;
        if (valor === "true") {
            return <button type="button" className="btn-secondary"
            style={{backgroundColor: "red", color: "black", padding: "0.5em 1.5em"}}
            disabled>RECOMPENSAS</button>;
        } else {
            return <button type="button" className="btn-secondary"
            style={{backgroundColor: "blue", color: "white", padding: "0.5em 1.5em"}}
            onClick={handleClickMostrarRecompensas}>RECOMPENSAS</button>;
        }
    };
    const handleClickMostrarRecompensas = (e: any) => {
        setIndiceBotonera(0);
    }
    function BotonBalance(props: any) {
        // EVALUA SI EXISTE UNA EXPEDICION EN CURSO PARA PODER CONTINUAR.
        const valor = props.valor;
        if (valor === "true") {
            return <button type="button" className="btn-secondary"
            style={{backgroundColor: "red", color: "black", padding: "0.5em 1.5em"}}
            disabled>BALANCE</button>;
        } else {
            return <button type="button" className="btn-secondary"
            style={{backgroundColor: "blue", color: "white", padding: "0.5em 1.5em"}}
            onClick={handleClickMostrarBalance}>BALANCE</button>;
        }
    };
    const handleClickMostrarBalance = (e: any) => {
        setIndiceBotonera(1);
    }
    function BotonResumen(props: any) {
        // EVALUA SI EXISTE UNA EXPEDICION EN CURSO PARA PODER CONTINUAR.
        const valor = props.valor;
        if (valor === "true") {
            return <button type="button" className="btn-secondary"
            style={{backgroundColor: "red", color: "black", padding: "0.5em 1.5em"}}
            disabled>RESUMEN DETALLADO</button>;
        } else {
            return <button type="button" className="btn-secondary"
            style={{backgroundColor: "blue", color: "white", padding: "0.5em 1.5em"}}
            onClick={handleClickMostrarResumen}>RESUMEN DETALLADO</button>;
        }
    };
    const handleClickMostrarResumen = (e: any) => {
        setIndiceBotonera(2);
    }
    function BotonEstadisticas(props: any) {
        // EVALUA SI EXISTE UNA EXPEDICION EN CURSO PARA PODER CONTINUAR.
        const valor = props.valor;
        if (valor === "true") {
            return <button type="button" className="btn-secondary"
            style={{backgroundColor: "red", color: "black", padding: "0.5em 1.5em"}}
            disabled>ESTADISTICAS</button>;
        } else {
            return <button type="button" className="btn-secondary"
            style={{backgroundColor: "blue", color: "white", padding: "0.5em 1.5em"}}
            onClick={handleClickMostrarEstadisticas}>ESTADISTICAS</button>;
        }
    };
    const handleClickMostrarEstadisticas = (e: any) => {
        setIndiceBotonera(3);
    }
    function Botonera() {
        // DEVUELVE UNA SERIE DE 4 BOTONES, PARA OCULTAR O MOSTRAR UNO DE LOS 4 COMPONENTES RESULTADOS
        let componente = null
        switch (indiceBotonera) {
            case 0:
                componente = <div style={{display: "flex", justifyContent: "center"}}>
                    <BotonRecompensas valor={"true"} />
                    <BotonBalance valor={"false"} />
                    <BotonResumen valor={"false"} />
                    <BotonEstadisticas valor={"false"} />
                </div>
                break;
            case 1:
                componente = <div style={{display: "flex", justifyContent: "center"}}>
                    <BotonRecompensas valor={"false"} />
                    <BotonBalance valor={"true"} />
                    <BotonResumen valor={"false"} />
                    <BotonEstadisticas valor={"false"} />
                </div>
                break;
            case 2:
                componente = <div style={{display: "flex", justifyContent: "center"}}>
                    <BotonRecompensas valor={"false"} />
                    <BotonBalance valor={"false"} />
                    <BotonResumen valor={"true"} />
                    <BotonEstadisticas valor={"false"} />
                </div>
                break;
            case 3:
                componente = <div style={{display: "flex", justifyContent: "center"}}>
                    <BotonRecompensas valor={"false"} />
                    <BotonBalance valor={"false"} />
                    <BotonResumen valor={"false"} />
                    <BotonEstadisticas valor={"true"} />
                </div>
                break;
            default:
                componente = <div style={{display: "flex", justifyContent: "center"}}>
                    <BotonRecompensas valor={"true"} />
                    <BotonBalance valor={"false"} />
                    <BotonResumen valor={"false"} />
                    <BotonEstadisticas valor={"false"} />
                </div>
                break;
        }
        return componente
    };
    function Recompensas(props: any) {
        // SI ES TRUE, MUESTRA EL COMPONENTE Recompensas
        if (indiceBotonera === 0) {
            return <div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h2>RECOMPENSAS</h2>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h3>EXPERIENCIA DEL ESCUADRON</h3>
                </div>
                <div style={{display: "flex", overflow: "auto"}}>
                    <div style={{display: "block", width : '50%', padding: "1em"}}>
                        {resultado[1].map((datosHeroe: any, index: number) => {
                            const subioNivel = resultado[5][index][3] ? "Subio de Nivel!!!" : ""
                            const nombre = datosHeroe[0] + " " + resultado[5][index][0] + "/" + resultado[5][index][1] + "   Niv:" + resultado[5][index][2] + "   " + subioNivel
                            const experiencia = [resultado[5][index][0], resultado[5][index][1]]
                            if (index < 5) {
                                return <BarrasExp props={nombre} vida={experiencia} index={index}/>
                            } else {
                                return <div></div>
                            }
                        })}
                    </div>
                    <div style={{display: "block", width : '50%', padding: "1em", float: "left"}}>
                        {resultado[1].map((datosHeroe: any, index: number) => {
                            const subioNivel = resultado[5][index][3] ? "Subio de Nivel!!!" : ""
                            const nombre = datosHeroe[0] + " " + resultado[5][index][0] + "/" + resultado[5][index][1] + "   Niv:" + resultado[5][index][2] + "   " + subioNivel
                            const experiencia = [resultado[5][index][0], resultado[5][index][1]]
                            if (4 < index) {
                                return <BarrasExp props={nombre} vida={experiencia} index={index}/>
                            } else {
                                return <div></div>
                            }
                        })}
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h3>OBJETOS</h3>
                </div>
                <div style={{display: "flex", padding: "0em 1em"}}>
                    {listaObjetosUnicos.map((datosObjeto: [number, string, number], index: number) => {
                        if (index < 5) {
                            return <BotonColeccion datosObjeto={datosObjeto}/>
                        } else {
                            return <div></div>
                        }                        
                    })}
                </div>
                <div style={{display: "flex", padding: "0em 1em"}}>
                    {listaObjetosUnicos.map((datosObjeto: [number, string, number], index: number) => {
                        if (4 < index) {
                            return <BotonColeccion datosObjeto={datosObjeto}/>
                        } else {
                            return <div></div>
                        }                        
                    })}
                </div>
                <br />
            </div>
        } else {
            return <div></div>
        }
    };
    function Balance(props: any) {
        // SI ES TRUE, MUESTRA EL COMPONENTE Balance
        if (indiceBotonera === 1) {
            return <div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h2>BALANCE</h2>
                </div>
                <div style={{display: "flex", overflow: "auto"}}>
                    <div style={{display: "block", width : '50%', padding: "1em"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <h3>Puntos de Vida HEROES</h3>
                        </div>
                        <div style={{marginLeft: "30%"}}>
                            {resultado[1].map((datosHeroe: any) => {
                                const nombre = datosHeroe[0]
                                const vida = [datosHeroe[1], datosHeroe[2]]
                                return <SelectorUnidades nombre={nombre} vida={vida} />
                            })}
                        </div>
                    </div>
                    <div style={{display: "block", width : '50%', padding: "1em"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <h3>Puntos de Vida ENEMIGOS</h3>
                        </div>
                        <div style={{marginLeft: "30%"}}>
                            {resultado[2].map((datosHeroe: any) => {
                                const nombre = datosHeroe[0]
                                const vida = [datosHeroe[1], datosHeroe[2]]
                                return <SelectorUnidades nombre={nombre} vida={vida} />
                            })}
                        </div>
                    </div>
                </div>
                <br />
            </div>
        } else {
            return <div></div>
        }
    };
    function Resumen(props: any) {
        // SI ES TRUE, MUESTRA EL COMPONENTE Resumen
        if (indiceBotonera === 2) {
            return <div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h2>RESUMEN DETALLADO</h2>
                </div>
                <div>
                    {resultado[6].map((detalle: any) => {
                        if (detalle[0] === "AH") {
                            // TURNO HEROE COMBATIENTE
                            return <h4 style={{maxWidth: "40%", backgroundColor: "blue", marginLeft: "30%", color: "white"}}>{detalle[1]}</h4>
                        } else if (detalle[0] === "CH") {
                            // TURNO HEROE CURACION
                            return <h4 style={{maxWidth: "40%", backgroundColor: "blue", marginLeft: "30%", color: "gold"}}>{detalle[1]}</h4>
                        } else if (detalle[0] === "AE") {
                            // TURNO ENEMIGO COMBATIENTE
                            return <h4 style={{maxWidth: "40%", backgroundColor: "red", marginLeft: "30%"}}>{detalle[1]}</h4>
                        } else if (detalle[0] === "CE") {
                            // TURNO ENEMIGO CURACION
                            return <h4 style={{maxWidth: "40%", backgroundColor: "red", marginLeft: "30%", color: "gold"}}>{detalle[1]}</h4>
                        } else {
                            return <div></div>
                        }
                    })}
                </div>
                <br />
            </div>
        } else {
            return <div></div>
        }
    };
    function Estadisticas(props: any) {
        // SI ES TRUE, MUESTRA EL COMPONENTE Estadisticas
        if (indiceBotonera === 3) {
            return <div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h2>ESTADISTICAS GRUPALES</h2>
                </div>
                <div style={{display: "flex", overflow: "auto"}}>
                    <div style={{display: "block", width : '50%', paddingLeft: "5%"}}>
                        <h3>Heroes</h3>
                        <h4>Daño causado: {resultado[7][0][0].toFixed(2)}</h4>
                        <h4>Daño reducido: {resultado[7][0][1].toFixed(2)}</h4>
                        <h4>Daño curado: {resultado[7][0][2].toFixed(2)}</h4>
                        <h4>Tiempo que estuvo aturdido: {resultado[7][0][3]} Segundos.</h4>
                    </div>
                    <div style={{display: "block", width : '50%', paddingLeft: "5%"}}>
                        <h3>Enemigos</h3>
                        <h4>Daño causado: {resultado[7][1][0].toFixed(2)}</h4>
                        <h4>Daño reducido: {resultado[7][1][1].toFixed(2)}</h4>
                        <h4>Daño curado: {resultado[7][1][2].toFixed(2)}</h4>
                        <h4>Tiempo que estuvo aturdido: {resultado[7][1][3]} Segundos.</h4>
                    </div>
                </div>
            </div>
        } else {
            return <div></div>
        }
    };



    function SelectorBotones() {
        // DEVUELVE UN BOTON O TEXTO, DEPENDIENDO SI AUN QUEDAN CAMPAMENTOS EN ESTA EXPEDICION
        let elemento = <button type="button" disabled>CONTINUAR</button>;
        if (-1 < parseInt(datosNav.PROXCAMP)) {
            elemento = <button type="submit" className="btn-secondary" style={{backgroundColor: "red", color: "black", padding: "0.5em 1.5em"}} onClick={handleClickContinuar}>CONTINUAR</button>
        }
        return elemento
    };
    function TextoDerrota(props: any) {
        // EVALUA SI EXISTE UNA EXPEDICION EN CURSO PARA PODER CONTINUAR.
        const valor = props.valor;
        if (valor === "VICTORIA") {
            return <br />
        } else {
            return <h4>Al perder un combate se pierden: los puntos de accion ocupados, el 50% de las monedas, la experiencia, y la mitad de los objetos que serán sorteados aleatoriamente.</h4>
        }
    };
    function BotonColeccion(props: any) {
        // EN REALIDAD NO ES UN BOTON
        // CREA UN DIV, SOLO PARA MOSTRAR CADA UNO DE LOS OBJETOS Y CANTIDADES DE ESTOS
        const datosObjeto = props.datosObjeto;
        const imagenesObjetos = [Error_Solido, Espada, Escudo_ligero, Gema_de_salud, Gema_curativa, Guantes_de_habilidad, Daga_filosa, Bomba_de_humo, Mazo, Hacha_de_bronce, Rabiosa, Rompemontañas, Reliquia, Expiacion, Sacramento, Carga_incendiaria, Gorro_de_caza, Suspiro, Velo, Perla_del_olvido, Corte_siniestro, Pendiente_de_Mana, Habito_sanador, Cetro_de_la_esperanza, Ofrenda, Mascara_mortuoria, Cetro_de_necromancia, Escudo_espinado, Coraza_de_la_legion, Corona_de_huesos, Decreto, Gema_celestial, Brazalete_de_la_realeza, Sable_legendario, Egida, Gambeson_magico, Savia_vital, Gema_de_la_presteza, Puñal_para_rituales, Capa_de_evasion, Garrote_monstruoso]
        let imagen = ""
        imagen = imagenesObjetos[datosObjeto[0]]
        return <div style={{display: "flex", justifyContent: "center", width: "20%", margin: "0.5em"}}>
            <div className="btn-secondary" style={{height:"4em", padding: "0.5em", width: "100%", justifyContent: "normal"}}>
                <div style={{display: "flex"}}>
                    <img className="iconObject" src={imagen} alt="Imagen de objeto no disponible" />
                    <div style={{display: "block"}}>
                        <p className="p-squad">{datosObjeto[1]}</p>
                        <p className="p-squad">{"CANT:" + datosObjeto[2]}</p>
                    </div>
                </div>
            </div>
        </div>
    };
    useEffect(() => {
        function funcionCargarObjetos() {
            // RECORTA LA LISTA DE OBJETOS RECOMPENSA CON UN SET, PARA ELIMINAR DUPLICADOS
            let listaObjetosAux = Array.from(resultado[8])
            // CONVERTIR ARRAY A SET
            let set = new Set(listaObjetosAux);
            let listaAux = new Array<any>()
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
            listaAux = Array.from(set)
            let listaAux2 = new Array<any>()
            // ARMO UNA LISTA AUXILIAR, CON LAS SUBLISTAS [INDICE OBJETO, NOMBRE, CANTIDAD]
            for (let i = 0; i < listaAux.length; i++) {
                const nombreObjeto = nombresObjetos[parseInt(listaAux[i]) - 1]
                listaAux2.push([listaAux[i], nombreObjeto, 0])
            }
            listaAux = listaAux2
            // RECORREMOS LA LISTA ORIGINAL CON DUPLICADOS
            // Y SUMA UN CONTADOR EN listaAux, POR CADA COINCIDENCIA/CANTIDAD
            for (let i = 0; i < resultado[8].length; i++) {
                const buscarIndice = (element: [number, string, number]) => element[0] === parseInt(resultado[8][i]);
                const index = listaAux.findIndex(buscarIndice);
                listaAux[index][2] += 1
            }
            setListaObjetosUnicos(listaAux)
        }
        funcionCargarObjetos()
    }, [resultado]);

    return (
        <div>
            <Navbar datosNav={datosNav} />
            <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h1 style={{marginBottom: "0em"}}>{resultado[0]}</h1>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h4 style={{margin: "0.5em"}}>Recompensa: {resultado[4][0]} Monedas, {resultado[4][1]} Experiencia.</h4>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <TextoDerrota valor={resultado[0]} />
                    </div>
                </div>
                <br />

                <div style={{display: "flex", justifyContent: "center"}}>
                    <Botonera />
                </div>
                <br />

                <div style={{display: "flex", justifyContent: "center"}}>
                    <SelectorBotones />
                    <button type="submit" className="btn-secondary" style= {{padding: "0.5em 1.5em",marginLeft:"1em"}} onClick={handleClickVolver}>VOLVER</button>
                </div>
                <br />

                <Recompensas valor={indiceBotonera} />
                <Balance valor={indiceBotonera} />
                <Resumen valor={indiceBotonera} />
                <Estadisticas valor={indiceBotonera} />
            </div>
        </div>
    )
}

export default Result