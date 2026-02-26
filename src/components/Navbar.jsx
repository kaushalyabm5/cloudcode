import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='fixed w-full md:top-5 md:left-1/2 md:transform md:-translate-x-1/2 py-5 px-5 bg-[#D2D2D2]/30 backdrop-blur-lg flex justify-between items-center md:w-[90%] md:border-0 md:rounded-[7rem] md:mx-auto md:px-10'>
      
      {/* Logo - Left */}
        <h1 className='logo text-white font-thin text-xl'>{"<CloudeCode/>"}</h1>

        
      {/* Right Side - Desktop menu / Mobile button */}
      <div className='flex items-center'>

        {/* Desktop Menu */}
        <ul className='hidden md:flex md:gap-15 md:text-[1rem] text-white'>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Mobile menu button */}

        <button onClick={toggleMenu} className='md:hidden text-white ml-2'>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

      </div>

      {isOpen && (
        <ul className='absolute top-full left-0 w-full bg-[#D2D2D2] backdrop-blur-lg flex-col items-center gap-4 py-5 md:hidden text-white flex'>
            <li onClick={toggleMenu}>Home</li>
            <li onClick={toggleMenu}>Projects</li>
            <li onClick={toggleMenu}>About</li>
            <li onClick={toggleMenu}>Contact</li>
        </ul>
      )}



    </nav>
  );
};

export default Navbar