import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

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
            <button onClick={handleclick} className='flex-1 lg:hidden text-neutral-600 hover:text-violet-600 ease-in-out duration-300 flex items-center justify-end'>
                {
                    open ?
                        <LiaTimesSolid className='text-xl' />
                        :
                        <FaBars className='text-xl' />
                }

            </button>

            <div className={`${open ? "flex absolute top-14 left-0 w-full h-auto md:h-auto md:relative " : "hidden"}  flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2.5 md:items-centermd:p-0 p-4 justify-between md:bg-transparent bg:neutral-100 md:shadow-non shadow-md rounded-md`}>
                <ul className='list-none flex md:items-center items-start gap-x-5 gap-y-2 flex-wrap md:flex-row flex-col text-base text-neutra-600 font-medium'>
                    {navlinks.map((item) => (
                        <li key={item.href}>
                            <Link to={item.href} className='hover:text-violet-600 ease-in-out duration-300'>
                            {item.label}
                            </Link>
                        </li>
                    ) )}                   
                </ul>

                <div className="flex md:items-center items-start text-base text-neutral-800 font-medium">
                    <button className="bg-violet-600 px-4 py-2 rounded-full border boeder-violet-600 text-sm text-neutral-50 font-medium hover:bg-violet-600/5 hover:text-violet-600 ease-in-out duration-300">
                    Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
