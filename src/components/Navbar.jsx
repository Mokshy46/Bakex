import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import Button from './Button';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", id: '#home' },
        { name: "Menu", id: '#menu' },
        { name: "About Us", id: '#about' },
        { name: "Gallery", id: ' #gallery' },
        { name: "Contact", id: '#contact' },
    ];

    return (
        <>
            <div className='shadow-2xl sticky top-0 z-50 bg-gradient-to-r from-pink-300 to-yellow-200 backdrop-blur-md '>
                <div className=" md:flex md:justify-between  items-center ">
                    <div className='flex justify-between '>
                        <a href="#home">
                            <span className=' text-4xl '>Foodie</span>
                        </a>

                        <div className=' py-4 px-3 hover:text-gray-400'>
                            <button
                                className='md:hidden'
                                onClick={() => setOpen(!open)}
                            ><GiHamburgerMenu />
                            </button>
                        </div>
                    </div>



                    {/* Desktop View */}
                    <div className=' md:flex gap-4 hidden  '>

                        {navLinks.map((item) => (

                            <a href={item.id} key={item.name} className=' hover:text-gray-400'>{item.name}
                            </a>

                        ))}

                    </div>

                    <div className={`md:hidden flex flex-col items-center gap-1  overflow-hidden transition-all duration-300 ${open ? "max-h-40 py-4" : "max-h-0 py-0"}`}>

                        {navLinks.map((item) => (

                            <a href={item.id} key={item.name} className=' hover:text-gray-400'>{item.name}
                            </a>

                        ))}
                    </div>

                    <Button className='hidden' href='#contact'>Order Now</Button>

                </div>

            </div>

        </>
    )
}

export default Navbar