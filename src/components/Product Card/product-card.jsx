// product-card.jsx
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { FaShoppingCart, FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import "./productcard.css";
import SizeCheck from "./sizebox";
import { useContext } from 'react';
import { CartContext } from '../../services/CartContext';

const api = "https://fakestoreapi.com/products";

function ProductCard({ limit, page }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { addToCart, removeFromCart } = useContext(CartContext);

  const handleBuyClick = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, clicked: true } : product
      )
    );
  };

  const handleRemoveClick = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, clicked: false } : product
      )
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoaded(false); // Set loading state
        const response = await fetch(`${api}?limit=${limit}&skip=${(page - 1) * limit}`);
        const data = await response.json();
        setProducts(data.map((product) => ({ ...product, clicked: false })));
        setLoaded(true);
      } catch (err) {
        setError(err.message);
        setProducts([]);
        setLoaded(true); // Set loaded state even if there's an error
      }
    };

    fetchProducts();
  }, [limit, page,]);

  
  if (error) {
    return (
      <div className="text-center text-2xl font-bold text-[#6A6666]">
        Error: {error}
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="text-center text-2xl font-bold text-[#6A6666]">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center justify-center ">
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {products.map((product) => (
          <div key={product.id} className="wrapper">
            <div className="container">
              <div className="top flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image w-72 h-80 rounded-lg shadow-lg shadow-gray-500"
                />
              </div>
              <div className="flex flex-row items-center justify-center gap-6 -mt-2 mb-2">
                <div className=" text-xl ml-4 mb-1 font-semibold text-white">
                  <p>
                    Price:{" "}
                    <span className="text-green-700">${product.price}</span>
                  </p>
                </div>
                <div>
                  <SizeCheck />
                </div>
              </div>

              <div className={`bottom ${product.clicked ? "clicked" : ""}`}>
                <div className="left flex items-center justify-center space-x-3">
                  <div className="details text-md text-center text-black font-bold">
                    <h1>{product.title}</h1>
                  </div>
                  <div
                    className="buy flex items-center justify-center"
                    onClick={() => [handleBuyClick(product.id), addToCart(product)]}
                   
                  >
                    <FaShoppingCart size={24} />
                  </div>
                </div>
                <div className="right">
                  <div className="done flex items-center justify-center">
                    <FaCheck size={24} />
                  </div>
                  <div className="details text-xl flex items-center justify-center mt-3">
                    <p>Added to your cart</p>
                  </div>
                  <div
                    className="remove flex items-center justify-center"
                    onClick={() => [handleRemoveClick(product.id), removeFromCart(product.id)]}
                    
                  >
                    <FaTimes size={24} />
                  </div>
                </div>
              </div>
              <div className="inside">
                <div className="icon">
                  <FaInfoCircle size={24} />
                </div>
                <div className="contents text-center text-white text-sm">
                  <div className="text-white text-xl font-bold my-5">
                    Product Details
                  </div>
                  {product.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  limit: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default ProductCard;
