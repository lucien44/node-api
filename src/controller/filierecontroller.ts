import Book from "../entity/book";
import { Request, Response } from 'express';
import filiere from "../entity/filiere";


export default class filiereController {
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
        
        let Filiere = new filiere({

            nom:req.body.nom,
            sigle: req.body.sigle,
            fils:req.body.fils,
            parent:req.body.parent,
            filiere:req.body.filiere,
            
        });
        Filiere.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(filiere);
        })

    }

    static getAllFiliere(req: Request, resp: Response) {
        filiere.find((err: any, filiere: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(filiere);
            }
        });
    }

    static getFiliereById(req: Request, resp: Response) {

        filiere.findById(req.params.id, (err: any, filiere: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(filiere); }
        });
    }


    static updateFiliereById(req: Request, resp: Response) {
        filiere.findByIdAndUpdate(req.params.id, req.body, (err: any, filiere: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated filiere");
            }
        })

    }

    static deleteFiliereById(req: Request, resp: Response) {
        filiere.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Filiere");
        });
    }




}

