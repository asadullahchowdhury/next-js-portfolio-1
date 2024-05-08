import Image from "next/image";
import ProfileImage from "@/app/components/profile-image";
import ProjectsTab from "@/app/components/projects-tab";
import Counter from "@/app/components/counter";
import ContactForm from "@/app/components/contact-form";
import htmlImage from "@/public/images/html.png"
import cssImage from "@/public/images/css.png"
import sassImage from "@/public/images/sass.png"
import vueImage from "@/public/images/vue.png"
import reactImage from "@/public/images/react.svg"
import angularImage from "@/public/images/angular.png"
import jsImage from "@/public/images/js.svg"
import phpImage from "@/public/images/php.png"
import laravelImage from "@/public/images/laravel.png"
import nodeImage from "@/public/images/node.png"
import mongodbImage from "@/public/images/mongodb.png"
import sqlImage from "@/public/images/sql.png"
import {Russo_One} from "next/font/google";

const russo = Russo_One({subsets: ["latin"], weight: "400"})
export default function Home() {
    // const mixer = mixitup('.mix-container');
    return (
        <main>


            <div className="container-fluid">
                <div className="absolute top-0 right-0 w-[322px] h-[308px] rounded-full bg-gradient-to-b from-theme to-transparent filter blur-[150px] z-[-1]"></div>
            </div>

            {/*Hero section start*/}
            <div className="container px-5 mb-16" id="home">

                <div
                    className="grid sm:grid-cols-2 gap-5 place-items-center lg:pt-52 md:pt-32 sm:pt-28 pt-24">

                    <div className="relative">
                        <div className={russo.className + ' hello-word'}>Hello</div>

                        <h3 className="lg:text-3xl text-2xl lg:mb-5 font-semibold text-theme">I'm Ridwan</h3>
                        <h1 className="xl:text-7xl  lg:text-5xl text-4xl font-extrabold !leading-[1.5] mb-3">Full
                            Stack <br/> Web Developer
                        </h1>
                        <p className="lg:text-lg text-sm lg:leading-7 mb-7">I break down complex user experience
                            problems to
                            create integrity <br/> focussed
                            solutions that
                            connect billions of people</p>

                        <div className="sm:hidden grid place-items-center my-10">
                            <ProfileImage/>
                        </div>


                        <div className="lg:flex gap-5">
                            <a href=""
                               className="px-7 py-2 rounded-full border border-theme group tracking-wide hover:bg-theme text-theme hover:text-white transition-all duration-300">Download
                                CV
                                <i className="fa-solid fa-download ms-3" aria-hidden="true"></i>
                            </a>

                            <ul className="flex gap-3 lg:mt-0 mt-7">
                                <li>
                                    <a href=""
                                       className="grid place-items-center w-[35px] h-[35px] text-theme rounded-full border border-theme hover:text-white group relative transition-all duration-300 z-[1]">
                                        <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                                        <span
                                            className="w-full h-full rounded-full absolute bg-theme scale-0 group-hover:scale-105 z-[-1] transition-all duration-300"></span>
                                    </a>
                                </li>

                                <li>
                                    <a href=""
                                       className="grid place-items-center w-[35px] h-[35px] text-theme rounded-full border border-theme hover:text-white group relative transition-all duration-300 z-[1]">
                                        <i className="fa-brands fa-dribbble" aria-hidden="true"></i>
                                        <span
                                            className="w-full h-full rounded-full absolute bg-theme scale-0 group-hover:scale-105 z-[-1] transition-all duration-300"></span>
                                    </a>
                                </li>

                                <li>
                                    <a href=""
                                       className="grid place-items-center w-[35px] h-[35px] text-theme rounded-full border border-theme hover:text-white group relative transition-all duration-300 z-[1]">
                                        <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                                        <span
                                            className="w-full h-full rounded-full absolute bg-theme scale-0 group-hover:scale-105 z-[-1] transition-all duration-300"></span>
                                    </a>
                                </li>

                                <li>
                                    <a href=""
                                       className="grid place-items-center w-[35px] h-[35px] text-theme rounded-full border border-theme hover:text-white group relative transition-all duration-300 z-[1]">
                                        <i className="fa-brands fa-github" aria-hidden="true"></i>
                                        <span
                                            className="w-full h-full rounded-full absolute bg-theme scale-0 group-hover:scale-105 z-[-1] transition-all duration-300"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="sm:block hidden">
                        <ProfileImage/>
                    </div>


                </div>

                <Counter/>

            </div>
            {/* Hero section end */}

            {/*Service section start*/}
            <div className="container-fluid bg-indigo-50 px-5 lg:py-28 py-10" id="services">
                <div className="container">
                    <h1 className="text-theme lg:text-[45px] md:text-[40px] text-[35px] font-bold">My Quality
                        Services</h1>
                    <p className="mt-4">We put your ideas and thus your wishes in the form of a unique web project that
                        inspires you and your customers.</p>

                    <ul className="mt-10">
                        <li className="border-b border-indigo-200 group hover:bg-theme transition-all duration-300">
                            <a href="" className="grid grid-cols-12 lg:px-7 lg:py-8 p-5">

                                <div
                                    className="lg:col-span-5 col-span-10 text-theme group-hover:text-white flex gap-6 items-center font-bold md:text-3xl text-2xl">
                                    <div className="text-xl">
                                        01
                                    </div>

                                    Branding Design
                                </div>

                                <div className="lg:col-span-5 col-span-12 lg:order-2 order-3 lg:mt-0 mt-4">
                                    <p className="group-hover:text-white">I break down complex user experience problems
                                        to create integrity
                                        focussed
                                        solutions
                                        that connect billions of people</p>
                                </div>

                                <div className="col-span-2 flex justify-end lg:order-3 order-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-arrow-up-right lg:mt-4 fill-theme group-hover:fill-white rotate-90 group-hover:rotate-0 transition-all duration-300"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"></path>
                                    </svg>
                                </div>
                            </a>
                        </li>

                        <li className="border-b border-indigo-200 group hover:bg-theme transition-all duration-300">
                            <a href="" className="grid grid-cols-12 lg:px-7 lg:py-8 p-5">

                                <div
                                    className="lg:col-span-5 col-span-10 text-theme group-hover:text-white flex gap-6 items-center font-bold md:text-3xl text-2xl">
                                    <div className="text-xl">
                                        02
                                    </div>

                                    Web Design
                                </div>

                                <div className="lg:col-span-5 col-span-12 lg:order-2 order-3 lg:mt-0 mt-4">
                                    <p className="group-hover:text-white">I break down complex user experience problems
                                        to create integrity
                                        focussed
                                        solutions
                                        that connect billions of people</p>
                                </div>

                                <div className="col-span-2 flex justify-end lg:order-3 order-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-arrow-up-right lg:mt-4 fill-theme group-hover:fill-white rotate-90 group-hover:rotate-0 transition-all duration-300"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"></path>
                                    </svg>
                                </div>
                            </a>
                        </li>

                        <li className="border-b border-indigo-200 group hover:bg-theme transition-all duration-300">
                            <a href="" className="grid grid-cols-12 lg:px-7 lg:py-8 p-5">

                                <div
                                    className="lg:col-span-5 col-span-10 text-theme group-hover:text-white flex gap-6 items-center font-bold md:text-3xl text-2xl">
                                    <div className="text-xl">
                                        03
                                    </div>

                                    UI/UX Design
                                </div>

                                <div className="lg:col-span-5 col-span-12 lg:order-2 order-3 lg:mt-0 mt-4">
                                    <p className="group-hover:text-white">I break down complex user experience problems
                                        to create integrity
                                        focussed
                                        solutions
                                        that connect billions of people</p>
                                </div>

                                <div className="col-span-2 flex justify-end lg:order-3 order-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-arrow-up-right lg:mt-4 fill-theme group-hover:fill-white rotate-90 group-hover:rotate-0 transition-all duration-300"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"></path>
                                    </svg>
                                </div>
                            </a>
                        </li>

                        <li className="border-b border-indigo-200 group hover:bg-theme transition-all duration-300">
                            <a href="" className="grid grid-cols-12 lg:px-7 lg:py-8 p-5">

                                <div
                                    className="lg:col-span-5 col-span-10 text-theme group-hover:text-white flex gap-6 items-center font-bold md:text-3xl text-2xl">
                                    <div className="text-xl">
                                        04
                                    </div>

                                    App Design
                                </div>

                                <div className="lg:col-span-5 col-span-12 lg:order-2 order-3 lg:mt-0 mt-4">
                                    <p className="group-hover:text-white">I break down complex user experience problems
                                        to create integrity
                                        focussed
                                        solutions
                                        that connect billions of people</p>
                                </div>

                                <div className="col-span-2 flex justify-end lg:order-3 order-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-arrow-up-right lg:mt-4 fill-theme group-hover:fill-white rotate-90 group-hover:rotate-0 transition-all duration-300"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"></path>
                                    </svg>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Service section end */}

            {/*Projects tab section start*/}
            <div className="container px-5 md:my-20 my-10" id="works">
                <h1 className="text-theme lg:text-[45px] md:text-[40px] text-[35px] font-bold">My Recent Works</h1>
                <p className="mt-4 mb-10">We put your ideas and thus your wishes in the form of a unique web project
                    that
                    inspires you and your customers.</p>

                <ProjectsTab/>

            </div>
            {/* Projects tab section end */}

            {/*Experience / Education section start*/}
            <div className="container-fluid bg-indigo-50 px-5 lg:py-28 py-10" id="resume">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:gap-10 gap-5">
                        <div className="left">
                            <h1 className="text-theme lg:text-[45px] md:text-[40px] text-[35px] font-bold mb-10">
                                <i className="fa-solid fa-graduation-cap me-3"></i>My Experience</h1>

                            <div
                                className="bg-white lg:px-10 px-7 py-7 group transition-all grid gap-2 xl:mr-[100px] lg:mr-[50px] rounded-3xl hover:bg-theme lg:mb-7 mb-5">
                                <h3 className="text-theme font-extrabold xl:text-xl text-lg group-hover:text-white transition duration-300">2024
                                    - Present</h3>
                                <h2 className="xl:text-2xl text-xl font-extrabold group-hover:text-white transition duration-300">LEAD
                                    DEVELOPER</h2>
                                <p className="group-hover:text-white transition duration-300">Blockdots, London</p>
                            </div>

                            <div
                                className="bg-white lg:px-10 px-7 py-7 group transition-all grid gap-2 xl:mr-[100px] lg:mr-[50px] rounded-3xl hover:bg-theme lg:mb-7 mb-5">
                                <h3 className="text-theme font-extrabold xl:text-xl text-lg group-hover:text-white transition duration-300">2021
                                    - 2022</h3>
                                <h2 className="xl:text-2xl text-xl font-extrabold group-hover:text-white transition duration-300">
                                    FULL STACK DEVELOPER
                                </h2>
                                <p className="group-hover:text-white transition duration-300">Parsons, The New
                                    School</p>
                            </div>

                            <div
                                className="bg-white lg:px-10 px-7 py-7 group transition-all grid gap-2 xl:mr-[100px] lg:mr-[50px] rounded-3xl hover:bg-theme lg:mb-7 mb-5">
                                <h3 className="text-theme font-extrabold xl:text-xl text-lg group-hover:text-white transition duration-300">2020
                                    - 2021</h3>
                                <h2 className="xl:text-2xl text-xl font-extrabold group-hover:text-white transition duration-300">UI
                                    DESIGNER</h2>
                                <p className="group-hover:text-white transition duration-300">
                                    House of Life, Leeds</p>
                            </div>

                            <div
                                className="bg-white lg:px-10 px-7 py-7 group transition-all grid gap-2 xl:mr-[100px] lg:mr-[50px] rounded-3xl hover:bg-theme lg:mb-7 mb-5">
                                <h3 className="text-theme font-extrabold xl:text-xl text-lg group-hover:text-white transition duration-300">2024
                                    - Present</h3>
                                <h2 className="xl:text-2xl text-xl font-extrabold group-hover:text-white transition duration-300">
                                    JUNIOR GRAPHICS DESIGNER
                                </h2>
                                <p className="group-hover:text-white transition duration-300">Theme Junction, Bursa</p>
                            </div>
                        </div>

                        <div className="right">
                            <h1 className="text-theme lg:text-[45px] md:text-[40px] text-[35px] font-bold mb-10">
                                <i className="fa-solid fa-graduation-cap me-3"></i>My Education</h1>


                            <div
                                className="bg-white lg:px-10 px-7 py-7 group transition-all grid gap-2 xl:mr-[100px] lg:mr-[50px] rounded-3xl hover:bg-theme lg:mb-7 mb-5">
                                <h3 className="text-theme font-extrabold xl:text-xl text-lg group-hover:text-white transition duration-300">2020
                                    - 2023</h3>
                                <h2 className="xl:text-2xl text-xl font-extrabold group-hover:text-white transition duration-300">
                                    PROGRAMMING COURSE
                                </h2>
                                <p className="group-hover:text-white transition duration-300">Harverd University</p>
                            </div>

                            <div
                                className="bg-white lg:px-10 px-7 py-7 group transition-all grid gap-2 xl:mr-[100px] lg:mr-[50px] rounded-3xl hover:bg-theme lg:mb-7 mb-5">
                                <h3 className="text-theme font-extrabold xl:text-xl text-lg group-hover:text-white transition duration-300">2016
                                    - 2020</h3>
                                <h2 className="xl:text-2xl text-xl font-extrabold group-hover:text-white transition duration-300">GRAPHIC
                                    DESIGN COURSE
                                </h2>
                                <p className="group-hover:text-white transition duration-300">University of Denmark</p>
                            </div>

                            <div
                                className="bg-white lg:px-10 px-7 py-7 group transition-all grid gap-2 xl:mr-[100px] lg:mr-[50px] rounded-3xl hover:bg-theme lg:mb-7 mb-5">
                                <h3 className="text-theme font-extrabold xl:text-xl text-lg group-hover:text-white transition duration-300">2012
                                    - 2015</h3>
                                <h2 className="xl:text-2xl text-xl font-extrabold group-hover:text-white transition duration-300">WEB
                                    DESIGN COURSE</h2>
                                <p className="group-hover:text-white transition duration-300">University of
                                    California</p>
                            </div>

                            <div
                                className="bg-white lg:px-10 px-7 py-7 group transition-all grid gap-2 xl:mr-[100px] lg:mr-[50px] rounded-3xl hover:bg-theme lg:mb-7 mb-5">
                                <h3 className="text-theme font-extrabold xl:text-xl text-lg group-hover:text-white transition duration-300">2011
                                    - 2012</h3>
                                <h2 className="xl:text-2xl text-xl font-extrabold group-hover:text-white transition duration-300">DESIGN
                                    & TECHNOLOGY
                                </h2>
                                <p className="group-hover:text-white transition duration-300">Parsons, The New School
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Experience / Education section end */}


            {/*Skills sections start*/}
            <div className="container px-5 md:my-20 my-10" id="skills">
                <h1 className="text-theme lg:text-[45px] md:text-[40px] text-[35px] font-bold">My Skills</h1>
                <p className="mt-4 mb-10">We put your ideas and thus your wishes in the form of a unique web project
                    that
                    inspires you and your customers.</p>

                <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">

                    <div className="text-center">
                        <div
                            className="bg-indigo-50 px-3 pt-10 pb-7 grid place-items-center rounded-3xl group transition-all hover:scale-[1.15] hover:bg-[transparent] duration-500">
                            <div className="grayscale group-hover:scale-[1.2] group-hover:grayscale-0 duration-500">
                                <Image width={60} height={60} className="object-cover" src={htmlImage} alt="html"/>
                            </div>
                            <p className="text-gray-500 text-xl sm:mt-7 mt-3 font-extrabold group-hover:text-theme duration-300">92%</p>
                        </div>
                        <p className="mt-5 text-theme mb-3">HTML</p>
                    </div>

                    <div className="text-center">
                        <div
                            className="bg-indigo-50 px-3 pt-10 pb-7 grid place-items-center rounded-3xl group transition-all hover:scale-[1.15] hover:bg-[transparent] duration-500">
                            <div className="grayscale group-hover:scale-[1.2] group-hover:grayscale-0 duration-500">
                                <Image width={60} height={60} className="object-cover" src={cssImage} alt="css"/>
                            </div>
                            <p className="text-gray-500 text-xl sm:mt-7 mt-3 font-extrabold group-hover:text-theme duration-300">95%</p>
                        </div>
                        <p className="mt-5 text-theme mb-3">CSS</p>
                    </div>

                    <div className="text-center">
                        <div
                            className="bg-indigo-50 px-3 pt-10 pb-7 grid place-items-center rounded-3xl group transition-all hover:scale-[1.15] hover:bg-[transparent] duration-500">
                            <div className="grayscale group-hover:scale-[1.2] group-hover:grayscale-0 duration-500">
                                <Image width={60} height={60} className="object-cover" src={sassImage} alt="sass"/>
                            </div>
                            <p className="text-gray-500 text-xl sm:mt-7 mt-3 font-extrabold group-hover:text-theme duration-300">90%</p>
                        </div>
                        <p className="mt-5 text-theme mb-3">Scss</p>
                    </div>

                    <div className="text-center">
                        <div
                            className="bg-indigo-50 px-3 pt-10 pb-7 grid place-items-center rounded-3xl group transition-all hover:scale-[1.15] hover:bg-[transparent] duration-500">
                            <div className="grayscale group-hover:scale-[1.2] group-hover:grayscale-0 duration-500">
                                <Image width={60} height={60} className="object-cover" src={vueImage} alt="vue"/>
                            </div>
                            <p className="text-gray-500 text-xl sm:mt-7 mt-3 font-extrabold group-hover:text-theme duration-300">92%</p>
                        </div>
                        <p className="mt-5 text-theme mb-3">Vue</p>
                    </div>

                    <div className="text-center">
                        <div
                            className="bg-indigo-50 px-3 pt-10 pb-7 grid place-items-center rounded-3xl group transition-all hover:scale-[1.15] hover:bg-[transparent] duration-500">
                            <div className="grayscale group-hover:scale-[1.2] group-hover:grayscale-0 duration-500">
                                <Image width={60} height={60} className="object-cover" src={reactImage} alt="react"/>
                            </div>
                            <p className="text-gray-500 text-xl sm:mt-7 mt-3 font-extrabold group-hover:text-theme duration-300">89%</p>
                        </div>
                        <p className="mt-5 text-theme mb-3">React</p>
                    </div>

                    <div className="text-center">
                        <div
                            className="bg-indigo-50 px-3 pt-10 pb-7 grid place-items-center rounded-3xl group transition-all hover:scale-[1.15] hover:bg-[transparent] duration-500">
                            <div className="grayscale group-hover:scale-[1.2] group-hover:grayscale-0 duration-500">
                                <Image width={60} height={60} className="object-cover" src={angularImage}
                                       alt="angular"/>
                            </div>
                            <p className="text-gray-500 text-xl sm:mt-7 mt-3 font-extrabold group-hover:text-theme duration-300">91%</p>
                        </div>
                        <p className="mt-5 text-theme mb-3">Angular</p>
                    </div>

                    <div className="text-center">
                        <div
                            className="bg-indigo-50 px-3 pt-10 pb-7 grid place-items-center rounded-3xl group transition-all hover:scale-[1.15] hover:bg-[transparent] duration-500">
                            <div className="grayscale group-hover:scale-[1.2] group-hover:grayscale-0 duration-500">
                                <Image width={60} height={60} className="object-cover" src={jsImage} alt="js"/>
                            </div>
                            <p className="text-gray-500 text-xl sm:mt-7 mt-3 font-extrabold group-hover:text-theme duration-300">93%</p>
                        </div>
                        <p className="mt-5 text-theme mb-3">JavaScript</p>
                    </div>

                    <div className="text-center">
                        <div
                            className="bg-indigo-50 px-3 pt-10 pb-7 grid place-items-center rounded-3xl group transition-all hover:scale-[1.15] hover:bg-[transparent] duration-500">
                            <div className="grayscale group-hover:scale-[1.2] group-hover:grayscale-0 duration-500">
                                <Image width={60} height={60} className="object-cover" src={phpImage} alt="css"/>
                            </div>
                            <p className="text-gray-500 text-xl sm:mt-7 mt-3 font-extrabold group-hover:text-theme duration-300">90%</p>
                        </div>
                        <p className="mt-5 text-theme mb-3">Php</p>
                    </div>

                    <div className="text-center">
                        <div
                            className="bg-indigo-50 px-3 pt-10 pb-7 grid place-items-center rounded-3xl group transition-all hover:scale-[1.15] hover:bg-[transparent] duration-500">
                            <div className="grayscale group-hover:scale-[1.2] group-hover:grayscale-0 duration-500">
                                <Image width={60} height={60} className="object-cover" src={laravelImage}
                                       alt="laravel"/>
                            </div>
                            <p className="text-gray-500 text-xl sm:mt-7 mt-3 font-extrabold group-hover:text-theme duration-300">91%</p>
                        </div>
                        <p className="mt-5 text-theme mb-3">Laravel</p>
                    </div>

                    <div className="text-center">
                        <div
                            className="bg-indigo-50 px-3 pt-10 pb-7 grid place-items-center rounded-3xl group transition-all hover:scale-[1.15] hover:bg-[transparent] duration-500">
                            <div className="grayscale group-hover:scale-[1.2] group-hover:grayscale-0 duration-500">
                                <Image width={60} height={60} className="object-cover" src={nodeImage} alt="node"/>
                            </div>
                            <p className="text-gray-500 text-xl sm:mt-7 mt-3 font-extrabold group-hover:text-theme duration-300">85%</p>
                        </div>
                        <p className="mt-5 text-theme mb-3">Node js</p>
                    </div>

                    <div className="text-center">
                        <div
                            className="bg-indigo-50 px-3 pt-10 pb-7 grid place-items-center rounded-3xl group transition-all hover:scale-[1.15] hover:bg-[transparent] duration-500">
                            <div className="grayscale group-hover:scale-[1.2] group-hover:grayscale-0 duration-500">
                                <Image width={60} height={60} className="object-cover h-[60px]" src={mongodbImage}
                                       alt="mongodb"/>
                            </div>
                            <p className="text-gray-500 text-xl sm:mt-7 mt-3 font-extrabold group-hover:text-theme duration-300">80%</p>
                        </div>
                        <p className="mt-5 text-theme mb-3">MongoDB</p>
                    </div>

                    <div className="text-center">
                        <div
                            className="bg-indigo-50 px-3 pt-10 pb-7 grid place-items-center rounded-3xl group transition-all hover:scale-[1.15] hover:bg-[transparent] duration-500">
                            <div className="grayscale group-hover:scale-[1.2] group-hover:grayscale-0 duration-500">
                                <Image width={60} height={60} className="object-cover" src={sqlImage} alt="sql"/>
                            </div>
                            <p className="text-gray-500 text-xl sm:mt-7 mt-3 font-extrabold group-hover:text-theme duration-300">90%</p>
                        </div>
                        <p className="mt-5 text-theme mb-3">SQL</p>
                    </div>

                </div>
            </div>
            {/* Skills sections end */}

            {/*Contact section start*/}
            <div className="container-fluid bg-indigo-50 px-5 lg:py-28 py-10" id="contact">
                <div className="container">
                    <div className="grid lg:grid-cols-2 lg:gap-10">
                        {/*Contact form start*/}
                       <ContactForm/>
                        {/* Contact form end */}


                        {/*Contact list start*/}

                        <ul className="lg:order-2 order-1 lg:mt-10">
                            <li className="relative mb-10">
                                <div
                                    className="grid place-items-center w-[50px] h-[50px] absolute left-0 rounded-full bg-theme text-white m-[10px]">
                                    <i className="fa-solid fa-phone-volume text-xl"></i>
                                </div>

                                <div className="ps-20 text-gray-500">
                                    Phone
                                    <br/>
                                    <a href="tel:01717863320"
                                       className="font-semibold mt-1 text-lg text-theme group relative">01717863320
                                        <span
                                            className="bg-theme h-[1px] absolute w-full left-0 bottom-[-5px] scale-0 transition-all duration-300 group-hover:scale-100 origin-bottom-right group-hover:origin-bottom-left"></span>
                                    </a>
                                </div>

                            </li>

                            <li className="relative mb-10">
                                <div
                                    className="grid place-items-center w-[50px] h-[50px] absolute left-0 rounded-full bg-theme text-white m-[10px]">
                                    <i className="fa-regular fa-envelope text-xl"></i>
                                </div>

                                <div className="ps-20 text-gray-500">
                                    Email
                                    <br/>
                                    <a href="mailto:ridwanul.hafiz@gmail.com"
                                       className="font-semibold mt-1 text-lg text-theme group relative">ridwanul.hafiz@gmail.com
                                        <span
                                            className="bg-theme h-[1px] absolute w-full left-0 bottom-[-5px] scale-0 transition-all duration-300 group-hover:scale-100 origin-bottom-right group-hover:origin-bottom-left"></span>
                                    </a>
                                </div>

                            </li>

                            <li className="relative mb-10">
                                <div
                                    className="grid place-items-center w-[50px] h-[50px] absolute left-0 rounded-full bg-theme text-white m-[10px]">
                                    <i className="fa-solid fa-map-pin text-xl"></i>
                                </div>

                                <div className="ps-20 text-gray-500">
                                    Address
                                    <br/>
                                    <a href=""
                                       className="font-semibold mt-1 text-lg text-theme group relative">6 th Floor
                                        Flat – 6E, Shahi Tower House no: 25, <br/> Sector: 7, Plot: k/25 New
                                        Market,<br/> Jessore
                                        Sadar Jessore - 7400
                                    </a>
                                </div>

                            </li>

                        </ul>
                        {/* Contact list end */}


                    </div>
                </div>
            </div>
            {/* Contact section end */}


        </main>
    );
}
