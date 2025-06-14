import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfilePic from '/profile.jpg'
import TextAnimation from '../../TextAnimation/TextAnimation';
import './Header.css'

import { faGamepad, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-12 md:mb-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="gradient-text"><TextAnimation/></span><br />
                        <span className="text-white">Creating Immersive Experiences</span>
                    </h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-lg">
                        Specializing in React and UI/UX development with 2+ years of experience building website and design that customer love.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="btn-primary text-white px-6 py-3 rounded-lg font-medium flex items-center">
                            <FontAwesomeIcon icon={faGamepad}/>&nbsp;  View Projects
                        </a>
                        <a href="#contact" className="btn-outline text-white px-6 py-3 rounded-lg font-medium flex items-center">
                           <FontAwesomeIcon  icon={faPaperPlane}/>&nbsp;   Contact Me
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="hidden relative w-64 h-64 md:w-80 md:h-80 mb-20  md:block">
                        <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-20 blur-xl animate-pulse h-100"></div>
                        <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-20 blur-xl animate-pulse h-100 delay-300"></div>
                         
                        <img src={ProfilePic}
                             alt="Developer Portrait" 
                             className="relative w-100 h-100 object-cover rounded-full border-4 border-indigo-500 floating"></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header