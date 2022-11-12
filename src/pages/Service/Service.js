import React, { useContext } from 'react';

import { useLoaderData, } from "react-router-dom";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SingleServices from './SingleServices';

const Service = () => {



   const service = useLoaderData();


   return (
      <section>
         <div className='bg-fixed ' style={{
            backgroundImage: `url("https://www.technology-solved.com/wp-content/uploads/2020/07/troubleshoot-a-computer-main.jpg")`, height: '300px'
         }}>
            <div className="hero-overlay bg-black  bg-opacity-70 opc flex items-center justify-center">
               <h1 className='text-center   text-white text-3xl font-bold'> All Services  /</h1>
            </div>



         </div>



         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3  lg:max-w-full">
               {

                  service.map(single_s => <SingleServices key={single_s._id} single_s={single_s}></SingleServices>)

               }
            </div>
         </div>
      </section>
   );
};

export default Service;