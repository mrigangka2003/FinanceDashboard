import express from "express" ;
import bodyParser from "body-parser";
import cors from "cors"
import mongoose, { mongo } from "mongoose"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"

//congif 

dotenv.config() ;
const app = express() ;


app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const PORT = 8000 || process.env.PORT ;

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true ,
    useUnifiedTopology: true,
}).then(async()=>{
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

}).catch((error) => console.log(`${error} did not connect`));