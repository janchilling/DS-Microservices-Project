import { useState } from "react";

const useUpdateCourse = () => {
    const [isUpdated, setIsUpdated] = useState(false);

    const updateCourse = async (id, formData) => {
        try {
            const response = await fetch(`http://localhost:8800/CourseManagementService/course/updateCourse/${id}`, {
                method: 'PUT',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (data) {
                setIsUpdated(true);
            }
        } catch (error) {
            console.error("Error updating course:", error);
        }
    };

    return { isUpdated, updateCourse };
};

export default useUpdateCourse;
