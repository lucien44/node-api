import mongoose from "mongoose";

const Schema = mongoose.Schema;

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

const OTP = mongoose.model("otp", otpSchema);

export default OTP;