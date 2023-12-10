/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2
                     bg-black-800 p-4 rounded-full text-white cursor-pointer"
          onClick={scrollToTop}
          style={{ zIndex: 9999 }}
        >
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <FaArrowUp className="text-gray-800" />
            </div>
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
