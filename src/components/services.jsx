import React from "react";
import { FaCloudSun, FaPlane, FaCalendarAlt, FaCogs } from "react-icons/fa";

const services = [
  {
    icon: <FaCloudSun className="text-2xl text-orange-400" />,
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    icon: <FaPlane className="text-2xl text-orange-400" />,
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    icon: <FaCalendarAlt className="text-2xl text-orange-400" />,
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
  },
  {
    icon: <FaCogs className="text-2xl text-orange-400" />,
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
  },
];

const Services = () => (
  <section className="py-16 px-8 bg-white">
    <div className="text-center mb-12">
      <p className="text-sm text-gray-400 mb-2">CATEGORY</p>
      <h2 className="text-3xl font-bold text-gray-900">We Offer Best Services</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {services.map((s, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
          <div className="mb-4">{s.icon}</div>
          <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
          <p className="text-gray-500 text-sm">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;