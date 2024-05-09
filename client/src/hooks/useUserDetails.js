import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUserDetails = (userId, searchTerm) => {
    const [studentData, setStudentData] = useState(null);
    const [studentallData, setStudentallData] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/UserManagementService/student/get/${userId}`);
                if (response.status === 200) {
                    setStudentData(response.data);
                }
            } catch (error) {
                alert(error);
            }
        };
        fetchUserDetails();
    }, [userId]);

    useEffect(() => {
        const fetchallUserDetails = async () => {
            try {
                let url = 'http://localhost:8000/UserManagementService/student';
                if (searchTerm) {
                    url = `http://localhost:8000/UserManagementService/student/search/${searchTerm}`;
                }
                const response = await axios.get(url);
                if (response.status === 200) {
                    setStudentallData(response.data);
                }
            } catch (error) {
                alert(error);
            }
        };
        fetchallUserDetails();
    }, [searchTerm]);

    const deleteUser = async (userId) => {
        try {
            const response = await axios.delete(`http://localhost:8000/UserManagementService/student/delete/${userId}`);
            if (response.status === 200) {
                // Reload page after successful deletion
                window.location.reload();
            }
        } catch (error) {
            alert(error);
        }
    };

    return { studentData, studentallData, deleteUser };
};

export default useFetchUserDetails;
