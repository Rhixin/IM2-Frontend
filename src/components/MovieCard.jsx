import React from "react";

const MovieCard = () => {
  return (
    <div className="bg-white shadow-md  rounded-xl mt-60 mx-[30rem] ">
      <div
        className="relative bg-cover bg-center bg-no-repeat  p-4 shadow-md rounded-xl h-80"
        style={{
          backgroundImage: `url('https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg')`,
        }}
      >
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-lg bg-black/40 rounded-t-xl"></div>

        {/* Content */}
        <div className="relative flex justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-white">Blink Twice</h2>
              <span className="bg-yellow-400 text-black text-xs font-semibold py-1 px-2 rounded">
                R-16
              </span>
            </div>
            <p className="text-gray-300">2024 • 1 hr 43 min</p>
            <div className="flex gap-2 mt-2">
              <span className="bg-gray-200 text-sm font-medium py-1 px-2 rounded">
                MYSTERY
              </span>
              <span className="bg-gray-200 text-sm font-medium py-1 px-2 rounded">
                THRILLER
              </span>
            </div>
          </div>
          <div className="w-56 h-72 rounded-lg overflow-hidden shadow-md">
            <img
              className="object-cover object-center w-full h-full"
              alt="hero"
              src="https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg"
            />
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <span className="text-yellow-500 text-sm mr-1">★</span>
            <p className="text-sm">3.0/5</p>
            <span className="text-xs text-gray-400 ml-1">(2 users)</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500 text-sm mr-1">★</span>
            <p className="text-sm">4.0/5</p>
            <span className="text-xs text-gray-400 ml-1">
              (Critic's review)
            </span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-semibold">
            Robinsons Galleria Cebu Cinema 4
          </p>
          <p className="text-gray-500 text-xs">Showtimes</p>
          <p className="text-sm font-semibold mt-1">7:35 PM</p>
        </div>
        <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition duration-200">
          Buy Tickets
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
