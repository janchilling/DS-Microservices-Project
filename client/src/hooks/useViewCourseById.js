import { useState, useEffect } from "react";
import axios from "axios";

const useViewCourseById = () => {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const viewOneCourseById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8800/CourseManagementService/course/getCourse/${id}`);
            setCourse(response.data.course);
            setLoading(false);
        } catch (error) {
            setError(error.response.data.error);
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => {
            setCourse(null);
            setLoading(true);
            setError(null);
        };
    }, []);

    return { course, loading, error, viewOneCourseById };
};

export default useViewCourseById;
