"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expres = void 0;
const pedido_1 = require("./pedido");
class Expres extends pedido_1.Pedido {
    constructor(id, precioBase, diasAprox, compañia, fechaEnvio, paisSalida, estado, material, volumen, proteccion) {
        super(id, precioBase, diasAprox, compañia, fechaEnvio, paisSalida, estado);
        this._material = material;
        this._volumen = volumen;
        this._proteccion = proteccion;
    }
    //Metodos GET
    get material() {
        return this._material;
    }
    get volumen() {
        return this._volumen;
    }
    get proteccion() {
        return this._proteccion;
    }
}
exports.Expres = Expres;
