import { Link } from "react-router-dom";
import { useState } from "react"; 

const Card = () => {
  
  const [TR, setTR] = useState('false');


  return (
    <>

  
    <div className="flex flex-col items-center bg-gray-50 gap-3 shadow-md hover:shadow-xl hover:scale-105 duration-300 px-4 py-7 rounded-sm overflow-hidden">
      <div className="flex justify-center">
        <img
          className="w-48 h-48 object-contain hover:scale-110 duration-500"
          src="https://freesvg.org/img/Wine-bottle.png"
          alt="safd"
        />
      </div>
      <Link
        to=""
        state="" className="hover:text-rose-500 duration-300 flex justify-between items-center"
      >
        <h2 className="text-stone-950 font-semibold text-xl capitalize">
          HGJ
        </h2>
      </Link>
      <p className="text-sm text-gray-600">
        Location: <span className="font-semibold capitalize">sf</span>
      </p>
      <p className="text-sm text-gray-600">
      Rresale Price: <span className="text-rose-500 font-semibold">asf</span>
      </p>
      <p className="text-sm text-gray-600">
      Original Price: <span className="text-rose-500 font-semibold">saf</span>
      </p>
      <p className="text-sm text-gray-600">
      years of use: <span className="text-rose-500 font-semibold">3 Years</span>
      </p>
      <p className="text-sm text-gray-600">
      Posted: <span className="text-rose-500 font-semibold">23-12-2023</span>
      </p>
      <div className="flex justify-between items-center">
        <Link
          to=""
          state=""
          className="hover:text-rose-50 text-gray-900 duration-300 flex justify-between items-center"
        >
          <button className="text-sky-400 px-2 py-1 border border-sky-400 rounded-md hover:bg-sky-400 hover:text-sky-50 duration-300">
            Add to Bag
          </button>
        </Link>
        
        
      </div>
    </div>
    </>
  );
};

export default Card;
