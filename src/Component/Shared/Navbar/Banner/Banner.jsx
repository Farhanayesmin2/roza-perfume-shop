import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "tailwindcss/tailwind.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative inset-0 bg-gradient-to-r from-purple-300 to-green-700 opacity-50  ">
            <img
              className="object-cover w-full h-[500px] opacity-90"
              src="https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image slide 1"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-poppins ">
             <h1 className="lg:text-5xl leading-5  mb-2 font-serif text-[#03045e] font-bold sm:text-3xl">
              Authentic{" "}
              <span className="text-[#0077B6]">Luxery, Passionate.</span>{" "}
            </h1>
            <p className="lg:text-lg sm:text-sm text-gray-700">
              Doll collection is a popular hobby and a form of artistic<br></br>{" "}
              expression cherished by many enthusiasts around the world.
            </p>
             <button className="mt-4 flex inline-flex items-center text-black bg-gradient-to-r from-[#821D30] via-rose-50 to-[#821D30] hover:bg-[#0077b6] shadow-2xl shadow-white lg:text-xl  h-16  font-serif font-semibold py-2 px-4 rounded-full ">
            <AiOutlineShoppingCart className="w-8 h-8" ></AiOutlineShoppingCart>  Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" inset-0 bg-gradient-to-r from-purple-300 to-green-700 opacity-60">
            <img
              className="object-cover w-full  h-[500px] opacity-80 "
              src="https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="image slide 2"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-poppins ">
            <h1 className="lg:text-5xl leading-5  mb-2 font-serif text-[#03045e] font-bold sm:text-3xl">
              Authentic{" "}
              <span className="text-[#0077B6]">Luxery, Good Vibe</span>{" "}
            </h1>
           <p className="lg:text-lg sm:text-sm text-gray-700">
               perfume are fragrance, redolence, and scent. While all these words mean .<br></br>{" "}
              "a sweet or pleasant odor," perfume may suggest a stronger or heavier odor.
            </p>
             <button className="mt-4 flex inline-flex items-center text-black bg-gradient-to-r from-[#821D30] via-rose-50 to-[#821D30] hover:bg-[#0077b6] shadow-2xl shadow-white lg:text-xl  h-16  font-serif font-semibold py-2 px-4 rounded-full ">
            <AiOutlineShoppingCart className="w-8 h-8" ></AiOutlineShoppingCart>  Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" inset-0 bg-gradient-to-r from-purple-300 to-green-700 opacity-60">
            <img
              className="object-cover w-full  h-[500px] outline-purple-950 opacity-80"
              src="https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image slide 3"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-poppins ">
              <h1 className="lg:text-5xl leading-5  mb-2 font-serif text-[#03045e] font-bold sm:text-3xl">
              Authentic{" "}
              <span className="text-[#0077B6]">Luxery, Reliable.</span>{" "}
            </h1>
            <p className="lg:text-lg sm:text-sm text-gray-700">
               perfume are fragrance, redolence, and scent. While all these words mean .<br></br>{" "}
              "a sweet or pleasant odor," perfume may suggest a stronger or heavier odor.
            </p>
             <button className="mt-4 flex inline-flex items-center text-black bg-gradient-to-r from-[#821D30] via-rose-50 to-[#821D30] hover:bg-[#0077b6] shadow-2xl shadow-white lg:text-xl  h-16  font-serif font-semibold py-2 px-4 rounded-full ">
            <AiOutlineShoppingCart className="w-8 h-8" ></AiOutlineShoppingCart>  Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" inset-0 bg-gradient-to-r from-purple-300 to-green-700 opacity-60">
            <img
              className="object-cover w-full  h-[500px] opacity-80"
              src="https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image slide 4"
            />{" "}
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-poppins ">
             <h1 className="lg:text-5xl leading-5  mb-2 font-serif text-[#03045e] font-bold sm:text-3xl">
              Authentic{" "}
              <span className="text-[#0077B6]">Luxery, Feeling Fresh.</span>{" "}
            </h1>
            <p className="lg:text-lg sm:text-sm text-gray-700">
               perfume are fragrance, redolence, and scent. While all these words mean .<br></br>{" "}
              "a sweet or pleasant odor," perfume may suggest a stronger or heavier odor.
            </p>
           <button className="mt-4 flex inline-flex items-center text-black bg-gradient-to-r from-[#821D30] via-rose-50 to-[#821D30] hover:bg-[#0077b6] shadow-2xl shadow-white lg:text-xl  h-16  font-serif font-semibold py-2 px-4 rounded-full ">
            <AiOutlineShoppingCart className="w-8 h-8" ></AiOutlineShoppingCart>  Shop Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
     
    </>
  );
};

export default Banner;
