// El diseño de este esquema tiene el objetivo de de hacer como base para la subida y salida de datos a la colección "Pedidos"
import {Schema, model } from 'mongoose'
import { Prenda } from '../clases/prenda'

const pedidoSchema = new Schema({
    _tipoPedido: {
        type: String
    },
    _id: {
        type: Number
    },
    _precioBase: {
        type: Number
    },
    _diasAprox: {
        type: Number
    },
    _compania: { 
        type: String
    },
    _fechaEnvio: {
        type: Date
    },
    _paisSalida: {
        type: String
    },
    _estado: {
        type: Boolean
    },
    _incremento: {
        type: Number
    },
    _impuesto: {
        type: Number
    },
    _material: {
        type: String
    },
    _volumen: {
        type: Number
    },
    _proteccion: {
        type: Boolean
    }
},{ versionKey: false })

export type iPedido = {
    _tipoPedido: string | null,
    _id: number | null,
    _precioBase: number | null,
    _diasAprox: number | null,
    _compania: string | null,
    _fechaEnvio: Date | null,
    _paisSalida: string | null,
    _estado: boolean | null,
    _arrayPrendas: Prenda[] | null,
    }

    export type iNormal = {
    _tipoPedido: string | null,
    _id: number | null,
    _precioBase: number | null,
    _diasAprox: number | null,
    _compania: string | null,
    _fechaEnvio: Date | null,
    _paisSalida: string | null,
    _estado: boolean | null,
    _arrayPrendas: Prenda[] | null,
    _incremento: number | null,
    _impuesto: number | null,
    }

    export type iExpres = {
    _tipoPedido: string | null,
    _id: number | null,
    _precioBase: number | null,
    _diasAprox: number | null,
    _compania: string | null,
    _fechaEnvio: Date | null,
    _paisSalida: string | null,
    _estado: boolean | null,
    _arrayPrendas: Prenda[] | null,
    _material: string | null,
    _volumen : number | null,
    _proteccion : boolean | null,  
    }

    export type tPedido = {
     _tipoPedido: string,
    _id: number,
    _precioBase: number,
    _diasAprox: number,
    _compania: string,
    _fechaEnvio: Date,
    _paisSalida: string,
    _estado: boolean,
    _arrayPrendas: Prenda[]
    _incremento: number,
    _impuesto: number,
    _material: string,
    _volumen : number,
    _proteccion : boolean
    }

export const Pedidos = model('pedidox', pedidoSchema)