'use client'
import React, {useEffect, useState} from 'react';

function ScrollTopBtn() {
    const [scroll, setScroll] = useState(false)
    const countScroll = () => {
        setScroll(window.scrollY > 200)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', function () {
            countScroll();
        })
    })
    return (
        <button
            className={"w-[50px] h-[50px] rounded-full grid text-theme group place-items-center fixed border border-theme right-[40px] bottom-0 transition-all duration-300 hover:shadow-xl bg-white/50 " + (scroll ? 'opacity-100 visible scroll-top -translate-y-5' : 'invisible opacity-0 translate-y-10')}
            onClick={scrollToTop}>
            <i className="fa-solid fa-arrow-up-long group-hover:scale-110 transition-all duration-300"></i>
        </button>
    );
}

export default ScrollTopBtn;