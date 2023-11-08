import React from "react";
import logo from "../../assests/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import userImg from "../../assests/images/avatar-icon.png";
import IAButton from "../boilerplate/IAButton";
import {BiMenu} from "react-icons/bi"
import { Typography } from "@mui/material";

const navlinks = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a top Doctor'
  },
  {
    path: '/services',
    display: 'services'
  },
  {
    path: '/contact',
    display: 'contact'
  },
];

export default function Header() {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            {/* <img src={logo} alt="Logo" /> */}
            <Typography color="primary" fontWeight="bold" fontSize={30}>
            🏥 Doctor's Inn
            </Typography>
          </div>
          {/* Navigation */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navlinks.map((navLink, index) => (
                <li key={index}>
                  <NavLink
                    to={navLink.path}
                    className={navClass =>
                      navClass.isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                    }
                  >
                    {navLink.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Nav right */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to='/'>
                <figure className="w-[35px] h-[35px] rounded-full">
                  <img src={userImg} className="w-full rounded-full" alt="User" />
                </figure>
              </Link>
            </div>
            <Link to='/login'>
            <IAButton variant="contained" color="primary" className="py-2 px-6 text-white font-[600] h-[44px] flex items-center">Login</IAButton>
            </Link>

            <span className="md:hidden">
                <BiMenu className="w-6 h-6 cursor-pointer"/>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
