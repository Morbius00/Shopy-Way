import { HeroShopImage } from "./ShopBanner-assets";
import Button from "../../../common/Buttons/button";
export default function homebanner() {
  return (
    <div className="w-full h-auto py-5 bg-[#BFB6AD] ">
      <div className="flex md:flex-col lg:flex-row flex-col items-center mx-7 justify-center ">
        <div>
          <div className=" flex items-center justify-center">
            <img
              className="w-96 sm:w-96 lg:pt-5 lg:w-[761px] "
              src={HeroShopImage}
              alt="Hero image fro banner"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center lg:pt-20 ">
          <div className="lg:text-7xl md:text-5xl text-4xl text-gray-800 font-medium my-6">
            Elevate Shopping Experience.
          </div>
          <div className="lg:w-[35vw] md:w-[60vw]">
          <div className="md:text-2xl text-xl font-normal ">
          Refresh your basics, try new trends, it`s time to cozy up your closet. Sustainably and on a budget, off course
          </div>
          </div>
          
          <Button className="md:mt-10 mt-5" to="/shop">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}
