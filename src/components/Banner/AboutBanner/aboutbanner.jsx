import { AboutHero } from "./aboutbanner-assets"
import Button from "../../../common/Buttons/button";
export default function homebanner() {
  return (
    <div className="w-full h-auto py-5 bg-[#BFB6AD]">
      <div className="flex md:flex-row lg:flex-row flex-col items-center mx-7 justify-center lg:gap-20 ">
        <div>
          <div className=" flex items-center justify-center">
            <img
              className="w-96 sm:w-96 lg:pt-5 lg:w-[700px] "
              src={AboutHero}
              alt="Hero image fro banner"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center lg:pt-20 ">
          <div className="lg:text-7xl md:text-5xl text-4xl text-gray-800 font-medium my-6">
          Why us ?
          </div>
          <div className="lg:w-[35vw] md:w-[60vw]">
          <div className=" lg:text-2xl text-xl font-normal ">
          Discover the Difference! Experience top-quality, exceptional service, and unbeatable value that sets us apart from the rest!
          </div>
          </div>
          
          <Button className="md:mt-10 mt-5" to="/shop">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
