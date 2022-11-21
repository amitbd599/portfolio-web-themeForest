import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Fade from "react-reveal/Fade";
import workingExperience from "../../Script/WorkingExperience";
import Experience from "../../Script/Experience";
import Education from "../../Script/Education";
import Skill from "../../Script/skill";
const AboutComponent = () => {
  return (
    <>
      <section className='about__component'>
        {/* ========= Personal Info Main Container ========= */}
        <div>
          {/* Heading Text */}
          <div className='container mx-auto pt-[80px]'>
            <Fade>
              <div className='heading__text flex justify-center relative'>
                <h2 className='text-[60px] font-bold uppercase'>
                  About <span className='text-[#17B978]'>Me</span>
                </h2>
                <h2 className='text-[120px] font-extrabold opacity-5 absolute top-[-20px]'>
                  Resume
                </h2>
              </div>
            </Fade>
          </div>
          {/* Personal Info */}
          <div className='container mx-auto px-14 mt-24'>
            <div className='grid grid-cols-12 gap-10'>
              {/* Left Side */}
              <div className='col-span-6'>
                <div className='flex gap-8'>
                  <Fade>
                    <div className='img__file relative'>
                      <img
                        className='h-48 w-full object-cover md:h-full md:w-[250px] rounded-md'
                        src='/Assets/Images/profile.png'
                        alt=''
                      />
                    </div>
                  </Fade>
                  <div className='text__file '>
                    <Fade>
                      <h3 className='text-2xl font-bold border-b-2 pb-1'>
                        PERSONAL INFOS
                      </h3>
                    </Fade>

                    <div>
                      <Fade>
                        <ul className='mt-2'>
                          <li className='text-sm text-slate-400 mb-2'>
                            Name:
                            <span className='text-base font-bold text-slate-200 pl-2'>
                              Alex Johan
                            </span>
                          </li>
                          <li className='text-sm text-slate-400 mb-2'>
                            Age:
                            <span className='text-base font-bold text-slate-200 pl-2'>
                              27
                            </span>
                          </li>
                          <li className='text-sm text-slate-400 mb-2'>
                            Phone:
                            <span className='text-base font-bold text-slate-200 pl-2'>
                              ++ 88 998866559 - 965
                            </span>
                          </li>
                          <li className='text-sm text-slate-400 mb-2'>
                            Skype:
                            <span className='text-base font-bold text-slate-200 pl-2'>
                              alex_jhohan
                            </span>
                          </li>
                          <li className='text-sm text-slate-400 mb-2'>
                            Email:
                            <span className='text-base font-bold text-slate-200 pl-2'>
                              info@adminbox.com
                            </span>
                          </li>
                          <li className='text-sm text-slate-400 mb-2'>
                            Address:
                            <span className='text-base font-bold text-slate-200 pl-2'>
                              Oakland, CA 94612
                            </span>
                          </li>
                          <li className='text-sm text-slate-400 mb-2'>
                            Languages:
                            <span className='text-base font-bold text-slate-200 pl-2'>
                              French, English, Bangla
                            </span>
                          </li>
                          <li className='text-sm text-slate-400 mb-2'>
                            Nationality:
                            <span className='text-base font-bold text-slate-200 pl-2'>
                              USA
                            </span>
                          </li>
                        </ul>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Side */}
              <div className='col-span-6'>
                <div className='skill__file relative ml-5'>
                  <Fade>
                    <div className='grid grid-cols-12 gap-6'>
                      {Experience.map((item, index) => (
                        <div
                          key={index}
                          className='col-span-4 border border-[#ddd] px-2 py-2 rounded-lg'
                        >
                          <div>
                            <div className='flex justify-center'>
                              <h2 className='text-[40px] font-bold'>
                                {item.number}
                                <span className=' text-[#17B978] font-medium'>
                                  +
                                </span>
                              </h2>
                            </div>
                            <div className='flex justify-center mt-1'>
                              <p className='text-[16px] font-semibold uppercase text-center'>
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========= Skill Info Main Container ========= */}
        <div>
          {/* Heading Text */}
          <div className='container mx-auto pt-[80px]'>
            <Fade>
              <div className='heading__text flex justify-center relative'>
                <h2 className='text-[60px] font-bold uppercase'>
                  <span className='text-[#17B978]'>My</span> Skill
                </h2>
                <h2 className='text-[120px] font-extrabold opacity-5 absolute top-[-20px]'>
                  Experience
                </h2>
              </div>
            </Fade>
          </div>

          {/* Skill Info */}
          <div className='container mx-auto px-14 mt-24 '>
            <div className='skill__items mt-16'>
              <div className='grid grid-cols-12 gap-10'>
                {Skill.map((item, index) => (
                  <Fade>
                    <div
                      className='col-span-2 mb-10 flex justify-center'
                      key={index}
                    >
                      <div style={{ width: 120, height: 120 }}>
                        <CircularProgressbar
                          value={item.number}
                          text={item.number + "%"}
                          strokeWidth='10'
                          styles={buildStyles({
                            pathColor: "#17B978",
                            textColor: "#fff",
                            textSize: "22px",
                          })}
                        />
                        <div className='text__heading flex justify-center mt-3'>
                          <h2 className='text-base font-medium'>
                            {item.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========= Resume Info Main Container ========= */}
        <div>
          {/* Heading Text */}
          <div className='container mx-auto pt-[80px]'>
            <Fade>
              <div className='heading__text flex justify-center relative'>
                <h2 className='text-[60px] font-bold uppercase'>
                  Cover <span className='text-[#17B978]'>Letter</span>
                </h2>
                <h2 className='text-[120px] font-extrabold opacity-5 absolute top-[-20px]'>
                  Resume
                </h2>
              </div>
            </Fade>
          </div>

          {/* Resume Info */}
          <div className='container mx-auto px-14 mt-24 mb-20'>
            <div className='resume__file mt-16'>
              <div className='grid grid-cols-12 gap-10'>
                {/* Left Side Working Experience*/}
                <div className='col-span-6'>
                  <Fade>
                    <div className='heading__text flex items-end'>
                      <div>
                        <img
                          className='w-[50px]'
                          src='/Assets/Images/working.png'
                          alt=''
                        />
                      </div>
                      <h2 className='text-[26px] ml-3 font-semibold relative'>
                        Working Experience
                      </h2>
                    </div>
                  </Fade>

                  <div className='intro__file mt-8 '>
                    {workingExperience.map((item, index) => (
                      <Fade key={index}>
                        <div className='items mb-8 relative'>
                          <div>
                            <h3 className='text-[25px] font-semibold text-[#17B978]'>
                              {item.title}
                              <span className='text-xs text-[#fff] bg-[#373D4D] rounded-full py-0.5 px-4 ml-2'>
                                {item.time}
                              </span>
                            </h3>
                          </div>
                          <p className='text-[18px] font-semibold'>
                            {item.company}
                          </p>
                          <p className='text-base mt-3'>{item.text}</p>
                        </div>
                      </Fade>
                    ))}
                  </div>
                </div>
                {/* Right Side Educational Qualifications*/}
                <div className='col-span-6'>
                  <Fade>
                    <div className='heading__text flex items-end'>
                      <div>
                        <img
                          className='w-[50px]'
                          src='/Assets/Images/college-graduation.png'
                          alt=''
                        />
                      </div>
                      <h2 className='text-[26px] ml-3 font-semibold relative'>
                        Educational Qualifications
                      </h2>
                    </div>
                  </Fade>

                  <div className='intro__file mt-8 '>
                    {Education.map((item, index) => (
                      <Fade key={index}>
                        <div className='items mb-8 relative'>
                          <div>
                            <h3 className='text-[25px] font-semibold text-[#17B978]'>
                              {item.title}
                              <span className='text-xs text-[#fff] bg-[#373D4D] rounded-full py-0.5 px-4 ml-2'>
                                {item.time}
                              </span>
                            </h3>
                          </div>
                          <p className='text-[18px] font-semibold'>
                            {item.institute}
                          </p>
                          <p className='text-base mt-3'>{item.text}</p>
                        </div>
                      </Fade>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
