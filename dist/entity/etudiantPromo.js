"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let etudiantPromoSchema = new mongoose_1.default.Schema({
    etudiant: { type: Schema.Types.ObjectId, ref: 'etudiant' },
    cohorte: { type: Schema.Types.ObjectId, ref: 'cohorte' },
    rabais: Number,
    notes: { type: Schema.Types.ObjectId, ref: 'note' },
});
const EtudiantPromo = mongoose_1.default.model("etudiantPromo", etudiantPromoSchema);
exports.default = EtudiantPromo;
