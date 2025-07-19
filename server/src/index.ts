import  express  from "express";
// import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/authRoutes";
import { Prisma } from "@prisma/client";
const app=express();

dotenv.config();
// app.use(cors());

const PORT= process.env.PORT || 5000

app.use(express.json());
app.use('/api',router)

app.get('/',(req,res)=>{
    res.send("hello sir lets start ts")
    console.log("stared the project");
    
})

app.listen(PORT,()=>{
    console.log("port connected");
    
})
