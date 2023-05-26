import React from "react";
import { useState, useEffect } from "react";

const ShopCollection = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setPerfumes(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching perfumes:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(perfumes);
  return (
    <div>
      <div className="text-center mb-4">
        <h2 className=" text-[#3B0404] mb-2  text-5xl  tracking-tighter font-bold">
          Shop Our COLLECTION
        </h2>
        <p className="text-3xl font-serif font-semibold text-[#821D30] my-2">
          Our delicious, limited-edition collection.
        </p>
        <h1 className="text-gray-600 text-sm my-2">
          Our delicious, limited-edition collection.{" "}
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {perfumes.map((perfume) => (
            <div
              key={perfume.id}
              className="p-4 bg-rose-200 hover:scale-105 duration-300"
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover opacity-70"
                  src={perfume.image}
                  alt={perfume.text}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-[#3B0404] text-xl font-bold mb-2 ">
                      {perfume.text}
                    </h3>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="mt-4 flex inline-flex items-center text-black bg-gradient-to-r from-[#821D30] via-rose-50 to-[#821D30] hover:bg-[#0077b6] shadow-2xl shadow-white text-lg   font-serif font-semibold py-2 px-4 rounded-full ">
                      {perfume.button}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;
