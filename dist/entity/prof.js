"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let profSchema = new mongoose_1.default.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    date: [{ type: Schema.Types.ObjectId, ref: 'date' }],
    numeroCompte: { type: Schema.Types.ObjectId, ref: 'numeroCompte' },
    email: [{ type: Schema.Types.ObjectId, ref: 'email' }],
    tel: [{ type: Schema.Types.ObjectId, ref: 'tel' }],
});
const Prof = mongoose_1.default.model("prof", profSchema);
exports.default = Prof;
