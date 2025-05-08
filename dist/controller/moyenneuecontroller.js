"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moyenneue_1 = __importDefault(require("../entity/moyenneue"));
class moyenneueController {
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
        let Moyenneue = new moyenneue_1.default({
            nom: req.body.nom,
            sigle: req.body.sigle,
            fils: req.body.fils,
            parent: req.body.parent,
            filiere: req.body.filiere,
        });
        Moyenneue.save((err) => {
            if (err)
                resp.status(500).send(err);
            else
                resp.send(Moyenneue);
        });
    }
    static getAllMoyenneue(req, resp) {
        moyenneue_1.default.find((err, moyenneue) => {
            if (err) {
                resp.status(500).send(err);
            }
            else {
                resp.send(moyenneue);
            }
        });
    }
    static getMoyenneueById(req, resp) {
        moyenneue_1.default.findById(req.params.id, (err, moyenneue) => {
            if (err) {
                resp.status(500).send(err);
            }
            else {
                resp.send(moyenneue);
            }
        });
    }
    static updateMoyenneueById(req, resp) {
        moyenneue_1.default.findByIdAndUpdate(req.params.id, req.body, (err, moyenneue) => {
            if (err)
                resp.status(500).send(err);
            else {
                resp.send("Successfuly updated moyenneue");
            }
        });
    }
    static deleteMoyenneueById(req, resp) {
        moyenneue_1.default.deleteOne({ _id: req.params.id }, (err) => {
            if (err)
                resp.status(500).send(err);
            else
                resp.send("Successfuly deleted moyenneue");
        });
    }
}
exports.default = moyenneueController;
