import mongoose from "mongoose";
const Schema = mongoose.Schema;

let niveauSchema= new mongoose.Schema({

    nom:{type: String, required: true },
    sigle:{type: String, required: true },
    promos: [{ type: Schema.Types.ObjectId, ref: 'promo' }],
});

const Niveau=mongoose.model("niveau", niveauSchema);
export default Niveau;
