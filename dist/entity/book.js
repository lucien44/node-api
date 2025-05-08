"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let bookSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: false },
    available: { type: Boolean, required: false, default: false },
    publishingDate: { type: Date, required: false, default: new Date() },
    description: String,
});
const Book = mongoose_1.default.model("Book", bookSchema);
exports.default = Book;
