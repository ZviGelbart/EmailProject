const express = require("express");
const userRouter = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userServices = require("../services/user.services");

userRouter.get("/", async function (req, res) {
    let data = await userServices.getAllUser();
    res.send(data);
  });

userRouter.get("/search/", async (req, res) => {
  try {
    let data = await userServices.getUser(req.query)
    res.send(data)
  }catch(err) {
    console.log("error: \n", err);
    res.status(400).send(err)
  }
})

userRouter.post("/", async (req, res) => {
    try {
      const token = jwt.sign()
        const newUser = await userServices.createUser(req.body)
        res.send(newUser)
    }catch(err){
        res.status(400).send(err)
    }
})







userRouter.delete("/:id", function (req, res) {
    userServices.deleteUser()
    res.send("user");
  });



//   function authentication(req, res, next) {
//     const authorization = req.headers.authorization;
//     if (!authorization) {
//         return res.status(401).send();
//     }
//     const token = authorization.split(" ")[1];
//     if (!token) {
//         return res.status(401).send();
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
//         const user = users.find((user) => user.id === decoded.id);
//         req.user = user;
//         next();
//     } catch (error) {
//         res.status(403).send();
//     }
// }

// app.get("/todos", authentication, (req, res) => {
//     res.json(todos.filter((todo) => todo.userId === req.user.id));
// });


module.exports = userRouter;