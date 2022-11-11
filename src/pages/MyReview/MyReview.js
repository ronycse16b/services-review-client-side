import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyReview = () => {

    const { user } = useContext(AuthContext);
    const [review, setReview] = useState({});



    useEffect(() => {


        fetch(`http://localhost:5000/review?email=${user.email}`)
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


        </section>
    );
};

export default MyReview;