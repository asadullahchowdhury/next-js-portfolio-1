'use client'
import React, { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';
export default function Counter() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);
    useEffect(() => {
        const timeoutId1 = setTimeout(() => setValue1(14), 1000);
        const timeoutId2 = setTimeout(() => setValue2(250), 1000);
        const timeoutId3 = setTimeout(() => setValue3(1.5), 1000);
        const timeoutId4 = setTimeout(() => setValue4(200), 1000);
        return () => {
            clearTimeout(timeoutId1);
            clearTimeout(timeoutId2);
            clearTimeout(timeoutId3);
            clearTimeout(timeoutId4);
        };
    }, []);
    return (

        <div
            className="counter grid md:grid-cols-4 grid-cols-2 md:mt-16 mt-10 md:place-items-start place-items-center">
            <div
                className="flex md:flex-row flex-col text-theme items-center gap-3 w-full md:text-start text-center">
                <Odometer value={value1} className="xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-extrabold "></Odometer>
                <p className="text-sm">Years of <br className="md:block hidden"/> experience</p>
            </div>

            <div
                className="flex md:flex-row flex-col text-theme items-center gap-3 w-full md:text-start text-center">
                <Odometer value={value2} className="xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-extrabold "></Odometer>
                <p className="text-sm">Projects <br className="md:block hidden"/> completed</p>
            </div>


            <div
                className="flex md:flex-row flex-col text-theme items-center gap-3 w-full md:text-start text-center">
                <Odometer value={value3}  className="xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-extrabold"></Odometer>
                <p className="text-sm">Happy <br className="md:block hidden"/> clients</p>
            </div>

            <div
                className="flex md:flex-row flex-col text-theme items-center gap-3 w-full md:text-start text-center">
                <Odometer value={value4} className="xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-extrabold "></Odometer>
                <p className="text-sm">Delivered <br className="md:block hidden"/>projects</p>
            </div>

        </div>
    );
}
