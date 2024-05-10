// 'use client'
import React from 'react';
import Image from "next/image";
// import mixitup from "mixitup"
import work1 from "@/public/images/w1.png";
import work2 from "@/public/images/w2.png";
import work3 from "@/public/images/equidesk.png";
import work4 from "@/public/images/bilify.png";
// import {useEffect} from "react";

function ProjectsTab() {
    // const container = document.getElementsByClassName('mix-container')
    // useEffect(() => {
    //     const mixer = mixitup('.mix-container');
    // })
    return (
        <div>
            <div className="bg-indigo-100 rounded-full inline-flex mb-10">
                <button type="button" className="rounded-full md:px-10 sm:px-5 px-4 py-3 bg-theme text-white"
                        data-filter="all">All
                </button>
                <button type="button" className="rounded-full md:px-10 sm:px-5 px-4 py-3"
                        data-filter=".category-a">UI/UX
                </button>
                <button type="button" className="rounded-full md:px-10 sm:px-5 px-4 py-3"
                        data-filter=".category-b">Branding
                </button>
                <button type="button" className="rounded-full md:px-10 px-5 py-3" data-filter=".category-c">App
                </button>
            </div>


            <div className="mix-container grid lg:grid-cols-2 gap-5">

                <div data-filter=".category-a"
                     className="bg-[#140c1c] rounded-2xl shadow-lg px-5 pt-5 overflow-hidden h-[500px] relative group">
                    <div className="w-full h-full ">
                        <Image className="w-full object-cover h-full" src={work1} placeholder="blur" alt="work1"/>
                    </div>

                    <div
                        className="absolute w-full h-full top-0 left-0 right-0 bg-black/50 transition-all duration-300 scale-0 group-hover:scale-100"></div>

                    <a href="https://barberly.thethemeai.com"
                       className="text-white absolute bottom-[-100px] group-hover:bottom-[20px] w-full left-0 px-7 pt-5 transition-all duration-500"
                       target={"_blank"}>
                        <h1 className="text-3xl font-bold mb-2">Barberly</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi.</p>
                    </a>
                </div>

                <div data-filter=".category-b"
                     className="bg-[#140c1c] rounded-2xl shadow-lg px-5 pt-5 overflow-hidden h-[500px] relative group">
                <div className="w-full h-full">
                        <Image className="w-full object-cover h-full" src={work2} placeholder="blur" alt="work2"/>
                    </div>

                    <div
                        className="absolute w-full h-full top-0 left-0 right-0 bg-black/50 transition-all duration-300 scale-0 group-hover:scale-100"></div>

                    <a href="https://wahaj.thenewjeddah.com"
                       className="text-white absolute bottom-[-100px] group-hover:bottom-[20px] w-full left-0 px-7 pt-5 transition-all duration-500"
                       target={"_blank"}>
                        <h1 className="text-3xl font-bold mb-2">Wahaj</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi.</p>
                    </a>
                </div>

                <div data-filter=".category-c"
                     className="bg-[#140c1c] rounded-2xl shadow-lg px-5 pt-5 overflow-hidden h-[500px] relative group">
                    <div className="w-full h-full ">
                        <Image className="w-full object-cover h-full" src={work3} placeholder="blur" alt="work3"/>
                    </div>

                    <div
                        className="absolute w-full h-full top-0 left-0 right-0 bg-black/50 transition-all duration-300 scale-0 group-hover:scale-100"></div>

                    <a href="hthttps://staging.equidesk.com"
                       className="text-white absolute bottom-[-100px] group-hover:bottom-[20px] w-full left-0 px-7 pt-5 transition-all duration-500"
                       target={"_blank"}>
                        <h1 className="text-3xl font-bold mb-2">Equidesk</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi.</p>
                    </a>
                </div>

                <div data-filter=".category-d"
                     className="bg-[#140c1c] rounded-2xl shadow-lg px-5 pt-5 overflow-hidden h-[500px] relative group">
                    <div className="w-full h-full ">
                        <Image className="w-full object-cover h-full" src={work4} placeholder="blur" alt="work4"/>
                    </div>

                    <div
                        className="absolute w-full h-full top-0 left-0 right-0 bg-black/50 transition-all duration-300 scale-0 group-hover:scale-100"></div>

                    <a href="https://bilify.thethemeai.com"
                       className="text-white absolute bottom-[-100px] group-hover:bottom-[20px] w-full left-0 px-7 pt-5 transition-all duration-500"
                       target={"_blank"}>
                        <h1 className="text-3xl font-bold mb-2">Bilify</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi.</p>
                    </a>
                </div>

            </div>

        </div>
    );
}

export default ProjectsTab;