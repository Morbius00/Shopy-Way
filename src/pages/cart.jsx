import { useContext } from "react";
import { CartContext } from "../services/CartContext";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import CartBanner from "../components/Banner/CartBanner/cartbanner";
import CartOffer from "../components/Banner/CartBanner/cart-product-offer";
import Button from "../common/Buttons/button";
import { Emptycart } from "../assets/Shop assets";

function CartPage() {
  const { cart, removeFromCart, addToCheckout } = useContext(CartContext);

  const handleRemoveClick = (id) => {
    removeFromCart(id);
  };

  const handleBuyNowClick = (product) => {
    addToCheckout(product);
  };

  return (
    <div>
      <div>
        <CartBanner />
      </div>
      <div className="md:text-4xl text-2xl text-center font-semibold my-8 md:my-10">
        Your Cart Items
      </div>
      <div className="flex flex-col items-center justify-center">
        {cart.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-7 mx-1">
            {cart.map((product) => (
              <div
                key={product.id}
                className="w-[400px] h-[550px] bg-[#BFB6AD] p-5 overflow-hidden rounded-[10px] shadow-none transform scale-95 transition-shadow duration-500 ease-in-out hover:scale-100 hover:shadow-[5px_20px_30px_rgba(0,0,0,0.2)]"
              >
                <div className="w-full h-[90%]">
                  <div className="top flex items-center justify-center mb-7">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image w-72 h-80 rounded-lg shadow-lg shadow-gray-500"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center gap-6 -mt-2 mb-2">
                    <div className="text-xl ml-4 mb-1 font-semibold text-white">
                      <p>
                        Price:{" "}
                        <span className="text-green-700">${product.price}</span>
                      </p>
                    </div>
                  </div>

                  <div className="bottom">
                    <div className="left flex items-center justify-center space-x-3 mb-7">
                      <div className="details text-md text-center text-black font-bold">
                        <h1>{product.title}</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div>
                    <Button onClick={() => handleBuyNowClick(product)}>Buy Now</Button>
                  </div>
                  <div>
                    <button
                      onClick={() => handleRemoveClick(product.id)}
                      className="remove flex items-center justify-center gap-1 rounded-xl font-medium text-xl md:px-[1vw] px-[3vw] py-[1vh] hover:bg-red-800 bg-red-600 text-white"
                    >
                      <FaTimes size={24} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center sm:text-3xl text-2xl text-center font-normal my-8 md:my-10">
            <div>
              <img src={Emptycart} alt="empty cart image" className="w-52" />
            </div>
            Opps your cart is empty !
          </div>
        )}
        <div className="flex flex-col items-center justify-center">
          <Link
            to="/checkout"
            className="my-5 rounded-xl font-medium text-xl sm:px-[2vw] px-[6vw] py-[1vh] hover:bg-orange-800 bg-orange-500 text-white"
          >
            Checkout All
          </Link>
        </div>
        <div>
          <CartOffer />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
