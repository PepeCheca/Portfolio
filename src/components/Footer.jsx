/* eslint-disable no-unused-vars */
import React from 'react';
import { linkedin } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 flex items-end justify-end">
      <a href="https://www.linkedin.com/tu_perfil" target="_blank" rel="noopener noreferrer" className="mr-2">
        <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 object-contain" src={linkedin} alt="LinkedIn" />
      </a>
      <p className='mr-6'>chekchek@outlook.es | chek183chek@gmail.com</p>
    </footer>
  );
};

export default Footer;

