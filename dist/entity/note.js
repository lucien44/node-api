"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let noteSchema = new mongoose_1.default.Schema({
    nom: { type: String, required: true },
    sigle: { type: String, required: true },
    idEtudiantPromo: [{ type: Schema.Types.ObjectId, ref: 'idEtudiantPromo' }],
    idEvaluation: [{ type: Schema.Types.ObjectId, ref: 'idEvaluation' }],
    note: [{ type: Schema.Types.ObjectId, ref: 'note' }],
    valeur: [{ type: Schema.Types.ObjectId, ref: 'valeur' }],
});
const Note = mongoose_1.default.model("note", noteSchema);
exports.default = Note;
