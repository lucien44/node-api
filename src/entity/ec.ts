import mongoose from "mongoose";
const Schema = mongoose.Schema;

let ecSchema= new mongoose.Schema({

    nom:{type: String, required: true },
    id:{type: String, required: true },
    coef: [{ type: Schema.Types.ObjectId, ref: 'coef' }],
    idUE: { type: Schema.Types.ObjectId, ref: 'idUE' },
    type: [{ type: Schema.Types.ObjectId, ref: 'TP ou Cours magistral' }],
    profEC: { type: Schema.Types.ObjectId, ref: 'profEC' },
    idEC: { type: Schema.Types.ObjectId, ref: 'idEC' },
    idProf: { type: Schema.Types.ObjectId, ref: 'idProf' },
});

const Ec=mongoose.model("ec", ecSchema);
export default Ec;