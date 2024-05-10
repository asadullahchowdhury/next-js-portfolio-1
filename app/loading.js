import React from 'react';

function Loading() {
    return (

        <div className="bg-black fixed top-0 left-0 right-0 bottom-0 grid place-items-center z-30">
            <div className="container flex justify-center lg:gap-12 gap-5">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    );
}

export default Loading;