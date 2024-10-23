import React, { useState } from 'react'

const Navbar = () => {

    const [open, setopen] = useState(false)

    const navlinks = [
        { href: "/", label: "Home" },
        { href: "#about", label: "Home" },
        { href: "#course", label: "Course" },
        { href: "#resourses", label: "Resourses" },
        { href: "#instructors", label: "Instructors" },

    ]

    const handleclick = () => {
        setopen(!open)
    }

    const handleclose = () => {
        setopen(false)
    }

    return (
        <nav className='w-full h-[8ch] bg-neutral-100 flex items-center md:flex-row lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50'>
            <Link to={'/'} className="text-xl text-neutral-800 font-bold mr-16">
                <span className='text-violet-600'>
                    G
                </span>-LMS
            </Link>
        </nav>
    )
}

export default Navbar
