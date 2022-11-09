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
                                    <summary className="py-2 outline-none cursor-pointer focus:underline">Optio maiores eligendi molestiae totam dolores similique?</summary>
                                    <div className="px-4 pb-4">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                                    </div>
                                </details>
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer focus:underline">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
                                    <div className="px-4 pb-4">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
                                    </div>
                                </details>
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer focus:underline">Magni reprehenderit possimus debitis?</summary>
                                    <div className="px-4 pb-4 space-y-2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                                        <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                                    </div>
                                </details>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nam, provident dolorem unde alias itaque rem iste ut, nemo earum expedita quidem veniam laudantium voluptates animi rerum qui eum fuga!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FaQ;