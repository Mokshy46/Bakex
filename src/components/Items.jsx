import React from 'react'

const Items = () => {
    return (

        <div className=' grid grid-cols-2 m-7 gap-7'>
            <div>
                <div className='text-balance flex flex-col md:flex-row justify-center items-center m-4 md:gap-9 pb-5 hover:scale-101 transition rounded-2xl shadow-2xl'>
                    <div className=''>
                        <h1 className='md:text-2xl font-semibold md:py-3 px-5  '>Sponge Cake</h1>
                        <p className=' md:block font-light hidden   p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className=' text-gray-700 font-bold'>
                        ₹900
                    </div>
                </div>

                <div className='text-balance flex flex-col md:flex-row justify-center items-center m-4 md:gap-9 pb-5 hover:scale-101 transition rounded-2xl shadow-2xl'>
                    <div className=''>
                        <h1 className='md:text-2xl font-semibold md:py-3 px-5 '>Eclair</h1>
                        <p className=' md:block font-light hidden p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className=' text-gray-700 font-bold'>
                        ₹50
                    </div>
                </div>


                <div className='text-balance flex flex-col md:flex-row justify-center items-center m-4 md:gap-9 pb-5 hover:scale-101 transition rounded-2xl shadow-2xl'>
                    <div className=''>
                        <h1 className='md:text-2xl font-semibold md:py-3 px-5  '>Macarons</h1>
                        <p className=' md:block font-light hidden p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className=' text-gray-700 font-bold'>
                        ₹200
                    </div>
                </div>
            </div>








            <div>
                <div className='text-balance flex flex-col md:flex-row justify-center items-center m-4 md:gap-9 pb-5 hover:scale-101 transition rounded-2xl shadow-2xl'>
                    <div className=''>
                        <h1 className='md:text-2xl font-semibold md:py-3 px-5 '>Cheese Cake</h1>
                        <p className=' md:block font-light hidden  p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className=' text-gray-700 font-bold'>
                        ₹200
                    </div>
                </div>

                <div className='text-balance flex flex-col md:flex-row justify-center items-center m-4 md:gap-9 pb-5 hover:scale-101 transition rounded-2xl shadow-2xl'>
                    <div className=''>
                        <h1 className='md:text-2xl font-semibold md:py-3 px-5  '>Bun</h1>
                        <p className=' md:block font-light hidden  p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className=' text-gray-700 font-bold'>
                        ₹100
                    </div>
                </div>


                <div className='text-balance flex flex-col md:flex-row justify-center items-center m-4 md:gap-9 pb-5 hover:scale-101 transition rounded-2xl shadow-2xl '>
                    <div className=''>
                        <h1 className='md:text-2xl font-semibold md:py-3 px-5  '>Croissant</h1>
                        <p className=' md:block font-light hidden p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    </div>

                    <div className=' text-gray-700 font-bold '>
                        ₹250
                    </div>

                </div>
            </div>


        </div>

    )
}

export default Items