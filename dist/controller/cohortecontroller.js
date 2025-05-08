"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cohorte_1 = __importDefault(require("../entity/cohorte"));
const cohorte_2 = __importDefault(require("../entity/cohorte"));
class cohorteController {
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
    static create(req, resp) {
        let Cohorte = new cohorte_1.default({
            nom: req.body.nom,
            promo: req.body.promo,
            nombre: req.body.nombre,
            etudiantPromos: req.body.etudiantPromos,
            mensualite: req.body.mensualite,
        });
        Cohorte.save((err) => {
            if (err)
                resp.status(500).send(err);
            else
                resp.send(cohorte_1.default);
        });
    }
    static getAllCohorte(req, resp) {
        cohorte_2.default.find((err, cohorte) => {
            if (err) {
                resp.status(500).send(err);
            }
            else {
                resp.send(cohorte);
            }
        });
    }
    static getCohorteById(req, resp) {
        cohorte_2.default.findById(req.params.id, (err, departement) => {
            if (err) {
                resp.status(500).send(err);
            }
            else {
                resp.send(cohorte_2.default);
            }
        });
    }
    static updateCohorteById(req, resp) {
        cohorte_2.default.findByIdAndUpdate(req.params.id, req.body, (err, cohorte) => {
            if (err)
                resp.status(500).send(err);
            else {
                resp.send("Successfuly updated cohorte");
            }
        });
    }
    static deleteCohorteById(req, resp) {
        cohorte_2.default.deleteOne({ _id: req.params.id }, (err) => {
            if (err)
                resp.status(500).send(err);
            else
                resp.send("Successfuly deleted Cohorte");
        });
    }
}
exports.default = cohorteController;
