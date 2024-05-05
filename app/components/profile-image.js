'use client'
import React from 'react';
import {Tilt} from "react-tilt";
import Image from "next/image";
import profilePic from "@/public/images/rdhafiz.jpg"

function ProfileImage() {
    return (
        <Tilt>
            <Image className="xl:h-[550px] h-[400px] w-fit rounded-3xl border-2 border-theme" src={profilePic} alt="profile"/>
        </Tilt>
    );
}

export default ProfileImage;
