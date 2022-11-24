/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaSlack,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsTwitter } from "react-icons/bs";
const ContactComponent = () => {
  return (
    <>
      <section className='about__component flex items-center md:h-screen'>
        <div className='container mx-auto px-5 md:px-14 pt-24 mb-32 md:mb-20'>
          <div className='grid grid-cols-12 gap-5 md:gap-10'>
            <div className='col-span-12 md:col-span-5'>
              {/* Location Section */}
              <div>
                <div className='mb-10'>
                  <h2 className='text-2xl inline font-semibold mb-5 mt-2 relative after:content-[""] after:absolute after:w-full after:h-[3px] after:bg-[#17B878] after:left-0 after:bottom-[-6px] '>
                    Get in touch
                  </h2>
                  <p className='mt-8 text-base'>
                    Curabitur vitae nunc sed velit dignissim sodales. Urna neque
                    viverra justo nec. In cursus massa tincidunt ut ornare the
                    butter leo integer.
                  </p>
                </div>
                <div>
                  <div className='flex  items-center gap-4'>
                    <div className='icon bg-[#373D4D] p-4 rounded-full'>
                      <FaMapMarkedAlt className='text-[30px] text-[#17B878]' />
                    </div>
                    <div className='text'>
                      <p className='text-base'>
                        123 Stree New York City, <br /> United States Of America{" "}
                        <br />
                        NY 750065.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4'>
                  <div className='flex  items-center gap-4'>
                    <div className='icon bg-[#373D4D] p-4 rounded-full'>
                      <MdEmail className='text-[30px] text-[#17B878]' />
                    </div>
                    <div className='text'>
                      <p className='text-base'>admin@demo.com</p>
                      <p className='text-base'>info@demo.com</p>
                    </div>
                  </div>
                </div>
                <div className='mt-4'>
                  <div className='flex  items-center gap-4'>
                    <div className='icon bg-[#373D4D] p-4 rounded-full'>
                      <FaPhoneAlt className='text-[30px] text-[#17B878]' />
                    </div>
                    <div className='text'>
                      <p className='text-base'>+ 00 9945-693001</p>
                      <p className='text-base'>+ 00 9638-968556</p>
                    </div>
                  </div>
                </div>
                <div className='mt-10'>
                  <div className='flex  items-center gap-2'>
                    <a
                      href='javascript:void(0)'
                      className='bg-[#373D4D] p-3 rounded-full hover:bg-[#1877f2] ease-linear duration-200 transition-all'
                    >
                      <FaFacebookF className='text-[20px]' />
                    </a>
                    <a
                      href='javascript:void(0)'
                      className='bg-[#373D4D] p-3 rounded-full hover:bg-[#1da1f2] ease-linear duration-200 transition-all'
                    >
                      <BsTwitter className='text-[20px]' />
                    </a>
                    <a
                      href='javascript:void(0)'
                      className='bg-[#373D4D] p-3 rounded-full hover:bg-[#0077b5] ease-linear duration-200 transition-all'
                    >
                      <FaLinkedinIn className='text-[20px]' />
                    </a>
                    <a
                      href='javascript:void(0)'
                      className='bg-[#373D4D] p-3 rounded-full hover:bg-[#333] ease-linear duration-200 transition-all'
                    >
                      <BsGithub className='text-[20px]' />
                    </a>
                    <a
                      href='javascript:void(0)'
                      className='bg-[#373D4D] p-3 rounded-full hover:bg-[#541554] ease-linear duration-200 transition-all'
                    >
                      <FaSlack className='text-[20px]' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-12 md:col-span-7 mt-10 md:mt-0'>
              <div className='md:flex justify-center'>
                <div className='bg-[#373D4D] px-10 py-6 w-full md:mx-5 rounded-lg'>
                  <div className='mb-2'>
                    <label htmlFor='name' className='text-base mb-2 block'>
                      Name :
                    </label>
                    <input
                      id='name'
                      name='name'
                      type='text'
                      placeholder='Enter Your Name ...'
                      className='h-10 w-full rounded-md bg-transparent border border-[#ddd] px-4 text-base focus:outline-none focus:border-[#17B978]'
                    />
                  </div>
                  <div className='mb-2'>
                    <label htmlFor='email' className='text-base mb-2 block'>
                      Email :
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='Enter Your Email ...'
                      className='h-10 w-full rounded-md bg-transparent border border-[#ddd] px-4 text-base focus:outline-none focus:border-[#17B978]'
                    />
                  </div>
                  <div className='mb-2'>
                    <label htmlFor='subject' className='text-base mb-2 block'>
                      Subject :
                    </label>
                    <input
                      id='subject'
                      name='subject'
                      type='text'
                      placeholder='Enter Your Subject ...'
                      className='h-10 w-full rounded-md bg-transparent border border-[#ddd] px-4 text-base focus:outline-none focus:border-[#17B978]'
                    />
                  </div>
                  <div className='mb-2'>
                    <label htmlFor='massage' className='text-base mb-2 block'>
                      Massage :
                    </label>
                    <textarea
                      name='massage'
                      id='massage'
                      cols='1'
                      rows='5'
                      placeholder='Enter Your Massage ...'
                      className=' w-full rounded-md bg-transparent py-2 border border-[#ddd] px-4 text-base focus:outline-none focus:border-[#17B978]'
                    ></textarea>
                  </div>
                  <div className=' pt-2'>
                    <button className='my__btn font-bold text-sm uppercase'>
                      Send Message
                    </button>
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

export default ContactComponent;
