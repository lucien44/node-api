import mongoose from "mongoose";
const Schema = mongoose.Schema;

let etudiantPromoSchema= new mongoose.Schema({

    etudiant:{type: Schema.Types.ObjectId, ref: 'etudiant' },
    cohorte: { type: Schema.Types.ObjectId, ref: 'cohorte' },
    rabais: Number,
    notes:{ type: Schema.Types.ObjectId, ref: 'note' },
    
});

const EtudiantPromo=mongoose.model("etudiantPromo", etudiantPromoSchema);
export default EtudiantPromo;