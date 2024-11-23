import React from "react";
import image1 from "../assets/images/Asgaard sofa 3.png";
import image2 from "../assets/images/Group 96.png";
import image3 from "../assets/images/Group 97.png";
import image4 from "../assets/images/Group 98.png";
import image5 from "../assets/images/Mask group.png";
import image6 from "../assets/images/Group 88.png";
import svg1 from "../assets/svg/fac.svg";
import svg2 from "../assets/svg/li.svg";
import svg3 from "../assets/svg/tw.svg";

const ProductDetail = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="flex flex-row items-center space-y-2">
        <div className="flex flex-col space-y-4 ml-10 mr-10">
          <img
            src={image5}
            className="w-20 h-20 rounded-lg border border-gray-300 bg-[#f9f1e7]"
          />
          <img
            src={image4}
            className="w-20 h-20 rounded-lg border border-gray-300 object-cover"
          />
          <img
            src={image3}
            className="w-20 h-20 rounded-lg border border-gray-300 object-cover"
          />
          <img
            src={image2}
            className="w-20 h-20 rounded-lg border border-gray-300 object-cover"
          />
        </div>

        <div className="bg-neutral-100 rounded-lg p-4">
          <img
            src={image1}
            alt="Main Product"
            className="rounded-lg object-cover w-30 h-30 "
          />
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">Asgaard Sofa</h1>
        <p className="text-2xl text-gray-700 mb-4">Rs. 250,000.00</p>

        <div className="flex items-center space-x-2 mb-4">
          <div className="flex">
            <img src={image6} alt="" />
            <h1 className="text-gray-500 pl-5 ">|</h1>
          </div>
          <p className="text-sm text-gray-500">5 Customer Reviews</p>
        </div>

        <p className="text-black-600 mb-4 w-50">
          Setting the bar as one of the loudest speakers in its class, the
          <br />
          Kilburn is a compact, stout-hearted hero with a well-balanced <br />
          audio which boasts a clear midrange and extended highs for a <br />{" "}
          sound.
        </p>

        <div className="mb-4">
          <h3 className="font-medium text-gray-700 mb-2">Size</h3>
          <div className="flex space-x-3">
            <button className="px-4 py-2 border rounded text-white bg-[#b88e2f]">
              L
            </button>
            <button className="px-4 py-2 border rounded text-black bg-[#f9f1e7]">
              XL
            </button>
            <button className="px-4 py-2 border rounded text-black bg-[#f9f1e7]">
              XS
            </button>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-medium text-gray-700 mb-2">Color</h3>
          <div className="flex space-x-3">
            <button className="w-8 h-8 rounded-full border border-gray-300 bg-[#816dfa]" />
            <button className="w-8 h-8 rounded-full border border-gray-300 bg-black" />
            <button className="w-8 h-8 rounded-full border border-gray-300 bg-[#b88e2f]" />
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center border rounded">
            <button className="px-3 py-1 text-gray-600">-</button>
            <span className="px-4">1</span>
            <button className="px-3 py-1 text-gray-600">+</button>
          </div>

          <button className="px-6 py-2 border text-black border-black rounded ">
            Add To Cart
          </button>
          <button className="px-6 py-2 border text-black border-black rounded ">
            + Compare
          </button>
        </div>

        <div className="border-t pt-4 text-gray-400 text-sm pt-10">
          <p className="pb-3">
            SKU <span className="pl-9">: </span>
            <span className="pl-3">SS001</span>
          </p>
          <p className="pb-3">
            Category <span className="pl-2">:</span>
            <span className="pl-3">Sofas</span>
          </p>
          <p className="pb-3">
            Tags <span className="pl-9">:</span>
            <span className="pl-3">Sofa, Chair, Home, Shop</span>
          </p>

          <div className="flex space-x-3 mt-2">
            <img
              src={svg1}
              className="text-gray-600 hover:text-gray-800 pl-5"
            ></img>
            <img
              src={svg2}
              className="text-gray-600 hover:text-gray-800 pl-5"
            ></img>
            <img
              src={svg3}
              className="text-gray-600 hover:text-gray-800 pl-5"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
