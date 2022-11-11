import React from 'react';
import {Link} from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleServices = ({single_s}) => {

    const {title,img,details,price,rating,_id} =single_s;
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <PhotoProvider>
            <PhotoView src={img}>
            <img
          src={img}
          className="object-cover w-full h-64"
          alt=""
        />
            </PhotoView>
        </PhotoProvider>
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-bold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              Service
            </a>
            <span className="text-gray-600 ">— Charge: $ {price}</span>
            <span className="text-gray-600">— Ratings:{rating}</span>
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
           {details.length >100?details.slice(0,190)+"...." :details }
          </p>
          <Link to ={`/services/details/${_id}`}
     
            aria-label=""
            className="inline-flex items-center font-semibold  text-deep-purple-accent-400 hover:text-deep-purple-800 btn  bg-slate-900 text-white transition duration-200 "
          >
            View Details
          </Link>
        </div>
      </div>
    );
};

export default SingleServices;