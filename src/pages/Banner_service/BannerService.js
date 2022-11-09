import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import SingleBannerService from './SingleBannerService';

const BannerService = () => {
const [services , setService] = useState([]);
console.log(services);
useEffect(()=>{

fetch('http://localhost:5000/banner_services')
 .then(res => res.json())
 .then(data => setService(data))




} ,[])



    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
       
     {
       services.map(single_s => <SingleBannerService key={single_s._id} single_s={single_s}></SingleBannerService>)

     }
      
   

      </div>
      <div className='flex justify-center mt-4'>
      <Link to='/services' className='btn btn-outline '>See All Services</Link>
      </div>
    </div>
    );
};

export default BannerService;