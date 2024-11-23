import React from "react";
import logo from "../assets/svg/logo.png";
import acc from "../assets/svg/acc.png";
import cart from "../assets/svg/cart.png";
import fav from "../assets/svg/fav.png";
import search from "../assets/svg/search.png";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between px-6 py-4 bg-white shadow-md w-screen">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Furniro Logo" className="w-auto" />
      </div>

      <ul className="hidden md:flex items-center space-x-6 text-gray-700">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">Shop</li>
        <li className="hover:text-black cursor-pointer">About</li>
        <li className="hover:text-black cursor-pointer">Contact</li>
      </ul>

      <div className="flex items-center space-x-4 mr-5 ">
        <button className="pr-8">
          <img src={acc} alt="" />
        </button>
        <button className="pr-8">
          <img src={search} alt="" />
        </button>
        <button className="pr-8">
          <img src={fav} alt="" />
        </button>
        <button className="pr-8">
          <img src={cart} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
