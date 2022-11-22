import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const ContactComponent = () => {
  return (
    <>
      <section className='about__component'>
        <div className='container mx-auto px-14 pt-24 mb-20'>
          <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-5'>
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
                <div className='mt-6'>
                  <div className='flex  items-center gap-2'>
                    <a
                      href='#'
                      className='bg-[#3B5997] p-3 rounded-full hover:bg-[#334f88]'
                    >
                      <FaFacebookF className='text-[20px]' />
                    </a>
                    <span className='bg-[#373D4D] p-3 rounded-full'>
                      <BsTwitter className='text-[20px]' />
                    </span>
                    <span className='bg-[#373D4D] p-3 rounded-full'>
                      <FaLinkedinIn className='text-[20px]' />
                    </span>
                    <span className='bg-[#373D4D] p-3 rounded-full'>
                      <BsGithub className='text-[20px]' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-7'></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
