const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb://localhost/muggers-db", { useNewUrlParser: true });

app.use(bodyParser.json());
app.use("/api", require("./api"))

app.listen(4000, ()=>{//Первое это порт, второе это коллбек функция при обращении к серверу
  console.log("server is listening");
});
