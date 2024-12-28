import React from 'react'
import cov from '/cov.jpg'
import Gunit_IIIT from '/Gunit_IIIT.pdf'



const Navbar = () => {
  return (
    <div className='fixed z-50 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
    <div className="flex justify-between items-center text-white">
        {/* Logo */}
        <img src={cov} className="App-logo w-8 h-8 rounded-full object-cover" alt="logo" />

        {/* Navbar Links */}
        <ul className="hidden md:flex">
            <li className="p-4">
                <a href="#home" className="hover:underline">About</a>
            </li>
            <li className="p-4">
                <a href="#skills" className="hover:underline">Skills</a>
            </li>
            <li className="p-4">
                <a href="#certs" className="hover:underline">Projects</a>
            </li>
        </ul>

        {/* Resume Button */}
        <a href={Gunit_IIIT} className='hover:scale-105 transition-all duration-500 cursor-pointer'>
            <button className='inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                Resume
            </button>
        </a>
    </div>
</div>

  )
}

export default Navbar
