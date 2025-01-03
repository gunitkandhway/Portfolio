import React , { useState} from 'react'
// import hr from '../assets/curve-hr.svg'
import pfp from '/pfp.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedinIn, faTwitter, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";


export const Hero = () => {
    const [loaded, setLoaded] = useState(false);
  return (
    <>
     {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
        <div className='md:w-3/6 flex justify-center items-center md:p-4 rounded-full'>
        <img 
  data-aos="flip-right" 
  className="w-[80%] max-h-68 rounded-[10%]" 
  data-aos-duration="1500" 
  data-aos-offset="200"  
  src={pfp} 
  alt="profile" 
  onLoad={() => setLoaded(false)} 
/></div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Gunit Kandhway</h1>
                    <p className="text-xl font-bold text-gray-300">Software Developer</p>
                    <p className="text-md font-light text-gray-400 ">Motivated and enthusiastic self-learner in information technology, with a love for web development and a talent for solving problems to create scalable and reliable software.</p>
                </div>
               
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/gunitkandhway' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://x.com/kandhwaygunit' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faTwitter} /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/gunit-kandhway-6a877b238/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                    <li>
                    <a href='https://leetcode.com/u/gunitkandhway/' rel="noreferrer" target="_blank"><SiLeetcode size={30} /></a>
                    </li>
                </ul>
            </div>
           
        </div>
    </>
  )
}
