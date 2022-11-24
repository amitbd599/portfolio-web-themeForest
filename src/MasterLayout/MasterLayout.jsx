import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaCommentAlt,
  FaEnvelope,
  FaHome,
  FaThLarge,
  FaUserAlt,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
const MasterLayout = (props) => {
  return (
    <>
      <div className='sidebar__section flex items-center justify-center'>
        <div>
          <div className='hidden md:block  logo py-10'>
            <img src='/Assets/Images/logo.png' alt='' />
          </div>
          <nav className=' menu__section py-1 md:py-0 md:mt-4'>
            <ul>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/"}
                >
                  <FaHome className='text-[20px] md:text-[16px]' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/about"}
                >
                  <FaUserAlt className='text-[20px] md:text-[16px]' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/services"}
                >
                  <MdDesignServices className='text-[20px] md:text-[16px]' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/portfolio"}
                >
                  <FaThLarge className='text-[20px] md:text-[16px]' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/blog"}
                >
                  <FaCommentAlt className='text-[20px] md:text-[16px]' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/contact"}
                >
                  <FaEnvelope className='text-[20px] md:text-[16px]' />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='main__body'>{props.children}</div>
    </>
  );
};

export default MasterLayout;
