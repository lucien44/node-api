import mongoose from "mongoose";

let bookSchema= new mongoose.Schema({

    title:{type: String, required: true },
    author: {type: String, required: true},
    price:{type:Number,required:false},
    available:{type:Boolean,required:false,default:false},
    publishingDate:{type:Date, required:false, default: new Date()},
    description:String,
});

const Book=mongoose.model("Book", bookSchema);
export default Book;
