import Book from "../entity/book";
import { Request, Response } from 'express';
import etudiantpromo from "../entity/etudiantpromo";


export default class etudiantpromoController {
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
        
        let Etudiantpromo = new etudiantpromo({

            nom:req.body.nom,
            sigle: req.body.sigle,
            fils:req.body.fils,
            parent:req.body.parent,
            filiere:req.body.filiere,
            
        });
        Etudiantpromo.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(etudiantpromo);
        })

    }

    static getAllEtudiantpromo(req: Request, resp: Response) {
        etudiantpromo.find((err: any, etudiantpromo: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(etudiantpromo);
            }
        });
    }

    static getEtudiantpromoById(req: Request, resp: Response) {

        etudiantpromo.findById(req.params.id, (err: any, etudiantpromo: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(etudiantpromo); }
        });
    }


    static updateEtudiantpromoById(req: Request, resp: Response) {
        etudiantpromo.findByIdAndUpdate(req.params.id, req.body, (err: any, etudiantpromo: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated etudiantpromo");
            }
        })

    }

    static deleteEtudiantpromoById(req: Request, resp: Response) {
        etudiantpromo.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted etudiantpromo");
        });
    }




}

