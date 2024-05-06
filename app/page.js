import ProfileImage from "@/app/components/profile-image";
import Image from "next/image";
import work1 from "@/public/images/w1.png"
import work2 from "@/public/images/w2.png"
import work3 from "@/public/images/w3.png"
import work4 from "@/public/images/w4.png"
// import mixitup from "mixitup"

export default function Home() {
    // const mixer = mixitup('.mix-container');
    return (
        <main>
            {/*Hero section start*/}
            <div className="container px-5 mb-16">

                <div className="grid md:grid-cols-2 gap-5 place-items-center pt-20">
                    <div className="">
                        <h3 className="text-3xl mb-5 font-semibold text-theme">I'm Ridwan</h3>
                        <h1 className="xl:text-7xl  text-5xl font-extrabold !leading-[1.5] mb-3">Full
                            Stack <br/> Web Developer
                        </h1>
                        <p className="text-lg leading-7 mb-7">I break down complex user experience problems to
                            create integrity <br/> focussed
                            solutions that
                            connect billions of people</p>

                        <div className="md:hidden grid place-items-center my-10">
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

                    <div className="md:block hidden">
                        <ProfileImage/>
                    </div>


                </div>

                <div className="counter grid md:grid-cols-4 grid-cols-2 mt-16">
                    <div className="flex text-theme items-center gap-3">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-extrabold ">14</h1>
                        <p className="text-sm">Years of <br/> experience</p>
                    </div>

                    <div className="flex text-theme items-center gap-3">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-extrabold ">250+</h1>
                        <p className="text-sm">Projects <br/> completed</p>
                    </div>


                    <div className="flex text-theme items-center gap-3">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-extrabold ">1.5k</h1>
                        <p className="text-sm">Happy <br/> clients</p>
                    </div>

                    <div className="flex text-theme items-center gap-3">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-extrabold ">200+</h1>
                        <p className="text-sm">Delivered over <br/> successful projects</p>
                    </div>

                </div>

            </div>
            {/* Hero section end */}

            {/*Service section start*/}
            <div className="container-fluid bg-indigo-50 px-5 py-28">
                <div className="container">
                    <h1 className="text-theme text-[45px] font-bold">My Quality Services</h1>
                    <p className="mt-4">We put your ideas and thus your wishes in the form of a unique web project that
                        inspires you and your customers.</p>

                    <ul className="mt-10">
                        <li className="border-b border-indigo-200 group hover:bg-theme transition-all duration-300">
                            <a href="" className="grid grid-cols-12 px-7 py-8">

                                <div
                                    className="text-theme group-hover:text-white flex gap-6 items-center col-span-5 font-bold text-3xl">
                                    <div className="text-xl">
                                        01
                                    </div>

                                    Branding Design
                                </div>

                                <div className="col-span-5">
                                    <p className="group-hover:text-white">I break down complex user experience problems
                                        to create integrity
                                        focussed
                                        solutions
                                        that connect billions of people</p>
                                </div>

                                <div className="col-span-2 flex justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-arrow-up-right mt-4 fill-theme group-hover:fill-white rotate-90 group-hover:rotate-0 transition-all duration-300"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"></path>
                                    </svg>
                                </div>
                            </a>
                        </li>

                        <li className="border-b border-indigo-200 group hover:bg-theme transition-all duration-300">
                            <a href="" className="grid grid-cols-12 px-7 py-8">

                                <div
                                    className="text-theme group-hover:text-white flex gap-6 items-center col-span-5 font-bold text-3xl">
                                    <div className="text-xl">
                                        02
                                    </div>

                                    Web Design
                                </div>

                                <div className="col-span-5">
                                    <p className="group-hover:text-white">I break down complex user experience problems
                                        to create integrity
                                        focussed
                                        solutions
                                        that connect billions of people</p>
                                </div>

                                <div className="col-span-2 flex justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-arrow-up-right mt-4 fill-theme group-hover:fill-white rotate-90 group-hover:rotate-0 transition-all duration-300"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"></path>
                                    </svg>
                                </div>
                            </a>
                        </li>

                        <li className="border-b border-indigo-200 group hover:bg-theme transition-all duration-300">
                            <a href="" className="grid grid-cols-12 px-7 py-8">

                                <div
                                    className="text-theme group-hover:text-white flex gap-6 items-center col-span-5 font-bold text-3xl">
                                    <div className="text-xl">
                                        03
                                    </div>

                                    UI/UX Design
                                </div>

                                <div className="col-span-5">
                                    <p className="group-hover:text-white">I break down complex user experience problems
                                        to create integrity
                                        focussed
                                        solutions
                                        that connect billions of people</p>
                                </div>

                                <div className="col-span-2 flex justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-arrow-up-right mt-4 fill-theme group-hover:fill-white rotate-90 group-hover:rotate-0 transition-all duration-300"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"></path>
                                    </svg>
                                </div>
                            </a>
                        </li>

                        <li className="border-b border-indigo-200 group hover:bg-theme transition-all duration-300">
                            <a href="" className="grid grid-cols-12 px-7 py-8">

                                <div
                                    className="text-theme group-hover:text-white flex gap-6 items-center col-span-5 font-bold text-3xl">
                                    <div className="text-xl">
                                        04
                                    </div>

                                    Graphics Design
                                </div>

                                <div className="col-span-5">
                                    <p className="group-hover:text-white">I break down complex user experience problems
                                        to create integrity
                                        focussed
                                        solutions
                                        that connect billions of people</p>
                                </div>

                                <div className="col-span-2 flex justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-arrow-up-right mt-4 fill-theme group-hover:fill-white rotate-90 group-hover:rotate-0 transition-all duration-300"
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
            <div className="container px-5 md:my-20 my-10">
                <h1 className="text-theme text-[45px] font-bold">My Recent Works</h1>
                <p className="mt-4 mb-10">We put your ideas and thus your wishes in the form of a unique web project
                    that
                    inspires you and your customers.</p>

                <div className="bg-indigo-100 rounded-full inline-flex mb-10">
                    <button type="button" className="rounded-full md:px-10 sm:px-5 px-4 py-3 bg-theme text-white"
                            data-filter="all">All
                    </button>
                    <button type="button" className="rounded-full md:px-10 sm:px-5 px-4 py-3" data-filter=".category-a">UI/UX
                    </button>
                    <button type="button" className="rounded-full md:px-10 sm:px-5 px-4 py-3"
                            data-filter=".category-b">Branding
                    </button>
                    <button type="button" className="rounded-full md:px-10 px-5 py-3" data-filter=".category-c">App
                    </button>
                </div>


                <div className="mix-container grid xl:grid-cols-2 gap-5">

                    <div data-filter=".category-a" className="bg-[#140c1c] rounded-2xl shadow-lg px-5 pt-5 overflow-hidden h-[500px] relative group">
                        <div className="w-full h-full ">
                            <Image className="w-full object-cover h-full" src={work1} placeholder="blur" alt="work1"/>
                        </div>

                        <a href="https://barberly.thethemeai.com"
                           className="text-white absolute bottom-[-100px] group-hover:bottom-[20px] w-full left-0 px-7 pt-5 transition-all duration-500"
                           target={"_blank"}>
                            <h1 className="text-3xl font-bold mb-2">Barberly</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi.</p>
                        </a>
                    </div>

                    <div data-filter=".category-b"
                         className="bg-[#140c1c] rounded-2xl shadow-lg px-5 pt-5 overflow-hidden h-[500px] relative group">
                        <div className="w-full h-full">
                            <Image className="w-full object-cover h-full" src={work2} placeholder="blur" alt="work2"/>
                        </div>

                        <a href="https://barberly.thethemeai.com"
                           className="text-white absolute bottom-[-100px] group-hover:bottom-[20px] w-full left-0 px-7 pt-5 transition-all duration-500"
                           target={"_blank"}>
                            <h1 className="text-3xl font-bold mb-2">Barberly</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi.</p>
                        </a>
                    </div>

                    <div data-filter=".category-c"
                         className="bg-[#140c1c] rounded-2xl shadow-lg px-5 pt-5 overflow-hidden h-[500px] relative group">
                        <div className="w-full h-full ">
                            <Image className="w-full object-cover h-full" src={work3} placeholder="blur" alt="work3"/>
                        </div>

                        <a href="https://barberly.thethemeai.com"
                           className="text-white absolute bottom-[-100px] group-hover:bottom-[20px] w-full left-0 px-7 pt-5 transition-all duration-500"
                           target={"_blank"}>
                            <h1 className="text-3xl font-bold mb-2">Barberly</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi.</p>
                        </a>
                    </div>

                    <div data-filter=".category-d"
                         className="bg-[#140c1c] rounded-2xl shadow-lg px-5 pt-5 overflow-hidden h-[500px] relative group">
                        <div className="w-full h-full ">
                            <Image className="w-full object-cover h-full" src={work4} placeholder="blur" alt="work4"/>
                        </div>

                        <a href="https://barberly.thethemeai.com"
                           className="text-white absolute bottom-[-100px] group-hover:bottom-[20px] w-full left-0 px-7 pt-5 transition-all duration-500"
                           target={"_blank"}>
                            <h1 className="text-3xl font-bold mb-2">Barberly</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi.</p>
                        </a>
                    </div>

                </div>


            </div>
            {/* Projects tab section end */}
        </main>
    );
}
