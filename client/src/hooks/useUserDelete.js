import axios from "axios";

const useDeleteUser = () => {
    const onDeleteUser = async (id) => {
        try {
            if (window.confirm("Are you sure that you want to delete this Student?")) {
                const response = await axios.delete(`http://localhost:8800/UserManagementService/student/delete/${id}`);
                if (response.status === 200) {
                    return true;
                }
            }
        } catch (error) {
            alert("Error deleting student:", error);
        }
        return false;
    };

    return { onDeleteUser };
};

export default useDeleteUser;