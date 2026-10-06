const express=require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/db");
const questionRoutes=require("./routes/question");
const errorhandler=require("./middleware/errorhandler");

const app=express();
const PORT=process.env.PORT || 5000;


dotenv.config();
app.use(express.json());

app.use("/questions",questionRoutes);
app.use(errorhandler);

app.listen(PORT,()=>{
    connectDB();
    console.log("server listening on "+PORT);
})