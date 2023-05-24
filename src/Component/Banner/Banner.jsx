import React from 'react'; 

const Banner = () => {
  return (
    <div
      className="relative flex flex-col overflow-hidden flex-wrap space-y-1.5 items-start justify-start pr-14 pb-14 mb-10 bg-red-200 w-[70%] left-[12%]"
      style={{ height: 223 }}
    >
      <img
        className="relative transform rotate-6 left-40"
        style={{ width: 393, height: 600 }}
        src="https://freesvg.org/img/Wine-bottle.png"
      />
      <img
        className="relative transform rotate-12 w-64 flex-1"
        src="https://freesvg.org/img/Wine-bottle.png"
      />
      <img
        className="relative transform rotate-45 right-20"
        style={{ width: 200, height: 300 }}
        src="https://freesvg.org/img/Wine-bottle.png"
      />

      <p
        className="absolute opacity-40 text-9xl leading-10 text-center text-white uppercase"
        style={{ width: 200 }}
      >
        NEW
      </p>
      <div className="relative" style={{ width: 140, height: 141 }}>
        <div className="w-36 h-36 bg-black rounded-full" />
        <p className="w-28 h-11 relative m-auto inset-0 text-lg text-center">
          trusted
          <br />
          since 1997
        </p>
      </div>
      <p
        className="text-5xl font-bold leading-10 uppercase"
        style={{ width: 384.46 }}
      >
        up to 80% off.
      </p>
      <div className="w-1/5 h-12">
        <div className="flex items-center justify-center flex-1 h-full p-11 bg-gray-700">
          <div className="flex space-x-1.5 items-center justify-center">
            <p className="text-sm font-bold text-center text-white uppercase">
              SEarch for brand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;