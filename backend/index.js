const express = require('express')
const app = express()
require('dotenv').config();
const db= require("./dal/db")
db.connect
const cors = require('cors')
app.use(cors())

const emailRouter=require("./routs/email.router")
app.use("/email", emailRouter);
app.use(express.json());


app.listen(8200, () => {
    console.log('server is up \n port:8200');
})