import express from "express";
import BookController from "../controller/BookController";
import profController from "../controller/profcontroller";
import UserController from "../controller/userController"
import authMiddleware from "../midlleware/authMiddleware";  
import etudiantController from "../controller/etudiantcontroller";
import ecController from "../controller/eccontroller";
import cohortecontroller from "../controller/cohortecontroller";
import moyenneSmestreController from "../controller/moyenneSemestrecontroller";
import etudiantpromoController from "../controller/etudiantpromocontroller";
import niveauController from "../controller/niveaucontroller";
//import noteController from "../controller/notecontroller";
import promocontroller from "../controller/promocontroller";
import filiereController from "../controller/filierecontroller";
import departementController from "../controller/departementcontroller";
import faculteController from "../controller/facultecontroller";
import ueController from "../controller/uecontroller";
import noteController from "../controller/notecontroller";
import moyenneueController from "../controller/moyenneuecontroller";







export default class MobileRouting {

    constructor(private app: any) {
        this.loadPath();
    }

    public loadPath(): void {

        this.app.post('/user', UserController.create);
        this.app.get('/user/refresh_token', authMiddleware.validateUserToken, UserController.refreshToken);
        this.app.post('/user/verify_code', authMiddleware.validateUserToken, UserController.verifyCode);
        this.app.post ("/book",authMiddleware.validateUserToken, BookController.create);
        /* Requête HTTP GET http://localhost:8700/books/id */
        this.app.get("/books/:id",BookController.getBookById);
        /* Requête HTTP POST http://localhost:8700/books */
        // this.app.post("/books", authMiddleware.validateUserToken, BookController.getAllBooks);
        this.app.post("/books",BookController.getAllBooks);
        /* Requête HTTP PUT http://localhost:8700/books/id */
        this.app.put("/books/:id", BookController.updateBookById);
        /* Requête HTTP DELETE http://localhost:8700/books/id */
      
      
        this.app.delete("/books/:id", BookController.deleteBookById);

        this.app.post("/prof", authMiddleware.validateUserToken, profController.create);
        this.app.get ("/profs/:id",authMiddleware.validateUserToken,profController.getProfById );
        this.app.post("/profs",authMiddleware.validateUserToken,profController.getAllProf);
        this.app.put("/profs/:id",authMiddleware.validateUserToken,profController.updateProfById);
        this.app.delete("/profs/:id",authMiddleware.validateUserToken,profController.deleteProfProfById);
        this.app.post("/etudiant", authMiddleware.validateUserToken,etudiantController.create);
        this.app.get("/etudiants/:id",authMiddleware.validateUserToken,etudiantController.getEtudiantById);
        this.app.post("/etudiants",authMiddleware.validateUserToken,etudiantController.getAllEtudiants);
        this.app.put("/etudiants/:id",authMiddleware.validateUserToken,etudiantController.updateEtudiantById);
        this.app.delete("/etudiants/:id",authMiddleware.validateUserToken,etudiantController.deleteEtudiantById);
        this.app.post("/ec",authMiddleware.validateUserToken,ecController.create);
        this.app.get("/ecs/:id",authMiddleware.validateUserToken,ecController.getEcById);
        this.app.post("/ecs",authMiddleware.validateUserToken,ecController.getAllEc);
        this.app.put("/ecs/:id",authMiddleware.validateUserToken,ecController.updateEcById);
        this.app.delete("/ecs/:id",authMiddleware.validateUserToken,ecController.deleteEcById);
        this.app.post("/cohorte",authMiddleware.validateUserToken,cohortecontroller.create);
        this.app.get("/cohortes/:id",authMiddleware.validateUserToken,cohortecontroller.getCohorteById);
        this.app.post("/cohortes",authMiddleware.validateUserToken,cohortecontroller.getAllCohorte);
        this.app.put("/cohortes/:id",authMiddleware.validateUserToken,cohortecontroller.updateCohorteById);
        this.app.delete("/cohortes/:id",authMiddleware.validateUserToken,cohortecontroller.deleteCohorteById);
        this.app.post("/moyenneSemeste",authMiddleware.validateUserToken,moyenneSmestreController.create);
        this.app.get("/moyenneSemestres/:id",authMiddleware.validateUserToken,moyenneSmestreController.getMoyenneSemestreById);
        this.app.post("/moyenneSemestres",authMiddleware.validateUserToken,moyenneSmestreController.getAllMoyenneSemestre);
        this.app.put("/moyenneSemestres/:id",authMiddleware.validateUserToken,moyenneSmestreController.updateMoyenneSemestreById);
        this.app.delete("/moyenneSemestres/:id",authMiddleware.validateUserToken, moyenneSmestreController.deleteMoyenneSemestreById);
        this.app.post("/etudiantpromo",authMiddleware.validateUserToken,etudiantpromoController.create);
        this.app.get("/etudiantpromos/:id",authMiddleware.validateUserToken,etudiantpromoController.getEtudiantpromoById);
        this.app.post("/etudiantpromos",authMiddleware.validateUserToken,etudiantpromoController.getAllEtudiantpromo);
        this.app.put("/etudiantpromos/:id",authMiddleware.validateUserToken,etudiantpromoController.updateEtudiantpromoById);
        this.app.delete("/etudiantpromos/:id",authMiddleware.validateUserToken,etudiantpromoController.deleteEtudiantpromoById);
        this.app.post("/niveau",authMiddleware.validateUserToken,niveauController.create);
        this.app.get("/niveaux/:id",authMiddleware.validateUserToken,niveauController.getNiveauById);
        this.app.post("/niveaux",authMiddleware.validateUserToken,niveauController.getAllNiveau);
        this.app.put("/niveaux/:id",authMiddleware.validateUserToken,niveauController.updateNiveauById);
        this.app.delete("/niveaux/:id",authMiddleware.validateUserToken,niveauController.deleteNiveauById);
        this.app.post("/note",authMiddleware.validateUserToken,noteController.create);
        this.app.get("/notes/:id",authMiddleware.validateUserToken,noteController.getNoteById);
        this.app.post("/notes",authMiddleware.validateUserToken,noteController.getAllNote);
        this.app.put("/notes/:id",authMiddleware.validateUserToken,noteController.updateNoteById);
        this.app.delete("/notes/:id",authMiddleware.validateUserToken,noteController.deleteNoteById);
        this.app.post("/promo",authMiddleware.validateUserToken,promocontroller.create );
        this.app.get("/promos/:id",authMiddleware.validateUserToken,promocontroller.getPromoById);
        this.app.post("/promos",authMiddleware.validateUserToken,promocontroller.getAllPromo);
        this.app.put("/promos/:id",authMiddleware.validateUserToken,promocontroller.updatePromoById);
        this.app.delete("/promos/:id",authMiddleware.validateUserToken,promocontroller.deletePromoById);
        this.app.post("/filiere",authMiddleware.validateUserToken,filiereController.create);
        this.app.get("/filieres/:id",authMiddleware.validateUserToken,filiereController.getFiliereById);
        this.app.post("/filieres",authMiddleware.validateUserToken,filiereController.getAllFiliere);
        this.app.put("/filieres/:id",authMiddleware.validateUserToken,filiereController.updateFiliereById);
        this.app.delete("/filieres/:id",authMiddleware.validateUserToken,filiereController.deleteFiliereById);
        this.app.post("/departement",authMiddleware.validateUserToken,departementController.create);
        this.app.get("/departements/:id",authMiddleware.validateUserToken,departementController.getDepartementById);
        this.app.post("/departements",authMiddleware.validateUserToken,departementController.getAllDepartement);
        this.app.put("/departements/:id",authMiddleware.validateUserToken,departementController.updateDepartementById);
        this.app.delete("/departements/:id",authMiddleware.validateUserToken,departementController.deleteDepartementById);
        this.app.post("/faculte",authMiddleware.validateUserToken,faculteController.create);
        this.app.get("/facultes/:id",authMiddleware.validateUserToken,faculteController.getFaculteById);
        this.app.post("/facultes",authMiddleware.validateUserToken,faculteController.getAllFaculte);
        this.app.put("/facultes/:id",authMiddleware.validateUserToken,faculteController.updateFaculteById);
        this.app.delete("/facultes/:id",authMiddleware.validateUserToken,faculteController.deleteFaculteById);
        this.app.post("/ue", authMiddleware.validateUserToken,ueController.create);
        this.app.get("/ue/:id",authMiddleware.validateUserToken,ueController.getUeById);
        this.app.post("/ues",authMiddleware.validateUserToken,ueController.getAllUe);
        this.app.put("/ues/:id",authMiddleware.validateUserToken,ueController.updateUeById);
        this.app.delete("/ues/:id",authMiddleware.validateUserToken,ueController.deleteUeById);
        this.app.post("/moyenneue",authMiddleware.validateUserToken,moyenneueController.create);
        this.app.get("/moyenneue/:id", authMiddleware.validateUserToken,moyenneueController.getMoyenneueById);
        this.app.post("/moyenneue",authMiddleware.validateUserToken,moyenneueController.getAllMoyenneue);
        this.app.put("/moyenneue/:id",authMiddleware.validateUserToken,moyenneueController.updateMoyenneueById);
        this.app.delete("/moyenneue/:id",authMiddleware.validateUserToken,moyenneueController.deleteMoyenneueById);
        this.app.post("/faculte",authMiddleware.validateUserToken,faculteController.create);
        this.app.get("/faculte/:id",authMiddleware.validateUserToken,faculteController.getFaculteById);
        this.app.post("/faculte",authMiddleware.validateUserToken,faculteController.getAllFaculte);
        this.app.put("/faculte/:id",authMiddleware.validateUserToken,faculteController.updateFaculteById);
        this.app.delete("/faculte",authMiddleware.validateUserToken,faculteController.deleteFaculteById);



 
}

}
 
 
 
 
 
    

