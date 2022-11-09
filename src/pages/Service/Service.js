import React from 'react';

import {useLoaderData,} from "react-router-dom";
import SingleServices from './SingleServices';

const Service = () => {

const service = useLoaderData();
console.log(Service);

    return (
       <section>
         <div className='bg-fixed' style={{ 
            backgroundImage: `url("https://panci-electronic.com/images/Computer1.jpg")`,height: '300px'
          }}>
            <h1  className='text-center  lg:pt-40  text-black text-3xl font-bold'> All Services  /</h1>
        </div>


        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
       {

service.map(single_s => <SingleServices key={single_s._id} single_s={single_s}></SingleServices>)

       }
      </div>
    </div>
       </section>
    );
};

export default Service;