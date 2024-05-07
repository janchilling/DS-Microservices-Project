const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const databaseConnection = require('./config/database');

//Initializing the port number
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(express.json());

//securing database connection
databaseConnection(process.env.MONGODB_URL);

app.listen(PORT, () => {
    console.log(`Course Service Server is up and running on port number: ${PORT}`)
})

//implementation of the the course route
const courseRouter = require("./src/routes/courses.js");
app.use("/course", courseRouter);
