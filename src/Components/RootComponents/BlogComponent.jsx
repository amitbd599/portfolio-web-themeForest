import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Blog from "../../Script/Blog";
const BlogComponent = () => {
  return (
    <>
      <section className='blog__component'>
        {/* Heading Text */}
        <div className='container mx-auto pt-[50px] md:pt-[80px]'>
          <Fade>
            <div className='heading__text flex justify-center relative'>
              <h2 className=' text-[46px] md:text-[60px] font-bold uppercase'>
                Latest <span className='text-[#17B978]'>Blog</span>
              </h2>
              <h2 className='text-[65px] md:text-[120px] font-extrabold opacity-5 absolute top-[0px] md:top-[-20px]'>
                Blog
              </h2>
            </div>
          </Fade>
        </div>
        {/* Blog Info */}
        <div className='blog__info container mx-auto px-5 md:px-14 mt-16 md:mt-24 mb-32 md:mb-20'>
          <Fade>
            <div className='grid grid-cols-12 gp-4 md:gap-10'>
              {Blog.map((item, index) => (
                <div
                  className='item col-span-12 md:col-span-6 mb-12 md:mb-8 '
                  key={index}
                >
                  <div>
                    <div className='img__file rounded-lg relative'>
                      <LazyLoad height={366} offset={100}>
                        <img src={item.img} alt='' />
                      </LazyLoad>
                      <div className='date absolute bottom-[22px] right-[10px]'>
                        <span className='bg-[#17b878] py-4 px-4 rounded-lg'>
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <div className='text__file'>
                      <h2 className='text-[22px] font-semibold mt-5'>
                        {item.title}
                      </h2>
                      <p className='mt-3'>{item.des}</p>
                    </div>

                    <div className=''>
                      <Link to='/single-blog'>
                        <button className='my__btn__two'>
                          <span className='circle' aria-hidden='true'>
                            <span className='icon arrow'></span>
                          </span>
                          <span className='button-text'>Read More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
          {/* Pagination */}
          <div className='pagination flex justify-center mt-6 md:mt-16'>
            <nav aria-label='Page navigation'>
              <ul className='inline-flex space-x-2'>
                <li>
                  <button className='flex items-center justify-center w-10 h-10 text-[#fff] transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-[#373D4D]'>
                    <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                      <path
                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                        fill-rule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className='w-10 h-10 text-white transition-colors duration-150 bg-[#17b978] border border-r-0 border-[#17b978] rounded-full focus:shadow-outline'>
                    1
                  </button>
                </li>
                <li>
                  <button className='w-10 h-10 text-[#fff] transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-[#373D4D]'>
                    2
                  </button>
                </li>
                <li>
                  <button className='w-10 h-10 text-[#fff] transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-[#373D4D]'>
                    3
                  </button>
                </li>
                <li>
                  <button className='flex items-center justify-center w-10 h-10 text-[#fff] transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-[#373D4D]'>
                    <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                      <path
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clip-rule='evenodd'
                        fill-rule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComponent;
