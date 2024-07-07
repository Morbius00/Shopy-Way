import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [confirmtItems, setConfirmItems] = useState([]);


  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const addToCheckout = (item) => {
    setCheckoutItems((prevItems) => {
      if (!prevItems.some(product => product.id === item.id)) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  const removeFromCheckout = (productId) => {
    setCheckoutItems((prevCheckoutItems) => prevCheckoutItems.filter((product) => product.id !== productId));
  };

  const checkoutAll = () => {
    setCheckoutItems([...cart]);
  };

  const addToConfirmation = (item) => {
    setConfirmItems((prevConfirmItems) => {
      if (!prevConfirmItems.some(product => product.id === item.id)) {
        return [...prevConfirmItems, item];
      }
      return prevConfirmItems;
    });
  };

  const confirmAll =() =>{
    setConfirmItems([...checkoutItems]);
  }

  return (
    <CartContext.Provider value={{ cart, checkoutItems, confirmtItems, addToCart, removeFromCart, addToCheckout, removeFromCheckout, checkoutAll, addToConfirmation, confirmAll }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartProvider, CartContext };
