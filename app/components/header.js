'use client'
import {useEffect, useState} from "react";


function Header() {
    const [scroll, setScroll] = useState(false)
    const countScroll = () => {
        setScroll(window.scrollY > 100)
    }

    const [activity, setActivity] = useState(false)
    const sidenav = () => {
        setActivity(prevActivity => !prevActivity)
    }

    useEffect(() => {
        if (typeof window !== undefined){
            window.addEventListener('scroll', function () {
                countScroll();
            })
        }
    })


    return (
        <div className={"header w-full p-5 z-10 " + (scroll ? 'fixed-header' : 'absolute')}>
            <div className="container">
                <div className="grid items-center justify-between grid-cols-12">
                    <div className={"logo text-6xl text-stroke font-extrabold " + (activity ? 'z-20 stroke-white text-[transparent]' : 'text-white')}>R</div>

                    <ul className={"col-span-10 flex md:flex-row gap-8 md:text-lg text-2xl font-medium md:justify-end justify-center text-center md:static fixed flex-col md:bg-[transparent] bg-theme/90 md:text-black text-white w-full top-0 bottom-0  md:py-0 py-10 z-10 transition-all duration-300 " + (activity ? 'left-0' : 'left-[-100%]')}>
                        <li>
                            <a href="/#home"
                               className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Home
                                <span
                                    className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300 overf"></span>
                            </a>
                        </li>

                        <li>
                            <a href="/#services"
                               className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Services
                                <span
                                    className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>


                        <li>
                            <a href="/#works"
                               className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Works
                                <span
                                    className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                        <li>
                            <a href="/#resume"
                               className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Resume
                                <span
                                    className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                        <li>
                            <a href="/#skills"
                               className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Skills
                                <span
                                    className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                        <li>
                            <a href="/#contact"
                               className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Contact
                                <span
                                    className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                    </ul>

                    <div className="col-span-10 md:hidden grid justify-items-end">
                        <button className="grid py-2 items-center group gap-1 w-[40px] rounded-xl h-[50px] z-20"
                                onClick={sidenav}>
                            <span
                                className={"rounded-xl origin-right transition-all duration-300 w-full h-[2px] " + (activity ? 'bg-white -rotate-45 relative -top-[1px]' : 'bg-theme')}></span>
                            <span
                                className={"rounded-xl group-hover:scale-x-50 origin-right transition-all duration-300 w-full h-[2px] bg-theme " + (activity ? 'opacity-0' : '')}></span>
                            <span
                                className={"rounded-xl origin-right transition-all duration-300 w-full h-[2px] " + (activity ? 'bg-white rotate-45 relative top-[1px]' : 'bg-theme')}></span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;