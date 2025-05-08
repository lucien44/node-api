import mongoose from "mongoose";
const Schema = mongoose.Schema;

let evaluationSchema= new mongoose.Schema({

    nom:{type: String, required: true },
    idProf:{type: String, required: true },
    idEC: [{ type: Schema.Types.ObjectId, ref: 'idEC' }],
    type: { type: Schema.Types.ObjectId, ref: 'type ou Examen' },
    date: [{ type: Schema.Types.ObjectId, ref: 'date' }],
    duree: [{ type: Schema.Types.ObjectId, ref: 'duree' }],
    observation: [{ type: Schema.Types.ObjectId, ref: 'observation' }],
});

const Evaluation=mongoose.model("departement", evaluationSchema);
export default Evaluation;