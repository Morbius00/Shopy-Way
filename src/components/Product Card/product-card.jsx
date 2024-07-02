import { useState, useEffect } from "react";
import { FaShoppingCart, FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import "./productcard.css"; 

const api = "https://fakestoreapi.com/products";
const limitCount = 12;
const initialPage = 0;
const initialTotal = 0;

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(limitCount);
  const [page, setPage] = useState(initialPage);
  const [, setTotal] = useState(initialTotal);
  const [loaded, setLoaded] = useState(false);

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
        const response = await fetch(`${api}?limit=${limit}&skip=${page * limit}`);
        const data = await response.json();
        setProducts(data.map(product => ({ ...product, clicked: false })));
        setTotal(data.length);
        setLoaded(true);
      } catch (err) {
        setError(err.message);
        setProducts([]);
        setTotal(0);
        setLimit(0);
        setPage(0);
      }
    };

    if (!loaded) {
      fetchProducts();
    }
  }, [limit, page, loaded]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="wrapper">
          <div className="container">
            <div className="top flex items-center justify-center border border-gray-400">
              <img src={product.image} alt={product.title} className="product-image w-64 h-72" />
            </div>
            <div className={`bottom ${product.clicked ? "clicked" : ""}`}>
              <div className="left">
                <div className="details text-md text-center text-black font-bold">
                  <h1>{product.title}</h1>
                  <p>£{product.price}</p>
                </div>
                <div
                  className="buy flex items-center justify-center"
                  onClick={() => handleBuyClick(product.id)}
                >
                  <FaShoppingCart size={24} />
                </div>
              </div>
              <div className="right">
                <div className="done flex items-center justify-center">
                  <FaCheck size={24} />
                </div>
                <div className="details text-xl flex items-center justify-center">
                  <p>Added to your cart</p>
                </div>
                <div
                  className="remove flex items-center justify-center"
                  onClick={() => handleRemoveClick(product.id)}
                >
                  <FaTimes size={24} />
                </div>
              </div>
            </div>
            <div className="inside">
              <div className="icon">
                <FaInfoCircle size={24} />
              </div>
              <div className="contents text-center text-white">
                {product.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
