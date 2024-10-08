// checkout.jsx
import { useState, useContext } from "react";
import { CartContext } from "../services/CartContext";
import Button from "../common/Buttons/button";
import { FaTimes } from "react-icons/fa";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { BuyFirstHero } from "../assets/Shop assets";

function Checkout() {
  const [pinCode, setPinCode] = useState("");
  const { removeFromCheckout, checkoutItems, addToConfirmation, confirmAll } =
    useContext(CartContext);

  const handleRemoveClick = (id) => {
    removeFromCheckout(id);
  };

  const handlePinCodeChange = (event) => {
    setPinCode(event.target.value);
  };

  const handleCheckClick = () => {
    // Handle check button click
    console.log("Pin Code:", pinCode);
  };

  const handleConfirmBuy = (product) => {
    addToConfirmation(product);
  };

  const handleConfirmtAllClick = () => {
    confirmAll();
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      {checkoutItems.length > 0 ? (
        <div className="container p-4 ">
          {checkoutItems.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 border rounded-2xl border-gray-300 shadow-2xl p-10  my-10"
            >
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-center justify-center bg-[#BFB6AD] p-4 rounded-lg sm:w-auto sm:h-[540px] shadow-2xl transition duration-300 ease-in-out hover:scale-95 ">
                  <Zoom>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="sm:w-auto sm:h-[506px] w-72 rounded-lg"
                    />
                  </Zoom>
                </div>
                <div className="flex flex-row gap-10 mt-4 h-12">
                  <Button
                    onClick={() => handleConfirmBuy(product)}
                    to="/successful"
                  >
                    Checkout
                  </Button>
                  <button
                    onClick={() => handleRemoveClick(product.id)}
                    className="remove flex items-center justify-center gap-1 rounded-xl font-medium text-xl md:px-[1vw] px-[3vw] py-[2vh] hover:bg-red-800 bg-red-600 text-white"
                  >
                    <FaTimes size={24} />
                    Remove
                  </button>
                </div>
              </div>

              <div className="px-3 rounded-lg">
                <div className="mb-4">
                  <h2 className="sm:text-2xl text-xl font-semibold">
                    {product.title}
                  </h2>
                </div>
                <div className="mb-4">
                  <h2 className="sm:text-2xl text-xl font-bold">
                    Product Description
                  </h2>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                <div className="mb-4">
                  <h2 className="sm:text-2xl text-xl font-bold">
                    Customer Reviews
                  </h2>
                  <div className="flex items-center">
                    <span className="text-yellow-500 sm:text-2xl text-xl mr-2">
                      ★★★★★
                    </span>
                    <p className="text-gray-600">
                      {product.rating.rate} ({product.rating.count} reviews)
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <h2 className="sm:text-2xl text-xl font-bold mb-2">
                    Check Delivery
                  </h2>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className=" bg-[#BFB6AD] text-gray-800 placeholder:text-black rounded px-[2vw] py-3 mr-2"
                      placeholder="Enter Your Pin Code"
                      value={pinCode}
                      onChange={handlePinCodeChange}
                    />
                    <Button onClick={handleCheckClick}>Check</Button>
                  </div>
                </div>
                <div className="mb-4">
                  <h2 className="sm:text-2xl text-xl font-bold">Price</h2>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 font-bold text-2xl mr-2">
                      Rs{product.price}
                    </span>
                    <span className="text-gray-600 font-bold text-xl line-through mr-2">
                      Rs2500
                    </span>
                    <span className="text-green-700 font-bold text-xl">
                      50% off
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <h2 className="sm:text-2xl text-xl font-bold">Sizes</h2>
                  <div className="flex space-x-2">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                      M
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                      S
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                      L
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                      XL
                    </button>
                  </div>
                </div>
                <div className="mb-4">
                  <h2 className="sm:text-2xl text-xl font-bold">Policy</h2>
                  <ul className="list-disc pl-6">
                    <li className="text-gray-600">
                      Services 7 Days replacement policy
                    </li>
                    <li className="text-gray-600">
                      30 Days Refund and Exchange
                    </li>
                    <li className="text-gray-600">COD available</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center">
            <Button
              onClick={handleConfirmtAllClick}
              to="/successful"
              className="my-5 rounded-xl font-medium text-xl sm:px-[2vw] px-[6vw] py-[1vh] hover:bg-orange-800 bg-orange-500 text-white"
            >
              Checkout All
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center sm:text-3xl text-2xl text-center font-normal my-8 md:my-10 mx-3">
          <div>
            <img
              src={BuyFirstHero}
              alt="empty cart image"
              className="w-[500px]"
            />
          </div>
          Opps you have nothing to checkout!
        </div>
      )}
    </div>
  );
}

export default Checkout;
