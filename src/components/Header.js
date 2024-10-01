import React from 'react';
import img from '../images/img1.JPG';
import { NavLink } from 'react-router-dom';

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
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-500 border-b-2 border-yellow-500'
                  : 'hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110'
              }
            >
              Home
            </NavLink>
          </div>
          <div className='p-2'>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-500 border-b-2 border-yellow-500'
                  : 'hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110'
              }
            >
              About Us
            </NavLink>
          </div>
          <div className='p-2'>
            <NavLink
              to='/services'
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-500 border-b-2 border-yellow-500'
                  : 'hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110'
              }
            >
              Services
            </NavLink>
          </div>
          <div className='p-2'>
            <NavLink
              to='/capabily'
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-500 border-b-2 border-yellow-500'
                  : 'hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110'
              }
            >
              Capabilities
            </NavLink>
          </div>
          <div className='p-2'>
            <NavLink
              to='/customers'
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-500 border-b-2 border-yellow-500'
                  : 'hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110'
              }
            >
              Customers
            </NavLink>
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
