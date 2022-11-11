import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';



const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('');


    // form data geting
    const formSubmitRegister = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;




        createUser(email, password)
            .then(result => {
                const user = result.user;
                handelUpdateUser(name, photoUrl)
                form.reset()
                setError('')

            })
            .catch(error => {
                setError(error.message);
            });
    }

// user data updated function

    const handelUpdateUser = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl,
        }
        updateUserProfile(profile)
            .than(() => { })
            .catch(() => { })

    }


    return (
        <div>
            <div className='py-16'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl  text-black mx-auto border shadow-lg">
                    <h1 className="text-2xl font-bold text-center">Sign Up Page</h1>
                    <span className='text-red-600 font-bold'>{error}</span>
                    <form onSubmit={formSubmitRegister} className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-black">Name</label>
                            <input type="text" name="name" placeholder="name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-black">Photo Url</label>
                            <input type="text" name="photoUrl" placeholder="photoUrl" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-black">Email</label>
                            <input type="email" name="email" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-black">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />

                        </div>
                        <button className="block w-full p-3 btn text-center rounded-sm text-white bg-red-600">Sign Up</button>
                    </form>


                    <p className="text-xs text-center sm:px-6 text-black"> Have an account?
                        <Link to='/login' rel="noopener noreferrer" href="#" className="underline text-black">Sign in Now</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;