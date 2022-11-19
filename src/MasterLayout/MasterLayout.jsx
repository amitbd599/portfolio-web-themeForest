import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/Images/logo.png";
import {
  FaCommentAlt,
  FaHome,
  FaPhoneSquareAlt,
  FaThLarge,
  FaUserAlt,
} from "react-icons/fa";
const MasterLayout = (props) => {
  return (
    <>
      <div className='sidebar__section flex items-center justify-center'>
        <div>
          <div className='logo py-10'>
            <img src={logo} alt='' />
          </div>
          <nav className='menu__section mt-10'>
            <ul>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/"}
                >
                  <FaHome />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/about"}
                >
                  <FaUserAlt />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/portfolio"}
                >
                  <FaThLarge />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/blog"}
                >
                  <FaCommentAlt />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/contact"}
                >
                  <FaPhoneSquareAlt />
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
