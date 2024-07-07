import { useContext } from "react";
import { CartContext } from "../services/CartContext";
import Button from "../common/Buttons/button";

function OrderConfirmation() {
  const { confirmtItems } = useContext(CartContext);

  // Calculate the total price of the items
  const totalPrice = confirmtItems.reduce((total, product) => total + product.price, 0);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center mb-4">
       <img
          src="https://media.tenor.com/bm8Q6yAlsPsAAAAj/verified.gif"
          alt="Animated Checkmark"
          className="w-40 h-40"
        />
      </div>
      <div className="flex flex-col justify-center items-center mb-4">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-2">
          Thank you for your purchase
        </h2>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Your order is Confirmed!
        </h2>
        <p className="text-gray-600 text-center text-xl mb-2">
          We&apos;ve received your order and will ship it in 5-7 business days.
        </p>
        <p className="text-gray-600 sm:text-xl text-base mb-6">Your order confirmation number is <span className="text-green-700">#B6CT3</span></p>
      </div>
      <div className="bg-[#e7dace] shadow-md rounded-lg px-4 py-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Order Summary
        </h3>

        <div>
          {confirmtItems.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center mb-2"
            >
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt="Product Image"
                  className="w-12 h-12 rounded-lg mr-4"
                />
                <p className="text-gray-800">{product.title}</p>
              </div>
              <p className="text-gray-800">₹ {product.price}</p>
            </div>
          ))}
        </div>

        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <p className="text-gray-800 font-bold">Total</p>
          <p className="text-gray-800 font-bold">₹ {totalPrice}</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <Button to="/store">Back to Store</Button>
      </div>
    </div>
  );
}

export default OrderConfirmation;
