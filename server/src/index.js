import express from "express" ;
import bodyParser from "body-parser";
import cors from "cors"
import mongoose, { mongo } from "mongoose"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"

import kpiRoutes from "./routes/kpi.routes.js"  ;
import productRoutes from "./routes/product.routes.js";
import transactionRoutes from "./routes/transaction.routes.js"

import KPI from "./models/KPI.model.js"
import Product from "./models/Product.model.js"
import Transaction from "./models/Transaction.model.js"

import {kpis,products,transactions} from "./data/data.js"
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


//Routes

app.use('/kpi',kpiRoutes) ;
app.use('/product',productRoutes)
app.use('/transaction', transactionRoutes) ;

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true ,
    useUnifiedTopology: true,
}).then(async()=>{
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /*Be careful 
    with this lines of codes 
    and mongoose *TRAIL*  database
    won't allow you to drop database.
    so run that KPI.insertMany only Once*/
    // await mongoose.connection.db.dropDatabase() ;
    // KPI.insertMany(kpis)
    // Product.insertMany(products) ;

}).catch((error) => console.log(`${error} did not connect`));