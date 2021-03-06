require("dotenv").config();

const express = require("express");
const connectDB = require("./database/db");
const app = express();
const PORT = process.env.PORT;

//connect DB
connectDB();

app.get("/", (req, res) => res.send("CRUD is running"));

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
