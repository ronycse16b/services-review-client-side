import React from 'react';
import {Link} from 'react-router-dom'

const SingleBannerService = ({single_s}) => {

const {title,img,details,price,rating,_id} =single_s;

    return (
        <div>
             <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={img}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-bold tracking-wide uppercase">
              <a
             
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
           
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {title}
              
            </a>
            <p className="mb-2 text-gray-700">
             {details.length >100?details.slice(0,180)+"...." :details }
            </p>
            <Link to={`/services/details/${_id}`}
           
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
        </div>
    );
};

export default SingleBannerService;