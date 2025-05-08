"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let etudiantSchema = new mongoose_1.default.Schema({
    etudiant: { type: Schema.Types.ObjectId, ref: 'etudiant' },
    nom: { type: Schema.Types.ObjectId, ref: 'nom' },
    prenom: { type: Schema.Types.ObjectId, ref: 'prenom' },
    numcarte: { type: Schema.Types.ObjectId, ref: 'numcarte' },
    cohorte: { type: Schema.Types.ObjectId, ref: 'cohorte' },
    rabais: Number,
    notes: { type: Schema.Types.ObjectId, ref: 'note' },
});
const Etudiant = mongoose_1.default.model("etudiant", etudiantSchema);
exports.default = Etudiant;
