import React, { useState } from 'react';
import illustrationIntro from '../../../images/signup2.png';
import useAuth from '../../config/hooks/authContext';

const RegisterComponent = () => {

    const { studentSignup, instructorSignup } = useAuth();
    const [Fullname, setFullname] = useState("");
    const [Instructorname, setInstructorname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [activeTab, setActiveTab] = useState('Studentregister');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleStudentRegister = async (e) => {
        e.preventDefault();

        if (Password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        await studentSignup(Fullname, Email, Password);
      
    };

    const handleInstructorRegister = async (e) => {
        e.preventDefault();

        if (Password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        await instructorSignup(Instructorname, Email, Password);
    }

    return (
        <div className='flex flex-col md:flex-row'>
            {/* Image */}
            <div className="flex items-center justify-center md:flex-1">
                <img src={illustrationIntro} alt="Your Image" className="h-auto max-h-full" />
            </div>

            {/* Forms */}
            <div className="md:flex-1">
                <section>
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-4 space-y-2 md:space-y-4 sm:p-5">
                                <div className="flex justify-center">
                                    <button
                                        className={`${
                                            activeTab === 'Studentregister' ? 'bg-primary-500 text-orange-500 border-b-2 border-orange-500' : 'text-white'
                                        } px-4 py-2 rounded-t-lg text-xl`}
                                        onClick={() => handleTabChange('Studentregister')}
                                    >
                                        Student Signup
                                    </button>
                                    <button
                                        className={`${
                                            activeTab === 'Instructorregister' ? 'bg-primary-500 text-orange-500 border-b-2 border-orange-500' : 'text-white'
                                        } px-4 py-2 rounded-t-lg text-xl`}
                                        onClick={() => handleTabChange('Instructorregister')}
                                    >
                                        Instructor Signup
                                    </button>
                                </div>
                                {activeTab === 'Studentregister' && (
                                    <form className="space-y-2 md:space-y-4" onSubmit={handleStudentRegister}>
                                        <div>
                                            <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student Fullname</label>
                                            <input type="text" name="fullname" id="fullname" onChange={(e) => setFullname(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="W A Sahan Gamage" required />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student Email</label>
                                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student Password</label>
                                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        <div>
                                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student Confirm password</label>
                                            <input type="password" name="confirm-password" id="confirm-password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        {error && <p className="text-sm text-red-500">{error}</p>}
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                            </div>
                                            <div className="ml-2 text-sm">
                                                <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                            </div>
                                        </div>
                                        <button type="submit" className="w-full text-white bg-orange-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                        </p>
                                    </form>
                                )}
                                {activeTab === 'Instructorregister' && (
                                    <form className="space-y-2 md:space-y-4" onSubmit={handleInstructorRegister}>
                                        <div>
                                            <label htmlFor="instructorname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor Fullname</label>
                                            <input type="text" name="instructorname" id="instructorname" onChange={(e) => setInstructorname(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="W A Sahan Gamage" required />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor Email</label>
                                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor Password</label>
                                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        <div>
                                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor Confirm password</label>
                                            <input type="password" name="confirm-password" id="confirm-password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        {error && <p className="text-sm text-red-500">{error}</p>}
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                            </div>
                                            <div className="ml-2 text-sm">
                                                <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                            </div>
                                        </div>
                                        <button type="submit" className="w-full text-white bg-orange-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default RegisterComponent;
