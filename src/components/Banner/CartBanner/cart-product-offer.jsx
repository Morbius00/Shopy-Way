import {
  CartModel1,
  CartModel2,
  CartModel3,
  CartModel4,
} from "./Cart-banner assets";
import Button from "../../../common/Buttons/button"
export default function cartproductoffer() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center ml-2 sm:ml-3 my-10">
        <div className="md:text-4xl text-2xl text-center font-semibold  ">
          Brighten Up your Daily Rutine
        </div>
        <div className="md:text-xl text-xl text-center font-normal my-7">
          People are also buying this new trendy option—find out why!
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center lg:gap-12 md:gap-5 gap-2 my-5 ">
          <img
            className="lg:w-[18vw] lg:h-auto md:w-[398px] md:h-[521px] sm:w-64 sm:h-80 w-48 h-64  transition duration-300 ease-in-out hover:scale-110"
            loading="lazy"
            src={CartModel1}
            alt="Model01"
          />
          <img
            className="lg:w-[18vw] lg:h-auto md:w-[398px] md:h-[521px] sm:w-64 sm:h-80 w-48 h-64  transition duration-300 ease-in-out hover:scale-110"
            loading="lazy"
            src={CartModel2}
            alt="Model02"
          />
          <img
            className="lg:w-[18vw] lg:h-auto md:w-[398px] md:h-[521px] sm:w-64 sm:h-80 w-48 h-64  transition duration-300 ease-in-out hover:scale-110"
            loading="lazy"
            src={CartModel3}
            alt="Model03"
          />
          <img
            className="lg:w-[18vw] lg:h-auto md:w-[398px] md:h-[521px] sm:w-64 sm:h-80 w-48 h-64  transition duration-300 ease-in-out hover:scale-110"
            loading="lazy"
            src={CartModel4}
            alt="Model03"
          />
        </div>
        <div>
            <Button>Continue Shopping</Button>
        </div>
      </div>
    </div>
  );
}
