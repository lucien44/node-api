import cohorte from "../entity/cohorte";
import { Request, Response } from 'express';

import Cohorte from "../entity/cohorte";


export default class cohorteController {
    /**
     * @api {post} /books Create a Book
     * @apiName CreateBook
     * @apiGroup Book
     *
     * @apiHeader authorization `Bearer` mytoken
     * 
     * @apiBody  {String} title le titre du livre .
     * @apiBody  {Number} author the author name.
     * @apiBody  {Number} price the book price.
     * @apiBody  {Boolean} available the avaibility.
     * @apiBody  {Date} publishingDate the publiching date.
     * @apiBody  {String} description la desription.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "_id":,
     *       "title": "La cryptographie appliquée",
     *       "author": "Diankha",
     *        "price": 100 000, 
     *       "available": true,
     *       "publishingDate":20220218,
     *       "description": "Un Bon Livre"
     *     }
     *
     *    @apiError Erreur interne du système.
     *
     *    @apiErrorExample Error-Response:
     *     HTTP/1.1 500 Not Found
     *     {
     *       "error": "Erreur interne du système"
     *     }
     * 
     */
    static create(req: Request, resp: Response) {
        
        let Cohorte = new cohorte({

            nom:req.body.nom,
            promo: req.body.promo,
            nombre:req.body.nombre,
            etudiantPromos:req.body.etudiantPromos,
            mensualite:req.body.mensualite,
            
        });
        Cohorte.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(cohorte);
        })

    }

    static getAllCohorte(req: Request, resp: Response) {
        Cohorte.find((err: any, cohorte: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(cohorte);
            }
        });
    }

    static getCohorteById(req: Request, resp: Response) {

        Cohorte.findById(req.params.id, (err: any, departement: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(Cohorte); }
        });
    }


    static updateCohorteById(req: Request, resp: Response) {
            Cohorte.findByIdAndUpdate(req.params.id, req.body, (err: any, cohorte: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated cohorte");
            }
        })

    }

    static deleteCohorteById(req: Request, resp: Response) {
        Cohorte.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Cohorte");
        });
    }




}