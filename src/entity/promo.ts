import mongoose from "mongoose";
const Schema = mongoose.Schema;

let promoSchema= new mongoose.Schema({

    anneescolaire:{type: String, required: true },
    niveau: { type: Schema.Types.ObjectId, ref: 'niveau' },
    cohortes: [{ type: Schema.Types.ObjectId, ref: 'cohorte' }],
    mensualite: Number,
});

const Promo=mongoose.model("promo", promoSchema);
export default Promo;
