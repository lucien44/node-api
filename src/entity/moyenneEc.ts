import mongoose from "mongoose";
const Schema = mongoose.Schema;

let moyenneEcSchema= new mongoose.Schema({

    idec:{type: String, required: true },
    idetudiantpromo:{type: String, required: true },
    valeur:{type:String, require:true}
    
});

const MoyenneEc=mongoose.model("moyenneEc", moyenneEcSchema);
export default MoyenneEc;