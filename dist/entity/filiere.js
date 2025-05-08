"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let filiereSchema = new mongoose_1.default.Schema({
    nom: { type: String, required: true },
    sigle: { type: String, required: true },
    niveaux: [{ type: Schema.Types.ObjectId, ref: 'niveau' }],
});
const Filiere = mongoose_1.default.model("filiere", filiereSchema);
exports.default = Filiere;
