import { useState, useEffect } from "react";
import axios from "axios";

const useFetchInstructorDetails = (userId, searchTerm) => {

    const [instructorData, setInstructorData] = useState(null);
    const [instructorallData, setInstructorallData] = useState(null);

    useEffect(() => {
        const fetchInstructorDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/UserManagementService/instructor/get/${userId}`);
                if (response.status === 200) {
                    setInstructorData(response.data);
                }
            } catch (error) {
                alert(error);
            }
        };
        fetchInstructorDetails();
    }, [userId]);

    useEffect(() => {
        const fetchallInstructorDetails = async () => {
            try {
                let url = 'http://localhost:8800/UserManagementService/instructor';
                if (searchTerm) {
                    url = `http://localhost:8800/UserManagementService/instructor/search/${searchTerm}`;
                }
                const responses = await axios.get(url);
                if (responses.status === 200) {
                    setInstructorallData(responses.data);
                }
            } catch (error) {
                alert(error);
            }
        };
        fetchallInstructorDetails();
    },[searchTerm]);

    return { instructorData, instructorallData };
};

export default useFetchInstructorDetails;
