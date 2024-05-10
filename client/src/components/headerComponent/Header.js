import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../../images/logo.svg';
import UserContext from '../../ContextComponent/ContextComponent';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user, setUser } = useContext(UserContext);

  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  // Check if user is an instructor
  const isInstructor = user && user.Type === "instructor";

  return (
    <div>
      {/* Navbar */}
      <nav className='container relative p-6 mx-auto'>
        {/* Flex Container */}
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='pt-2'>
            <Link to='/'>
              <img src={companyLogo} alt='' />
            </Link>
          </div>
          {/* Menu Items */}
          <div className='hidden space-x-16 md:flex'>
            {isInstructor ? (
              <>
                <Link to='/createCourse' className='hover:text-gray-400'>
                  Create Course
                </Link>
                <Link to='/getCourses' className='hover:text-gray-400'>
                  Your Courses
                </Link>
            </>
            ) : (
              <>
                <Link to='/home' className='hover:text-gray-400'>
                  Pricing
                </Link>
                <Link to='#' className='hover:text-gray-400'>
                  Product
                </Link>
                <Link to='#' className='hover:text-gray-400'>
                  About Us
                </Link>
                <Link to='#' className='hover:text-gray-400'>
                  Careers
                </Link>
                <Link to='#' className='hover:text-gray-400'>
                  Community
                </Link>
              </>
            )}
          </div>
          <div className='flex space-x-1'>
            {user ? (
              // Display user's name and logout button
              <div className='hidden md:flex space-x-1'>
                <button
                  className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'
                >
                  <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0'>
                    {user.Type === 'student'
                      ? user.Fullname
                      : user.Type === 'instructor'
                      ? user.Instructorname
                      : 'Unknown'}
                  </span>
                </button>
                <button
                  onClick={handleLogout}
                  className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'
                >
                  <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0'>
                    Logout
                  </span>
                </button>
              </div>
            ) : (
              // Display login and Get Started buttons
              <>
                <Link
                  to='/login'
                  className='hidden p-3 px-6 pt-2 text-xl font-bold text-black rounded-full baseline hover:text-orange-600 md:block'
                >
                  Login
                </Link>
                <Link
                  to='/register'
                  className='hidden p-3 px-6 pt-3 text-white bg-orange-600 rounded-full baseline hover:bg-orange-400 md:block'
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Hamburger Icon */}
          <button
            className={
              toggleMenu
                ? 'open block hamburger md:hidden focus:outline-none'
                : 'block hamburger md:hidden focus:outline-none'
            }
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div
          className={
            toggleMenu
              ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
              : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          }
        >
          <Link to='#'>Pricing</Link>
          <Link to='#'>Product</Link>
          <Link to='#'>About Us</Link>
          <Link to='#'>Careers</Link>
          <Link to='#'>Community</Link>
          {user ? (
            // Display user's name and logout button
            <>
            <button
              className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'
            >
              <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0'>
                {user.Type === 'student'
                  ? user.Fullname
                  : user.Type === 'instructor'
                  ? user.Instructorname
                  : 'Unknown'}
              </span>
            </button>
            <button
              onClick={handleLogout}
              className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'
            >
              <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0'>
                Logout
              </span>
            </button>
          </>
          ) : (
            // Display login and Get Started buttons
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Get Started</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
