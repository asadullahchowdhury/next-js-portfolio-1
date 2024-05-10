
import React from 'react';

function Counter() {
    return (
        <div
            className="counter grid md:grid-cols-4 grid-cols-2 md:mt-16 mt-10 md:place-items-start place-items-center">
            <div
                className="flex md:flex-row flex-col text-theme items-center gap-3 w-full md:text-start text-center">
                <h1 className="xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-extrabold ">14</h1>
                <p className="text-sm">Years of <br className="md:block hidden"/> experience</p>
            </div>

            <div
                className="flex md:flex-row flex-col text-theme items-center gap-3 w-full md:text-start text-center">
                <h1 className="xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-extrabold ">250+</h1>
                <p className="text-sm">Projects <br className="md:block hidden"/> completed</p>
            </div>


            <div
                className="flex md:flex-row flex-col text-theme items-center gap-3 w-full md:text-start text-center">
                <h1 className="xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-extrabold">1.5k</h1>
                <p className="text-sm">Happy <br className="md:block hidden"/> clients</p>
            </div>

            <div
                className="flex md:flex-row flex-col text-theme items-center gap-3 w-full md:text-start text-center">
                <h1 className="xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-extrabold ">200+</h1>
                <p className="text-sm">Delivered over <br className="md:block hidden"/> successful projects</p>
            </div>

        </div>

    );
}

export default Counter;