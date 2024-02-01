import React from 'react'

export default function Footer(){
    return(
        <>
        <footer id="poppins" className=" footer  mt-10 bg-slate-500  h-[20rem] flex  justify-center">
        <div className="mainfooter w-[80%] bg-slate-500  flex pt-10 justify-between ">
            <div className="1c">
                <ul className="text-white">
                <li className="text-2xl font-semibold ">Quick Links</li>
                <br />
                <li className="leading-relaxed">Home</li>
                <li className="leading-relaxed">
                  <a href="/about">About Us</a>
                </li>
                <li className="leading-relaxed">Achievements</li>
                <li className="leading-relaxed">Site Map</li>
                <li className="leading-relaxed">Event 1</li>
                <li className="leading-relaxed">Event 2</li>
                </ul>
            </div>


            <div className="2c">
                <ul className="text-white">
                    <li className="text-2xl font-semibold " >Social Media</li>
                    <br />
                    <li className="leading-relaxed">Facebook</li>
                    <li className="leading-relaxed">Insatgram</li>
                    <li className="leading-relaxed">
                      <a href="https://www.linkedin.com/in/ieee-ldrp-itr-student-branch-a299692a5/" target="_blank">LinkedIn</a>
                    </li>
                </ul>
            </div>

          <div className="3c">
            <ul className="text-white">

              <li className="text-2xl font-semibold ">IEEE</li>
              <br />

              <li className="leading-relaxed">
                <a href="https://www.ieee.org/" target="_blank">IEEE.org</a>
              </li>

              <li className="leading-relaxed">
              <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank">IEEE Xplore</a>
              </li>

              <li className="leading-relaxed">
                <a href="https://standards.ieee.org/" target="_blank">IEEE Standards</a>
              </li>
              
              <li className="leading-relaxed">
              <a href="https://spectrum.ieee.org/" target="_blank">IEEE Spectrum</a>
              </li>

              <li className="leading-relaxed">
                <a href="https://www.ieee.org/sitemap.html" target="_blank">More IEEE Sites</a>
              </li>

            </ul>
          </div>

          <div className="4c">
            <ul className="text-white  ">
              
              <li className="text-2xl font-semibold ">Contact Us</li>
              <br />
              
              <li>Email <br /> info@ldrp.ac.in</li>
              
              <li className="mt-2">Contact <br /> +91 07923241492</li>
              
              <li className="mt-2">Fax <br />+91 07923241493</li>
            </ul>
          </div>
          
        </div>
        </footer>
        <div className="bg-white flex justify-center">
        <div id="poppins" className="credits w-[95%] flex items-center justify-between  h-10 ">
          <div className="copyright">
            <h1>Copyright © 2024 IEEE STUDENT BRANCH LDRP-ITR </h1>
          </div>

          <div className="sign">
            <h1>Designed & Developed by <span className="text-blue-500"><a href="https://www.linkedin.com/in/ridhampatel2k4/">Ridham hacker Patel</a></span> , <a href="https://www.linkedin.com/in/harshsuthar28/">Harsh Suthar</a>  (Coding Brigades)</h1>
          </div>
        </div>
        </div>

        </>
    )
}