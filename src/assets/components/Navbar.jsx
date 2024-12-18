import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className=" shadow-lg flex items-center justify-between w-full h-20 bg-gradient-to-r from-blue-700 to-blue-900 flex-wrap">
        {/* Logo */}
        <div className="text-white text-3xl font-semibold flex items-center space-x-2 mx-7">
          <span className="text-black font-sans">ShoppeHans</span>
        </div>

        {/* Menu button for mobile */}
        <label
          htmlFor="click"
          className="menu-btn cursor-pointer text-white text-2xl md:hidden"
        >
          <i className="fas fa-bars"></i>
        </label>

        {/* Navbar Links */}
        <ul className="flex flex-wrap list-none md:flex md:w-auto md:h-auto md:space-x-8 md:static">
          {/* Dynamically creating links */}
          {["Home", "About Us", "Products", "Contact"].map((item) => (
            <li key={item} className="m-1">
              <Link
                to={`/${item.replace(/\s+/g, "").toLowerCase()}`} // Handles 'About Us' as 'aboutus'
                className="text-white text-lg font-medium py-2 px-4 rounded-md transition-all ease-in-out duration-300 hover:text-blue-300 hover:bg-blue-700"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Shopping Cart */}
        <div className="relative">
          <Link
            to="/products"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            <img
              src="./addtocartHans.png"
              alt="Cart"
              className="w-12 h-12 hover:scale-110 transition-transform duration-300 mx-3"
            />
          </Link>
        </div>
      </nav>

      {/* Optional Background Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#1b1b1b] z-[-1] w-full px-8"></div>
    </header>
  );
};

export default Navbar;
