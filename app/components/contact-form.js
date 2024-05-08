
export default function ContactForm() {
    let services = [
        {id:1, name: 'Branding design'},
        {id:2, name: 'Web design'},
        {id:3, name: 'UI/UX design'},
        {id:4, name: 'App design'},
    ]
    return (
        <div className="bg-white lg:p-10 sm:p-7 p-5 rounded-2xl lg:order-1 order-2">
            <h1 className="text-theme lg:text-[45px] md:text-[40px] text-[35px] font-bold">Let’s work
                together!</h1>
            <p className="mb-10">I design and code beautifully simple things and i love what i do. Just
                simple like
                that!</p>

            <form action="">
                <div className="mt-10 grid grid-cols-12 gap-5">
                    <div className="sm:col-span-6 col-span-12">

                        <div className="">
                            <input type="text" name="first-name" id="first-name"
                                   autoComplete="given-name"
                                   placeholder="First Name"
                                   className="w-full rounded-lg border-0 ring-1 ring-gray-200 p-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-theme transition-all duration-300 focus:outline-0"/>
                        </div>

                    </div>

                    <div className="sm:col-span-6 col-span-12">
                        <div className="">
                            <input type="text" name="last-name" id="last-name" placeholder="Last name"
                                   autoComplete="family-name"
                                   className="w-full rounded-lg border-0 ring-1 ring-gray-200 p-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-theme transition-all duration-300 focus:outline-0"/>
                        </div>
                    </div>


                    <div className="sm:col-span-6 col-span-12">

                        <div className="">
                            <input type="email" name="email" id="email"
                                   autoComplete="new-email"
                                   placeholder="Email address"
                                   className="w-full rounded-lg border-0 ring-1 ring-gray-200 p-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-theme transition-all duration-300 focus:outline-0"/>
                        </div>

                    </div>

                    <div className="sm:col-span-6 col-span-12">
                        <div className="">
                            <input type="text" name="phone" id="phone"
                                   autoComplete="new-phone"
                                   placeholder="phone number"
                                   className="w-full rounded-lg border-0 ring-1 ring-gray-200 p-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-theme transition-all duration-300 focus:outline-0"/>
                        </div>
                    </div>

                    <div className="col-span-12">
                        <div className="">
                            <select name="service" id="service"
                                    className="w-full rounded-lg border-0 ring-1 ring-gray-200 p-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-theme transition-all duration-300 focus:outline-0">
                                <option value="">Choose a service</option>
                                <option value="branding">Branding Design</option>
                                <option value="web">Web Design</option>
                                <option value="ui_ux">UI/UX Design</option>
                                <option value="app">App Design</option>
                            </select>
                        </div>
                    </div>


                    <div className="col-span-12">
                        <div className="">
                                            <textarea name="message" id="message" cols="10" rows="5"
                                                      placeholder="Start typing..."
                                                      className="w-full rounded-lg border-0 resize-none ring-1 ring-gray-200 p-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-theme transition-all duration-300 focus:outline-0"></textarea>
                        </div>
                    </div>


                    <div className="col-span-12">
                        <button type="button"
                                className="md:px-16 px-10 py-3 rounded-full bg-theme text-white transition-all hover:scale-105 active:scale-105 duration-300">
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
