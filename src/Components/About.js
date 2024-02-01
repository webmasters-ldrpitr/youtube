import React from 'react'

import hierarchy from './IEEE-Hierarchy.png'




export default function About() {
    return (
        <>
        {/* <Navbar></Navbar>   */}
            <div className="about bg-neutral-200 h-10 flex justify-center">
            <div id="poppins" className="info  w-[80%] h-full flex items-center justify-between" >
                <h1>About</h1>
                <h1><span className="text-blue-600">Home</span> / About</h1>

            </div>
            </div>

            <div className="transform translate-x-[12%] mt-5   w-[80vw] ">
                <div className="heroinfo">
                    <div className="flex justify-center">
                    <h1 id="poppins" className="text-5xl font-semibold tracking-wide">IEEE LDRP-ITR OVERVIEW</h1>
                    </div>
                    
                    <p id="poppins" className="mt-5  text-lg text-justify">Since the past 125 years IEEE has provided a platform for the students throughout the world to explore new possibilities in the field of engineering through innovation and implementation. IEEE activities promote research culture by awarding research grants and publishing research papers. The penchant for discovering new horizons in research areas and exploring new technologies has lead to the formation of the IEEE student chapter of LDRP-ITR. Since its inception the aim of our student branch has been to organize technical and non-technical events during the course of time. By organizing such activities the students not only gain sound technical knowledge but are imbibed with leadership skills and team work. These qualities form an integral part of their multifaceted development. Our endeavor is to organize IEEE activities on a regular basis along with healthy participation from members of various student branches.</p>
                    
                    <div className='flex justify-center mt-10'>
                        <img src={hierarchy} alt="" className='border rounded-xl bg-white border-stone-300 border-2' />  
                    </div>

                    <div className='mt-10'>
                    <h1 id='poppins' className="text-4xl font-semibold tracking-wide text-slate-600">About IEEE</h1>

                        <p id="poppins" className="mt-5  text-lg text-justify">IEEE in the world's largest technical professional organization dedicated to encouraging innovation and technological excellence for the benefit of humanity. It is intended for professionals working in electrical, electronic, and computing engineering, as well as allied scientific and technological domains that underpin modern society.</p>

                        <br /> 

                        <p id="poppins" className="mt-5  text-lg text-justify">IEEE and its members encourage a global community to create for a better tomorrow through its more than 400,000 members in more than 160 countries, widely referenced publications, conferences, technological standards, and professional and educational events. IEEE is the most trusted voice" in the world for engineering, computer, and technology news.</p>

                    </div>


                    <div className='mt-10'>
                    <h1 id='poppins' className="text-4xl font-semibold tracking-wide text-slate-600">About IEEE Gujarat Section</h1>

                        <p id="poppins" className="mt-5  text-lg text-justify">IEEE Gujarat Section (registered u/s 80G) comes under Asia-Pacific Region, the Region 10 of IEEE. The Gujarat Section, a sub section of Bombay Section, was upgraded to full fledged section on 15th August 1990. In 2004 Gujarat Section was adjudged the Outstanding Small Section of Region 10.</p>

                        <br /> 

                        <p id="poppins" className="mt-5  text-lg text-justify">The section has emphasis on quality programmes and such programmes are regular feature for professional development of its members. The section’s participative philosophy allows students to make programmes as per their own need. Section encourages students and has instituted awards for student members.</p>

                    </div>

                    <div className='mt-10'>
                        <h1 id='poppins' className="text-4xl font-semibold tracking-wide text-slate-600">About IEEE LDRP-ITR Student Branch</h1>
                        <ul id='poppins' className='ml-5 mt-5 list-disc leading-loose '>
                            <li>To create awareness of state of art technologies which will drive students towards professional growth.</li>
                            <li>To increase involvement of student members in innovative project work and research publications by providing IEEE platform.</li>
                            <li>To enhance networking of Engineering professionals by hosting various technical events.</li>
                        </ul>
                    </div>


                    


                     
                </div>
              
            </div>
            
        </>
    )
}
