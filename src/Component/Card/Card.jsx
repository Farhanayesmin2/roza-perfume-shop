import { Link } from "react-router-dom";
import { useState } from "react"; 
import { FcLike } from "react-icons/fc";

const Card = () => {
  
  const [TR, setTR] = useState('false');


  return (
    <>
      <div className="w-72 hover:scale-105 duration-300">
      <div className="flex justify-between px-4 py-4">
            <div className="w-14 h-5">
                <div className="flex-1 h-full bg-gray-500">
                    <p className="flex-1 h-full text-xs font-black text-center text-white uppercase">Women</p>
                </div>
            </div>
            <div className=""> 
                <FcLike className="w-5 h-4"/>
            </div>
        </div>
    <div className="flex flex-col space-y-2.5 items-center justify-start flex-1 pl-5 pr-4 pt-3 pb-5 bg-white">
        
       
        <img className="w-64 h-1/2 hover:scale-105 duration-300" src="https://freesvg.org/img/Wine-bottle.png"/>
        <div className="flex flex-col space-y-3 items-center justify-center w-64">
            <div className="flex flex-col space-y-0.5 items-center justify-center">
                <p className="text-sm font-bold uppercase">Jo Malone Vetiver & Go...</p>
                <p className="text-xs text-gray-500">by Ipsa</p>
            </div>
            <p className="text-xs font-light">Luminizing Clay</p>
            <p className="font-bold">from $51.74</p>
        </div>
        <div className="w-full h-auto">
            <div className="flex items-center justify-center flex-1 h-full p-4 border border-gray-300">
                <div className="flex space-x-1.5 items-center justify-center">
                    <p className="text-sm font-bold text-center uppercase">Add to bag</p>
                </div>
            </div>
        </div>
    </div>
</div>
  
    
    </>
  );
};

export default Card;
