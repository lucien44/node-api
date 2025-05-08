"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let promoSchema = new mongoose_1.default.Schema({
    anneescolaire: { type: String, required: true },
    niveau: { type: Schema.Types.ObjectId, ref: 'niveau' },
    cohortes: [{ type: Schema.Types.ObjectId, ref: 'cohorte' }],
    mensualite: Number,
});
const Promo = mongoose_1.default.model("promo", promoSchema);
exports.default = Promo;
