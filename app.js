const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Init App
const app = express();

// DB config
const db = require("./config/keys").database;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.json({ extended: true }));

// Static
app.use(express.static(__dirname + "/public"));

app.use(express.json());

// Mongoose Find and Modify
mongoose.set("useFindAndModify", false);

// Routes
app.use("/", require("./route/index"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on port ${PORT}`));
