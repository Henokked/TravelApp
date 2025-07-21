import React from "react";

const testimonials = [
  {
    name: "Mike taylor",
    location: "Lahore, Pakistan",
    text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
  },
  {
    name: "Chris Thomas",
    location: "CEO of Red Button",
    text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
  },
];

const Testimonials = () => (
  <section className="py-16 px-8 bg-orange-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">What People Say About Us.</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex-1">
            <p className="text-gray-700 mb-4">{t.text}</p>
            <div className="font-semibold">{t.name}</div>
            <div className="text-gray-400 text-sm">{t.location}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;