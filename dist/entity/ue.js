"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let ueSchema = new mongoose_1.default.default.Schema({
    idec: { type: Number, required: true },
    idprof: { type: Number, require: true },
});
const Ue = mongoose_1.default.default.model("ue", ueSchema);
exports.default = Ue;
