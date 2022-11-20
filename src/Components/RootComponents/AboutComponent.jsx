import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import profileImg from "../../Assets/Images/profile.png";
const AboutComponent = () => {
  const experience = [
    {
      number: 10,
      title: "numberS OF EXPERIENCE",
    },
    {
      number: 360,
      title: "COMPLETED PROJECTS",
    },
    {
      number: 332,
      title: "ATTEND MEETINGS",
    },
    {
      number: 630,
      title: "MAKE BIG SOFTWARE",
    },
    {
      number: 890,
      title: "HAPPY CUSTOMERS",
    },
    {
      number: 65,
      title: "INTERNATIONAL AWARDS WON",
    },
  ];
  const skill = [
    {
      number: 88,
      title: "HTML5",
    },
    {
      number: 85,
      title: "CSS3",
    },
    {
      number: 80,
      title: "JavaScript",
    },
    {
      number: 75,
      title: "TypeScript",
    },
    {
      number: 90,
      title: "ReactJS",
    },
    {
      number: 80,
      title: "NextJS",
    },
    {
      number: 70,
      title: "NodeJS",
    },
    {
      number: 80,
      title: "MongoDB",
    },
    {
      number: 70,
      title: "Git",
    },
    {
      number: 88,
      title: "ExpressJS",
    },
    {
      number: 90,
      title: "PhotoShop",
    },
    {
      number: 75,
      title: "Linux",
    },
  ];
  return (
    <>
      <section className='about__component'>
        {/* Heading Text */}
        <div className='container mx-auto pt-[80px]'>
          <div className='heading__text flex justify-center relative'>
            <h2 className='text-[60px] font-bold uppercase'>
              About <span className='text-[#17B978]'>Me</span>
            </h2>
            <h2 className='text-[120px] font-extrabold opacity-5 absolute top-[-20px]'>
              Resume
            </h2>
          </div>
        </div>
        {/* Personal Info */}
        <div className='container mx-auto px-14 mt-24'>
          <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-6'>
              <div className='flex gap-8'>
                <div className='img__file relative'>
                  <img
                    className='h-48 w-full object-cover md:h-full md:w-[250px] rounded-md'
                    src={profileImg}
                    alt=''
                  />
                </div>
                <div className='text__file '>
                  <h3 className='text-2xl font-bold border-b-2 pb-1'>
                    PERSONAL INFOS
                  </h3>
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
                </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div className='skill__file relative ml-5'>
                <div className='grid grid-cols-12 gap-6'>
                  {experience.map((item, index) => (
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
              </div>
            </div>
          </div>
        </div>

        {/* Heading Text */}

        <div className='container mx-auto pt-[80px]'>
          <div className='heading__text flex justify-center relative'>
            <h2 className='text-[60px] font-bold uppercase'>
              <span className='text-[#17B978]'>My</span> Skill
            </h2>
            <h2 className='text-[120px] font-extrabold opacity-5 absolute top-[-20px]'>
              Experience
            </h2>
          </div>
        </div>

        {/* Skill Info */}
        <div className='container mx-auto px-14 mt-24 mb-20'>
          <div className='skill__items mt-16'>
            <div className='grid grid-cols-12 gap-10'>
              {skill.map((item, index) => (
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
                      <h2 className='text-base font-medium'>{item.title}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
