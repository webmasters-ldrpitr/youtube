import React from 'react'
import facebook from "./facebook.png"
import instagram from "./instagram.png"
import linkedin from "./linkedin.png"

import CarouselComponent from './CarouselComponent'

// HomeMain component definition
export default function HomeMain(){ 
    return(
        <>
            {/* Main container for the home page */}
            <div className="hero transform translate-x-[12%] mt-5   w-[80vw] ">

                {/* Title section */}
                <h1 id="poppins" className="text-5xl font-semibold tracking-wide">IEEE LDRP-ITR STUDENT BRANCH</h1>
                <p id="poppins" className="mt-5  text-lg text-justify">IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity with more than 125,000 Student members. The members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities. Join us to be a part of cutting-edge technology and network with the best in the field.</p>

                {/* Carousel component */}
                <CarouselComponent></CarouselComponent>

                {/* Join Now button */}
                <div id="poppins" className=" flex  justify-center button mt-10">
                    <button className="bg-indigo-900 text-lg  rounded-xl w-auto  h-[2.8rem] pl-5 pr-5 text-white">Join Now</button>
                </div>

                {/* Our Chapters section */}
                <div id="poppins" className=" mt-10 text-4xl font-semibold text-sky-700 flex justify-center">
                    <h1>Our Chapters</h1>
                </div>

                {/* Chapters grid */}
                <div class="mt-10  grid grid-cols-2 gap-10 place-content-center">
                    {/* First Chapter */}
                    <div className="rounded-xl  flex items-center justify-center">
                        <div className="rounded-xl ml-14 bg-gray-50 w-[43rem] h-[30rem]"></div>
                    </div>

                    {/* Second Chapter */}
                    <div className="rounded-xl ">
                        <div className="rounded-xl  flex items-center justify-center">
                            <div className="rounded-xl mr-14 bg-gray-50 w-[43rem] h-[30rem]"></div>
                        </div>
                    </div>

                    {/* Third Chapter */}
                    <div className="rounded-xl ">
                        <div className="rounded-xl  flex items-center justify-center">
                            <div className="rounded-xl ml-14 bg-gray-50 w-[43rem] h-[30rem]"></div>
                        </div>
                    </div>

                    {/* Fourth Chapter */}
                    <div className="rounded-xl ">
                        <div className="rounded-xl  flex items-center justify-center">
                            <div className="rounded-xl mr-14 bg-gray-50 w-[43rem] h-[30rem]"></div>
                        </div>
                    </div>
                </div>

                {/* Know More button */}
                <div id="poppins" className=" flex  justify-center button mt-16">
                    <button className="bg-indigo-900 text-lg  rounded-xl w-auto  h-[2.8rem] pl-5 pr-5 text-white">Know More</button>
                </div>

                {/* Let’s Stay Connected section */}
                <div id="poppins" className=" mt-10 text-3xl font-semibold text-slate-600 flex justify-center">
                    <h1>Let’s Stay Connected!</h1>
                </div>

                {/* Social Media icons */}
                <div className="flex mt-5 gap-3 justify-center items-center">
                    <a href="https://www.linkedin.com/in/ieee-ldrp-itr-student-branch-a299692a5/" target="_blank"><img id="linkedin" className="h-[3.5rem] w-[3.5rem]" src={linkedin}  alt="" /></a>
                    
                    <img className="h-[4.2rem] w-[4.2rem]" src={instagram} alt="" />
                    <img  className="h-[3.5rem] w-[3.5rem]"src={facebook} alt="" />
                </div>
                
            </div>
        </>
    )
}
