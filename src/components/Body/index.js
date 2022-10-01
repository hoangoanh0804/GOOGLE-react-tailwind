import React from "react";
import SearchIcon from "./SearchIcon";

export default function Body() {



    return (
        <div className="h-[calc(100vh-60px)] flex flex-col items-center justify-center">
            <img className="w-[200px]" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
            

            <div className="relative mt-8">
                <input className="w-[500px] border-2 py-2 px-10 rounded-3xl hover:shadow-lg "/>

                <SearchIcon className="absolute top-4 left-4" />
            </div>

            <div className="mt-5">
                <button className="bg-gray-100 p-3 text-sm mr-6 rounded-md hover:shadow-md hover:border-gray50">Google Search</button>
                <button className="bg-gray-100 p-3 text-sm mr-6 rounded-md hover:shadow-md" >I'm Felling Happy</button>
                {/* <button className="bg-gray-200 p-2 text-xs rounded-sm hover:bg-gray-400 hover:text-white" >I'm felling happy</button> */}


            </div>

            <div className="mt-3">
                <span  >Google offered in:</span>
                <a className="text-blue-700  mx-2 ">Tiếng Việt</a>
                <a className="text-blue-700  mx-2">Français</a>
                <a className="text-blue-700  mx-2">繁體中文</a>


            </div>
        </div>

    )
}