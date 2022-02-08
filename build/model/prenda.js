"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prendas = void 0;
// El diseño de este esquema tiene el objetivo de de hacer como base para la subida y salida de datos a la colección "Prendas"
const mongoose_1 = require("mongoose");
const prendaSchema = new mongoose_1.Schema({
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
}, { versionKey: false });
exports.Prendas = (0, mongoose_1.model)('prendax', prendaSchema);
