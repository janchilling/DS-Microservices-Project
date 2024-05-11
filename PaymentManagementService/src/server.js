const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3003;

// app middlewares
app.use(cors());
// app.use(bodyParser.json());
app.use(express.json())

//database connection
const URL = process.env.MONGODB_URL;

mongoose.connect(URL).then(() => {
    app.listen(port, () => {
        console.log(`server is up and running on port number ${port}`)
    })
}).catch((error) => {
    console.log(error)
})


const checkoutRoutes = require("./routes/checkoutRoutes");
app.use('/checkout', checkoutRoutes);

const paymentRoutes = require("./routes/paymentRoutes");
app.use('/payment', paymentRoutes);



