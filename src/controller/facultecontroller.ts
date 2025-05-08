import Book from "../entity/book";
import { Request, Response } from 'express';
import faculte from "../entity/faculte";


export default class faculteController {
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
        
        let Faculte = new faculte({

            nom:req.body.nom,
            sigle: req.body.sigle,
            fils:req.body.fils,
            parent:req.body.parent,
            filiere:req.body.filiere,
            
        });
        Faculte.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(faculte);
        })

    }

    static getAllFaculte(req: Request, resp: Response) {
        faculte.find((err: any, faculte: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(faculte);
            }
        });
    }

    static getFaculteById(req: Request, resp: Response) {

        faculte.findById(req.params.id, (err: any, faculte: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(faculte); }
        });
    }


    static updateFaculteById(req: Request, resp: Response) {
        faculte.findByIdAndUpdate(req.params.id, req.body, (err: any, faculte: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated faculte");
            }
        })

    }

    static deleteFaculteById(req: Request, resp: Response) {
        faculte.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted faculte");
        });
    }




}
