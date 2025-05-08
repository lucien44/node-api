import prof from "../entity/prof";
import { Request, Response } from 'express';
import Prof from "../entity/prof";


export default class profController {
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
        
        let prof = new Prof({

            nom:req.body.nom,
            sigle: req.body.sigle,
            fils:req.body.fils,
            parent:req.body.parent,
            filiere:req.body.filiere,
            
        });
        prof.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(prof);
        })

    }

    static getAllProf(req: Request, resp: Response) {
        Prof.find((err: any, prof: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(prof);
            }
        });
    }

    static getProfById(req: Request, resp: Response) {

        Prof.findById(req.params.id, (err: any, prof: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(prof); }
        });
    }


    static updateProfById(req: Request, resp: Response) {
        Prof.findByIdAndUpdate(req.params.id, req.body, (err: any, prof: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated prof");
            }
        })

    }

    static deleteProfProfById(req: Request, resp: Response) {
        Prof.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Prof");
        });
    }




}