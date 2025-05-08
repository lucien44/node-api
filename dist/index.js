"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const serve_static_1 = __importDefault(require("serve-static"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
/* Instancier Express */
const app = (0, express_1.default)();
/* Middleware bodyParser pour parser le corps des requêtes en Json*/
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
/* Middlware pour configurer le dossier des ressources statique*/
app.use((0, serve_static_1.default)("public"));
/* Actvier CORS*/
app.use((0, cors_1.default)());
/* Connection à MongoDb*/
const uri = "mongodb://127.0.0.1:27017/biblio";
mongoose_1.default.connect(uri, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Mongo db connection sucess");
    }
});
/* Requête HTTP GET http://localhost:8700/ */
app.get("/", (req, resp) => {
    resp.send("Hello world");
});
new routes_1.default(app);
/* Démarrer le serveur*/
app.listen(8700, () => {
    console.log("Server Started on port %d", 8700);
});
