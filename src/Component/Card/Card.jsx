import { Link } from "react-router-dom";
import { useState } from "react";
import PopupForm from "../pages/PopUp";

const SingleProduct = ({ product }) => {
  const { img, title, brand, price } = product;
  const [TR, setTR] = useState('false');


  return (
    <>

  
    <div className="single-product flex flex-col bg-gray-50 gap-3 shadow-md hover:shadow-xl hover:scale-105 duration-300 px-4 py-7 rounded-sm overflow-hidden">
      <div className="flex justify-center">
        <img
          className="w-72 h-48 object-contain hover:scale-110 duration-500"
          src={img}
          alt={title}
        />
      </div>
      <Link
        to={title}
        state={product}
        className="hover:text-rose-500 duration-300 flex justify-between items-center"
      >
        <h2 className="text-stone-950 font-semibold text-xl capitalize">
          {product.title.slice(0, 20)}
        </h2>
      </Link>
      <p className="text-sm text-gray-600">
        Location: <span className="font-semibold capitalize">{brand}</span>
      </p>
      <p className="text-sm text-gray-600">
      Rresale Price: <span className="text-rose-500 font-semibold">{price}</span>
      </p>
      <p className="text-sm text-gray-600">
      Original Price: <span className="text-rose-500 font-semibold">{price}</span>
      </p>
      <p className="text-sm text-gray-600">
      years of use: <span className="text-rose-500 font-semibold">3 Years</span>
      </p>
      <p className="text-sm text-gray-600">
      Posted: <span className="text-rose-500 font-semibold">23-12-2023</span>
      </p>
      <div className="flex justify-between items-center">
        <Link
          to={title}
          state={product}
          className="hover:text-rose-50 text-gray-900 duration-300 flex justify-between items-center"
        >
          <button className="text-sky-400 px-2 py-1 border border-sky-400 rounded-md hover:bg-sky-400 hover:text-sky-50 duration-300">
            More Info
          </button>
        </Link>
        <div
          onClick={() => setTR('true')}
          className="bg-sky-400 text-sky-50 hover:bg-sky-50 hover:text-sky-400 duration-300 border border-sky-400 px-2 py-1 rounded-md"
        >
          <PopupForm IO={TR} name={title} price={price}/>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Card;
