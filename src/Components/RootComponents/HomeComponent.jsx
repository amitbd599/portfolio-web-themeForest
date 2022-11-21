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
      <div className='container mx-auto px-12'>
        {/* Home Content */}
        <div className='home__content '>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-12 mt-16'>
              <div className='flex justify-center items-center'>
                <div className='text__file'>
                  <Fade>
                    <div className='flex justify-center'>
                      <h2 className='text-[60px] font-bold text-[#17b978]'>
                        Hi, I am Amit Biswas
                      </h2>
                    </div>
                  </Fade>

                  <div className='flex justify-center px-[100px]'>
                    <Fade>
                      {" "}
                      <p className='text-center	leading-8 text-base'>
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
                      <div className='flex gap-4'>
                        <Link
                          to={"/"}
                          className='bg-[#dddddd31] hover:bg-[#17b978] ease-in duration-200 p-4 inline-block rounded-full'
                        >
                          <FaFacebookF className='text-[25px]' />
                        </Link>
                        <Link
                          to={"/"}
                          className='bg-[#dddddd31] hover:bg-[#17b978] ease-in duration-200 p-4 inline-block rounded-full'
                        >
                          <FaTwitter className='text-[25px]' />
                        </Link>
                        <Link
                          to={"/"}
                          className='bg-[#dddddd31] hover:bg-[#17b978] ease-in duration-200 p-4 inline-block rounded-full'
                        >
                          <FaLinkedinIn className='text-[25px]' />
                        </Link>
                        <Link
                          to={"/"}
                          className='bg-[#dddddd31] hover:bg-[#17b978] ease-in duration-200 p-4 inline-block rounded-full'
                        >
                          <FaGitAlt className='text-[25px]' />
                        </Link>
                        <Link
                          to={"/"}
                          className='bg-[#dddddd31] hover:bg-[#17b978] ease-in duration-200 p-4 inline-block rounded-full'
                        >
                          <FaSlack className='text-[25px]' />
                        </Link>
                      </div>
                    </div>
                  </Fade>
                  <div className='download__resume flex justify-center mt-10'>
                    <Fade>
                      <button className='my__btn px-8 py-3  text-lg'>
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
