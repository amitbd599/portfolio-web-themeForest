import React from "react";
import {
  FaFacebookF,
  FaGitAlt,
  FaLinkedinIn,
  FaSlack,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const HomeComponent = () => {
  return (
    <section className='home__component min-h-screen flex items-center'>
      <div className='container mx-auto px-5 md:px-14'>
        {/* Home Content */}
        <div className='home__content '>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-12 md:mt-16 mb-20 md:mb-0'>
              <div className='flex justify-center items-center'>
                <div className='text__file'>
                  <Fade>
                    <div className='flex md:hidden justify-center mb-6'>
                      <div className='flex justify-center items-center w-[150px] h-[150px] rounded-full overflow-hidden ring-offset-0 ring-4 ring-[#373D4D]'>
                        <img
                          className='object-cover '
                          src='/Assets/Images/profile.png'
                          alt=''
                        />
                      </div>
                    </div>
                  </Fade>
                  <Fade>
                    <div className='flex justify-center'>
                      <h2 className='text-[32px] md:text-[60px] font-bold text-[#17b978]'>
                        Hi, I am Amit Biswas
                      </h2>
                    </div>
                  </Fade>
                  <div className='flex justify-center md:px-[100px] mt-4'>
                    <Fade>
                      <p className='text-center	leading-[28px] md:leading-[35px] text-base '>
                        Full Stack Web Developer and Web Application
                        specializing in front-end and back-end development.
                        Experienced with all stages of the development cycle for
                        dynamic websites. Well versed in numerous programming
                        languages JavaScript ES6 Nodejs, structured language
                        HTML5 CSS3, Libraries REACT-JS With MongoDB Database.
                      </p>
                    </Fade>
                  </div>
                  <Fade>
                    <div className='icon__file flex justify-center mt-10'>
                      <div className='flex gap-2'>
                        <Link
                          to={"/"}
                          className='bg-[#dddddd31] hover:bg-[#1877f2] ease-in duration-200 p-3 inline-block rounded-full'
                        >
                          <FaFacebookF className='text-[20px]' />
                        </Link>
                        <Link
                          to={"/"}
                          className='bg-[#dddddd31] hover:bg-[#1da1f2] ease-in duration-200 p-3 inline-block rounded-full'
                        >
                          <FaTwitter className='text-[20px]' />
                        </Link>
                        <Link
                          to={"/"}
                          className='bg-[#dddddd31] hover:bg-[#0077b5] ease-in duration-200 p-3 inline-block rounded-full'
                        >
                          <FaLinkedinIn className='text-[20px]' />
                        </Link>
                        <Link
                          to={"/"}
                          className='bg-[#dddddd31] hover:bg-[#333] ease-in duration-200 p-3 inline-block rounded-full'
                        >
                          <FaGitAlt className='text-[20px]' />
                        </Link>
                        <Link
                          to={"/"}
                          className='bg-[#dddddd31] hover:bg-[#541554] ease-in duration-200 p-3 inline-block rounded-full'
                        >
                          <FaSlack className='text-[20px]' />
                        </Link>
                      </div>
                    </div>
                  </Fade>
                  <div className='download__resume flex justify-center mt-8'>
                    <Fade>
                      <button className='my__btn   text-base'>
                        Download CV
                      </button>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
