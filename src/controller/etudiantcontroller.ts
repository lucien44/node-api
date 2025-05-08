import Book from "../entity/book";
import { Request, Response } from 'express';
import etudiant from "../entity/etudiant";


export default class etudiantController {
    static getEtudiantpromoById(arg0: string, validateUserToken: (req: any, res: Response<any, Record<string, any>>, next: import("express").NextFunction) => Promise<void>, getEtudiantpromoById: any) {
        throw new Error("Method not implemented.");
    }
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
        
        let Etudiant = new etudiant({

            nom:req.body.nom,
            sigle: req.body.sigle,
            fils:req.body.fils,
            parent:req.body.parent,
            filiere:req.body.filiere,
            
        });
        Etudiant.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(Etudiant);
        })

    }

    static getAllEtudiants(req: Request, resp: Response) {
        etudiant.find((err: any, etudiant: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(etudiant);
            }
        });
    }

    static getEtudiantById(req: Request, resp: Response) {

        etudiant.findById(req.params.id, (err: any, etudiant: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(etudiant); }
        });
    }


    static updateEtudiantById(req: Request, resp: Response) {
        etudiant.findByIdAndUpdate(req.params.id, req.body, (err: any, etudiant: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated etudiant");
            }
        })

    }

    static deleteEtudiantById(req: Request, resp: Response) {
        etudiant.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Etudiant");
        });
    }




}