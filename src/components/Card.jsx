import React from 'react'

export const Card = ({ bgColor, value,title, symbol }) => {
    return (
        <div className={`relative w-11/12 md:w-2/5 bg-gradient-to-t ${bgColor} bg-opacity-25 px-6 my-4 pt-10 pb-8 shadow-xl ring-1 ring-white/5 backdrop-blur-lg backdrop-filter sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10`}>
            <div className="mx-auto max-w-md">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">{title ? title : "Title"}</h2>
                </div>
                <h1 className="mt-10 text-center text-7xl font-bold text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">{value ? value : 0} {symbol}</h1>
                {/* <h1 className="mt-4 text-center text-base font-semibold text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">Normal Weather</h1> */}

                <div className="flex items-center justify-between">
                    <ul className="space-y-4 py-10">
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-transparent stroke-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="ml-4">
                                <code className="text-sm text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">02/04/2022</code>
                            </p>
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-transparent stroke-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="ml-4">
                                <code className="text-sm text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">02:08:00</code>
                            </p>
                        </li>
                    </ul>
                    <div className="opacity-80">
                        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                            <rect width="96" height="96" fill="url(#pattern0)" />
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use href="#image0_1_25" transform="scale(0.0104167)" />
                                </pattern>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}