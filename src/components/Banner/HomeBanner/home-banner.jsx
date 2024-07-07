import {HeroImage} from "./Home-banner assets"
import Button from "../../../common/Buttons/button"
export default function homebanner() {
  return (
    <div className="w-full h-[786px] bg-[#BFB6AD] md:pt-24 lg:pt-0">
      <div className="flex flex-col md:flex-row items-center mx-7 pt-10 justify-center ">
        <div className=" text-center ">
          <div className="lg:text-7xl md:text-5xl text-4xl font-medium my-6">Summer Fasion Trendy </div>
          <div className="lg:text-7xl md:text-5xl text-3xl  font-medium ">Get UpTo <span className="text-white">30%</span> off</div>
          <div className="lg:text-7xl md:text-5xl text-3xl  font-bold my-6">On Big Summer Outfits</div>
          <div className="md:text-5xl text-2xl font-normal ">Starting at @199</div>
          <Button className="md:mt-10 mt-5" to="/store">Shop Now</Button>
        </div>
        <div>
          <div className=" flex items-center justify-center">
            <img className="w-96 sm:w-96 lg:w-auto " src={HeroImage} alt="Hero image fro banner" />
          </div>
        </div>
      </div>
    </div>
  );
}
