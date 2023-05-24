import React, { useEffect, useState } from 'react';
import {  BsFire, BsGift} from "react-icons/bs";
import { GiHeartBottle } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  useEffect(() => {
    AOS.init()
  }, []);


    return (
<div>
    <div className="px-8 py-2 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex items-center mx-auto container justify-center md:justify-between py-2">
		<div>
			<span className='flex items-center' >  <BsFire className='text-red-600 w-6 h-6'  ></BsFire>  Get up to 50% off your first order + free shipping,&nbsp; <BsFire className='text-red-600 w-6 h-6' ></BsFire>  </span>
			
		</div>
		<a href="#" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">
			<BsGift className='text-rose-600 w-6 h-6' ></BsGift>
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
      
     <h1 className='text-3xl flex items-center font-mono uppercase font-semibold text-black'>Roza Perfume<GiHeartBottle className='text-pink-400 w-12 h-12'></GiHeartBottle> Shop</h1>
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



        <nav className="bg-gray-800">

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


{/* <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

<div class="bg-gray-100 px-4 py-3">
  <div class="mx-auto flex max-w-3xl items-center justify-center">
    <button
      class="swiper-prev-button hidden hover:text-gray-500 sm:block sm:rounded sm:text-gray-700 sm:transition"
      aria-label="Previous Slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 rtl:rotate-180"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <p class="text-center text-sm font-medium text-gray-900">
            Love Alpine JS?
            <a href="#" class="block underline sm:inline-block">
              Check out this new course!
            </a>
          </p>
        </div>

        <div class="swiper-slide">
          <p class="text-center text-sm font-medium text-gray-900">
            Love Tailwind CSS?
            <a href="#" class="block underline sm:inline-block">
              Check out this new course!
            </a>
          </p>
        </div>

        <div  class="swiper-slide">
          <p class="text-center text-sm font-medium text-gray-900">
            Love Laravel?
            <a href="#" class="block underline sm:inline-block">
              Check out this new course!
            </a>
          </p>
        </div>
      </div>
    </div>

    <button
      class="swiper-next-button hidden hover:text-gray-500 sm:block sm:rounded sm:text-gray-700 sm:transition"
      aria-label="Next Slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 rtl:rotate-180"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</div> */}


<header aria-label="Site Header" class="border-b border-gray-100">
  <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
    <div class="flex items-center gap-4">
      <button type="button" class="p-2 lg:hidden">
       
      </button>

      <a href="#" class="flex">
        <span class="sr-only">Logo</span>
        <span class="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
      </a>
    </div>

    <div class="flex flex-1 items-center justify-end gap-8">
      <nav aria-label="Site Nav" class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
        <a href="/about" class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
          About
        </a>

        <a href="/news" class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
          News
        </a>

        <a href="/products" class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
          Products
        </a>

        <a href="/contact" class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
          Contact
        </a>

     
        <a href="/menu1" class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
          Menu 1
        </a>

        <a href="/menu2" class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
          Menu 2
        </a>
        
       
      </nav>

      <div class="flex items-center">
       
      </div>
    </div>
  </div>
</header>

