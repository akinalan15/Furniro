import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 border-t m-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Funiro.</h2>
          <p className="text-sm text-gray-500">
            400 University Drive Suite 200 <br />
            Coral Gables, FL 33134 USA
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-900">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
