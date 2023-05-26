 import React, { useEffect, useState } from 'react';
import { FaHeart, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
SwiperCore.use([Navigation]);

const BestSellers = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    // Fetch the JSON data
    fetch('/public/perfumes.json')
      .then((response) => response.json())
      .then((data) => {
        setPerfumes(data);
        setIsLoading(false);
      
      })
      .catch((error) => {
        console.error('Error fetching perfumes:', error);
        setIsLoading(false);
      });
  }, []);

 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  const visiblePerfumes = perfumes.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative my-10">

   <div className='text-center mb-4'>
            <h2 className=" text-[#3B0404] mb-2  text-4xl  tracking-tighter font-bold">
           Best Sellers
            </h2>  
  <p className='text-3xl font-serif font-semibold text-[#821D30] my-2'>Our top products</p>
   
</div>
        
          
      <div className="container mx-auto">
        <Swiper
          // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" swiper-wrapper  grid grid-cols-1 md:grid-cols-3 gap-6">
              {visiblePerfumes.map((perfume) => (
                <div className="card relative swiper-slide" key={perfume.id}>
                  <img
                    src={perfume.image_url}
                    alt={perfume.name}
                    effect="blur"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:aspect-w-2 sm:aspect-h-3"
                  />
                  <div className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                    <FaHeart className="h-6 w-6" />
                  </div>
                  <div className="relative border border-gray-100 bg-white p-6">
                    <span className="whitespace-nowrap bg-red-600 font-serif font-semibold rounded-full text-white px-3 py-1.5 text-xs font-medium">
                      Top
                    </span>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{perfume.name}</h3>
                    <p className="mt-1.5 text-lg text-gray-700">Price: {perfume.price}</p>
                    <div className="flex items-center mt-1.5 text-lg text-yellow-400"> <span className=' text-gray-700 mr-2'>Rating: {perfume.rating}</span> 
                      {Array.from({ length: Math.floor(perfume.rating) }, (_, index) => (
                        <FaStar key={index} className="mr-1" />
                      ))}
                    </div>
                    <p className="mt-1.5 text-lg text-gray-700">Quantity: {perfume.quantity}</p>
                    <p className="mt-1.5 text-lg text-gray-700">Reviews: {perfume.reviews}</p>
                    <div className="mt-4 text-center flex">
                       <button className="mt-4 w-full  justify-center items-center text-black bg-gradient-to-r from-[#821D30] via-rose-50 to-[#821D30] hover:bg-[#0077b6] shadow-2xl shadow-white text-lg   font-serif font-semibold py-2 px-4 rounded-full ">Add to Cart   </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
       
          </div>
           {currentIndex > 0 && (
          <button
            className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-900 hover:text-gray-900/75"
            onClick={handlePrev}
          >
            <FaArrowLeft className="h-6 w-6" />
          </button>
        )}
        {currentIndex + itemsPerPage < perfumes.length && (
          <button
            className="  swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-900 hover:text-gray-900/75"
            onClick={handleNext}
          >
            <FaArrowRight className="h-6 w-6" />
          </button>
        )}
    </div>
  );
};

export default BestSellers;