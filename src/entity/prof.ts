import mongoose from "mongoose";
const Schema = mongoose.Schema;

let profSchema= new mongoose.Schema({

    nom:{type: String, required: true },
    prenom:{type: String, required: true },
    date: [{ type: Schema.Types.ObjectId, ref: 'date' }],
    numeroCompte: { type: Schema.Types.ObjectId, ref: 'numeroCompte' },
    email: [{ type: Schema.Types.ObjectId, ref: 'email' }],
    tel: [{ type: Schema.Types.ObjectId, ref: 'tel' }],
});

const Prof=mongoose.model("prof", profSchema);
export default Prof;