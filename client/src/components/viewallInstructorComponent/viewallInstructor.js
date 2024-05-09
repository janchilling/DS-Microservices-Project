import React, { useState } from 'react';

const ViewallInstructors = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]); // Assuming users is fetched from somewhere

    // Function to delete a user
    const deleteUser = (userId) => {
        // Implement your delete logic here
    };

    // Filter users based on search term
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Breadcrumbs component
    const Breadcrumbs = () => {
        return (
            <nav className="mb-8" aria-label="Breadcrumb">
                <ol className="flex">
                    <li className="mr-2">
                        <a href="/" className="text-blue-500 hover:text-blue-700">Home</a>
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
        <div className="container mx-auto mt-4 mb-16">
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
                    {/* {filteredUsers.map(user => ( */}
                        <tr>
                            <td className="px-4 py-2 border">Bihesha Dilshan</td>
                            <td className="px-4 py-2 border">bihesha@gmail.com</td>
                            <td className="px-4 py-2 text-center border">
                                <button
                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"   
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Bihesha Dilshan</td>
                            <td className="px-4 py-2 border">bihesha@gmail.com</td>
                            <td className="px-4 py-2 text-center border">
                                <button
                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"   
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Bihesha Dilshan</td>
                            <td className="px-4 py-2 border">bihesha@gmail.com</td>
                            <td className="px-4 py-2 text-center border">
                                <button
                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"   
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Bihesha Dilshan</td>
                            <td className="px-4 py-2 border">bihesha@gmail.com</td>
                            <td className="px-4 py-2 text-center border">
                                <button
                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"   
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Bihesha Dilshan</td>
                            <td className="px-4 py-2 border">bihesha@gmail.com</td>
                            <td className="px-4 py-2 text-center border">
                                <button
                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"   
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Bihesha Dilshan</td>
                            <td className="px-4 py-2 border">bihesha@gmail.com</td>
                            <td className="px-4 py-2 text-center border">
                                <button
                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"   
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Bihesha Dilshan</td>
                            <td className="px-4 py-2 border">bihesha@gmail.com</td>
                            <td className="px-4 py-2 text-center border">
                                <button
                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"   
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    {/* ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default ViewallInstructors;
