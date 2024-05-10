import { useState } from 'react';

const useEditUserDetails = () => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditing = () => {
        setIsEditing(prevState => !prevState);
    };

    return { isEditing, toggleEditing };
};

export default useEditUserDetails;