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

const ServicesComponent = () => {
  return (
    <>
      <section className='service__component'>
        {/* Heading Text */}
        <div className='container mx-auto pt-[80px]'>
          <div className='heading__text flex justify-center relative'>
            <h2 className='text-[60px] font-bold uppercase'>
              Service <span className='text-[#17B978]'>Intro</span>
            </h2>
            <h2 className='text-[120px] font-extrabold opacity-5 absolute top-[-20px]'>
              Observance
            </h2>
          </div>
        </div>
        {/* Service Info */}
        <div className='service__info container mx-auto px-14 mt-24 mb-20'>
          <div className='grid grid-cols-12 gap-6'>
            <div className='item col-span-3'>
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, culpa suscipit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='item col-span-3'>
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, culpa suscipit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='item col-span-3'>
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, culpa suscipit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='item col-span-3'>
              <div className='flex justify-center  px-5 py-6 '>
                <div>
                  <div className='icon__file mb-3 flex justify-center'>
                    <FaPalette className='text-[40px]' />
                  </div>
                  <div className='heading__text flex justify-center'>
                    <h2 className='text-[25px] font-bold'>Graphic Design</h2>
                  </div>
                  <div className='text flex justify-center mt-2'>
                    <p className='text-center text-[15px]'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, culpa suscipit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='item col-span-3'>
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, culpa suscipit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='item col-span-3'>
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, culpa suscipit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='item col-span-3'>
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, culpa suscipit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='item col-span-3'>
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, culpa suscipit?
                    </p>
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

export default ServicesComponent;
