import express from "express";
import { Request, Response } from 'express';
import bodyParser from "body-parser";
import serveStatic from "serve-static";
import mongoose from "mongoose";
import cors from "cors";
import MobileRouting from "./routes/routes";
/* Instancier Express */
const app = express();
/* Middleware bodyParser pour parser le corps des requêtes en Json*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/* Middlware pour configurer le dossier des ressources statique*/
app.use(serveStatic("public"));
/* Actvier CORS*/
app.use(cors());
/* Connection à MongoDb*/
const uri: string = "mongodb://127.0.0.1:27017/biblio";
mongoose.connect(uri, (err) => {
    if (err) { console.log(err); }
    else { console.log("Mongo db connection sucess"); }
});

/* Requête HTTP GET http://localhost:8700/ */
app.get("/", (req: Request, resp: Response) => {
    resp.send("Hello world");
});
new MobileRouting(app);
/* Démarrer le serveur*/
app.listen(8700, () => {
    console.log("Server Started on port %d",8700);
});