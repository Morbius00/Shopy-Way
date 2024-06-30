import HomeBanner from "../components/Banner/HomeBanner/home-banner";
import { Model01, Model02, Model03, Model04 } from "../assets/Home assets";
import Button from "../common/Buttons/button";
export default function Landing() {
  return (
    <div>
      <HomeBanner />
      <div className="mx-20 my-10">
        <div className="md:text-4xl text-2xl text-center font-semibold md:my-12 my-5">
          Top Category
        </div>
        <div className="flex flex-row items-center justify-center lg:gap-12 md:gap-5 gap-2">
          <img
            className="lg:w-[22vw] lg:h-auto md:w-[498px] md:h-[321px] sm:w-52 sm:h-72 w-32 h-40 rounded-2xl transition duration-300 ease-in-out hover:scale-110"
            loading="lazy"
            src={Model01}
            alt="Model01"
          />
          <img
            className="lg:w-[22vw] lg:h-auto md:w-[498px] md:h-[321px] sm:w-52 sm:h-72 w-32 h-40 rounded-2xl transition duration-300 ease-in-out hover:scale-110"
            loading="lazy"
            src={Model02}
            alt="Model02"
          />
          <img
            className="lg:w-[22vw] lg:h-auto md:w-[498px] md:h-[321px] sm:w-52 sm:h-72 w-32 h-40 rounded-2xl transition duration-300 ease-in-out hover:scale-110"
            loading="lazy"
            src={Model03}
            alt="Model03"
          />
        </div>
      </div>
      <div className="md:text-center md:text-2xl text-base  text-[#6A6666] mx-5  my-5">
        You can have anything you want in life if you dress for it Clothes mean
        nothing until someone lives in them.<br></br> Style is a way to say who
        you are without having to speak
      </div>
      <div className="flex items-center justify-center sm:mt-36 mt-16 mb-20">
        <div className="flex sm:flex-row flex-col h-[307px] w-[396px] bg-[#FFCFBC] md:w-[1360px] md:h-[480px] sm:w-[720px] sm:h-[400px] xs:w-[480px] xs:h-[240px]">
          <div className="flex flex-col justify-between p-8">
            <div className="flex sm:-mt-24 -mt-16 sm:ml-4">
              <img
                src={Model04}
                alt="Woman in a black coat"
                className="lg:w-auto lg:h-[600px] md:w-[498px] md:h-[600px] sm:w-80 sm:h-[508px] w-96 h-96 rounded-2xl object-cover flex items-center justify-center shadow-xl shadow-gray-500"
              />
            </div>
          </div>
          <div className="sm:w-1/2 sm:p-8 p-3 flex flex-col justify-center items-center">
            <div className="md:text-3xl sm:text-2xl text-xl font-bold text-center">
              Teamwork begins by building trust
            </div>
            <p className="text-gray-800 sm:text-xl text-base text-center mt-4">
              Don`t be into trends. Don`t make fashion own you, but you decide
              what you are, what you want to express by the way you dress and
              the way to live
            </p>
            <Button className="mt-2 md:mt-6">
              Let`s Shop
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
