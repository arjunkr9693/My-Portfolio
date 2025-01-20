"use client";
// @flow strict
import Link from "next/link";
import { useState, useEffect } from 'react';

function Navbar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const smoothScroll = (e, sectionId) => {
    e.preventDefault();
    if (isClient) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between pt-10">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold">
            ARJUN SAHOO
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <a 
              href="#about" 
              onClick={(e) => smoothScroll(e, '#about')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              onClick={(e) => smoothScroll(e, '#experience')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={(e) => smoothScroll(e, '#skills')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              onClick={(e) => smoothScroll(e, '#education')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={(e) => smoothScroll(e, '#projects')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;