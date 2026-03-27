import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Button = ({ className, children }) => {
    return (
        <a href='#' className={` ${className}  md:inline-flex gap-1 items-center rounded-full bg-violet-300 hover:bg-violet-400 p-2 m-2 `}>
            {children} <MdArrowOutward />

        </a>
    )
}

export default Button

