import ShopBanner from "../components/Banner/ShopBanner/shop-banner";
import ProductCard from "../components/Product Card/product-card"

export default function store() {
  return (
    <div>
      <ShopBanner />
      <div className="mx-20 my-10">
        <div className="md:text-4xl text-2xl text-center font-semibold md:my-12 my-5">
          Top Products For You
        </div>
        <div>
          {/* <Prduct1/> */}
          <div className="  ">
          <ProductCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
