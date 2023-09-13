import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import resume from "../Utilities/M_Rowan_Resume.pdf";

const Nav = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="pt-10 pb-3 flex justify-between sticky top-0 bg-white dark:bg-gray-900">
      <div className="text-3xl flex justify-center gap-6 py-3  dark:text-white sm:text-4xl">
        <a
          href="https://www.linkedin.com/in/mrowan121/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="icon" />
        </a>
        <a href="https://github.com/MRowan121" target="_blank" rel="noreferrer">
          <AiFillGithub className="icon" />
        </a>
      </div>
      <ul className="flex items-center">
        <li>
          {darkMode ? (
            <BsFillSunFill
              className="cursor-pointer text-3xl  dark:fill-white icon"
              onClick={toggleDarkMode}
            />
          ) : (
            <BsFillMoonStarsFill
              className="cursor-pointer text-3xl  dark:fill-white icon"
              onClick={toggleDarkMode}
            />
          )}
        </li>
        <li>
          <a
            className="font-burtons bg-gradient-to-r from-cyan-500 to-teal-500 text-xl text-white px-4 py-2 rounded-md ml-5 hover:animate-pulse"
            href={resume}
            download="M Rowan Resume"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
