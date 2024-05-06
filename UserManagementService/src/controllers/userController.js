const User = require('../models/user');
const bodyParser = require('body-parser');
const router = require("express").Router();

// Get all users
const allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ status: "Error with fetching data", error: error.message });
    }
}

// Updating a user
const updateUser = async (req, res) => {
    try{
        let userId = req.params.id;
        const  { Fullname, Email, Password } = req.body;

        const updateUser = {
            Fullname,
            Email,
            Password
        }

        await User.findByIdAndUpdate(userId, updateUser);
        res.status(200).send({status: "User Updated"});
    } catch (error){
        res.status(500).send({ status: "Error with updating data", error: error.message });
    }
}

// Deleting a single user
const deleteUser = async (req, res) => {
    try {
        let userId = req.params.id;

        await User.findByIdAndDelete(userId);
        res.status(200).send({ status: "User deleted" });
    } catch (error) {
        res.status(500).send({ status: "Error with delete user", error: error.message });
    }
}

// Get the details of a single user
const singleUser = async (req, res) => {
    try {
        let userId = req.params.id;

        const user = await User.findById(userId);
        res.status(200).send({ status: "User fetched", user });
    } catch (error) {
        res.status(500).send({ status: "Error with fetching user", error: error.message });
    }
}

// Handle searching users
const searchUsers = async (req, res) => {
    try {
        let result = await User.find({
            $or: [
                {
                    Fullname: { $regex: req.params.key },
                },
            ],
        });
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    allUsers,
    updateUser,
    deleteUser,
    singleUser,
    searchUsers
};

