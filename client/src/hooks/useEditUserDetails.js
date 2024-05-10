import { useState } from 'react';

const useEditUserDetails = () => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditing = () => {
        setIsEditing(prevState => !prevState);
    };

    const updateUserDetails = async (userId, updatedUserData) => {
        try {
            const response = await fetch(`http://localhost:8800/UserManagementService/student/update/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUserData),
            });

            if (response.status === 200) {
                alert("Student Details Update...!");
                window.location.href = window.location.href;
            } else {
                alert("Failed to update user details");
            }

        } catch (error) {
            alert(error);
        }
    };

    return { isEditing, toggleEditing, updateUserDetails };
};

export default useEditUserDetails;