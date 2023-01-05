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
import LazyLoad from "react-lazyload";
import Typed from "react-typed";

const HomeComponent = () => {
  const typeText = [
    "SOFTWARE DEVELOPER",
    "WEB DESIGNER",
    "WEB DEVELOPER",
    "GRAPHIC DESIGNER",
  ];
  return (
    <section className="home__component flex min-h-screen items-center justify-center py-[60px]  md:py-0">
      {/* ========= Home Main Container ========= */}
      <div className="container mx-auto px-5 md:px-10 lg:px-8">
        <div className="home__content ">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 mb-20 md:mt-16 md:mb-0">
              <div className="flex items-center justify-center">
                <div className="text__file">
                  <Fade>
                    <div className="mb-6 flex justify-center md:hidden">
                      <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-full ring-4 ring-[#373D4D] ring-offset-0">
                        <LazyLoad>
                          <img
                            className="object-cover "
                            src="/Assets/Images/profile.png"
                            alt="NetGrid - React Portfolio Template"
                          />
                        </LazyLoad>
                      </div>
                    </div>
                  </Fade>
                  <Fade>
                    <div className="flex justify-center text-center">
                      <div>
                        <h2 className="text-[26px] font-bold sm:text-[32px] md:text-[50px] lg:text-[60px] ">
                          I am
                          <span className="ml-2 text-[#17b978]">
                            Francis Briscoe
                          </span>
                        </h2>
                        <h3 className="h-[60px] text-[20px] font-bold sm:text-[26px] md:text-[30px] lg:text-[40px]">
                          <Typed
                            strings={typeText}
                            typeSpeed={120}
                            backSpeed={100}
                            cursorChar=""
                            loop
                          />
                        </h3>
                      </div>
                    </div>
                  </Fade>
                  <div className="flex justify-center md:mt-4 md:px-[20px] lg:px-[50px]">
                    <Fade>
                      <p className="text-center text-sm	leading-[25px] sm:text-base sm:leading-[35px] ">
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
                    <div className="icon__file mt-10 flex justify-center">
                      <div className="flex gap-2">
                        <Link
                          to={"/"}
                          className="inline-block rounded-full bg-[#dddddd31] p-3 duration-200 ease-in hover:bg-[#1877f2]"
                        >
                          <FaFacebookF className="text-[20px]" />
                        </Link>
                        <Link
                          to={"/"}
                          className="inline-block rounded-full bg-[#dddddd31] p-3 duration-200 ease-in hover:bg-[#1da1f2]"
                        >
                          <FaTwitter className="text-[20px]" />
                        </Link>
                        <Link
                          to={"/"}
                          className="inline-block rounded-full bg-[#dddddd31] p-3 duration-200 ease-in hover:bg-[#0077b5]"
                        >
                          <FaLinkedinIn className="text-[20px]" />
                        </Link>
                        <Link
                          to={"/"}
                          className="inline-block rounded-full bg-[#dddddd31] p-3 duration-200 ease-in hover:bg-[#333]"
                        >
                          <FaGitAlt className="text-[20px]" />
                        </Link>
                        <Link
                          to={"/"}
                          className="inline-block rounded-full bg-[#dddddd31] p-3 duration-200 ease-in hover:bg-[#541554]"
                        >
                          <FaSlack className="text-[20px]" />
                        </Link>
                      </div>
                    </div>
                  </Fade>
                  <div className="download__resume mt-8 flex justify-center">
                    <Fade>
                      <a
                        href="/Assets/pdf/Resume-of-Amit-Biswas-MERN.pdf"
                        download
                      >
                        <button className="my__btn   text-base">
                          Download CV
                        </button>
                      </a>
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
