import React from 'react';
import MenuIcon from './MenuIcon';

export default function Header() {
  return (
    <div className="m-3 flex justify-end">
      <div className="flex items-center">
        <a
          href="#"
          className="text-md p-3 font-sans leading-6 text-black no-underline hover:underline"
        >
          Gmail
        </a>
        <a
          href="#"
          className="text-md ml-3 leading-6 text-black no-underline hover:underline"
        >
          Images
        </a>

        <a className="mx-5 ">
          <MenuIcon />
        </a>

        <button className="text-md rounded bg-blue-800 py-2.5 px-6 font-medium tracking-tight text-white hover:bg-blue-400">
          Sign In
        </button>
      </div>
    </div>
  );
}
