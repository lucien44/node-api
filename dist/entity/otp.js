"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const otpSchema = new Schema({
    associatedPhoneNumber: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
});
const OTP = mongoose_1.default.model("otp", otpSchema);
exports.default = OTP;
