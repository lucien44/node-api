"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let evaluationSchema = new mongoose_1.default.Schema({
    nom: { type: String, required: true },
    idProf: { type: String, required: true },
    idEC: [{ type: Schema.Types.ObjectId, ref: 'idEC' }],
    type: { type: Schema.Types.ObjectId, ref: 'type ou Examen' },
    date: [{ type: Schema.Types.ObjectId, ref: 'date' }],
    duree: [{ type: Schema.Types.ObjectId, ref: 'duree' }],
    observation: [{ type: Schema.Types.ObjectId, ref: 'observation' }],
});
const Evaluation = mongoose_1.default.model("departement", evaluationSchema);
exports.default = Evaluation;
