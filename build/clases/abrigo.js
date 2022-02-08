"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abrigo = void 0;
const prenda_1 = require("./prenda");
class Abrigo extends prenda_1.Prenda {
    constructor(id, precioXmayor, precioPublico, fechaCompra, material, paisFabric, pedi, manga, cremallera, cuello) {
        super(id, precioXmayor, precioPublico, fechaCompra, material, paisFabric, pedi);
        this._manga = manga;
        this._cremallera = cremallera;
        this._cuello = cuello;
    }
    //Metodos GET
    get manga() {
        return this._manga;
    }
    get cremallera() {
        return this._cremallera;
    }
    get cuello() {
        return this._cuello;
    }
}
exports.Abrigo = Abrigo;
