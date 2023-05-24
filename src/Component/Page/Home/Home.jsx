import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../Slider/Slider';
import Banner2 from "../../Shared/Navbar/Banner/Banner"
import Banner from '../../Banner/Banner';
import Card from '../../Card/Card';

const Home = () => {
    return (
        <div className='relative w-full h-auto left-0 top-0'> 
            <Banner2/>
             <Slider/>
             <Banner/>

             <div className='h-48 w-full justify-center'>
            
                <p className="text-3xl font-bold text-center uppercase">Shop Our COLLECTION</p>
                <p className="text-base leading-relaxed text-center capitalize">Our delicious, limited-edition collection</p>
                <Link
          to="/"
          className="relative text-black  border border-violet-500 hover:border-sky-400 hover:text-sky-500 duration-300 py-2 px-6 left-[calc(50%-50px)] top-8"
        >
          SHOP NOW
        </Link>



             </div>


             <div className='grid grid-cols-3 justify-between relative h-auto w-[80%] left-[10%] gap-3 mt-10 mb-10'>
               
                    <div className='relative col-span-1 h-[316px] left-0 top-0'>
                    <img
                        className="relative w-full h-full left-0 top-0"
                       
                        src="https://freesvg.org/img/Wine-bottle.png"
                    />
                        <p className='absolute left-20 top-40 text-gray-500 font-bold'>WOMANS PERFUME</p>

                    </div> 

                    <div className='relative col-span-1 h-[316px] left-0 top-0'>
                    <img
                        className="relative w-full h-full left-0 top-0"
                       
                        src="https://freesvg.org/img/Wine-bottle.png"
                    />
                        <p className='absolute left-20 top-40 text-gray-500 font-bold'>WOMANS PERFUME</p>

                    </div> 

                    <div className='relative col-span-1 h-[316px] left-0 top-0'>
                    <img
                        className="relative w-full h-full left-0 top-0"
                       
                        src="https://freesvg.org/img/Wine-bottle.png"
                    />
                        <p className='absolute left-20 top-40 text-gray-500 font-bold'>WOMANS PERFUME</p>

                    </div> 

                    <div className='relative col-span-1 h-[316px] left-0 top-0'>
                    <img
                        className="relative w-full h-full left-0 top-0"
                       
                        src="https://freesvg.org/img/Wine-bottle.png"
                    />
                        <p className='absolute left-20 top-40 text-gray-500 font-bold'>WOMANS PERFUME</p>

                    </div> 

                    <div className='relative col-span-1 h-[316px] left-0 top-0'>
                    <img
                        className="relative w-full h-full left-0 top-0"
                       
                        src="https://freesvg.org/img/Wine-bottle.png"
                    />
                        <p className='absolute left-20 top-40 text-gray-500 font-bold'>WOMANS PERFUME</p>

                    </div> 
             </div>
             

             <div className='grid grid-cols-4 justify-between relative h-auto w-[80%] left-[10%] gap-3 mt-10 mb-10'>
               
                    <Card/>
                    <Card/>
                    <Card/>
                    </div> 

    
        </div>
    );
};

export default Home;