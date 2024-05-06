const Admin = require('../models/admin');
const User = require('../models/user');
const Instructor = require('../models/instructor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Checking whether the same email has been used in each userType
const checkEmailExists = async (email) => {
  const admin = await Admin.findOne({ Email: email });
  const user = await User.findOne({ Email: email });
  const instructor = await Instructor.findOne({ Email: email });

  return admin || user || instructor;
};

// Create an admin account
const adminRegister = async (req, res) => {
    try {
      const { Adminname, Email, Password } = req.body;
      const existingEmail = await checkEmailExists(Email);
  
      if(!existingEmail){
        const hashPassword = await bcrypt.hash(Password,10);
  
        const admin = new Admin({
          Adminname,
          Email,
          Password: hashPassword,
        });
  
        const token = jwt.sign({_id: admin._id}, 'secretkey123',{
          expiresIn: '60d',
        });
  
        await admin.save();
        res.json({ message: 'Admin registration successful', token});
      }else{
        res.json({ message: 'This email is already exists'});
      }
    } catch (error) {
      res.status(500).json({ error: 'Admin registration failed'});
    }
}

// Registering a new user
const registerUser =  async (req, res) => {
    try {
      const {Fullname, Email, Password } = req.body;
      const existingEmail = await checkEmailExists(Email);
  
      if (!existingEmail){
        const hashPassword = await bcrypt.hash(Password,10);
  
        const user = new User({
          Fullname,
          Email,
          Password: hashPassword,
        });
  
        const token = jwt.sign({_id: user._id}, 'secretkey123',{
          expiresIn: '60d',
        });
  
        await user.save();
        res.json({ message: 'User registration successful', token});
      }else{
        res.json({ message: 'This email is already exists'});
      }
    } catch (error) {
      res.status(500).json({ error: 'User registration failed'});
    }
}

// Registering a new instructor
const registerInstructor =  async (req, res) => {
    try {
      const {Instructorname, Email, Password } = req.body;
      const existingEmail = await checkEmailExists(Email);
  
      if (!existingEmail){
        const hashPassword = await bcrypt.hash(Password,10);
  
        const instructor = new Instructor({
          Instructorname,
          Email,
          Password: hashPassword,
        });
  
        const token = jwt.sign({_id: instructor._id}, 'secretkey123',{
          expiresIn: '60d',
        });
  
        await instructor.save();
        res.json({ message: 'Instructor registration successful', token});
      }else{
        res.json({ message: 'This email is already exists'});
      }
    } catch (error) {
      res.status(500).json({ error: 'Instructor registration failed'});
    }
}

// Login Part base on the Type
const loginUser = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    let user;
    let loginmessage;
    let type;
    
    const admin = await Admin.findOne({ Email });
    if (admin) {
      user = admin;
      loginmessage = "Admin logging successfully...!";
      type = 'admin';
    } else {
      const instructor = await Instructor.findOne({ Email });
      if (instructor) {
        user = instructor;
        loginmessage = "Instructor logging successfully...!";
        type = 'instructor';
      } else {
        const normaluser = await User.findOne({ Email });
        if (normaluser) {
          user = normaluser;
          loginmessage = "User logging successfully...!";
          type = 'user';
        } else {
          return res.status(404).json({ error: "Email not found" });
        }
      }
    }
  
    const passwordMatch = await bcrypt.compare(Password, user.Password);
  
    if (passwordMatch) { 
      const token = jwt.sign({ email: user.Email }, "Your_Secret_Token", { expiresIn: '1h' });
      return res.status(200).json({ message: loginmessage, token, user, type });
    } else {
      return res.status(401).json({ error: "Password incorrect" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
    adminRegister,
    registerUser,
    registerInstructor,
    loginUser
};