import React from "react";
import { FaMapMarkerAlt, FaCreditCard, FaPlaneDeparture } from "react-icons/fa";

const steps = [
  {
    icon: <FaMapMarkerAlt className="text-xl text-orange-400" />,
    title: "Choose Destination",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: <FaCreditCard className="text-xl text-orange-400" />,
    title: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: <FaPlaneDeparture className="text-xl text-orange-400" />,
    title: "Reach Airport on Selected Date",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

const Steps = () => (
  <section className="py-16 px-8 bg-white">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Book Your Next Trip In 3 Easy Steps</h2>
        <ul className="space-y-6">
          {steps.map((s, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="mt-1">{s.icon}</div>
              <div>
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Trip" className="rounded-xl mb-4 h-40 w-full object-cover" />
          <h4 className="font-semibold mb-1">Trip To Greece</h4>
          <p className="text-gray-400 text-sm mb-2">14-29 June | by Robbin</p>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <span className="bg-orange-100 px-2 py-1 rounded">Ongoing</span>
            <span>Trip to Rome</span>
            <span className="ml-auto text-orange-400">40% completed</span>
          </div>
          <div className="text-gray-400 text-xs">24 people going</div>
        </div>
      </div>
    </div>
  </section>
);

export default Steps;