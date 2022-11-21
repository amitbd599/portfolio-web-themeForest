import React from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../Assets/Images/logo.png";
import {
  FaCommentAlt,
  FaHome,
  FaPhoneSquareAlt,
  FaThLarge,
  FaUserAlt,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
const MasterLayout = (props) => {
  return (
    <>
      <div className='sidebar__section flex items-center justify-center'>
        <div>
          <div className='logo py-10'>
            <img src='/Assets/Images/logo.png' alt='' />
          </div>
          <nav className='menu__section mt-4'>
            <ul>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/"}
                >
                  <FaHome className='text-[16px]' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/about"}
                >
                  <FaUserAlt className='text-[16px]' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/services"}
                >
                  <MdDesignServices className='text-[16px]' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/portfolio"}
                >
                  <FaThLarge className='text-[16px]' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/blog"}
                >
                  <FaCommentAlt className='text-[16px]' />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/contact"}
                >
                  <FaPhoneSquareAlt className='text-[16px]' />
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
