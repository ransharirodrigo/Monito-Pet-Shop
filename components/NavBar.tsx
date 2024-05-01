"use client"

import React, { useState } from 'react'
import CustomButton from './CustomButton'
import { NavBarDropdownProps } from '@/types';


function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('VND');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: NavBarDropdownProps) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className='hidden  gap-x-12 xl:flex items-center justify-center '>

            <div className='flex justify-between items-center  gap-x-12 '>


                {/* Navigation Links */}
                <nav className="flex space-x-6 gap-x-12">
                    <a href="#"
                        className="text-[#003459] font-bold text-base
                                    hover:text-gray-900">
                        Home
                    </a>
                    <a href="#"
                        className="text-[#003459] font-bold text-base 
                                    hover:text-gray-900">
                        Category
                    </a>
                    <a href="#"
                        className="text-[#003459] font-bold text-base 
                                    hover:text-gray-900">
                        About
                    </a>
                    <a href="#"
                        className="text-[#003459] font-bold text-base 
                                    hover:text-gray-900">
                        Contact
                    </a>
                </nav>

            </div>

            <div className='flex items-center gap-x-3.5 w-[280] h-[44]'>
                {/* Search Bar */}
                <div className="relative flex items-center py-2 px-4 bg-[#FDFDFD] rounded-[46px] 
                                focus:outline-none gap-2">
                    <img src="/searchIcon.svg" alt="search" className="h-5 w-auto" />
                    <input type="text" placeholder="Search Something here!"
                        className='focus:outline-none text-[#99A2A5]' />
                </div>

                {/* Join Community Button */}
                <CustomButton
                    title="Join the community"
                    containerStyles="rounded-[57px] bg-[#003459] 
                                    text-[#FDFDFD] font-bold py-2 px-4 
                                    w-[203] h-[44]"
                />


                {/* Selection Dropdown */}
                <div className='flex items-center gap-x-1'>
                    <div className="relative flex items-center">
                        <img src="/redCircle.svg" alt="Circle" className="h-4 w-4" />
                        <img src="/star.svg" alt="Star" className="absolute inset-0 m-auto 
                                                                    h-[7.31px] w-[6.96px]" />
                    </div>
                    <div className="relative">
                        {/* Dropdown button */}
                        <button onClick={toggleDropdown} className="text-gray-800 
                                                                    hover:text-gray-900 
                                                                    focus:outline-none">
                            {selectedOption}
                        </button>
                        {/* Dropdown menu */}
                        {isOpen && (
                            <ul className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                                {/* Dropdown items */}
                                <li className="py-1">
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        onClick={() => handleOptionClick('Option 1')}>
                                        VND
                                    </a>
                                </li>
                                <li className="py-1">
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        onClick={() => handleOptionClick('Option 2')}>
                                        Option 2
                                    </a>
                                </li>
                                <li className="py-1">
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        onClick={() => handleOptionClick('Option 3')}>
                                        Option 3
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                    <div >
                        <img src="/downArrow.svg" alt="down" />
                    </div>
                </div>

            </div>
        </div>


    )
}

export default NavBar