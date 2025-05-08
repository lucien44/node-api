import mongoose from "mongoose";
const Schema = mongoose.Schema;

let moyennesemestreSchema= new mongoose.Schema({

    semestre:{type: String, required: true },
    idetudiantpromo:{type: String, required: true },
    valeur:{type:String,require:true},
    credit:{type:String,require:true}
    
});

const Moyennesemestre=mongoose.model("moyennesemestre", moyennesemestreSchema);
export default Moyennesemestre;
