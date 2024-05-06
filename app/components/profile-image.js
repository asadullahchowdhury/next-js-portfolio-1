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
        <Tilt options={defaultOptions} className="duration-300">
            <Image className="xl:h-[550px] h-[400px] w-fit rounded-3xl border-2 border-theme" src={profilePic}
                   placeholder="blur" alt="profile"/>
        </Tilt>
    );
}

