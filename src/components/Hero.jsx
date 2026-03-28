import React from 'react'
import Button from './Button'

import cake4 from '../assets/cake4.png'






const Hero = () => {

    // const [current, setCurrent] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrent((prev) => (prev + 1) % images.length);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);



    return (
        <div className=' flex flex-col items-center h-screen px-16 hero-bg justify-center py-22'>
            <div className=' text-center'>
                <span className=' text-6xl '>
                    Savor Every
                    Moment
                </span><br />
                <span className=' text-black  text-6xl'>
                    Every Bite
                </span>

                <p className='p-3'>
                    Sourdough, pastries, and more, made from
                    organic, locally-sourced ingredients. Taste the
                    difference of slow fermentation.                </p>
                    
                <Button href='#contact' className='inline-flex '>Reserve Your Table</Button>
            </div>


            <div className="relative  w-192 h-198 ">

                <img src={cake4} alt="" className='hidden  md:block absolute top-0 left-0 w-252 h-118 object-contain transition-opacity duration-1000 pb-14' />
                {/* {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt=""
                        className={`absolute top-0 left-0 w-222 h-198 object-contain transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))} */}
            </div> 
 

        </div>

    )
}

export default Hero