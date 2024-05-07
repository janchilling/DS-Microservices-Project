const axios = require('axios');

const authenticateRole = async (req, res, next) => {
    try {
        // Extract token from request headers
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)

        // Send request to user management service to authenticate user's role
        const response = await axios.get('http://localhost:3001/authenticate-role/student', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // Check if authentication was successful
        if (response.status === 200 && response.data.message === "Student access granted") {
            next();
        } else {
            res.status(403).json({ message: "Access denied, user does not have STUDENT role" });
        }
    } catch (error) {
        console.error("Error authenticating user role:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = authenticateRole;
