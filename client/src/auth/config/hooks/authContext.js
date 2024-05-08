import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import UserContext from '../../../ContextComponent/ContextComponent';

const useAuth = () => {

    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const studentSignup = async (Fullname, Email, Password) => {
        try {
            const response = await axios.post('http://localhost:8000/UserManagementService/auth/registerStudent', {
                Fullname,
                Email,
                Password
            });
            if (response.status === 200) {
                alert("New Student Created Successfully..!");
                navigate('/login')
            } else {
                alert("Signup failed. Please try again."); 
            }
        } catch (error) {
            alert(error);
        }
    };

    const instructorSignup = async (Instructorname, Email, Password) => {
        try {
            const response = await axios.post('http://localhost:8000/UserManagementService/auth/registerInstructor',{
                Instructorname,
                Email,
                Password
            });
            if (response.status === 200) {
                alert("New Instructor Created Successfully...!");
                navigate('/login');
            } else {
                alert("Signup failed. Please try again.");
            }
        } catch (error) {
            alert(error);
        }
    }

    const login = async (Email, Password) => {
        try {
            const response = await axios.post('http://localhost:8000/UserManagementService/auth/login', {
                Email,
                Password
            });
            if (response.status === 200) {
                alert("Login Successfully...!");
                setUser(response.data.user);
                navigate('/');
            } 
        } catch (error) {
            alert(error);
        }
    }

    return { studentSignup, instructorSignup, login };
}

export default useAuth;