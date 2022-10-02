import React from 'react';

export default function footer() {
  return (
    <div className="absolute bottom-0 w-screen bg-gray-200">
      <div className="mt-26 text-md h-14 w-screen border-b-2 border-solid border-gray-300 bg-gray-200 py-3.5 px-8">
        Vietnam
      </div>

      <div className="text-md flex h-16 flex-wrap items-center justify-between bg-gray-200 py-3.5 px-8">
        <div>
          <a
            href="#"
            className="text-md mr-12 text-gray-800 no-underline hover:underline"
          >
            About
          </a>
          <a
            href="#"
            className="text-md mr-12 text-gray-800 no-underline hover:underline"
          >
            Advertising
          </a>
          <a
            href="#"
            className="text-md mr-12 text-gray-800 no-underline hover:underline"
          >
            Business
          </a>
          <a
            href="#"
            className="text-md mr-12 text-gray-800 no-underline hover:underline"
          >
            How Search works
          </a>
        </div>
        <div>
          <a
            href="#"
            className=" mr-12 text-gray-800 no-underline hover:underline"
          >
            Privacy
          </a>
          <a
            href="#"
            className=" mr-12 text-gray-800 no-underline hover:underline"
          >
            Terms
          </a>
          <a
            href="#"
            className=" mr-12 text-gray-800 no-underline hover:underline"
          >
            Settings
          </a>
        </div>
      </div>
    </div>
  );
}
