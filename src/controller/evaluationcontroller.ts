import Book from "../entity/book";
import { Request, Response } from 'express';
import evaluation from "../entity/evaluation";


export default class evaluationController {
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
        
        let Evaluation = new evaluation({

            nom:req.body.nom,
            sigle: req.body.sigle,
            fils:req.body.fils,
            parent:req.body.parent,
            filiere:req.body.filiere,
            
        });
        Evaluation.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(evaluation);
        })

    }

    static getAllEvaluation(req: Request, resp: Response) {
        evaluation.find((err: any, evaluation: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(evaluation);
            }
        });
    }

    static getEvaluationtById(req: Request, resp: Response) {

        evaluation.findById(req.params.id, (err: any, evaluation: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(evaluation); }
        });
    }


    static updateEvaluationById(req: Request, resp: Response) {
        evaluation.findByIdAndUpdate(req.params.id, req.body, (err: any, evaluation: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated evaluation");
            }
        })

    }

    static deleteEvaluationById(req: Request, resp: Response) {
        evaluation.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Evaluation");
        });
    }




}