import React from "react";
import vector from "../assets/svg/Vector.png";

const Breadcrumb = () => {
  return (
    <nav className=" py-2 px-4 w-screen bg-[#f9f1e7]">
      <ol className="flex items-center space-x-2 text-gray-600 ">
        <li>
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li className="text-gray-500">
          <img src={vector} alt="" />
        </li>
        <li>
          <a href="#" className="hover:underline">
            Shop
          </a>
        </li>
        <li className="text-gray-500">
          {" "}
          <img src={vector} alt="" />
        </li>
        <li>
          <span className="text-gray-800">Asgaard Sofa</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
