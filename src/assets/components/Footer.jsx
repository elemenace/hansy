import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-3 shadow-lg">
      <div className="container mx-auto text-center">
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} ShoppeHans. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
