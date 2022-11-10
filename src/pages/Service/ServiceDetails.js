import React from 'react';
import {useLoaderData} from 'react-router-dom';


const ServiceDetails = () => {

  const ServicesDetails = useLoaderData();
  const {img,details,rating,title,price} =ServicesDetails;

    return (
        <div>
            <section>
         <div className='bg-fixed' style={{ 
            backgroundImage: `url("https://panci-electronic.com/images/Computer1.jpg")`,height: '300px'
          }}>
            <h1  className='text-center  lg:pt-40  text-black text-3xl font-bold'> All Services  /</h1>
        </div>


        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="">
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img
          src={img}
          className="object-cover w-full h-96"
          alt=""
        />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              Services 
            </a>
            <span className="text-gray-600">— Charge Price:{price}</span>
            <span className="text-gray-600">— Rating:{rating}</span>
          </p>
          <a
            href="/"
            aria-label="Category"
            title="Visit the East"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            {title}
          </a>
          <p className="mb-2 text-gray-700">
            {details}
          </p>
         
          <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex flex-col items-center w-full">
		<h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
		<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">How was your experience?</span>
			
		</div>
		<div className="flex flex-col w-full">
			<textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
			<button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400 btn-primary">Leave feedback</button>
		</div>
	</div>
	
</div>
        </div>
        
      </div>
     
      </div>
   
    </div>
       </section>
       
        </div>
    );
};

export default ServiceDetails;