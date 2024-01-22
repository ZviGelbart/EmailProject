const express = require('express')
const app = express()
require('dotenv').config();
require("./dal/db")
// const jwt = require('jsonwebtoken')
// const d = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR6dmlAZ21haWwuY29tIiwiaWF0IjoxNzA1OTI5MjYwLCJleHAiOjE3MDg1MjEyNjB9.J9LizIzkB2OQcLkoybxp8--fAWsnusKgNp8_aCtdfAk", 
// process.env.REFRESH_TOKEN_SECRET)
// console.log(d);
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