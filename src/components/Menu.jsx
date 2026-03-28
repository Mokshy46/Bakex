import React from 'react'
import cake from '../assets/pngcake.png'
import Button from './Button'
import dessert from '../assets/cake5.png'
import bread from '../assets/bread.png'
import Items from './Items'

const Menu = () => {

    
    return (


        <div className='mt-16'>
            <h1 className=' text-6xl text-center '>Bakery For Lovely People</h1>
            <div className='flex flex-col gap-10 mx-10 mt-10 md:flex-row'>

                <div className='flex flex-col justify-center  bg-blue-100 rounded-2xl p-5 items-center' >
                    <img src={dessert} alt="" className='w-37' />
                    <h1 className=' font-semibold text-2xl'>Dessert</h1>
                    <p className='text-center'>Desserts are a beloved category of food
                        that typically round out a meal with a
                        sweet and satisfying note.</p>
                    <Button href= '#contact' className='inline-flex'>Order Now</Button>
                </div>

                <div className='flex flex-col justify-center bg-pink-100 rounded-2xl p-5 items-center' >
                    <img src={cake} alt="" className='w-37' />
                    <h1 className=' font-semibold text-2xl'>Cakes</h1>
                    <p className='text-center'>Cakes are a beloved category of dessert
                        that has been enjoyed by people around
                        the world for centuries.</p>
                    <Button href= '#contact' className='inline-flex'>Order Now</Button>
                </div>


                <div className='flex flex-col justify-center bg-yellow-100 rounded-2xl p-5 items-center' >
                    <img src={bread} alt="" className='w-37' />
                    <h1 className=' font-semibold text-2xl'>Baking</h1>
                    <p className='text-center'>Baking is a culinary technique and an art
                        form that involves the preparation and
                        cooking of various food.</p>
                    <Button href= '#contact' className='inline-flex'>Order Now</Button>
                </div>
            </div>

         
        </div>
    )
}

export default Menu