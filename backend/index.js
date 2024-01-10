const express = require('express')
const app = express()
require('dotenv').config();
const db= require("./dal/db")
db.connect
const cors = require('cors')
app.use(cors())
app.use(express.json());

const emailRouter=require("./routs/email.router")
app.use("/email", emailRouter);


app.listen(8200, () => {
    console.log('server is up \n port:8200');
})