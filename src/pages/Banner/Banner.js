import React from 'react';
import bg2 from './imges/bg2.jpg'

const Banner = () => {
  return (


    <div className="relative ">
      <img
        src={bg2}
        className="absolute inset-0 object-cover w-full h-full min-h-fit "
        alt=""
      />
      <div className="relative  ">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16  ">
          <div className="flex flex-col items-center justify-between xl:flex-row ">
            <div className="w-full max-w-xl   xl:pr-16 xl:w-7/12 lg:mb-8 ">
              <h2 className="max-w-lg mb-12 font-sans lg:text-6xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Computer Solution

              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                We leverage knowledge of local environments to supply our customers with the most effective hardware and software implementations, services, maintenance and additional support.
                Computer Solution is, except the general ICT, specialised in virtualisation, infrastructure, network and security.
              </p>
              <a

                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                <button className="btn btn-outline border-white hover:text-black hover:bg-white text-white ">Find Out More</button>

              </a>
            </div>
            <div className="w-full max-w-xl xl:w-5/12 lg:pt-48   ">
              <img src="https://wordpressriverthemes.com/solion/wp-content/uploads/2021/11/2-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
