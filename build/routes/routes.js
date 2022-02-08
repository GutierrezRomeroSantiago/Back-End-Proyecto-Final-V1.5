"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
//import {Prendas, Pedidos} from '../model/schemas'
const prenda_1 = require("../model/prenda");
const pedido_1 = require("../model/pedido");
const database_1 = require("../database/database");
const nodemailer_1 = __importDefault(require("nodemailer"));
class Routes {
    constructor() {
        this.getPrends = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const query = yield prenda_1.Prendas.aggregate([
                    {
                        $lookup: {
                            from: 'pedidoxes',
                            localField: '_pedi',
                            foreignField: '_id',
                            as: "correspondiente"
                        }
                    }
                ]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getPedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const query = yield pedido_1.Pedidos.aggregate([
                    {
                        $lookup: {
                            from: 'prendaxes',
                            localField: '_id',
                            foreignField: '_pedi',
                            as: "correspondencia"
                        }
                    }
                ]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getPrendita = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const j = yield prenda_1.Prendas.find({
                    _pedi: id,
                });
                res.json(j);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.postPedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _tipoPedido, _id, _precioBase, _diasAprox, _compania, _fechaEnvio, _paisSalida, _estado, _incremento, _impuesto, _material, _volumen, _proteccion } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _id: _id,
                _tipoPedido: _tipoPedido,
                _precioBase: _precioBase,
                _diasAprox: _diasAprox,
                _compania: _compania,
                _fechaEnvio: _fechaEnvio,
                _paisSalida: _paisSalida,
                _estado: _estado,
                _incremento: _incremento,
                _impuesto: _impuesto,
                _material: _material,
                _volumen: _volumen,
                _proteccion: _proteccion,
            };
            const oSchema = new pedido_1.Pedidos(dSchema);
            console.log(oSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postPrenda = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _tipoPrenda, _id, _precioXmayor, _precioPublico, _fechaCompra, _material, _paisFabric, _pedi, _manga, _cremallera, _cuello, _suela, _unidadesEnmercado, _calidad, _quilates, _peso } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoPrenda: _tipoPrenda,
                _id: _id,
                _precioXmayor: _precioXmayor,
                _precioPublico: _precioPublico,
                _fechaCompra: _fechaCompra,
                _material: _material,
                _paisFabric: _paisFabric,
                _pedi: _pedi,
                _manga: _manga,
                _cremallera: _cremallera,
                _cuello: _cuello,
                _suela: _suela,
                _unidadesEnmercado: _unidadesEnmercado,
                _calidad: _calidad,
                _quilates: _quilates,
                _peso: _peso
            };
            const oSchema = new prenda_1.Prendas(dSchema);
            console.log(oSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _user, _password } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _user: _user,
                _password: _password,
            };
            const oSchema = new pedido_1.Pedidos(dSchema);
            console.log(oSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.getPrenda = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const j = yield prenda_1.Prendas.findOne({
                    _id: id,
                });
                res.json(j);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.updatePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { precioBase, diasAprox, compañia, fechaenvio, paissalida, estado, incremento, impuesto, material, volumen } = req.body;
            yield database_1.db.conectarBD();
            yield pedido_1.Pedidos.findOneAndUpdate({
                _id: id,
            }, {
                _id: id,
                _precioBase: precioBase,
                _diasAprox: diasAprox,
                _compañia: compañia,
                _fechaEnvio: fechaenvio,
                _paisSalida: paissalida,
                _estado: estado,
                _incremento: incremento,
                _impuesto: impuesto,
                _material: material,
                _volumen: volumen
            }, {
                new: true,
                runValidators: true
            })
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.deletePrenda = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            yield database_1.db.conectarBD();
            yield pedido_1.Pedidos.findOneAndDelete({ _id: _id });
            yield prenda_1.Prendas.deleteMany({ _pedi: _id })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            database_1.db.desconectarBD();
        });
        this.deletePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            yield database_1.db.conectarBD();
            yield prenda_1.Prendas.findOneAndDelete({ _id: _id })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            database_1.db.desconectarBD();
        });
        this.sendMail = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _mail, _contenido } = req.body;
            yield database_1.db.conectarBD();
            const transporter = nodemailer_1.default.createTransport({
                service: 'gmail',
                auth: {
                    user: 'angularmailproyecto@gmail.com',
                    pass: '123456789Uu'
                }
            });
            const mailOptions = {
                from: "angularmailproyecto@gmail.com",
                to: _mail,
                subject: "Enviado desde la rest api de Santiago Gutiérrez Romero",
                text: _contenido
            };
            console.log(mailOptions);
            transporter.sendMail(mailOptions);
            /*.then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err))*/
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        this._router.get('/prendap', this.getPrends),
            this._router.get('/listarprend/:id', this.getPrendita);
        this._router.get('/prenda/:id', this.getPrenda),
            this._router.post('/pedido', this.postPedido),
            this._router.post('/prendas', this.postPrenda),
            this._router.get('/pedidop', this.getPedido),
            this._router.put('/ped/:id', this.updatePedido),
            this._router.delete('/pedido/:_id', this.deletePrenda),
            this._router.delete('/prenda/:_id', this.deletePedido),
            this._router.post('/enviar', this.sendMail),
            //this._router.post('/register', this.createUser),
            this._router.post('/register', this.createUser);
    }
}
const obj = new Routes();
obj.misRutas();
exports.routes = obj.router;
