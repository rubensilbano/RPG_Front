// MENU PRINCIPAL

import { Link } from "react-router-dom"
import Navbar from '../Navbar/Navbar';
import giftImg from "../../assets/images/Gift.png";
import './base.css';

const Base = ({ datosNav }: any) => {
    return (
        <div>
            <Navbar datosNav={datosNav} />
            <div style={{textAlign: "center", backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <h1 className='mb-3 text-primary'>Base</h1>
                <div style={{overflow: "auto"}}>
                    <div className="buttons" style={{width : '25%', float: "left", paddingLeft: "0.5em"}}>
                        <Link to='/tavern' className="btn-secondary">Taberna</Link>
                        <Link to='/squad' className="btn-secondary">Escuadron</Link>
                        <Link to='/inventory' className="btn-secondary">Inventario</Link>
                        <Link to='/zone' className="btn-secondary">Explorar</Link>
                    </div>
                    <Link to='/base' className="gift">
                        <div style={{display: "block"}}>
                            <img className="icon" src={giftImg} alt="Gift:" />
                            <p style={{margin: "0em"}}>Regalo</p>
                        </div>
                    </Link>
                </div>
                <h4>Se recuperan 20 puntos de acción a diario.</h4>
            </div>
        </div>
    )
}

export default Base