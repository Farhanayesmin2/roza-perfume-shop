import React, { useEffect, useState } from 'react';
import CountDown from '../../Page/CountDown/CountDown';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
<div>
            <div className="px-8 py-2 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex items-center mx-auto container justify-center md:justify-between py-2">
		<div>
			<span>Get up to 50% off your first order + free shipping,&nbsp;</span>
			<a href="#" rel="noopener noreferrer" className="underline">sign up</a>today!
		</div>
		<a href="#" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">
			<svg role="img" viewBox="0 0 22 22" className="fill-current h-4 w-4">
				<path clipRule="evenodd" d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z" fillRule="evenodd"></path>
			</svg>
			<span className="hover:underline focus-visible:underline">Gift Cards</span>
		</a>
	</div>
</div>


<header aria-label="Site Header" class="shadow-sm">
  <div
    class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4"
  >
    <div class="flex w-0 flex-1 lg:hidden">
      <button class="rounded-full bg-gray-100 p-2 text-gray-600" type="button">
        <span class="sr-only">Account</span>
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewbox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
      </button>
    </div>

    <div class="flex items-center gap-4">
      <a href="#">
        <span class="sr-only">Logo</span>
        <span class="h-10 w-20 rounded-lg bg-gray-200"></span>
      </a>

      <form class="mb-0 hidden lg:flex">
        <div class="relative">
          <input
            class="h-10 rounded-lg border-gray-200 pe-10 text-sm placeholder-gray-300 focus:z-10"
            placeholder="Search..."
            type="text"
          />

          <button
            type="submit"
            class="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-600"
          >
            <span class="sr-only">Submit Search</span>
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>

    <div class="flex w-0 flex-1 justify-end lg:hidden">
      <button class="rounded-full bg-gray-100 p-2 text-gray-500" type="button">
        <span class="sr-only">Menu</span>
        <svg
          class="h-5 w-5"
          fill="currentColor"
          viewbox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>

    <div
      aria-label="Site Nav"
      class="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
    >
     <h1>Roza Perfume Shop</h1>
    </div>

    <div class="hidden items-center gap-4 lg:flex">
      <a
        href="#"
        class="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600"
      >
       My Account
      </a>

      <a
        href="#"
        class="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
      >
        Whitelist
      </a>
      <a
        href="#"
        class="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
      >
        2 items
      </a>
    </div>
  </div>

  <div class="border-t border-gray-100 lg:hidden">
    <nav
      class="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium"
    >
      <a class="shrink-0 px-4 text-gray-900" href="">About</a>
      <a class="shrink-0 px-4 text-gray-900" href="">Blog</a>
      <a class="shrink-0 px-4 text-gray-900" href="">Projects</a>
      <a class="shrink-0 px-4 text-gray-900" href="">Contact</a>
    </nav>
  </div>
</header>



        <nav className="bg-gray-100">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <p className="text-white text-lg font-semibold">Logo</p>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#" className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="#" className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a href="#" className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                                <a href="#" className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 focus:text-white transition duration-150 ease-in-out">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#" className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium">About</a>
                        <a href="#" className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium">Services</a>
                        <a href="#" className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </div>
                </div>
            )}
            </nav>
            </div>
    );
};

export default Navbar;
