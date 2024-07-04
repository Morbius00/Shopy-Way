import {CartHero} from "./Cart-banner assets"
import Button from "../../../common/Buttons/button"

export default function cartanner() {
  return (
    <div>
         <div className="w-full lg:h-[786px] h-auto  bg-[#BFB6AD] md:py-24 pb-10 lg:pt-0">
      <div className="flex flex-col md:flex-row items-center mx-7 pt-10 justify-center ">
        <div className=" text-center ">
        <div className="flex flex-col justify-center items-center text-center lg:pt-20 ">
          <div className="lg:text-7xl md:text-5xl text-4xl text-gray-800 font-medium my-6">
          What are You waiting for ?
          </div>
          <div className="lg:w-[35vw] md:w-[60vw]">
          <div className="md:text-2xl text-xl font-normal ">
          Check out your cart and bring your dreams home today!
          </div>
          </div>
          
          <Button className="md:mt-10 mt-5" to="/shop">
            Checkout Now
          </Button>
        </div>
        </div>
        <div>
          <div className=" flex items-center justify-center">
            <img className="w-96 sm:w-96 lg:pt-5 lg:w-[799px]  " src={CartHero} alt="Hero image fro banner" loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
