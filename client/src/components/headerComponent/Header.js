import { useState } from 'react';
import { Link } from 'react-router-dom';

import companyLogo from '../../images/logo.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='relative container mx-auto p-6'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2'>
          <Link to='/'>
            <img src={companyLogo} alt='' />
          </Link>
        </div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex'>
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
        </div>
        <div className='flex space-x-1'>
          {/* Login Button */}
          <Link
            to='#'
            className='hidden p-3 px-6 pt-2 text-black text-xl font-bold rounded-full baseline hover:text-orange-600 md:block'
          >
            Login
          </Link>
          {/* Get Started Button */}
          <Link
            to='#'
            className='hidden p-3 px-6 pt-2 text-white bg-orange-600 rounded-full baseline hover:bg-orange-400 md:block'
          >
            Get Started
          </Link>
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
          {/* Login Button */}
          <Link
            to='#'
            className='p-3 px-6 pt-2 text-black text-xl font-bold rounded-full baseline hover:text-orange-600'
          >
            Login
          </Link>
          {/* Get Started Button */}
          <Link
            to='#'
            className='p-3 px-6 pt-2 text-white bg-orange-600 rounded-full baseline hover:bg-orange-400'
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;