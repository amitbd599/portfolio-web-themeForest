import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleBlogComponents = () => {
  return (
    <>
      <section className='about__component'>
        <div className='container mx-auto px-14 pt-24 mb-20'>
          <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-8'>
              <div className=' bg-[#373D4D] rounded-lg pb-8'>
                <div className='img__file flex justify-center relative'>
                  <img
                    className='object-cover w-full rounded-lg'
                    src='/Assets/Images/blog/blog_7.png'
                    alt=''
                  />
                  <div className='date absolute bottom-[20px] right-[10px]'>
                    <span className='bg-[#17b878] px-3 py-3 rounded-lg'>
                      January 15, 2022
                    </span>
                  </div>
                </div>
                <div className='text__file mt-8 mb-6 mx-8'>
                  <h2 className='text-3xl font-semibold'>
                    12 Common JavaScript Functions You Need to Know.
                  </h2>
                </div>
                <div className='des mx-8'>
                  <p>
                    Fowler covers a range of topics including design,
                    refactoring, NoSQL, DSL, continuous delivery, microservices
                    and agile development. With posts ranging from every few
                    days to once a week, he also includes a very useful
                    reference index (a cross between a blog and a wiki, or a
                    "bliki") containing well over 400 entries to date. A List
                    Apart is a multi-faceted blog that has a wealth of
                    information in several formats. You can read the traditional
                    blog posts, watch interviews with Web development experts,
                    or engage in a Q&A discussion with "Dr. Web" if you have
                    queries about the industry. Many programming bloggers have
                    started here before moving into their own space — meaning
                    you're getting top notch content from future stars in the
                    field.
                  </p>
                  <br />
                  <p>
                    Fowler covers a range of topics including design,
                    refactoring, NoSQL, DSL, continuous delivery, microservices
                    and agile development. With posts ranging from every few
                    days to once a week, he also includes a very useful
                    reference index (a cross between a blog and a wiki, or a
                    "bliki") containing well over 400 entries to date.
                  </p>
                  <br />
                  <p>
                    An upgrade to an integral part of your business software can
                    pose great challenges if you’re a global company with
                    thousands of employees. Like many organizations faced with a
                    software upgrade project, Georg Fischer Piping Systems was
                    looking for a solution to help them with training and
                    onboarding to drive the success of the project and to ensure
                    user adoption among their employees. With more than 1000
                    employees depending on the CRM system across seven different
                    language versions, this was no small feat. Gerog Fischer
                    Piping Systems decided to upgrade their CRM system by moving
                    globally from Microsoft Dynamics 2013 to Microsoft Dynamics
                    365. By onboarding 34 countries with 7 languages, GF Piping
                    Systems understood the need for a tool for CRM-embedded
                    training content and user-friendly knowledge transfer.
                  </p>
                  <br />
                  <h4 className='text-2xl font-semibold'>What You'll Get</h4>
                  <br />
                  <p>
                    Georg Fischer is a global industrial engineering company
                    with more than 14,000 employees and three divisions. GF
                    Piping Systems itself is located in 34 countries with more
                    than 6,800 employees and generated sales of CHF 1.802
                    billion in 2019. With more than 60,000 products, GF Piping
                    Systems can offer complete system solutions. With Microsoft
                    supplying updates to their software every six months, this
                    results in a constant need for updates to the training
                    material. At Georg Fischer, Anja Schmid, Junior CRM
                    Community Manager, and her team use ClickLearn to produce
                    their training material, which includes videos and user
                    documentation. All their training is based on the content
                    they produce using ClickLearn. Without the Replay function
                    and the multilanguage support, Anja and her team would never
                    be able to stay on top of their training material, let alone
                    have time to create the seven language versions to support
                    the different languages of their CRM.
                  </p>
                  <br />
                </div>
                <div className='comment__section'></div>
              </div>
            </div>
            <div className='col-span-4 pl-2'>
              {/* Search Intro */}
              <div className='search__box mb-8'>
                <div className='relative text-gray-600 w-full'>
                  <input
                    type='search'
                    name='search'
                    placeholder='Search'
                    className='bg-white w-full h-12 px-5 pr-10 rounded-full text-sm focus:outline-none'
                  />
                  <button
                    type='submit'
                    className='absolute right-0 top-0 p-[16px]'
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>

              {/* Recent Blog */}
              <div className='recent__blog'>
                <div>
                  <h2 className='text-[22px] inline font-medium mb-5 mt-2 relative after:content-[""] after:absolute after:w-full after:h-[3px] after:bg-[#17B878] after:left-0 after:bottom-[-6px] '>
                    Recent Post
                  </h2>
                </div>
                <div className='mt-8'>
                  <div className='items flex justify-between gap-4 mb-5'>
                    <div className='img__file w-1/3 rounded-md'>
                      <img
                        className='rounded-md w-full h-full '
                        src='/Assets/Images/blog/blog_1.png'
                        alt=''
                      />
                    </div>
                    <div className='text__file w-2/3'>
                      <Link
                        to={"/single-blog"}
                        className='text-sm font-medium inline-block hover:text-[#17B878] transition-all duration-200 ease-linear'
                      >
                        Before diving into how they operate with their powers
                        combined.
                      </Link>
                      <span className='text-[12px] inline-block mt-1 text-slate-300'>
                        January 15, 2022
                      </span>
                    </div>
                  </div>
                  <div className='items flex justify-between gap-4 mb-5'>
                    <div className='img__file w-1/3 rounded-md'>
                      <img
                        className='rounded-md w-full h-full '
                        src='/Assets/Images/blog/blog_2.png'
                        alt=''
                      />
                    </div>
                    <div className='text__file w-2/3'>
                      <Link
                        to={"/single-blog"}
                        className='text-sm font-medium inline-block hover:text-[#17B878] transition-all duration-200 ease-linear'
                      >
                        Unlike other JS frameworks, React doesn’t tell you what
                        to do?
                      </Link>
                      <span className='text-[12px] inline-block mt-1 text-slate-300'>
                        January 15, 2022
                      </span>
                    </div>
                  </div>
                  <div className='items flex justify-between gap-4 mb-5'>
                    <div className='img__file w-1/3 rounded-md'>
                      <img
                        className='rounded-md w-full h-full '
                        src='/Assets/Images/blog/blog_3.png'
                        alt=''
                      />
                    </div>
                    <div className='text__file w-2/3'>
                      <Link
                        to={"/single-blog"}
                        className='text-sm font-medium inline-block hover:text-[#17B878] transition-all duration-200 ease-linear'
                      >
                        Unlike other JS frameworks, React doesn’t tell you what
                        to do?
                      </Link>
                      <span className='text-[12px] inline-block mt-1 text-slate-300'>
                        January 15, 2022
                      </span>
                    </div>
                  </div>
                  <div className='items flex justify-between gap-4 mb-5'>
                    <div className='img__file w-1/3 rounded-md'>
                      <img
                        className='rounded-md w-full h-full '
                        src='/Assets/Images/blog/blog_6.png'
                        alt=''
                      />
                    </div>
                    <div className='text__file w-2/3'>
                      <Link
                        to={"/single-blog"}
                        className='text-sm font-medium inline-block hover:text-[#17B878] transition-all duration-200 ease-linear'
                      >
                        Unlike other JS frameworks, React doesn’t tell you what
                        to do?
                      </Link>
                      <span className='text-[12px] inline-block mt-1 text-slate-300'>
                        January 15, 2022
                      </span>
                    </div>
                  </div>
                  <div className='items flex justify-between gap-4 mb-5'>
                    <div className='img__file w-1/3 rounded-md'>
                      <img
                        className='rounded-md w-full h-full '
                        src='/Assets/Images/blog/blog_5.png'
                        alt=''
                      />
                    </div>
                    <div className='text__file w-2/3'>
                      <Link
                        to={"/single-blog"}
                        className='text-sm font-medium inline-block hover:text-[#17B878] transition-all duration-200 ease-linear'
                      >
                        Unlike other JS frameworks, React doesn’t tell you what
                        to do?
                      </Link>
                      <span className='text-[12px] inline-block mt-1 text-slate-300'>
                        January 15, 2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag Section */}
              <div className='tag pt-5'>
                <h2 className='text-[22px] inline font-medium mb-5 mt-2 relative after:content-[""] after:absolute after:w-full after:h-[3px] after:bg-[#17B878] after:left-0 after:bottom-[-6px] '>
                  Tags
                </h2>
                <div className='mt-8'>
                  <button className='bg-transparent  border-[#17B878] border-[1px] px-4 py-1.5 rounded-md mx-1 mb-3 text-base text-[#fff] hover:bg-[#17B878] hover:text-[#fff] transition-all duration-200 ease-linear '>
                    NodeJS
                  </button>
                  <button className='bg-transparent  border-[#17B878] border-[1px] px-4 py-1.5 rounded-md mx-1 mb-3 text-base text-[#fff] hover:bg-[#17B878] hover:text-[#fff] transition-all duration-200 ease-linear '>
                    JavaScript
                  </button>
                  <button className='bg-transparent  border-[#17B878] border-[1px] px-4 py-1.5 rounded-md mx-1 mb-3 text-base text-[#fff] hover:bg-[#17B878] hover:text-[#fff] transition-all duration-200 ease-linear '>
                    ReactJS
                  </button>
                  <button className='bg-transparent  border-[#17B878] border-[1px] px-4 py-1.5 rounded-md mx-1 mb-3 text-base text-[#fff] hover:bg-[#17B878] hover:text-[#fff] transition-all duration-200 ease-linear '>
                    PHP
                  </button>
                  <button className='bg-transparent  border-[#17B878] border-[1px] px-4 py-1.5 rounded-md mx-1 mb-3 text-base text-[#fff] hover:bg-[#17B878] hover:text-[#fff] transition-all duration-200 ease-linear '>
                    Server
                  </button>
                  <button className='bg-transparent  border-[#17B878] border-[1px] px-4 py-1.5 rounded-md mx-1 mb-3 text-base text-[#fff] hover:bg-[#17B878] hover:text-[#fff] transition-all duration-200 ease-linear '>
                    Development
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogComponents;
