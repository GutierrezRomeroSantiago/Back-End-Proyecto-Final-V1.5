"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prenda = void 0;
class Prenda {
    constructor(id, precioXmayor, precioPublico, fechaCompra, material, paisFabric, pedi) {
        this._id = id;
        this._precioXmayor = precioXmayor;
        this._precioPublico = precioPublico;
        this._fechaCompra = fechaCompra;
        this._material = material;
        this._paisFabric = paisFabric;
        this._pedi = pedi;
    }
    // Metodos GET
    get id() {
        return this._id;
    }
    get precioXmayor() {
        return this._precioXmayor;
    }
    get precioPublico() {
        return this._precioPublico;
    }
    get fechaCompra() {
        return this._fechaCompra;
    }
    get material() {
        return this._material;
    }
    get paisFabric() {
        return this._paisFabric;
    }
    get pedi() {
        return this._pedi;
    }
}
exports.Prenda = Prenda;
