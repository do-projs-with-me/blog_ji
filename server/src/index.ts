import  express  from "express";
import cors from "cors";
import dotenv from "dotenv"
import authrouter from "./routes/authRoutes";
import postrouter from "./routes/postRoutes";

const app=express();

dotenv.config();


const PORT= process.env.PORT || 5000
// app.use(cors());
app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT'],
    // credentials:true
}));
app.use(express.json());
app.use('/api',authrouter);
app.use('/api',postrouter);

app.get('/',(req,res)=>{
    res.send("hello sir lets start ts")
    console.log("stared the project");
    
})

app.listen(PORT,()=>{
    console.log("port connected");
    
})
