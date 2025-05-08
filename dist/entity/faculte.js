"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let faculteSchema = new mongoose_1.default.Schema({
    nom: { type: String, required: true },
    sigle: { type: String, required: true },
    fils: [{ type: Schema.Types.ObjectId, ref: 'departement' }],
    parent: { type: Schema.Types.ObjectId, ref: 'departement' },
    filiere: [{ type: Schema.Types.ObjectId, ref: 'filiere' }],
});
const Faculte = mongoose_1.default.model("faculte", faculteSchema);
exports.default = Faculte;
