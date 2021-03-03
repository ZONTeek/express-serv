const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv/config');


app.use(bodyParser.json(), cors());

const dayRoute = require("./routes/dayRoute");
app.use("/", dayRoute);

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
  () => console.log("connected"));
app.listen(3001)
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, 'MongoDB connection error:'))