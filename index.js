require('dotenv').config()

const express = require('express')

const app = express();
const PORT = process.env.PORT

app.get('/',(req,res)=>res.send("CRUD is running"))


app.listen(PORT,()=>console.log(`Server is running at port ${PORT}`)
)