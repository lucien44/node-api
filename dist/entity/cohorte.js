"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let cohorteSchema = new mongoose_1.default.Schema({
    nom: { type: String, required: true },
    promo: { type: Schema.Types.ObjectId, ref: 'promo' },
    nombre: Number,
    etudiantPromos: [{ type: Schema.Types.ObjectId, ref: 'etudiantPromo' }],
    mensualite: Number,
});
const Cohorte = mongoose_1.default.model("cohorte", cohorteSchema);
exports.default = Cohorte;
