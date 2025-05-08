import Book from "../entity/book";
import { Request, Response } from 'express';


export default class BookController {
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
        
        let book = new Book({

            title:req.body.title,
            author: req.body.author,
            price:req.body.price,
            available:req.body.available,
            publishingDate:req.body.publishingDate,
            description:req.body.description,
        });
        book.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(book);
        })

    }

    static getAllBooks(req: Request, resp: Response) {
        Book.find((err: any, books: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(books);
            }
        });
    }

    static getBookById(req: Request, resp: Response) {

        Book.findById(req.params.id, (err: any, book: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(book); }
        });
    }


    static updateBookById(req: Request, resp: Response) {
        Book.findByIdAndUpdate(req.params.id, req.body, (err: any, book: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated book");
            }
        })

    }

    static deleteBookById(req: Request, resp: Response) {
        Book.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Book");
        });
    }




}