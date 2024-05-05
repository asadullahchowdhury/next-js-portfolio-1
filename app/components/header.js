import React from 'react';

function Header() {
    return (
        <div className="header w-full p-5">
            <div className="container">
                <div className="grid items-center justify-between md:grid-cols-2">
                    <div className="logo text-6xl text-stroke text-white font-extrabold">R</div>

                    <ul className="md:flex hidden gap-8 text-lg font-medium justify-end">
                        <li>
                            <a href="" className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Home
                            <span className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                        <li>
                            <a href="" className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Services
                            <span className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>


                        <li>
                            <a href="" className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Work
                            <span className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                        <li>
                            <a href="" className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Resume
                            <span className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                        <li>
                            <a href="" className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Skills
                            <span className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                        <li>
                            <a href="" className="hover:text-theme group transition-all duration-300 relative py-3 px-1">Contact
                            <span className="h-[2px] w-full bg-theme absolute bottom-[5px] rounded-xl start-0 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-all duration-300"></span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Header;