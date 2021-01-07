const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv/config')

app.use(bodyParser.json());

const studentsRoute = require("./routes/students");
app.use("/students", studentsRoute);

mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true}, 
()=>console.log("connected"));
app.listen(3001)
