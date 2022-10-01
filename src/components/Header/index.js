import React from "react";
import MenuIcon from "./MenuIcon";

export default function Header() {

    return (
        <div className="flex justify-end m-3">
            <div className="flex items-center">
                <a href="#" className="text-sm hover:border-b-1">Gmail</a>
                <a href="#" className="ml-3 text-sm">Images</a>

                <a className="mx-5">
                    <MenuIcon />
                </a>

                <button className="bg-blue-500 text-white font-bold text-xs py-2 px-4 rounded-sm hover:bg-blue-800">Sign In</button>
            </div>
        </div>
    )
}