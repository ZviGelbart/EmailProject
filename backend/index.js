const express = require('express')
const app = express()
require('dotenv').config();
require("./dal/db")
// db.connect
const cors = require('cors')
app.use(cors())
app.use(express.json());

const userRouter = require("./routs/user.router");
const emailRouter=require("./routs/email.router")
app.use("/users", userRouter);
app.use("/emails", emailRouter);


app.listen(8200, () => {
    console.log('server is up \n port:8200');
})