const express = require("express");
const cors = require("cors");
const connection = require("./db/connect");
const userRouter = require("./routes/userRoutes");
const createTables = require("./models/userSchema");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);

connection;
createTables;

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
});