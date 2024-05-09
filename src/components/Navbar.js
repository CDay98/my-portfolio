import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:fixed top-0 w-full z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Colin Day
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
          <a
              href="https://www.linkedin.com/in/colin-day-907623228/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 "
                viewBox="0 0 24 24"
              >
                <path d="M19.6,19v-5.8c0-1.4-0.5-2.4-1.7-2.4c-1,0-1.5,0.7-1.8,1.3C16,12.3,16,12.6,16,13v6h-3.4
                        c0,0,0.1-9.8,0-10.8H16v1.5c0,0,0,0,0,0h0v0C16.4,9,17.2,7.9,19,7.9c2.3,0,4,1.5,4,4.9V19H19.6z M8.9,6.7L8.9,6.7
                        C7.7,6.7,7,5.9,7,4.9C7,3.8,7.8,3,8.9,3s1.9,0.8,1.9,1.9C10.9,5.9,10.1,6.7,8.9,6.7z M10.6,19H7.2V8.2h3.4V19z" />
              </svg>
            </a>
            <a
              href="https://www.github.com/cday98"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 text-gray-400 hover:text-white"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 "
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12,2C6.48,2,2,6.48,2,12c0,4.42,2.86,8.17,6.84,9.49c0.5,0.09,0.68-0.21,0.68-0.48
                        c0-0.24-0.01-0.88-0.01-1.73c-2.49,0.54-3.01-1.2-3.01-1.2c-0.41-1.05-1-1.33-1-1.33c-0.82-0.56,0.06-0.55,0.06-0.55
                        c0.91,0.06,1.39,0.94,1.39,0.94c0.81,1.39,2.13,0.99,2.65,0.76c0.08-0.59,0.31-0.99,0.56-1.22c-1.96-0.22-4.02-0.98-4.02-4.36
                        c0-0.96,0.34-1.75,0.9-2.37c-0.09-0.22-0.39-1.12,0.09-2.33c0,0,0.74-0.24,2.43,0.9c0.71-0.2,1.48-0.3,2.24-0.3
                        c0.76,0,1.53,0.1,2.24,0.3c1.69-1.14,2.43-0.9,2.43-0.9c0.48,1.21,0.18,2.11,0.09,2.33c0.56,0
                        0.9,0.41,0.9,2.37c0,3.39-2.06,4.14-4.02,4.36c0.32,0.27,0.6,0.81,0.6,1.64c0,1.18-0.01,2.13-0.01,2.43
                        c0,0.27,0.18,0.58,0.69,0.48C19.14,20.16,22,16.41,22,12C22,6.48,17.52,2,12,2z"/>
              </svg>
            </a>

          
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
      
    </header>
  );
}
