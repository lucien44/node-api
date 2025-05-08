"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("../entity/book"));
class BookController {
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
        let book = new book_1.default({
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            available: req.body.available,
            publishingDate: req.body.publishingDate,
            description: req.body.description,
        });
        book.save((err) => {
            if (err)
                resp.status(500).send(err);
            else
                resp.send(book);
        });
    }
    static getAllBooks(req, resp) {
        book_1.default.find((err, books) => {
            if (err) {
                resp.status(500).send(err);
            }
            else {
                resp.send(books);
            }
        });
    }
    static getBookById(req, resp) {
        book_1.default.findById(req.params.id, (err, book) => {
            if (err) {
                resp.status(500).send(err);
            }
            else {
                resp.send(book);
            }
        });
    }
    static updateBookById(req, resp) {
        book_1.default.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
            if (err)
                resp.status(500).send(err);
            else {
                resp.send("Successfuly updated book");
            }
        });
    }
    static deleteBookById(req, resp) {
        book_1.default.deleteOne({ _id: req.params.id }, (err) => {
            if (err)
                resp.status(500).send(err);
            else
                resp.send("Successfuly deleted Book");
        });
    }
}
exports.default = BookController;
