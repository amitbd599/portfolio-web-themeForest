import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
const Header = () => {
  return (
    <section className='header__section p-6'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-12 gap-10 w-full'>
          {/* Logo Section */}
          <div className='logo__section col-span-2'>
            <Link to={"/"}>
              <img className='w-[200px]' src={logo} alt='' />
            </Link>
          </div>

          {/* Nav Section */}
          <nav className='nav__section col-span-8'>
            <ul className='flex justify-center'>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/portfolio"}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/blog"}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className='hire__button col-span-2'>
            <button className='px-6 rounded-lg py-2 bg-[#ffb400] border-solid border-2 border-[#ffb400] hover:bg-[transparent]'>
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
