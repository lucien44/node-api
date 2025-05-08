
import { Request, Response } from 'express';
import departement from "../entity/departement";


export default class departementController {
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
        
        let Departement = new departement({

            nom:req.body.nom,
            sigle: req.body.sigle,
            fils:req.body.fils,
            parent:req.body.parent,
            filiere:req.body.filiere,
            
        });
        Departement.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(departement);
        })

    }

    static getAllDepartement(req: Request, resp: Response) {
        departement.find((err: any, departement: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(departement);
            }
        });
    }

    static getDepartementById(req: Request, resp: Response) {

        departement.findById(req.params.id, (err: any, departement: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(departement); }
        });
    }


    static updateDepartementById(req: Request, resp: Response) {
        departement.findByIdAndUpdate(req.params.id, req.body, (err: any, departement: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated departement");
            }
        })

    }

    static deleteDepartementById(req: Request, resp: Response) {
        departement.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Departement");
        });
    }




}
