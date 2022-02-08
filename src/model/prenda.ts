// El diseño de este esquema tiene el objetivo de de hacer como base para la subida y salida de datos a la colección "Prendas"
import {Schema, model } from 'mongoose'

const prendaSchema = new Schema({
    _tipoPrenda: {
        type: String
    },
    _id: {
        type: Number
    },
    _precioXmayor: {
        type: Number
    },
    _precioPublico: {
        type: Number
    },
    _fechaCompra: {
        type: Date
    },
    _material: {
        type: String
    },
    _paisFabric: {
        type: String
    },
    _pedi: {
        type: Number
    },
    _manga: {
        type: String
    },
    _cremallera: {
        type: Boolean
    },
    _cuello: {
        type: String
    },
    _suela: {
        type: String
    },
    _unidadesEnmercado: {
        type: Number
    },
    _calidad: {
        type: String
    },
    _quilates: {
        type: Number
    },
    _peso: {
        type: Number
    }
},{ versionKey: false })

export type iPrenda = {
    _tipoPrenda: string | null,
    _id: number | null,
    _precioXmayor: number | null,
    _precioPublico: number | null,
    _fechaCompra: Date | null,
    _material: string | null,
    _paisFabric: string | null,
    _pedi: number | null,
    }

    export type iAbrigo = {
        _tipoPrenda: string | null,
        _id: number | null,
        _precioXmayor: number | null,
        _precioPublico: number | null,
        _fechaCompra: Date | null,
        _material: string | null,
        _paisFabric: string | null,
        _pedi: number | null,
        _manga: string | null,
        _cremallera: boolean | null,
        _cuello: string | null,
    }

    export type iCalzado = {
        _tipoPrenda: string | null,
        _id: number | null,
        _precioXmayor: number | null,
        _precioPublico: number | null,
        _fechaCompra: Date | null,
        _material: string | null,
        _paisFabric: string | null,
        _pedi: number | null,
        _suela: string | null,
        _unidadesEnmercado: number | null,
        _calidad: string | null,
    }
    export type iJoya = {
        _tipoPrenda: string | null,
        _id: number | null,
        _precioXmayor: number | null,
        _precioPublico: number | null,
        _fechaCompra: Date | null,
        _material: string | null,
        _paisFabric: string | null,
        _pedi: number | null,
        _quilates: number | null,
        _peso: number | null,
    }

    export const Prendas = model('prendax', prendaSchema)