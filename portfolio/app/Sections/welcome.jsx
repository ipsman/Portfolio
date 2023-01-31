'use client'

import DownArrow from "app/Icons/downArrow"

export default function Welcome() {
    const ToAbout = () => {
        var height = window.outerHeight - (window.outerHeight - window.innerHeight);
        window.scrollTo(0, height);
    }

    return (
            <div id='Home' className="sticky top-0 h-screen flex flex-col items-center justify-center z-0 bg-[url('../public/wp6.jpg')] duration-700">
                <div className='flex flex-col items-center justify-center shadow-lg backdrop-blur-md p-5 bg-[#3636363f] rounded-lg gap-2.5 duration-700'>
                    <h1 id="wTitle" className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl duration-700 text-white">Welcome</h1>
                    <p id="wTitle2" className='text-xl md:text-2xl lg:text-3xl xl:text-4xl duration-700 text-white'>This is my portfolio</p>
                </div>

                <div onClick={ToAbout} className='fixed xl:translate-y-32 lg:translate-y-28 md:translate-y-24 sm:translate-y-20 xsm:translate-y-24 duration-700'>
                    <DownArrow/>
                </div>
            </div>
)}