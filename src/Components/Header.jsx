import React from 'react'
import "../index.css"

export default function Header() {
    return (
        <div className="text-white uppercase w-full h-[6.5rem] flex justify-center items-center border-b-2 border-b-white my-0 mx-auto mb-[5rem] bg-[#2b096b]">
            <h1 className='font-bold text-[3rem] font-karla m-0'>
                Todo App
            </h1>
        </div>
    )
}