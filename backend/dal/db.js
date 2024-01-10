const mongoose= require('mongoose')
const URL_MONGO=process.env.URL_MONGO
const connect=()=>{
mongoose.connect(URL_MONGO)
.then(_=>{
    console.log("conection to DB - success");
})
.catch(err=>{
   console.error("DB connect error : ", err);
   throw err
})
}
module.exports={connect}
connect();