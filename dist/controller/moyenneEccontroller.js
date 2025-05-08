"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moyenneEc_1 = __importDefault(require("../entity/moyenneEc"));
class moyenneEcController {
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
        let MoyenneEc = new moyenneEc_1.default({
            nom: req.body.nom,
            sigle: req.body.sigle,
            fils: req.body.fils,
            parent: req.body.parent,
            filiere: req.body.filiere,
        });
        MoyenneEc.save((err) => {
            if (err)
                resp.status(500).send(err);
            else
                resp.send(moyenneEc_1.default);
        });
    }
    static getAllMoyenneEc(req, resp) {
        moyenneEc_1.default.find((err, moyenneEc) => {
            if (err) {
                resp.status(500).send(err);
            }
            else {
                resp.send(moyenneEc);
            }
        });
    }
    static getMoyenneEcById(req, resp) {
        moyenneEc_1.default.findById(req.params.id, (err, moyenneEc) => {
            if (err) {
                resp.status(500).send(err);
            }
            else {
                resp.send(moyenneEc);
            }
        });
    }
    static updateMoyenneEcById(req, resp) {
        moyenneEc_1.default.findByIdAndUpdate(req.params.id, req.body, (err, moyenneEc) => {
            if (err)
                resp.status(500).send(err);
            else {
                resp.send("Successfuly updated moyenneEc");
            }
        });
    }
    static deleteMoyenneEcById(req, resp) {
        moyenneEc_1.default.deleteOne({ _id: req.params.id }, (err) => {
            if (err)
                resp.status(500).send(err);
            else
                resp.send("Successfuly deleted MoyenneEc");
        });
    }
}
exports.default = moyenneEcController;
