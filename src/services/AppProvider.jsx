import { CartProvider } from "./CartContext";
import PropTypes from 'prop-types';

export function AppProvider({ children }) {
  return <CartProvider>{children}</CartProvider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}