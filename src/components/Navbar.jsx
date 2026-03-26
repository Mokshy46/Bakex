import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import Button from './Button';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='shadow-md  hero '>
                <div className=" md:flex md:justify-between  items-center">
                    <div className='flex justify-between '>
                        <a href="#">
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

                        {["Home", "Menu", "About Us", "Gallery", "Contact"].map((item) => (

                            <a href="#" key={item} className=' hover:text-gray-400'>{item}
                            </a>

                        ))}


                    </div>

                    {open && (
                        <div className=' flex gap-4 m-2  '>

                            {["Home", "Menu", "About Us", "Gallery", "Contact"].map((item) => (

                                <a href="#" key={item} className=' hover:text-gray-400'>{item}
                                </a>

                            ))}


                        </div>
                    )}

                    <Button className="">Order Now</Button>




                </div>


            </div>

        </>
    )
}

export default Navbar