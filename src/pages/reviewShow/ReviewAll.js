import React, { useContext, useEffect, useState } from 'react';
import ReAll from './ReAll';


const ReviewAll = ({ServicesDetails}) => {

    const [reviewAll, setReviewAll] = useState([]);




    useEffect(() => {


        fetch(`http://localhost:5000/review/${ServicesDetails._id}`)
            .then(res => res.json())
            .then(data => setReviewAll(data))




    }, [])



    return (
        <div className=" flex flex-col w-full  p-6 rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
          {
            reviewAll.map(review => <ReAll key={review._id}  review={review} ></ReAll>)
          }
       </div>
    );
};

export default ReviewAll;