// SOLO MUESTRA LOS RESULTADOS DE UN COMBATE

// import React from 'react'
// import * as RPGService from "./RPGService"
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar/Navbar';

// DECLARARLAS ASI PROVOCA UN FALLO, QUE IMPIDE EJECUTAR func
const Result = ({ datosNav, resultado }: any) => {
    const navigate = useNavigate();
    const handleClickContinuar = async (e: any) => {
        navigate('/camp');
    }
    const handleClickVolver = (e: any) => {
        navigate('/base');
    }
    function SelectorUnidades(props: any) {
        // RECIBE NOMBRE, VIDA ACTUAL, Y VIDA MAXIMA
        return <h4>{props.props}</h4>
    };
    function SelectorBotones() {
        // DEVUELVE UN BOTON O TEXTO, DEPENDIENDO SI AUN QUEDAN CAMPAMENTOS EN ESTA EXPEDICION
        let elemento = <button type="button" disabled>CONTINUAR</button>;
        if (-1 < parseInt(datosNav.PROXCAMP)) {
            elemento = <button type="submit" onClick={handleClickContinuar}>CONTINUAR</button>
        }
        return elemento
    };

    return (
        <div>
            <Navbar datosNav={datosNav} />
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h1 className='mb-3 text-primary'>{resultado[0]}</h1>

                    <h3>HEROES</h3>
                    <div className="row">
                        {resultado[1].map((datosHeroe: any) => {
                            const nombre = datosHeroe[0] + " " + datosHeroe[1] + "/" + datosHeroe[2]
                            return <SelectorUnidades props={nombre} />
                        })}
                    </div>

                    <br />

                    <h3>ENEMIGOS</h3>
                    <div className="row">
                        {resultado[2].map((datosHeroe: any) => {
                            const nombre = datosHeroe[0] + " " + datosHeroe[1] + "/" + datosHeroe[2]
                            return <SelectorUnidades props={nombre} />
                        })}
                    </div>
                    
                    {/* <button type="submit" onClick={handleClickContinuar}>CONTINUAR</button> */}
                    <SelectorBotones />
                    <button type="submit" onClick={handleClickVolver}>VOLVER</button>
                </div>
            </div>
        </div>
    )
}

export default Result