import mongoose from "mongoose";
const Schema = mongoose.Schema;

let noteSchema= new mongoose.Schema({

    nom:{type: String, required: true },
    sigle:{type: String, required: true },
    idEtudiantPromo: [{ type: Schema.Types.ObjectId, ref: 'idEtudiantPromo' }],
    idEvaluation: [{ type: Schema.Types.ObjectId, ref: 'idEvaluation' }],
    note: [{ type: Schema.Types.ObjectId, ref: 'note' }],
    valeur: [{ type: Schema.Types.ObjectId, ref: 'valeur' }],
    
});

const Note=mongoose.model("note", noteSchema);
export default Note;