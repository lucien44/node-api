"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let ecSchema = new mongoose_1.default.Schema({
    nom: { type: String, required: true },
    id: { type: String, required: true },
    coef: [{ type: Schema.Types.ObjectId, ref: 'coef' }],
    idUE: { type: Schema.Types.ObjectId, ref: 'idUE' },
    type: [{ type: Schema.Types.ObjectId, ref: 'TP ou Cours magistral' }],
    profEC: { type: Schema.Types.ObjectId, ref: 'profEC' },
    idEC: { type: Schema.Types.ObjectId, ref: 'idEC' },
    idProf: { type: Schema.Types.ObjectId, ref: 'idProf' },
});
const Ec = mongoose_1.default.model("ec", ecSchema);
exports.default = Ec;
