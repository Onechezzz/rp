const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/muggers-db");

app.use("/api", require("./api"))

app.listen(4000, ()=>{//Первое это порт, второе это коллбек функция при обращении к серверу
  console.log("server is listening");
})
