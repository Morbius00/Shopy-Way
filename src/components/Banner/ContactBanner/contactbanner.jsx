import { ContactHero } from "./contact-banner assets"
import Button from "../../../common/Buttons/button";
export default function homebanner() {
  return (
    <div className="w-full h-auto py-5 bg-[#BFB6AD]">
      <div className="flex md:flex-row lg:flex-row flex-col items-center mx-7 justify-center lg:gap-20 ">
        <div>
          <div className=" flex items-center justify-center">
            <img
              className="w-96 sm:w-96 lg:pt-5 lg:w-[750px] "
              src={ContactHero}
              alt="Hero image fro banner"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center lg:pt-20 ">
          <div className="lg:text-7xl md:text-5xl text-4xl text-gray-800 font-medium my-6">
          Contact Us
          </div>
          <div className="lg:w-[35vw] md:w-[60vw]">
          <div className=" lg:text-2xl text-xl font-normal ">
          Get in Touch with Us! We&apos;re here to help with any questions, feedback, or support you need. Reach out today and experience our exceptional customer service!
          </div>
          </div>
          
          <Button className="md:mt-10 mt-5" to="/contact">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}
