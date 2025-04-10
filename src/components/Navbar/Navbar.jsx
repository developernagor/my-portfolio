import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const links = (
    <>
      <li>
      <AnchorLink href="#hero">Home</AnchorLink>
      </li>
      <li>
      <AnchorLink href="#about-me">About Me</AnchorLink>
      </li>
      <li>
      <AnchorLink href="#skills">Skills</AnchorLink>
      </li>
      <li>
      <AnchorLink href="#education">Education</AnchorLink>
      </li>
      <li>
      <AnchorLink href="#projects">Projects</AnchorLink>
      </li>
      <li>
        {/* <Link to="#contact-me">Contact Me</Link> */}
        <AnchorLink href="#contact-me">Contact Me</AnchorLink>
      </li>
    </>
  );

  return (
    
      <div className="navbar bg-blue-400 text-white backdrop-blur-md container px-10 sticky top-0 z-40" id="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue-500 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Mehedi Hassan</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link className="bg-fuchsia-600 px-4 py-2 rounded-lg text-white">Hire Me</Link>
      </div>
    </div>
    
  );
}

export default Navbar;
