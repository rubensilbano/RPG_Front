// import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import RegisterForm from './components/Forms/RegisterForm';
import Login from './components/Forms/Login'
import Base from './components/Forms/Base'
import Tabern from './components/Forms/Tabern'
import Squad from './components/Forms/Squad'
import Zone from './components/Forms/Zone'
import Route2 from './components/Forms/Route2'
import Camp from './components/Forms/Camp'
import Result from './components/Forms/Result'
import { Jugador } from './components/Forms/Jugador'

// RECORDAR REVISAR EN LAS RUTAS BACKEND, Y EN CADA RUTA DONDE SE GUARDA CON findOneAndUpdate.
  // TENGO QUE GUARDAR ESE REGISTRO ACTUALIZADO, Y DEVOLVERLO CON UN JSON AL FRONTEND.
  // PARA ACTUALIZAR EN EL FRONTEND, NECESITO REPLICAR LA FUNCION hijoAPadre,
    // EN CADA COMPONENTE QUE APLIQUE UNA RUTA BACKEND, QUE MODIFIQUE EL REGISTRO.
    // Y ASI DARLE A App EL REGISTRO ACTUALIZADO COMO JSON DESDE EL BACKEND.
      // TAL COMO SE VIO EN Squad, Tavern, route2, Y FALTA Battle

function App() {
  const [datosUsuario, setUser] = useState<Jugador>();
  const hijoAPadre = (data: Jugador) => {
    setUser(data);
  }
  const [cantidadRutas, setCantidad] = useState<number>();
  const rutasGeneradas = (respuesta: number) => {
    setCantidad(respuesta);
  }
  const [zonaRuta, setZonaRuta] = useState<[number, number]>();
  const zonaRutaElegida = (respuesta: [number, number]) => {
    setZonaRuta(respuesta);
  }
  const [resultado, setResultado] = useState<[any]>();
  const getResultado = (respuesta: [any]) => {
    setResultado(respuesta);
  }
  
  return (
    <BrowserRouter>
      {/* SE DEBE IMPLEMENTAR EL ELEMENTO Navbar DESDE EL index.
      PARA QUE LAS DEMAS PAGINAS PUEDAN ACCEDER AL MISMO ELEMENTO. */}
      {/* AL ESCRIBIR LA SENTENCIA DE ETIQUETADO, EL ARCHIVO SE IMPORTA AUTOMATICAMENTE.
      PASA LO MISMO CON CUALQUIER COMPONENTE REACT. PARA ESO DEBEN TENER EL MISMO NOMBRE. */}
      {/* SOLO SE CREO ESTE DIV PARA CENTRAR Switch CON LA className container
              EN react-router-dom v6 LA BIBLIOTECA Switch FUE REEMPLAZADA POR Routes
          p-4 AGREGA UN PADDING DE 4 A TODOS LOS COMPONENTES */}
      {/* DESCOMENTAR ESTO JUNTO CON LA IMPLEMENTACION DE LA Navbar, Y TAMBIEN ELIMINAR LA DIV DE ABAJO
        ESTA DEBE REEMPLAZARLA */}
      <div className="container p-4">
      {/* {datosUsuario.NOMBRE} */}
      {/* <div> */}

        <Routes>
          {/* <Route exact path="/" component={VideoList} />
              ESTE ERA EL VIEJO METODO, CAMBIO EN LA V6, YA NO SE NECESITA EL COMANDO exact,
              AHORA TODAS LAS RUTAS SON EXACTAS POR DEFECTO.
              PARA DECLARAR RUTAS AMBIGUAS SE AGREGA UN * AL FINAL: <Route path="users/*"> */}
          <Route path='/register' element={<RegisterForm/>} />
          {/* NECESITO RECIBIR UN STRING DESDE Login, Y CON EL ACTUALIZAR USANDO setUser */}
          <Route path='/' element={<Login
          func={hijoAPadre}
          />} />
          <Route path='/base' element={<Base
          datosNav={datosUsuario}
          />} />
          <Route path='/tavern' element={<Tabern
          datosNav={datosUsuario}
          func={hijoAPadre}
          />} />
          <Route path='/squad' element={<Squad
          datosNav={datosUsuario}
          func={hijoAPadre}
          />} />
          <Route path='/zone' element={<Zone
          datosNav={datosUsuario}
          rutasGeneradas={rutasGeneradas}
          zonaRutaElegida={zonaRutaElegida}
          func={hijoAPadre}
          />} />
          <Route path='/route' element={<Route2
          datosNav={datosUsuario}
          cantidadRutas={cantidadRutas}
          datosZona={zonaRuta}
          zonaRutaElegida={zonaRutaElegida}
          func={hijoAPadre}
          />} />
          <Route path='/camp' element={<Camp
          datosNav={datosUsuario}
          datosZona={zonaRuta}
          func={hijoAPadre}
          getResultado={getResultado}
          />} />
          <Route path='/result' element={<Result
          datosNav={datosUsuario}
          resultado={resultado}
          // func={hijoAPadre}
          // getResultado={getResultado}
          />} />

          {/* <Route path='/new-video' element={<VideoForm/>} />
          <Route path='/update/:id' element={<VideoForm/>} /> */}
        </Routes>
        {/* SIRVE PARA CREAR MENSAJES DE RESPUESTA EN EL FRONTEND.
        POR AHORA SE AGREGA PERO NO SE VERA HASTA QUE RECIBA LA ORDEN DE MOSTRARSE EN VideoForm.tsx */}

        {/* <ToastContainer/> */}

      </div>
    </BrowserRouter>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
