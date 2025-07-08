import  express  from "express";
// import cors from "cors"
import dotenv from "dotenv"
const app=express();

dotenv.config();
// app.use(cors());

const PORT= process.env.PORT || 5000


app.get('/',(req,res)=>{
    res.send("hello sir lets start ts")
    console.log("stared the project");
    
})

app.listen(PORT,()=>{
    console.log("port connected");
    
})
