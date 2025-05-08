import mongoose from "mongoose";
const Schema = mongoose.Schema;

let etudiantSchema= new mongoose.Schema({

    etudiant:{type: Schema.Types.ObjectId, ref: 'etudiant' },
    nom:{type: Schema.Types.ObjectId, ref: 'nom' },
    prenom:{type: Schema.Types.ObjectId, ref: 'prenom' },
    numcarte:{type: Schema.Types.ObjectId, ref: 'numcarte' },
    cohorte: { type: Schema.Types.ObjectId, ref: 'cohorte' },
    rabais: Number,
    notes:{ type: Schema.Types.ObjectId, ref: 'note' },
    
});

const Etudiant=mongoose.model("etudiant", etudiantSchema);
export default Etudiant;