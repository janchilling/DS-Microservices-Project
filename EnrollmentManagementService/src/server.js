const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const databaseConnection = require('./config/database.js');

//Initializing the port number
const PORT = process.env.PORT || 3004;

app.use(bodyParser.json());
app.use(express.json());

//securing database connection
databaseConnection(process.env.MONGODB_URL);

app.listen(PORT, () => {
    console.log(`Enrolment Service Server is up and running on port number: ${PORT}`)
})

//implementation of the the course route
const enrollmentRouter = require("./routes/enrollment.js");
app.use("/enrollment", enrollmentRouter);
