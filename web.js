// default
const express = require("express");
const bodyParser = require("body-parser");
// const fs = require("fs");

const app = express();
const port = process.env.port || 8002;

const path = require("path");
app.use(express.static(__dirname+"/build"));


app.listen(port, () => console.log(`Listening on port ${port}`));