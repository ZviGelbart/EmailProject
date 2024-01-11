const express = require("express");
const userRouter = express.Router();
const userServices = require("../services/user.services");

userRouter.get("/", async function (req, res) {
    let data = await userServices.getAllUser();
    res.send(data);
  });

  

userRouter.delete("/:id", function (req, res) {
    userServices.deleteUser()
    res.send("user");
  });

module.exports = userRouter;
