"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let moyenneueSchema = new mongoose_1.default.Schema({
    ideu: { type: Number, required: true },
    idetudiantpromo: { type: Number, required: true },
    valeur: { type: Number, require: true }
});
const Moyenneue = mongoose_1.default.model("moyenneUe", moyenneueSchema);
exports.default = Moyenneue;
