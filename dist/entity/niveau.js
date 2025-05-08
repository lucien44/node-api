"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let niveauSchema = new mongoose_1.default.Schema({
    nom: { type: String, required: true },
    sigle: { type: String, required: true },
    promos: [{ type: Schema.Types.ObjectId, ref: 'promo' }],
});
const Niveau = mongoose_1.default.model("niveau", niveauSchema);
exports.default = Niveau;
