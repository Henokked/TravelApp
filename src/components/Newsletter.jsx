import React from "react";

const Newsletter = () => (
  <section className="py-16 px-8 bg-orange-100 rounded-3xl mx-4 my-12">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-xl font-bold mb-4 text-gray-900">
        Subscribe to get information, latest news and other interesting offers about Jadoo
      </h2>
      <form className="flex flex-col md:flex-row gap-4 justify-center mt-8">
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-3 rounded-md border border-gray-300 flex-1"
        />
        <button className="bg-orange-400 text-white px-8 py-3 rounded-md font-semibold">
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

export default Newsletter;