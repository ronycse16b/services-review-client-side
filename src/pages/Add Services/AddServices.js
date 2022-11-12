import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
const AddServices = () => {

    const navigate = useNavigate();
    const [service, setServices] = useState({});

    const handelAddServices = (event) => {

        event.preventDefault();
    
        fetch('http://localhost:5000/services', {
    
    
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(service)
    
    
        }).then(res=>res.json())
         .then(data=>{ console.log(data)
          if(data.acknowledged){
             window.alert('Service Added Successfully')
             event.target.reset();
             navigate('/services');
          }
    
         })
      }
      const handelInputBlur = event => {
    
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service }
        newService[field] = value;
        setServices(newService);
    
      }




    return (
        <div>
             <div className='py-16'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl  text-black mx-auto border shadow-lg">
                    <h1 className="text-2xl font-bold text-center">Add Your Services</h1>
                    <span className='text-red-600 font-bold'></span>
                    <form onSubmit={handelAddServices} className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-black"> Services Name</label>
                            <input onBlur={handelInputBlur} type="text" name="title" placeholder="Services Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-black">Photo url</label>
                            <input onBlur={handelInputBlur} type="text" name="img" placeholder="photoUrl" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-black">Services Price</label>
                            <input onBlur={handelInputBlur} type="text" name="price" placeholder="price" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-black">Details</label>
                            <input onBlur={handelInputBlur} type="text" name="details" id="password" placeholder="product Details" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />

                        </div>
                        <button className="block w-full p-3 btn text-center rounded-sm text-white bg-red-600">Add Services</button>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddServices;