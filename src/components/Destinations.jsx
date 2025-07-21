import React from "react";
import rome from "../assets/rome.jpg";
import london from "../assets/london.jpg";
import europe from "../assets/europe.jpg";
import { FaLocationArrow } from "react-icons/fa";

const destinations = [
  {
    img: rome,
    city: "Rome, Italy",
    price: "$5,42k",
    days: "10 Days Trip",
  },
  {
    img: london,
    city: "London, UK",
    price: "$4.2k",
    days: "12 Days Trip",
  },
  {
    img: europe,
    city: "Full Europe",
    price: "$15k",
    days: "28 Days Trip",
  },
];

const Destinations = () => (
  <section className="py-16 px-8 bg-orange-50">
    <div className="text-center mb-12">
      <p className="text-sm text-gray-400 mb-2">Top Selling</p>
      <h2 className="text-3xl font-bold text-gray-900">Top Destinations</h2>
    </div>
    <div className="flex flex-col md:flex-row gap-8 justify-center">
      {destinations.map((d, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden w-80">
          <img src={d.img} alt={d.city} className="w-full h-48 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{d.city}</span>
              <span className="text-gray-500">{d.price}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FaLocationArrow />
              <span>{d.days}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Destinations;