"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joya = void 0;
const prenda_1 = require("./prenda");
class Joya extends prenda_1.Prenda {
    constructor(id, precioXmayor, precioPublico, fechaCompra, material, paisFabric, pedi, quilates, peso) {
        super(id, precioXmayor, precioPublico, fechaCompra, material, paisFabric, pedi);
        this._quilates = quilates;
        this._peso = peso;
    }
    //Metodos GET
    get quilates() {
        return this._quilates;
    }
    get peso() {
        return this._peso;
    }
}
exports.Joya = Joya;
