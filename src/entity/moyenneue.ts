import mongoose from "mongoose";
const Schema = mongoose.Schema;

let moyenneueSchema= new mongoose.Schema({

    ideu:{type: Number, required: true },
    idetudiantpromo:{type: Number, required: true },
    valeur:{type:Number, require:true}
    
});

const Moyenneue=mongoose.model("moyenneUe", moyenneueSchema);
export default Moyenneue;