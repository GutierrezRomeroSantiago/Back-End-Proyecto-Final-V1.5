"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calzado = void 0;
const prenda_1 = require("./prenda");
class Calzado extends prenda_1.Prenda {
    constructor(id, precioXmayor, precioPublico, fechaCompra, material, paisFabric, pedi, suela, unidadesEnmercado, calidad) {
        super(id, precioXmayor, precioPublico, fechaCompra, material, paisFabric, pedi);
        this._suela = suela;
        this._unidadesEnmercado = unidadesEnmercado;
        this._calidad = calidad;
    }
    //Metodos GET
    get suela() {
        return this._suela;
    }
    get unidadesEnmercado() {
        return this._unidadesEnmercado;
    }
    get calidad() {
        return this._calidad;
    }
}
exports.Calzado = Calzado;
