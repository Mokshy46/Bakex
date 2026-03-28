import React from 'react'
import grid1 from '../assets/grid1.jpg'
import grid2 from '../assets/grid2.jpg'
import grid3 from '../assets/grid3.jpg'
import grid4 from '../assets/grid5.jpg'

const Gallery = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#fdf3e6] ">

            <div className="bg-yellow-400 rounded-2xl p-6 flex flex-col  justify-between  hover:scale-102 transition duration-300">
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Made by Hand with Big Love
                    </h2>
                    <p className="text-white mt-3 text-sm">
                        Explore our wide range of baked goods, lovingly crafted...
                    </p>
                    <button href='#' className="mt-6 bg-teal-400 text-white px-4 py-2 rounded-full w-fit hover:scale-102 transition duration-300">
                        Our Gallery
                    </button>
                </div>

            </div>

            <img src={grid4} className="rounded-2xl w-full h-60 object-cover  hover:scale-102 transition duration-300" />
            <img src={grid1} className="rounded-2xl w-full h-60 object-cover  hover:scale-102 transition duration-300" />

            <img src={grid3} className="rounded-2xl w-full h-100 object-cover  hover:scale-102 transition duration-300" />

            <img
                src={grid2}
                className="rounded-2xl w-full h-100 object-cover md:col-span-2  hover:scale-102 transition duration-300"
            />

        </div>
    )
}

export default Gallery