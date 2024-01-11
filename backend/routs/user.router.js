const express = require("express");
const userRouter = express.Router();
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

module.exports = userRouter;
