import React from 'react'

export default function Hero() {
    return (
        <div className = 'min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
            
           
            <p>IT'S TIME TO</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Nama<span className='text-orange-400'>stretch</span></h1>
            </div>
            
            <button className='px-8 py-4 rounded-md border-[2px] bg-orange-400 border-orange-950 border-solid orangeShadow duration-200'> <p>Begin</p> </button>
        </div>
    )
}
