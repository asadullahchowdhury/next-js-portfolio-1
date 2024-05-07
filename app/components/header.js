import React from 'react';

function fixedScroll() {

}

function Header() {
    const scroll = false;
    return (
        <div className={`header w-full p-5 z-10 ${scroll === true ? "fixed" : "absolute"}`}>
            <div className="container">
                <div className="grid items-center justify-between grid-cols-2">
                    <div className="logo text-6xl text-stroke text-white font-extrabold">R</div>

                    <ul className="md:flex hidden gap-8 text-lg font-medium justify-end">
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

                    <div className="md:hidden grid justify-items-end">
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

        </div>
    );
}

export default Header;