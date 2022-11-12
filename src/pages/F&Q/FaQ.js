import React from 'react';
import q_imge from './q_imge.png';

const FaQ = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">

                    <div>
                        <img
                            className="object-center w-full h-full px-4 sm:h-96"
                            src={q_imge}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-center mr-6">
                        <div className="container flex flex-col justify-center p-4 mx-auto ">
                            <p className="p-2 text-sm  tracking-wider text-sky-800 font-bold  uppercase">QUESTION & ANSWER</p>
                            <h2 className="mb-12 text-4xl font-bold leading-none sm:text-4xl">Common question for<br /> Computer Solution</h2>
                            <div className="flex flex-col  divide-gray-700">
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer focus:underline">It Is Very Expensive Services charge?</summary>
                                    <div className="px-4 pb-4">
                                        <p> No Dear It Is cheap and Best Solution Center .</p>
                                    </div>
                                </details>
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer focus:underline">How can I get Services ?</summary>
                                    <div className="px-4 pb-4">
                                        <p> First You need to login checkout and Pleace And After 30 minites You will Get services Pysicaly or Online </p>
                                    </div>
                                </details>
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer focus:underline"> When Close Services And Open?</summary>
                                    <div className="px-4 pb-4 space-y-2">
                                        <p> 24/7 and 362 days open</p>
                                    </div>
                                </details>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FaQ;