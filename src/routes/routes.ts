import {Request, Response, Router } from 'express'
//import {Prendas, Pedidos} from '../model/schemas'
import { Prendas, iJoya, iCalzado, iAbrigo, iPrenda } from '../model/prenda'
import { Pedidos, tPedido, iNormal, iExpres, iPedido } from '../model/pedido'
import { db } from '../database/database'
import nodemailer from 'nodemailer'

class Routes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
    }

    private getPrends = async (req:Request, res: Response) => {
        await db.conectarBD()
        .then( async ()=> {
            const query = await Prendas.aggregate([
                {
                    $lookup: {
                        from: 'pedidoxes',
                        localField: '_pedi',
                        foreignField: '_id',
                        as: "correspondiente"
                    }
                }
            ])
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
        await db.desconectarBD()
    }

    private getPedido = async (req:Request, res: Response) => {
        const { id } = req.params
        await db.conectarBD()
        .then( async ()=> {
            const query = await Pedidos.aggregate([
                {
                    $lookup: {
                        from: 'prendaxes',
                        localField: '_id',
                        foreignField: '_pedi',
                        as: "correspondencia"
                    }
                }
            ])
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
        await db.desconectarBD()
    }

    private getPrendita = async (req:Request, res: Response) => {
        const { id } = req.params
        await db.conectarBD()
        .then( async ()=> {
            const j = await Prendas.find({
                _pedi: id,
            })
            res.json(j)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
        await db.desconectarBD()
    }


    private postPedido = async (req: Request, res: Response) => {
        const { _tipoPedido, _id, _precioBase, _diasAprox, _compania, _fechaEnvio, _paisSalida, _estado, _incremento, _impuesto, _material, _volumen, _proteccion } = req.body
        await db.conectarBD()
        const dSchema={
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
        }
        const oSchema = new Pedidos(dSchema)
        console.log(oSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }

    private postPrenda = async (req: Request, res: Response) => {
        const { _tipoPrenda, _id, _precioXmayor, _precioPublico, _fechaCompra, _material, _paisFabric, _pedi, _manga, _cremallera, _cuello, _suela, _unidadesEnmercado, _calidad,
        _quilates, _peso } = req.body
        await db.conectarBD()
        const dSchema={
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
        }
        const oSchema = new Prendas(dSchema)
        console.log(oSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }


    private createUser = async (req: Request, res: Response) => {
        const { _user, _password} = req.body
        await db.conectarBD()
        const dSchema={
            _user: _user,
            _password: _password,
        }
        const oSchema = new Pedidos(dSchema)
        console.log(oSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }

    private getPrenda = async (req:Request, res: Response) => {
        const { id } = req.params
        await db.conectarBD()
        .then( async ()=> {
            const j = await Prendas.findOne({
                _id: id,
            })
            res.json(j)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
        await db.desconectarBD()
    }

    private updatePedido = async (req: Request, res: Response) => {
        const {id} = req.params
        const {  precioBase, diasAprox, compañia, fechaenvio, paissalida, estado, incremento, impuesto, material, volumen } = req.body
        await db.conectarBD()
        await Pedidos.findOneAndUpdate({
            _id: id,
        },{
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
        },{
            new: true, // para retornar el documento después de que se haya aplicado la modificación
            runValidators:true
        }
        )
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }

    private deletePrenda = async (req: Request, res: Response) => {
        const { _id } = req.params
        await db.conectarBD()
        await Pedidos.findOneAndDelete(
                { _id: _id }
            )
        await Prendas.deleteMany({ _pedi: _id })
            .then( (doc: any) => {
                    if (doc == null) {
                        res.send(`No encontrado`)
                    }else {
                        res.send('Borrado correcto: '+ doc)
                    }
            })
            .catch( (err: any) => res.send('Error: '+ err)) 
        db.desconectarBD()
    }

    private deletePedido = async (req: Request, res: Response) => {
        const { _id } = req.params
        await db.conectarBD()
        await Prendas.findOneAndDelete(
                { _id: _id }
            )
            .then( (doc: any) => {
                    if (doc == null) {
                        res.send(`No encontrado`)
                    }else {
                        res.send('Borrado correcto: '+ doc)
                    }
            })
            .catch( (err: any) => res.send('Error: '+ err)) 
        db.desconectarBD()
    }


    private sendMail = async (req: Request, res: Response) => {
        const { _mail, _contenido } = req.body
        await db.conectarBD()
        const transporter = nodemailer.createTransport({
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
        }
        
        console.log(mailOptions)
        transporter.sendMail(mailOptions)
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err))
        await db.desconectarBD()
    }



    misRutas(){
        this._router.get('/prendap', this.getPrends),
        this._router.get('/listarprend/:id', this.getPrendita)
        this._router.get('/prenda/:id', this.getPrenda),
        this._router.post('/pedido', this.postPedido),
        this._router.post('/prendas', this.postPrenda),
        this._router.get('/pedidop', this.getPedido),
        this._router.put('/ped/:id', this.updatePedido),
        this._router.delete('/pedido/:_id', this.deletePrenda),
        this._router.delete('/prenda/:_id', this.deletePedido),
        this._router.post('/enviar', this.sendMail),
        //this._router.post('/register', this.createUser),
        this._router.post('/register', this.createUser)
    }

}

const obj = new Routes()
obj.misRutas()
export const routes = obj.router