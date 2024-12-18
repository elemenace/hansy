import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      const lastSpaceIndex = text.substring(0, maxLength).lastIndexOf(" ");
      return (
        text.substring(0, lastSpaceIndex > 0 ? lastSpaceIndex : maxLength) +
        "..."
      );
    }
    return text;
  };

  if (loading) {
    return (
      <div className="text-center text-2xl py-12 text-blue-600">Loading...</div>
    );
  }

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <h1 className="text-center text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500 p-4 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              className="h-44 w-full object-cover rounded-t-lg"
              src={product.image}
              alt={product.title}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold truncate">{product.title}</h2>
              <p className="text-gray-600 mb-2">
                Price:{" "}
                <span className="text-blue-600 font-semibold">
                  ${product.price}
                </span>
              </p>
              <p className="text-gray-500 text-sm">
                {truncateText(product.description, 60)}
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
