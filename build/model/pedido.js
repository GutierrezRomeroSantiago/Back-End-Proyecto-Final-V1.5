"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedidos = void 0;
// El diseño de este esquema tiene el objetivo de de hacer como base para la subida y salida de datos a la colección "Pedidos"
const mongoose_1 = require("mongoose");
const pedidoSchema = new mongoose_1.Schema({
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
}, { versionKey: false });
exports.Pedidos = (0, mongoose_1.model)('pedidox', pedidoSchema);
