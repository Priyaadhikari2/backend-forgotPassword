require('dotenv').config();

import express, { json } from "express";
import cors from "cors";
import connection from "./db/connect";
import userRouter from "./routes/userRoutes";
import createTables from "./models/userSchema";
require("dotenv").config();

const app = express();

app.use(cors());
app.use(json());

app.use("/api/v1/user", userRouter);

connection;
createTables;

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
});