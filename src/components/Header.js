import React from 'react';
import img from '../images/img1.JPG';
import { NavLink } from 'react-router-dom';
import { HoverBorderGradientDemo } from './Button';

const Header = () => {
  return (
    <div className='fixed top-0 left-0 h-20 md:h-28 w-full bg-black z-50'>
      <div className='text-white flex items-center justify-between md:justify-around h-full px-4 md:px-0'>
        {/* Logo */}
        <div className='hidden md:block'>
          <img src={img} className='h-10 md:h-14' alt="Logo" />
        </div>

        {/* Navigation */}
        <div className='flex justify-around font-bold text-xs sm:text-sm md:text-lg lg:text-lg w-full md:w-2/3'>
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
              to='/capability'
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
          <HoverBorderGradientDemo />
        </div>
      </div>
    </div>
  );
};

export default Header;
