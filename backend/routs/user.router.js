const express = require("express");
const userRouter = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userServices = require("../services/user.services");


// function createToken(req, res, next) {
//   const token = jwt.sign({ id: req.user.id }, process.env.TOKEN_SECRET);
//   res.setHeader('Authorization', `Bearer ${token}`);
//   next();
// }

userRouter.get("/", async  (req, res)=> {
    let data = await userServices.getAllUser();
    res.send(data);
  });

  userRouter.get('/:user',async (req , res) => {
    let email  = req.params.email
    let data = await userServices.getUser(email)
    res.send(data)
  } )


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

userRouter.post("/login", async (req, res) => {
    try {
      const user = await userServices.loginUser(req.body)
      const accessToken = jwt.sign({email: user.email }, process.env.TOKEN_SECRET, {expiresIn: '15m'});
      const refreshToken = jwt.sign({ email: user.email}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "30d"});
      const updateToken = await userServices.updateToken(refreshToken, user.email)
      console.log(updateToken);
      // const newUser = await userServices.createUser(req.body)
      res.send({user, accessToken, refreshToken})
      
    }catch(err){
        res.status(400).send(err)
    }
})











userRouter.delete("/:id", function (req, res) {
    userServices.deleteUser()
    res.send("user");
  });




module.exports = userRouter;