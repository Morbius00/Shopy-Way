// import React from 'react'
import AboutBanner from "../components/Banner/AboutBanner/aboutbanner";
import Hero2 from "../assets/About assets/Hero2.png";
import Button from "../common/Buttons/button"
export default function aboutus() {
  return (
    <div className="">
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
          <div className="flex items-center justify-center md:items-start md:justify-start" >
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
    </div>
  );
}
