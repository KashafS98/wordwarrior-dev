import React from 'react'

export default function Navbar() {
    return (
        <div className='w-screen sticky top-0 animate-fadeIn z-50' id='bg-nav-color'>
            <div className='w-1/2 h-24 md:flex xs:hidden items-center justify-between mx-auto my-0 pt-4' >
                <a href='/'>Resume</a>
                <a href='/'>Feedback</a>
                <a href='/'>Work</a>
                <a href='/'><img src="/logo.png" alt="Wordwarrior Logo" className="h-16 ml-2 border-2 border-white rounded-full" /></a>
                <a href='/'>Blog</a>
                <a href='/'>Contact</a>
                <a href='/'>Art</a>
            </div>
            <div className='xs:flex md:hidden justify-between px-12 py-6'>
                <button>Menu</button>
                <img src="/logo.png" alt="Wordwarrior Logo" className="h-16 ml-2 border-2 border-white rounded-full" />
            </div>
            
        </div>
    )
}
