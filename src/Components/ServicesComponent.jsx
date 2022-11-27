import React from "react";
import {
  FaCcAmazonPay,
  FaCommentDots,
  FaGg,
  FaLaptopCode,
  FaLeaf,
  FaLifeRing,
  FaPalette,
  FaRegCopy,
} from "react-icons/fa";
import { Fade } from "react-reveal";

const ServicesComponent = () => {
  return (
    <>
      <section className='service__component min-h-screen flex items-center justify-center'>
        {/* ========= Service Info Main Container ========= */}
        <div>
          {/* Heading Text */}
          <div className='container mx-auto pt-[50px] md:pt-[80px]'>
            <Fade>
              <div className='heading__text flex justify-center relative'>
                <h2 className=' text-[46px] md:text-[60px] font-bold uppercase'>
                  <span className='text-[#17B978]'>My</span> Services
                </h2>
                <h2 className='text-[65px] md:text-[120px] font-extrabold opacity-5 absolute top-[0px] md:top-[-20px]'>
                  Action
                </h2>
              </div>
            </Fade>
          </div>
          {/* Service Info */}
          <div className='service__info container mx-auto px-5 md:px-14 mt-16 md:mt-24 mb-32 md:mb-20'>
            <Fade>
              <div className='grid grid-cols-12 gap-6'>
                <div className='item col-span-12 md:col-span-3'>
                  <div className='flex justify-center  px-5 py-6 '>
                    <div>
                      <div className='icon__file mb-3 flex justify-center'>
                        <FaLaptopCode className='text-[40px]' />
                      </div>
                      <div className='heading__text flex justify-center'>
                        <h2 className='text-[25px] font-bold'>Development</h2>
                      </div>
                      <div className='text flex justify-center mt-2'>
                        <p className='text-center text-[15px]'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto, culpa suscipit?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item col-span-12 md:col-span-3'>
                  <div className='flex justify-center  px-5 py-6 '>
                    <div>
                      <div className='icon__file mb-3 flex justify-center'>
                        <FaLifeRing className='text-[40px]' />
                      </div>
                      <div className='heading__text flex justify-center'>
                        <h2 className='text-[25px] font-bold'>Design</h2>
                      </div>
                      <div className='text flex justify-center mt-2'>
                        <p className='text-center text-[15px]'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto, culpa suscipit?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item col-span-12 md:col-span-3'>
                  <div className='flex justify-center  px-5 py-6 '>
                    <div>
                      <div className='icon__file mb-3 flex justify-center'>
                        <FaLeaf className='text-[40px]' />
                      </div>
                      <div className='heading__text flex justify-center'>
                        <h2 className='text-[25px] font-bold'>UX Design</h2>
                      </div>
                      <div className='text flex justify-center mt-2'>
                        <p className='text-center text-[15px]'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto, culpa suscipit?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item col-span-12 md:col-span-3'>
                  <div className='flex justify-center  px-5 py-6 '>
                    <div>
                      <div className='icon__file mb-3 flex justify-center'>
                        <FaPalette className='text-[40px]' />
                      </div>
                      <div className='heading__text flex justify-center'>
                        <h2 className='text-[25px] font-bold'>
                          Graphic Design
                        </h2>
                      </div>
                      <div className='text flex justify-center mt-2'>
                        <p className='text-center text-[15px]'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto, culpa suscipit?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item col-span-12 md:col-span-3'>
                  <div className='flex justify-center  px-5 py-6 '>
                    <div>
                      <div className='icon__file mb-3 flex justify-center'>
                        <FaCcAmazonPay className='text-[40px]' />
                      </div>
                      <div className='heading__text flex justify-center'>
                        <h2 className='text-[25px] font-bold'>B2B Analysis</h2>
                      </div>
                      <div className='text flex justify-center mt-2'>
                        <p className='text-center text-[15px]'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto, culpa suscipit?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item col-span-12 md:col-span-3'>
                  <div className='flex justify-center  px-5 py-6 '>
                    <div>
                      <div className='icon__file mb-3 flex justify-center'>
                        <FaGg className='text-[40px]' />
                      </div>
                      <div className='heading__text flex justify-center'>
                        <h2 className='text-[25px] font-bold'>SEO</h2>
                      </div>
                      <div className='text flex justify-center mt-2'>
                        <p className='text-center text-[15px]'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto, culpa suscipit?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item col-span-12 md:col-span-3'>
                  <div className='flex justify-center  px-5 py-6 '>
                    <div>
                      <div className='icon__file mb-3 flex justify-center'>
                        <FaRegCopy className='text-[40px]' />
                      </div>
                      <div className='heading__text flex justify-center'>
                        <h2 className='text-[25px] font-bold'>Copy Write</h2>
                      </div>
                      <div className='text flex justify-center mt-2'>
                        <p className='text-center text-[15px]'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto, culpa suscipit?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item col-span-12 md:col-span-3'>
                  <div className='flex justify-center  px-5 py-6 '>
                    <div>
                      <div className='icon__file mb-3 flex justify-center'>
                        <FaCommentDots className='text-[40px]' />
                      </div>
                      <div className='heading__text flex justify-center'>
                        <h2 className='text-[25px] font-bold'>Support</h2>
                      </div>
                      <div className='text flex justify-center mt-2'>
                        <p className='text-center text-[15px]'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto, culpa suscipit?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesComponent;
