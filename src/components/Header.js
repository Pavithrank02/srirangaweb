import React from 'react';
import img from '../images/img1.JPG';

const Header = () => {
  return (
    <div className='fixed top-0 left-0 h-28 w-full bg-black z-50'>
      <div className='text-white flex items-center justify-around h-full'>
        {/* Logo */}
        <div>
          <img src={img} className='h-10 md:h-14' alt="Logo" />
        </div>

        {/* Navigation */}
        <div className='flex justify-around font-bold text-sm md:text-lg lg:text-lg w-2/3 md:w-2/3'>
          <div className='p-2'>
            Home
          </div>
          <div className='p-2'>
            About Us
          </div>
          <div className='p-2'>
            Services
          </div>
          <div className='p-2'>
            Capabilities
          </div>
          <div className='p-2'>
            Customers
          </div>
        </div>

        {/* Contact Button */}
        <div>
          <button className='p-2 md:p-4 w-24 md:w-36 bg-[#D9A125] hover:bg-yellow-800 text-sm md:text-lg lg:text-2xl font-bold rounded-xl md:rounded-2xl'>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
