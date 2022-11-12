import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import {useNavigate } from 'react-router-dom';
import './services.css'
import ReviewAll from '../reviewShow/ReviewAll';


const ServiceDetails = () => {
  const navigate = useNavigate();


  const { user } = useContext(AuthContext);

  const [userReview,setUserReview]= useState([])
  const [alert,setAlert] = useState(null);
  const ServicesDetails = useLoaderData();

  const { img, details, rating, title, price,_id } = ServicesDetails;

const handelReview = event=>{

  event.preventDefault()

  const form = event.target;
  const textValue = form.review.value;






 if(!user){
 
  window.confirm("Login First Then review");
  navigate('/login');

 }else{

  const  review = {
    service_review: _id,
    service_name: title,
    service_img: img,
    service_massage: textValue,
    reviwer_name:user.displayName,
    reviwer_img:user.photoURL,
    reviwer_email:user.email,
  
  }

  fetch(`http://localhost:5000/review`, {


    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(review)


  }).then(res=>res.json())
   .then(data=>{ console.log(data)
    if(data.acknowledged){
      event.target.reset();
       setAlert('Review Added Successfully')
      
     
    }

   })
 }


}


  

  return (
    <div>
      <section>
        <div className='bg-fixed bg-details' style={{
          backgroundImage: `url("https://www.technology-solved.com/wp-content/uploads/2020/07/troubleshoot-a-computer-main.jpg")`, height: '300px'
        }}>
          <div className="hero-overlay bg-opacity-70 bg-black opc flex items-center justify-center">
             <h1  className='text-center   text-white text-3xl font-bold'> /Services/Details  /</h1>
            
             </div>
            
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
                 
                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  >
                    Services
                  </a>
                  <h1  className='text-center    text-teal-700 text-3xl font-bold'> {alert}</h1>
                  <span className="text-gray-600">— Charge Price:{price}</span>
                  <span className="text-gray-600">— Rating:{rating}</span>
                </p>
                <a
               
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  {title}
                </a>
                <p className="mb-2 text-gray-700">
                  {details}
                </p>

                <div>
                  <ReviewAll></ReviewAll>
                </div>

                <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                  <form onSubmit={handelReview} className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                      <span className="text-center">How was your experience?</span>

                    </div>
                    <div className="flex flex-col w-full">
                      <input name='review' rows="2" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900 border-2" />
                      <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400 btn-primary">Leave feedback</button>
                    </div>
                  </form>

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