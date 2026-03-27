import React from 'react'
import Button from './Button'
import strawcake from '../assets/pngcake.png'
import cake5 from '../assets/cake5.png'

import cake3 from '../assets/cake3.png'
import cake4 from '../assets/cake4.png'

import { useState, useEffect } from 'react'

const images = [ strawcake, cake3, cake4, cake5]




const Hero = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);



    return (
        <div className=' flex items-center h-screen px-16 justify-between'>
            <div className=''>
                <span className=' text-7xl'>
                    Savor Every <br />
                    Moment with
                </span><br />
                <span className=' text-black  text-7xl'>
                    Every Bite
                </span>

                <p className='p-3'>
                    Experience gourmet dining crafted with passion.
                </p>
                <Button className='inline-flex'>Reserve Your Table</Button>
            </div>


            <div className="relative  w-152 h-158 ">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt=""
                        className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Hero