const authenticateRoleController = {
    // Controller method for admin role
    adminRole: (req, res) => {
        res.status(200).json({ message: "Admin access granted" });
    },

    // Controller method for instructor role
    instructorRole: (req, res) => {
        res.status(200).json({ message: "Instructor access granted" });
    },

    // Controller method for student role
    studentRole: (req, res) => {
        res.status(200).json({ message: "Student access granted" });
    }
};

module.exports = authenticateRoleController;
