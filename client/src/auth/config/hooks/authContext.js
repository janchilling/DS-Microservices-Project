import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {

    const navigate = useNavigate();

    const studentSignup = async (fullname,email,password) => {
        try {
            const response = await axios.post('http://localhost:8000//UserManagementService/auth//registerStudent', fullname,email,password).then(()=>{
                alert("New Student Created...!");
                navigate('/login');
            })
        } catch (error) {
            alert(error);
        }
    }

    return { studentSignup };
}

export default Signup;