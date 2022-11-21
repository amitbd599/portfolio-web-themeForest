import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Portfolio from "../../Script/Portfolio";
const PortfolioComponent = () => {
  console.log(Portfolio);
  return (
    <>
      <section className='portfolio__component'>
        {/* ========= Personal Info Main Container ========= */}
        <div>
          {/* Heading Text */}
          <div className='container mx-auto pt-[80px]'>
            <Fade>
              <div className='heading__text flex justify-center relative'>
                <h2 className='text-[60px] font-bold uppercase'>
                  Portfolio <span className='text-[#17B978]'>Case</span>
                </h2>
                <h2 className='text-[120px] font-extrabold opacity-5 absolute top-[-20px]'>
                  showcase
                </h2>
              </div>
            </Fade>
          </div>
          {/* Portfolio Info */}
          <div className='container mx-auto px-14 mt-24'>
            <Tabs>
              <div className='portfolio__tabs__body flex justify-center'>
                <div className='portfolio__tabs__nav'>
                  <TabList>
                    <Tab>Web Template</Tab>
                    <Tab>Software</Tab>
                    <Tab>Office</Tab>
                    <Tab>Branding</Tab>
                    <Tab>Photography</Tab>
                  </TabList>
                </div>
              </div>

              <div className='portfolio__tabs__body mt-14 mb-20'>
                {/* For Web Template */}
                <TabPanel>
                  <div className='grid grid-cols-12 gap-10'>
                    {Portfolio?.webTemplate.map((item, index) => (
                      <div className='col-span-4' key={index}>
                        <Fade>
                          <a href={item.link}>
                            <div className='cursor-pointer'>
                              <div className='img__file rounded-md'>
                                <img src={item.img} alt='' />
                                <div className='overflow__intro'>
                                  <div className='flex justify-center items-center h-full'>
                                    <div className='w-full'>
                                      <div className='flex justify-around px-4'>
                                        <h4 className='text-base font-medium'>
                                          {item.title}
                                        </h4>
                                        <p className='text-base'>{item.tag}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </Fade>
                      </div>
                    ))}
                  </div>
                </TabPanel>

                {/* For Web Software */}
                <TabPanel>
                  <div className='grid grid-cols-12 gap-10'>
                    {Portfolio?.software.map((item, index) => (
                      <div className='col-span-4' key={index}>
                        <Fade>
                          <Link to={item.link}>
                            <div className='cursor-pointer'>
                              <div className='img__file rounded-md'>
                                <img src={item.img} alt='' />
                                <div className='overflow__intro'>
                                  <div className='flex justify-center items-center h-full'>
                                    <div className='w-full'>
                                      <div className='flex justify-around px-4'>
                                        <h4 className='text-lg font-medium'>
                                          {item.title}
                                        </h4>
                                        <p className='text-base'>{item.tag}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Fade>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                {/* For Web office */}
                <TabPanel>
                  <div className='grid grid-cols-12 gap-10'>
                    {Portfolio?.office.map((item, index) => (
                      <div className='col-span-4' key={index}>
                        <Fade>
                          <Link to={item.link}>
                            <div className='cursor-pointer'>
                              <div className='img__file rounded-md'>
                                <img src={item.img} alt='' />
                                <div className='overflow__intro'>
                                  <div className='flex justify-center items-center h-full'>
                                    <div className='w-full'>
                                      <div className='flex justify-around px-4'>
                                        <h4 className='text-lg font-medium'>
                                          {item.title}
                                        </h4>
                                        <p className='text-base'>{item.tag}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Fade>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                {/* For Web Branding */}
                <TabPanel>
                  <div className='grid grid-cols-12 gap-10'>
                    {Portfolio?.branding.map((item, index) => (
                      <div className='col-span-4' key={index}>
                        <Fade>
                          <Link to={item.link}>
                            <div className='cursor-pointer'>
                              <div className='img__file rounded-md'>
                                <img src={item.img} alt='' />
                                <div className='overflow__intro'>
                                  <div className='flex justify-center items-center h-full'>
                                    <div className='w-full'>
                                      <div className='flex justify-around px-4'>
                                        <h4 className='text-lg font-medium'>
                                          {item.title}
                                        </h4>
                                        <p className='text-base'>{item.tag}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Fade>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                {/* For Web photography */}
                <TabPanel>
                  <div className='grid grid-cols-12 gap-10'>
                    {Portfolio?.photography.map((item, index) => (
                      <div className='col-span-4' key={index}>
                        <Fade>
                          <Link to={item.link}>
                            <div className='cursor-pointer'>
                              <div className='img__file rounded-md'>
                                <img src={item.img} alt='' />
                                <div className='overflow__intro'>
                                  <div className='flex justify-center items-center h-full'>
                                    <div className='w-full'>
                                      <div className='flex justify-around px-4'>
                                        <h4 className='text-lg font-medium'>
                                          {item.title}
                                        </h4>
                                        <p className='text-base'>{item.tag}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Fade>
                      </div>
                    ))}
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioComponent;
