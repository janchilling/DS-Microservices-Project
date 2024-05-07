import { Link } from 'react-router-dom';

import illustrationIntro from '../../images/illustration-intro.svg';

const Main = () => {
  return (
    <section id='hero'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-lg text-4xl font-bold text-center md:text-5xl md:text-left'>
           Empower Your Future, Discover Our Range of Courses
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Explore our diverse selection designed to enhance skills and advance careers, 
            empowering you to unlock your full potential
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link
              to='#'
              className='p-3 px-6 pt-2 text-white bg-orange-600 rounded-full baseline hover:bg-orange-400'
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
          <img src={illustrationIntro} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Main;