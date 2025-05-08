import Book from "../entity/book";
import { Request, Response } from 'express';
import moyenneue from "../entity/moyenneue";


export default class moyenneueController {
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
        
        let Moyenneue = new moyenneue({

            nom:req.body.nom,
            sigle: req.body.sigle,
            fils:req.body.fils,
            parent:req.body.parent,
            filiere:req.body.filiere,
            
        });
        Moyenneue.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(Moyenneue);
        })

    }

    static getAllMoyenneue(req: Request, resp: Response) {
        moyenneue.find((err: any, moyenneue: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(moyenneue);
            }
        });
    }

    static getMoyenneueById(req: Request, resp: Response) {

        moyenneue.findById(req.params.id, (err: any, moyenneue: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(moyenneue); }
        });
    }


    static updateMoyenneueById(req: Request, resp: Response) {
        moyenneue.findByIdAndUpdate(req.params.id, req.body, (err: any, moyenneue: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated moyenneue");
            }
        })

    }

    static deleteMoyenneueById(req: Request, resp: Response) {
        moyenneue.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted moyenneue");
        });
    }}