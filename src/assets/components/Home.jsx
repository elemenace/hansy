import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleShopNowClick = () => {
    navigate("/products"); // Navigate to the /shop route
  };

  return (
    <div
      className="bg-yellow-50 min-h-screen w-full flex flex-col items-start justify-center px-7 text-left relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/hansbg.jpg')",
        backgroundSize: "cover", // Ensure the image covers the entire section
        backgroundPosition: "center 1%", // Move the background image slightly down
        backgroundRepeat: "no-repeat", // Avoid image repeating
      }}
    >
      <div className="relative z-10">
        <h1
          className="text-7xl font-bold text-[#15454e] leading-tight mb-3"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          High Quality <br /> Beauty Products <br /> for Women
        </h1>
        <p className="text-gray-800 mt-4 max-w-lg">
          Discover a collection of premium beauty essentials crafted to enhance
          your natural glow.
        </p>
        <button
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-8 rounded shadow-md"
          onClick={handleShopNowClick} // Handle button click
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Home;
