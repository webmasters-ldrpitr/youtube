import React from 'react'
import ieeelogo from "./ieee-logo.png";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';





export default function Navbar(props) {
  return (
    <>
   <nav id="poppins" className=" flex items-center justify-center  h-20 bg-gray-50 ">
      <div className="nav flex items-center w-[80%] justify-between  ">
          <div className="left">
            <Link to="/">
            <img src={ieeelogo} className='h-10 w-full' alt="" /></Link>
          </div>

          <div  className="right pl-[vw]  flex justify-between w-[80%]">
            <div className="text-lg font-semibold">
            <NavLink to="/">  Home </NavLink></div>
            <div className="text-lg font-semibold">
            <NavLink to="/about">  About</NavLink></div>
            <div className="text-lg font-semibold">
            <NavLink to="/events23">  Events'24</NavLink></div>
            <div className="text-lg font-semibold">Achivements</div>
            <div className="text-lg font-semibold">Chapters</div>
            <div className="text-lg font-semibold"> Excomm'23</div>

            
        </div>
        </div>
        </nav>
        <hr className="border-2 border-blue-400" /> 

        
    </>
  )
}
