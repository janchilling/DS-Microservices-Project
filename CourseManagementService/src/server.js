const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
require("dotenv").config();

// Allow requests from localhost:3000
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

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
const courseRouter = require("./routes/courses");
app.use("/course", courseRouter);
