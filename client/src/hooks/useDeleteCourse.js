import axios from "axios";

const useDeleteCourse = () => {
    const onDeleteCourse = async (id) => {
        try {
            console.log(id);
            if (window.confirm("Are you sure that you want to delete this course?")) {
                const response = await axios.delete(`http://localhost:8000/CourseManagementService/course/deleteCourse/${id}`);
                console.log(response);
                if (response.status === 200) {
                    alert("Course deleted!");
                    return true;
                }
            }
        } catch (error) {
            alert("Error deleting course:", error);
        }
        return false;
    };

    return onDeleteCourse;
};

export default useDeleteCourse;
