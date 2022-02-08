"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(id, precioBase, diasAprox, compañia, fechaEnvio, paisSalida, estado) {
        this._id = id;
        this._precioBase = precioBase;
        this._diasAprox = diasAprox;
        this._compañia = compañia;
        this._fechaEnvio = fechaEnvio;
        this._paisSalida = paisSalida;
        this._estado = estado;
        this._arrayPrendas = new Array();
    }
    // Metodos GET
    get id() {
        return this._id;
    }
    get precioBase() {
        return this._precioBase;
    }
    get diasAprox() {
        return this._diasAprox;
    }
    get compañia() {
        return this._compañia;
    }
    get fechaEnvio() {
        return this._fechaEnvio;
    }
    get paisSalida() {
        return this._paisSalida;
    }
    get estado() {
        return this._estado;
    }
    get arrayPrendas() {
        return this._arrayPrendas;
    }
    set precioBase(precioBase) {
        this._precioBase = precioBase;
    }
    set diasAprox(diasAprox) {
        this._diasAprox = diasAprox;
    }
    set compañia(compañia) {
        this._compañia = compañia;
    }
    set fechaEnvio(fechaEnvio) {
        this._fechaEnvio = fechaEnvio;
    }
    set paisSalida(paisSalida) {
        this._paisSalida = paisSalida;
    }
    set estado(estado) {
        this._estado = estado;
    }
}
exports.Pedido = Pedido;
