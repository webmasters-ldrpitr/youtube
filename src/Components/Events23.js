import React from 'react'
import ieeeiam from "./ieeeiam.png";
import ieeetrailblazer from "./ieeetrailblazer.png";

// Events23 component definition
export default function Events23() {
  return (
    <>
      {/* Header section */}
     <div className="about bg-neutral-200 h-10 flex justify-center">
        <div id="poppins" className="info  w-[80%] h-full flex items-center justify-between" >
          <h1>Events'24</h1>
          <h1><span className="text-blue-600">Home</span> / Events'24</h1>
        </div>
      </div>

      {/* Main content section */}
      <div className="transform translate-x-[12%] mt-5 w-[80vw] ">
        <div className="heroinfo ">
          
          {/* Title for Events of 2024 */}

          <div className="flex justify-center">
            <h1 id="poppins" className="text-5xl font-semibold text-slate-600 tracking-wide">Events of 2024</h1>
          </div>

          {/* Cards for Events */}
          <div className='flex justify-center'>
            <div className="cards mt-10 grid gap-x-[3rem] grid-cols-2 grid-rows-1">
              {/* Event 1 */}
              <div className='col-span-1 rounded-xl h-[23rem] w-[35rem] flex items-center   '>
                <img src={ieeeiam} className="h-[100%] rounded-xl  " alt="" />
              </div>
              {/* Event 2 */}
              <div className='bg-gray-200 rounded-xl col-span-1 h-[23rem] w-[35rem]'>
              <img src={ieeetrailblazer} className="h-[100%] rounded-xl  " alt="" />
              </div>

              
            </div>
          </div>

          {/* Event Titles */}
          <div className='flex justify-center'>
            <div id='poppins' className="cardinfo text-lg grid gap-x-[3rem] grid-cols-2 grid-rows-1" >
              <div className='mt-2 flex justify-center   w-[35rem] col-span-1'><h1>Workshop on Idenetity and Access Management</h1></div>
              <div className='mt-2 flex justify-center w-[35rem] col-span-1'><h1>TrailBlazer in Campus</h1></div>
              
            </div>
          </div>
          

          

        </div>
      </div>
    </>
  )
}
