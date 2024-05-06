const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Fullname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        default : "user"
    },
    Password: {
        type: String,
        required: true
    }
})

const user = mongoose.model("user",userSchema);
module.exports = user;