import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css'


const navLink = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
]

export default function Navigation() {
    const [isOpen , setIsOpen] = useState(false)

    const handleNavLinkClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false); // Close the menu after clicking a bar menu item
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ top:target.offsetTop -80, behavior: 'smooth' });
        }
    }

  return (
    <nav className="fixed w-full bg-slate-900 bg-opacity-80 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-2xl font-bold gradient-text">My PortFolio</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    {navLink.map((link) => (
                        <a key={link.name} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)} 
                        className="text-slate-300 hover:text-white hover:bg-slate-800 
                        px-3 py-2 rounded-md text-sm font-medium nav-link">{link.name}</a>
                    ))}
                    
                </div>
                
                    
                <div className="md:hidden">
                    <button id="menu-btn" className="text-slate-300 hover:text-white focus:outline-none " onClick={() => setIsOpen(prev => !prev)}>
                    <FontAwesomeIcon icon={faBars} bounce/>
                    </button>
                </div>
            </div>
        </div>
        
        {/* <!-- Mobile menu --> */}
        {isOpen && (

            <div id="mobile-menu" className="absolute w-full md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-3 space-y-2">
            {navLink.map((link) => (
                        <a key={link.name} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)} 
                        className="block text-slate-300 hover:text-white hover:bg-slate-800 
                        px-3 py-2 rounded-md text-sm font-medium nav-link1 text-center">{link.name}</a>
                    ))}
            </div>
        </div>
                )}
    </nav>
  )
}
