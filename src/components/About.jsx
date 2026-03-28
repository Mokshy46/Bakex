import React from 'react'
import { LuCakeSlice } from "react-icons/lu";
import Cards from './Cards';
import cake1 from '../assets/dough.png'
import cake2 from '../assets/breads.png'

const Feature = () => {
    return (
        <div className="px-6 md:px-16 pt-20 feat-bg">

            <div className="grid md:grid-cols-2 gap-10 items-center">

                <div className="space-y-6">

                    <h2 className="text-4xl md:text-5xl font-bold">
                        THE HEART BEHIND OUR BAKERY
                    </h2>

                    <p className="text-gray-600 max-w-md">
                        Our bakery is built on a love for honest ingredients, traditional techniques,
                        and the joy of sharing freshly baked food every loaf, cake, and pastry.
                    </p>

                    <div className="flex items-center gap-6 mt-6">

                        <img
                            src={cake1}
                            className="w-40 h-28 object-cover rounded-xl "
                        />

                        <p className="text-gray-500 text-sm max-w-xs">
                            Our bakery was born from a simple idea to bring people together through the joy of fresh baking.
                        </p>

                    </div>

                </div>

                <div>
                    <img
                        src={cake2}
                        className="w-full rounded-2xl  object-cover  "
                    />
                </div>

            </div>

            <div className=' flex gap-10  justify-center text-balance py-24 '>

                <div className=' flex flex-col'>
                    <h1 className=' font-bold text-4xl py-3'>10K+</h1>
                    <p className=' font-semibold py-2'>Happy Customers</p>
                    <p>Baked with care loved by evry customer</p>

                </div>


                <div className=' flex flex-col'>
                    <h1 className=' font-bold text-4xl py-3'>99%</h1>
                    <p className=' font-semibold py-2'>Customer Satisfaction</p>
                    <p>Fresh flavors that Customers truly love</p>

                </div>

                <div className=' flex flex-col'>
                    <h1 className=' font-bold text-4xl py-3'>500+</h1>
                    <p className=' font-semibold py-2'>Five-Star Reviews</p>
                    <p>Customers rate our bakery five stars</p>

                </div>
            </div>

        </div>
    )
}


export default Feature