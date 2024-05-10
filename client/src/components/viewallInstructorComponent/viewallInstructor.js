import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../ContextComponent/ContextComponent';
import useFetchInstructorDetails from '../../hooks/useinstructorDetails';
import useDeleteInstructor from '../../hooks/useInstructorDelete';

const ViewallInstructors = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const { user } = useContext(UserContext);
    const { instructorallData } = useFetchInstructorDetails(user._id, searchTerm);
    const { onDeleteInstructor } = useDeleteInstructor();
    const [filteredInstructors, setFilteredInstructors] = useState([]);

    useEffect(() => {
        if (searchTerm !== '') {
            setFilteredInstructors(instructorallData);
        } else {
            setFilteredInstructors([]);
        }
    }, [searchTerm, instructorallData]);

    // Function to delete a user
    const handleDeleteInstructor = async (instructorallData) => {
        const isDeleted = await onDeleteInstructor(instructorallData._id);
        if (isDeleted) {
            alert("Instructor has been deleted successfully!");
            window.location.href = '/all-instructors';
        } else {
            alert("Error with instructor deletion, please try again later...");
        }
    }
    // Breadcrumbs component
    const Breadcrumbs = () => {
        return (
            <nav className="mb-8" aria-label="Breadcrumb">
                <ol className="flex">
                    <li className="mr-2">
                        <a href="/home" className="text-blue-500 hover:text-blue-700">Home</a>
                    </li>
                    <li className="mr-2">
                        <svg className="rtl:rotate-180 w-3.5 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </li>
                    <li className="mr-2">
                        <a href="/manage-users" className="text-blue-500 hover:text-blue-700">Manage Users</a>
                    </li>
                    <li className="mr-2">
                        <svg className="rtl:rotate-180 w-3.5 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </li>
                    <li className="mr-2">
                        <span className="text-gray-500">All Instructors</span>
                    </li>
                </ol>
            </nav>
        );
    };

    return (
        <div className="container px-16 mx-auto mt-4 mb-16">
            <Breadcrumbs/>
            <h1 className="mb-4 text-3xl font-bold text-orange-500">All Instructors</h1>
            <input
                type="text"
                placeholder="Search instructors..."
                className="px-4 py-2 mb-4 border border-gray-300 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-2 py-2 text-xl">Instructor Name</th>
                        <th className="px-2 py-2 text-xl">Instructor Email</th>
                        <th className="px-2 py-2 text-xl">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {instructorallData && instructorallData.map((item, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border">{item.Instructorname}</td>
                            <td className="px-4 py-2 border">{item.Email}</td>
                            <td className="px-4 py-2 text-center border">
                                <button
                                    onClick={() => handleDeleteInstructor(item)}
                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"   
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </div>
    );
};

export default ViewallInstructors;
