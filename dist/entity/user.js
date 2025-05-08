"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    slug: { type: String, index: true },
    name: {
        first: String,
        last: String,
        midle: String
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: String,
        required: true
    },
    coord: [{
            latitude: Number,
            longitude: Number,
            altitude: Number
        }],
    email: {
        type: String,
        index: true
    }
}, {
    timestamps: true
});
const User = mongoose_1.default.model("user", userSchema);
exports.default = User;
