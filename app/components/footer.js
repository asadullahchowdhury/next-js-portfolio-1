import React from 'react';

function Footer() {
    return (
        <div className="container-fluid bg-theme p-5 pt-14 pb-10">
            <div className="container">
                <div className="grid  place-items-center text-white">
                    <h1 className="text-6xl mb-5 font-extrabold">R</h1>
                    
                    <ul className="flex flex-wrap justify-center gap-5 mb-4 font-semibold">
                        <li><a href="">Home</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">Works</a></li>
                        <li><a href="">Resume</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>

                    <p className="text-center mt-3">© 2024 All rights reserved by <a target="_blank" href="https://redishketch.com/"><strong>Redishketch</strong></a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;