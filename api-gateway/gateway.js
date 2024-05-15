const express = require("express");
const proxy = require("express-http-proxy")
const cors = require("cors");

const app = express();

app.use(cors());
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

// Proxy requests to different service
app.use("/UserManagementService", proxy("http://user-management-service:3001"));
app.use("/CourseManagementService", proxy("http://course-management-service:3002"));
app.use("/PaymentManagementService", proxy("http://payment-management-service:3003"));
app.use("/EnrollmentManagementService", proxy("http://enrollment-management-service:3004"));

// Start the API Gateway
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Gateway is Listening to Port ${PORT}`);
});
