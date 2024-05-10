import axios from "axios";

const useDeleteInstructor = () => {
    const onDeleteInstructor = async (id) => {
        try {
            if (window.confirm("Are you sure that you want to delete this Instructor?")) {
                const response = await axios.delete(`http://localhost:8800/UserManagementService/instructor/delete/${id}`);
                if (response.status === 200) {
                    return true;
                }
            }
        } catch (error) {
            alert("Error deleting instructor:", error);
        }
        return false;
    };

    return { onDeleteInstructor };
};

export default useDeleteInstructor;