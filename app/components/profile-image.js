'use client'
import React from 'react';
import {Tilt} from "react-tilt";
import Image from "next/image";
import profilePic from "@/public/images/rdhafiz.jpg"

export default function ProfileImage() {
    const defaultOptions = {
        speed: 3000,
        transition: true,
    }
    return (
        <div className="relative">
            <Tilt options={defaultOptions} className="duration-300">
                <Image
                    className="xl:h-[550px] lg:h-[400px] h-[350px] object-cover w-fit rounded-3xl border-2 border-theme"
                    src={profilePic}
                    quality={100}
                    placeholder="blur" alt="profile"/>
            </Tilt>


            <div
                className="absolute bottom-0 left-0 w-[220px] h-[220px] rounded-full bg-gradient-to-b from-theme to-transparent filter blur-[150px] -ml-5 -mb-5 z-[-1]"></div>
        </div>

    );
}

