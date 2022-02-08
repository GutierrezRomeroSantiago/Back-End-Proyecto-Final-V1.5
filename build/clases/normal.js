"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Normal = void 0;
const pedido_1 = require("./pedido");
class Normal extends pedido_1.Pedido {
    constructor(id, precioBase, diasAprox, compañia, fechaEnvio, paisSalida, estado, incremento, impuesto) {
        super(id, precioBase, diasAprox, compañia, fechaEnvio, paisSalida, estado);
        this._incremento = incremento;
        this._impuesto = impuesto;
    }
    //Metodos GET
    get incremento() {
        return this._incremento;
    }
    get impuesto() {
        return this._impuesto;
    }
}
exports.Normal = Normal;
