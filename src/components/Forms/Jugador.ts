// ESTA INTERFAZ DEBE TENER TODOS LOS ATRIBUTOS DEL ELEMENTO VIDEO, DEL BACKEND
// ? A CONTINUACION DEL ATRIBUTO, SEÑALA QUE ESE ATRIBUTO ES OPCIONAL
export interface Jugador {
// export type Jugador = {
    NOMBRE: string;
    CLAVE: string;
    HEROE1: object;
    HEROE2: object;
    HEROE3: object;
    HEROE4: object;
    HEROE5: object;
    HEROE6: object;
    HEROE7: object;
    HEROE8: object;
    HEROE9: object;
    HEROE10: object;
    HEROE11: object;
    HEROE12: object;
    HEROE13: object;
    HEROE14: object;
    HEROE15: object;
    HEROE16: object;
    HEROE17: object;
    HEROE18: object;
    HEROE19: object;
    HEROE20: object;
    HEROE21: object;
    HEROE22: object;
    HEROE23: object;
    HEROE24: object;
    CANTIDAD: number;
    NIVEL: number;
    EXPERIENCIA: number;
    MONEDAS: number;
    ACCION: number;
    // OPCION PARA QUE TAMBIEN ACEPTE VALORES Date
    FECHA: string | Date;
    DISPONIBLES: object;
    ESCUADRON: object;
    ZONA: number;
    ARRAYRUTA: object;
    PROXCAMP: number;
    ZONARUTA: object;
    ARRAYOBJETOS: object;
    _id?: string;
}
