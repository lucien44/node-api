import Book from "../entity/book";
import { Request, Response } from 'express';
import niveau from "../entity/niveau";


export default class niveauController {
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
        
        let Niveau = new niveau({

            nom:req.body.nom,
            sigle: req.body.sigle,
            fils:req.body.fils,
            parent:req.body.parent,
            filiere:req.body.filiere,
            
        });
        Niveau.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(niveau);
        })

    }

    static getAllNiveau(req: Request, resp: Response) {
        niveau.find((err: any, niveau: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(niveau);
            }
        });
    }

    static getNiveauById(req: Request, resp: Response) {

        niveau.findById(req.params.id, (err: any, niveau: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(niveau); }
        });
    }


    static updateNiveauById(req: Request, resp: Response) {
        niveau.findByIdAndUpdate(req.params.id, req.body, (err: any, niveau: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated niveau");
            }
        })

    }

    static deleteNiveauById(req: Request, resp: Response) {
        niveau.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Niveau");
        });
    }




}


