import mongoose from "mongoose";
const Schema = mongoose.Schema;

let cohorteSchema= new mongoose.Schema({

    nom:{type: String, required: true },
    promo: { type: Schema.Types.ObjectId, ref: 'promo' },
    nombre: Number,
    etudiantPromos: [{ type: Schema.Types.ObjectId, ref: 'etudiantPromo' }],
    mensualite: Number,
});

const Cohorte= mongoose.model("cohorte", cohorteSchema);
export default Cohorte;