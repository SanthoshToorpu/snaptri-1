import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import {styles} from '../styles.js'
import {navLinks,profileMenuItems} from '../constants'
import {logo, menu, close} from '../assets'

import {
  
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  
} from "@heroicons/react/24/outline";


// paddingX: "sm:px-16 px-6",
// z-20 to stay above



function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const [active, setActive] = useState("");

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} >
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1  rounded-full pt-1 pr-2 pl-0.5 lg:ml-auto capitalize"
        >
         <div className={`${
              active === "Services" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}>Services</div>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-2 bg-primary"style={{opacity:'0.5'}} >
        {profileMenuItems.map((nav1) => {
          return (
            <Link to={nav1.id}  key={nav1.label}>
              <MenuItem              
              onClick={closeMenu} 
              className={`flex text-white items-center gap-2 bg-primary`}
            >
              {React.createElement(nav1.icon, {
                className: `h-4 w-4 `,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={"inherit"}
              >
                {nav1.label}
              </Typography>
            </MenuItem>
            </Link>
          );

        })}
      </MenuList>
    </Menu>
  );
}

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  return (
    
      <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#2b2b2b] bg-opacity-95 `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2'
        onClick={()=>{
          setActive('');
          window.scrollTo(0,0);
        }
        }>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
          <p className='text-white-text-[18px] font-bold cursor-pointer'> Snaptri</p>
        </Link>
        <ul className='list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
            key={nav.id}
            className={`${
              active === nav.title ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`/#${nav.id}`}>{nav.title}</a>
          </li>
          ))}
          <li><ProfileMenu/></li>
        </ul>
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-[]"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
                <li><ProfileMenu/></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
      
  )
}

export default Navbar