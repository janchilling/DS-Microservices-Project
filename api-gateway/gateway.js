const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use(express.json());

// Set up CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Proxy requests to different services
app.use("/api/payment", proxy("http://localhost:3003"));
app.use("/UserManagementService", proxy("http://localhost:3001"))

// Start the API Gateway
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Gateway is Listening to Port ${PORT}`);
});
