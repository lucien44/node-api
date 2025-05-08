import mongoose from "mongoose";
const Schema = mongoose.Schema;


let ueSchema = new mongoose.default.Schema({
    idec: { type: Number, required: true },
    idprof: { type: Number, require: true },
});
const Ue = mongoose.default.model("ue", ueSchema);
export default Ue;