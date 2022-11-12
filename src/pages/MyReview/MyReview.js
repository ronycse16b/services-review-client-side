import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Review from './Review';

const MyReview = () => {

    const { user } = useContext(AuthContext);

    const [review, setReview] = useState([]);


    const handelReviewDelete = id => {

        const processed = window.confirm('Are you sure you want to delete?');
        if (processed) {

            fetch(`http://localhost:5000/review/${id}`, {

                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        window.alert('Deleted successfully');
                        const remaining = review.filter(re => re._id !== id);
                        setReview(remaining);
                    }
                    console.log(data);
                })
        }

    }




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
                    {
                        review.length > 0 ?
                            <h1 className='text-5xl text-white'> `You Have Total {review.length} Review` </h1> :
                            <h1 className='text-5xl text-white'> `You Dont Have any Review` </h1>
                    }
                </div>

              
            </div>


            <div className='lg:mt-14'>
                    {
                        review.map(s_review => <Review key={s_review._id} s_review={s_review} handelReviewDelete={handelReviewDelete} ></Review>)
                    }
                </div>

        </section>
    );
};

export default MyReview;