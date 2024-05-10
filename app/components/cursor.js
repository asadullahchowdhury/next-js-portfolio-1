'use client'
import AnimatedCursor from "react-animated-cursor"
import dynamic from 'next/dynamic';


export default function Cursor() {

    const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
        ssr: false,
    });
    return (
        <div>
            <AnimatedCursor color="79, 70, 229" />
        </div>
    )

};

