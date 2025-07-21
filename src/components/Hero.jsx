import React from "react";
import heroImg from "../assets/hero.png"; 
const HeroSection = () => (
  <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-br from-white to-orange-50">
    <div className="max-w-xl">
      <p className="text-sm text-orange-500 font-semibold mb-2">
        BEST DESTINATIONS AROUND THE WORLD
      </p>
      <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
        Travel,{" "}
        <span className="text-orange-400 underline decoration-4">enjoy</span>
        <br />
        and live a new
        <br />
        and full life
      </h1>
      <p className="text-gray-500 mb-6">
        Built Wicket longer admire do barton vanity itself do in it. Preferred
        to sportsmen it engrossed listening. Park gate sell they west hard for
        the.
      </p>
      <div className="flex gap-4">
        <button className="bg-orange-400 text-white px-6 py-3 rounded-md font-semibold">
          Find out more
        </button>
        <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-md">
          <span className="bg-orange-100 p-2 rounded-full">&#9658;</span> Play
          Demo
        </button>
      </div>
    </div>
    <div className="mt-12 md:mt-4">
      <img
        src={heroImg}
       
        className="w-[350px] h-auto object-contain"
      />
    </div>
  </section>
);

export default HeroSection;
