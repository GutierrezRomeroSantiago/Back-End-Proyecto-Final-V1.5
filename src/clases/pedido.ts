
import { Prenda } from './prenda';

export class Pedido {
    protected _id: number;
    protected _precioBase: number;
    protected _diasAprox: number;
    private _compañia: string;
    protected _fechaEnvio: Date;
    private _paisSalida: string;
    protected _estado: boolean
    private _arrayPrendas: Array<Prenda>

    constructor(
        id: number, 
        precioBase: number, 
        diasAprox: number, 
        compañia: string, 
        fechaEnvio:Date, 
        paisSalida:string,
        estado: boolean ) {
        
        this._id = id;
        this._precioBase = precioBase;
        this._diasAprox = diasAprox;
        this._compañia = compañia;
        this._fechaEnvio = fechaEnvio;
        this._paisSalida = paisSalida;
        this._estado = estado;
        this._arrayPrendas = new Array<Prenda>()
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
    return this._paisSalida
}
get estado() {
    return this._estado
}
get arrayPrendas() {
    return this._arrayPrendas
}


    set precioBase(precioBase: number) {
        this._precioBase = precioBase
    }
    set diasAprox(diasAprox: number) {
        this._diasAprox = diasAprox
    }
    set compañia(compañia: string) {
        this._compañia = compañia
    }
    set fechaEnvio(fechaEnvio: Date) {
        this._fechaEnvio = fechaEnvio
    }
    set paisSalida(paisSalida: string) {
        this._paisSalida = paisSalida
    }
    set estado(estado: boolean) {
        this._estado = estado
    }
    
    /*get puntos() {
        let res = this._ganados * 3 + this._empatados;
        return res;
    }

    get golesF() {
        let res = 0;
        for (let j of this.jugadores) {
            res = res + j.goles;
        }
        return res;
    }

    get golesC() {
        let res = 0;
        for (let j of this.jugadores) {
            res = res + j.golesEncajados;
        }
        return res;
    }

    get df() {
        let res = 0;
        res = this.golesF - this.golesC;
        return res;
    }

    get amarillas() {
        let res = 0;
        for (let j of this.jugadores) {
            res = res + j.tarjetasAmarillas;
        }
        return res;
    }

    get rojas() {
        let res = 0;
        for (let j of this.jugadores) {
            res = res + j.tarjetasRojas;
        }
        return res;
    }
    */
}