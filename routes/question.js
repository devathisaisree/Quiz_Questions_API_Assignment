const express=require("express");
const router=express.Router();
//const Question=require("../models/questions");
const c=require("../controllers/questionController");


router.get("/",c.getQuestions);

router.get("/random",c.getRandomQuestion); //Optional

router.get("/:id",c.getQuestionById);

router.post("/",c.POSTQuestion);

router.put("/:id",c.PUTQuestion);

router.delete("/:id",c.DELETEQuestion);

module.exports=router;
