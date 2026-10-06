const mongoose = require("mongoose");

const questionSchema=new mongoose.Schema({
    question:{
        type:String,
        required:true,
        trim:true
    },
    marks:{
        type:Number,
        required:true,
        min:1,
        max:10
    },
    difficulty:{
        type:String,
        enum: ["easy","medium","hard"],
        default:"easy"
    },
    active:{
        type:Boolean,
        default:true
    },
    createOn:{
        type:Date,
        default: Date.now
    }
});

module.exports=mongoose.model("Question",questionSchema);