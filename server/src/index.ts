import  express  from "express";
import cors from "cors";
import dotenv from "dotenv"
import router from "./routes/authRoutes";

const app=express();

dotenv.config();


const PORT= process.env.PORT || 5000
// app.use(cors());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
app.use(express.json());
app.use('/api',router)

app.get('/',(req,res)=>{
    res.send("hello sir lets start ts")
    console.log("stared the project");
    
})

app.listen(PORT,()=>{
    console.log("port connected");
    
})
