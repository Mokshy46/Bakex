import React from 'react'
import Button from './Button'
import strawcake from '../assets/pngcake.png'

const Hero = () => {
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
                <Button>Reserve Your Table</Button>
            </div>
            <div className=''>
                <img src={strawcake} alt="" className=' w-152 h-158 ' />
            </div>
        </div>
    )
}

export default Hero