// cart-page.jsx
import { useContext } from 'react';
import { CartContext } from '../services/CartContext';
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveClick = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-20">
        {cart.map((product) => (
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
                <div className="text-xl ml-4 mb-1 font-semibold text-white">
                  <p>
                    Price: <span className="text-green-700">${product.price}</span>
                  </p>
                </div>
              </div>

              <div className="bottom">
                <div className="left flex items-center justify-center space-x-3">
                  <div className="details text-md text-center text-black font-bold">
                    <h1>{product.title}</h1>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="remove flex items-center justify-center"
                    onClick={() => handleRemoveClick(product.id)}
                  >
                    <FaTimes size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <Link to="/checkout" className="my-10 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default CartPage;