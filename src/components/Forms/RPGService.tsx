// ESTE ARCHIVO SERA PARA ALMACENAR TODAS LAS PETICIONES AL BACKEND, O SEA LAS DEFINICIONES DE ESAS FUNCIONES
// axios  SIRVE PARA HACER PETICIONES DE FRONTEND A BACKEND
import axios from 'axios'
// import {Video} from './Video'

// SOLO ES UNA STRING CON LA RUTA, PARA DESPUES CONCATENAR
    // ESTA RUTA DEBE COINCIDIR CON EL PUERTO QUE DECLARAMOS EN EL BACKEND.
// const API = 'http://127.0.0.1:4000'
// ESTA ES LA RUTA QUE SE USO EN EL DEPLOY PARA RAILWAY
const API = 'https://rpgback-production.up.railway.app'

/*
export const getVideos = async() => {
    // AHORA LA FUNCION getVideos DEVUELVE UN ARRAY DE ELEMENTOS VIDEO.
    return await axios.get<Video[]>(`${API}/videos`)
}
*/
export const createPlayer = async (objeto: any) => {
    return await axios.post(`${API}/createPlayer`, objeto)
}
export const login = async (objeto: any) => {
    return await axios.post(`${API}/login`, objeto)
}
export const tavern = async (objeto: any) => {
    return await axios.post(`${API}/tavern`, objeto)
}
export const buyHero = async (objeto: any) => {
    return await axios.post(`${API}/buyHero`, objeto)
}
export const setSquad = async (objeto: any) => {
    return await axios.post(`${API}/setSquad`, objeto)
}
export const zone = async (objeto: any) => {
    return await axios.post(`${API}/zone`, objeto)
}
export const route = async (objeto: any) => {
    return await axios.post(`${API}/route`, objeto)
}
export const battle = async (objeto: any) => {
    return await axios.post(`${API}/battle`, objeto)
}
/*
export const getVideo = async(id: String) => {
    // FUNCION getVideo, SERVIRA PARA OBTENER UN VIDEO AL ENVIAR UN .id
    return await axios.get<Video>(`${API}/videos/${id}`)
}

export const updateVideo = async(id: String, video: Video) => {
    // FUNCION updateVideo, MODIFICA UN VIDEO Y DEVUELVE EL REGISTRO MODIFICADO
    return await axios.put<Video>(`${API}/videos/${id}`, video)
}

export const deleteVideo = async(id: String) => {
    // FUNCION deleteVideo, ELIMINA UN VIDEO AL ENVIAR EL .id
    return await axios.delete<Video>(`${API}/videos/${id}`)
}
*/