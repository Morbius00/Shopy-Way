// src/router.js
import { createBrowserRouter } from "react-router-dom";
import App from "./app/App";

import Home from "./pages/Landing";
import Store from "./pages/store";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout"
import Successful from "./pages/successful"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/successful",
        element: <Successful />,
      },
    ],
  },
]);
