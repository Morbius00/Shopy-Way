// import React from 'react'
import AboutBanner from "../components/Banner/AboutBanner/aboutbanner";
import { Hero2, Model6 } from "../assets/About assets";
import Button from "../common/Buttons/button";
import { Logo01, Logo02, Logo03, Logo04 } from "../assets/Home assets";
export default function aboutus() {
  return (
    <div>
      <div>
        <AboutBanner />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center mx-10  my-10 gap-10">
        <div>
          <div className="text-3xl  font-medium mb-4  text-center md:text-start">
            SUSTAINABILITY
          </div>
          <div className="lg:text-5xl md:text-4xl text-2xl text-center md:text-start font-medium text-[#4A4A4A] mb-4">
            Caring For Our Planet
          </div>
          <div className="lg:text-xl sm:text-base text-sm text-center md:text-start my-5 lg:w-[600px] md:w-[500px]">
            Sustainability is a core pillar at Lunya, and one that we are
            constantly reviewing, researching, and reevaluating.We are working
            towards being a more responsible business everyday, and are
            committed to minimizing our impact. We`ve taken steps big and small,
            such as the use of responsible fabrics, including organic and
            natural fibers, and the implementation of environmentally-conscious
            processes (like more earth friendly blue sign dyes) that are better
            for you (and kinder on the planet). While we are always a work in
            progress, you can trust us when we say that our sustainability goals
            are more ambitious than waking up before the alarm.
          </div>
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <Button>Know More</Button>
          </div>
        </div>
        <div>
          <img
            className="w-96 sm:w-96 lg:pt-5 lg:w-[600px]  shadow-xl shadow-gray-500"
            src={Hero2}
            alt=""
          />
        </div>
      </div>
      <div className="md:text-4xl text-2xl text-center font-semibold md:mt-32  my-5">
        Our Partner Brands
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center mx-10  my-10">
        <div className="md:pr-6">
          <div className="flex flex-wrap md:flex-nowrap gap-5 justify-center md:justify-start mb-5">
            <img className="" src={Logo01} alt="Brand Logo 1" />
            <img className="" src={Logo02} alt="Brand Logo 2" />
            <img className="" src={Logo03} alt="Brand Logo 3" />
            <img className="" src={Logo04} alt="Brand Logo 4" />
          </div>
          <div className="lg:w-[48vw] md:w-[60vw]">
            <div className="sm:text-xl text-base text-center md:text-start my-5 ">
              What you wear is how you present yourself to the world, especially
              today, when human contacts are so quick. Fashion is instant
              language I firmly believe that with the right footwear one can
              rule the world.
            </div>
          </div>
          <div className="flex justify-center items-center md:justify-start my-8">
            <Button to="/store">Let’s Explore Top Brands</Button>
          </div>
        </div>
        <div>
          <img
            className="lg:w-[350px] lg:h-[450px] md:w-[468px] md:h-[400px] sm:w-80 sm:h-[458px] w-80 h-96 rounded-2xl"
            src={Model6}
            alt="MOdel5"
          />
        </div>
        
      </div>
      <div className="flex justify-center my-10">
          <button className="w-auto h-auto bg-yellow-400 text-black p-5 rounded-md" onClick={() => window.print()}>Print as PDF</button>
        </div>
        <div className="flex justify-center my-10">
          <button className="w-auto h-auto bg-red-400 text-black p-5 rounded-md" onClick={() => window.print()}>Print as PDF</button>
        </div>
    </div>
  );
}
