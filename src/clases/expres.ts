import { Pedido } from './pedido';
import { Prenda } from './prenda';

export class Expres extends Pedido {
    protected _material: string;
    protected _volumen: number;
    protected _proteccion: boolean;

    constructor(
        id: number, 
        precioBase: number,
        diasAprox: number, 
        compañia: string,
        fechaEnvio: Date, 
        paisSalida: string,
        estado: boolean,
        material:string,
        volumen: number,
        proteccion: boolean,
        ) {

        super(id, precioBase, diasAprox, compañia, fechaEnvio, paisSalida, estado)

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