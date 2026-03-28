import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Button = ({ className, children, href }) => {
    return (
        <a href={`${href}`} className={` ${className} bg-black text-white  md:inline-flex gap-1 items-center rounded-full hover:scale-105 hover:shadow-2xl transition duration-300 p-2 m-2 `}>
            {children} <MdArrowOutward />

        </a>
    )
}

export default Button

