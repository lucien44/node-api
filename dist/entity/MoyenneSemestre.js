"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let moyennesemestreSchema = new mongoose_1.default.Schema({
    semestre: { type: String, required: true },
    idetudiantpromo: { type: String, required: true },
    valeur: { type: String, require: true },
    credit: { type: String, require: true }
});
const Moyennesemestre = mongoose_1.default.model("moyennesemestre", moyennesemestreSchema);
exports.default = Moyennesemestre;
