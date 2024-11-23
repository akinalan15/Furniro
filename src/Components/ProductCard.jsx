import React from "react";
import d1 from "../assets/images/d1.png";
import d2 from "../assets/images/d2.png";
import d3 from "../assets/images/d3.png";
import d4 from "../assets/images/d4.png";

const RelatedProducts = () => {
  return (
    <div className="container p-10 m-5">
      <h2 className="text-2xl font-bold text-center mb-8">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col border rounded-lg shadow-md overflow-hidden w-60">
          <div className="relative">
            <img src={d3} alt="Syltherine" className="w-full h-80 " />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
              -30%
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Syltherine</h3>
            <p className="text-sm text-gray-500 mb-2">Stylish cafe chair</p>
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-800">
                Rp 2.500.000
              </span>
              <span className="text-sm text-gray-400 line-through ml-2">
                Rp 3.500.000
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col border rounded-lg shadow-md overflow-hidden w-60">
          <div className="relative">
            <img src={d2} alt="Leviosa" className="w-full h-80 " />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Leviosa</h3>
            <p className="text-sm text-gray-500 mb-2">Stylish cafe chair</p>
            <span className="text-lg font-bold text-gray-800">
              Rp 2.500.000
            </span>
          </div>
        </div>

        <div className="flex flex-col border rounded-lg shadow-md overflow-hidden w-60">
          <div className="relative">
            <img src={d4} alt="Lolito" className="w-full h-80 " />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
              -50%
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Lolito</h3>
            <p className="text-sm text-gray-500 mb-2">Luxury big sofa</p>
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-800">
                Rp 7.000.000
              </span>
              <span className="text-sm text-gray-400 line-through ml-2">
                Rp 14.000.000
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col border rounded-lg shadow-md overflow-hidden w-60">
          <div className="relative">
            <img src={d1} alt="Respira" className="w-full h-80 " />
            <span className="absolute top-2 right-2 bg-green-500 text-white text-sm px-2 py-1 rounded">
              New
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Respira</h3>
            <p className="text-sm text-gray-500 mb-2">
              Outdoor bar table and stool
            </p>
            <span className="text-lg font-bold text-gray-800">Rp 500.000</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 text-sm font-semibold text-gray-800 border border-gray-800 rounded hover:bg-gray-800 hover:text-white transition">
          Show More
        </button>
      </div>
    </div>
  );
};

export default RelatedProducts;
