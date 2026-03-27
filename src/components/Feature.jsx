import React from 'react'
import { LuCakeSlice } from "react-icons/lu";
import Cards from './Cards';
import { GiSlicedBread } from "react-icons/gi";
import { LiaCookieSolid } from "react-icons/lia";
import { LuIceCreamBowl } from "react-icons/lu";
import { GiDonut } from "react-icons/gi";

const Feature = () => {
    const icons = [<LuCakeSlice className='w-80 h-50'/>,<GiSlicedBread />,<LuIceCreamBowl />, <LiaCookieSolid/>,<GiDonut/>]
    
    

    return (
        <div className=' py-11'>
            <h1 className=' text-6xl font-bold text-center'>Welcome To Our Store</h1>
            <p className='text-center mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dignissimos necessitatibus fugit eum repudiandae velit, rerum quos dolore. Nesciunt doloribus unde ex dolorum dolor labore!</p>


            <div className=' flex gap-2  items-center justify-between'>
                
                
                {["Cake", "Bread", "Ice-creams", "Cookies", "Donuts"].map((item,index) => (

                    <Cards href="#" key={item} className=' hover:text-gray-400 border-2 border-black shadow-2xl'>
                        <div className=''>
                            {icons[index]}
                        </div>

                        <div>
                            {item}
                        </div>
                    </Cards>

                ))}
            </div>
        </div>


    )
}

export default Feature