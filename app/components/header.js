'use client'
import {useEffect, useState} from "react";






function Header() {
    const [scroll, setScroll] = useState(false)
    const countScroll= () =>{
        setScroll(window.scrollY > 200)
    }
    useEffect(() => {
        document.addEventListener('scroll', function () {
            countScroll();
        })
    })


    return (
        <div className={"header w-full p-5 z-10 " + (scroll ? 'fixed-header' : 'absolute')}>
            <div className="container">
                <div className="grid items-center justify-between grid-cols-12">
                    <div className="logo text-6xl text-stroke text-white font-extrabold">R</div>

                    <ul className="col-span-10 md:flex hidden gap-8 text-lg font-medium justify-end">
                        <li>
                            <a href="#home"
                               className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Home
                                <span
                                    className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                        <li>
                            <a href="#services"
                               className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Services
                                <span
                                    className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>


                        <li>
                            <a href="#works"
                               className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Works
                                <span
                                    className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                        <li>
                            <a href="#resume"
                               className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Resume
                                <span
                                    className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                        <li>
                            <a href="#skills"
                               className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Skills
                                <span
                                    className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                        <li>
                            <a href="#contact"
                               className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Contact
                                <span
                                    className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                    </ul>

                    <div className="col-span-10 md:hidden grid justify-items-end">
                        <button className="grid py-2 items-center group gap-1 w-[40px] rounded-xl h-[50px]">
                            <span
                                className="rounded-xl origin-right transition-all duration-300 w-full h-[2px] bg-theme"></span>
                            <span
                                className="rounded-xl group-hover:scale-x-50 origin-right transition-all duration-300 w-full h-[2px] bg-theme"></span>
                            <span
                                className="rounded-xl origin-right transition-all duration-300 w-full h-[2px] bg-theme"></span>
                        </button>
                    </div>
                </div>
            </div>

            <button
                className={"w-[50px] h-[50px] rounded-full grid text-theme place-items-center fixed border border-theme right-[40px] bottom-[40px] " + (scroll ? '') }>
                <i className="fa-solid fa-arrow-up-long"></i>
            </button>
        </div>
    );
}

export default Header;