import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Review from './Review';

const MyReview = () => {

    const { user } = useContext(AuthContext);

    console.log(user);
    const [review, setReview] = useState([]);
console.log(review);


    useEffect(() => {


        fetch(`http://localhost:5000/review?reviwer_email=${user.email}`)
            .then(res => res.json())
            .then(data => setReview(data))




    }, [user?.email])


    return (

        <section>
            <div className='bg-fixed bg-details' style={{
                backgroundImage: `url("https://www.technology-solved.com/wp-content/uploads/2020/07/troubleshoot-a-computer-main.jpg")`, height: '300px'
            }}>
                <div className="hero-overlay bg-opacity-70 bg-black opc flex items-center justify-center">
                      <h1 className='text-5xl text-white'> You Have All { review.length}</h1>
                </div>
            </div>
                    
         
<div className='lg:mt-14'>
{
    review.map(s_review =><Review s_review={s_review} ></Review>)
}
</div>

        </section>
    );
};

export default MyReview;