import React from 'react';
import SearchIcon from './SearchIcon';

export default function Body() {
  return (
    <div className="flex h-[calc(100vh-300px)] flex-col items-center justify-center">
      <img
        className="w-[350px]"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      />

      <div className="relative mt-8">
        <input className="w-[700px] rounded-3xl border-2 py-3 px-10 hover:shadow-lg " />

        <SearchIcon className="absolute top-4 left-4" />
        <VoiceIcon className="absolute " />
      </div>

      <div className="mt-7 mb-7">
        <button className="hover:border-gray50 text-md mr-6 rounded-md bg-gray-100 px-5 py-3 hover:shadow-md">
          Google Search
        </button>
        <button className="text-md mr-6 rounded-md bg-gray-100 px-5 py-3 hover:shadow-md">
          I'm Felling Happy
        </button>
        {/* <button className="bg-gray-200 p-2 text-xs rounded-sm hover:bg-gray-400 hover:text-white" >I'm felling happy</button> */}
      </div>

      <div className="mt-3">
        <span>Google offered in:</span>
        <a className="mx-2  text-blue-700 no-underline hover:underline">
          Tiếng Việt
        </a>
        <a className="mx-2  text-blue-700 no-underline hover:underline">
          Français
        </a>
        <a className="mx-2  text-blue-700 no-underline hover:underline">
          繁體中文
        </a>
      </div>
    </div>
  );
}
