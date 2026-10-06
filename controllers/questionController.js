const Question=require("../models/questions");

exports.getQuestions = async (req, res, next) => {
    try {
        let filter = {};
        // Filter by difficulty
        if (req.query.difficulty) {
            filter.difficulty = req.query.difficulty;
        }
        // Sort by marks
        let sort = {};
        if (req.query.sort === "marks") {
            sort.marks = 1;
        }
        const questions = await Question.find(filter).sort(sort);
        res.status(200).json(questions);
    }
    catch (err) {
        next(err);
    }
};

exports.getQuestionById=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const question=await Question.findById(id);
        if(!question){
            return res.status(404).json({
                error:"Question not found"
            });
        }
        res.status(200).json(question);
    }
    catch(err){
        next(err);
    }
};

exports.getRandomQuestion=async(req,res,next)=>{
    try{
        const questions=await Question.find({active : true});
        if(questions.length === 0){
            return res.status(404).json({
                message:"No active questions found"
            });
        }
        const randomIndex=Math.floor(Math.random() * questions.length);
        res.status(200).json(questions[randomIndex]);
    }
    catch(err){
        next(err);
    }
};

exports.POSTQuestion=async(req,res,next)=>{
    try{
        const {question,marks,difficulty} =req.body;
        if(!question){
            return res.status(400).json({
                message:"Question not found"
            });
        }
        if(!marks){
            return res.status(400).json({
                message:"Marks not found"
            });
        }
        if(!difficulty){
            return res.status(400).json({
                message:"Difficulty not found"
            });
        }
        const questions=await Question.create(req.body);
        return res.status(201).json(questions);
    }
    catch(err){
        next(err);
    }
}

exports.PUTQuestion=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const question=await Question.findByIdAndUpdate(id,req.body,{
                new : true,
                runValidators:true
            }
        );
        if(!question){
            return res.status(404).json({
                error:"Question not found"
            });
        }
        res.status(200).json(question);
    }
    catch(err){
        next(err);
    }
};

exports.DELETEQuestion=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const question=await Question.findByIdAndDelete(id);
        if(!question){
            return res.status(404).json({
                error:"Question not found"
            });
        }
        res.status(200).json({
            message:"Question deleted successfully"
        });
    }
    catch(err){
        next(err);
    }
}
