import React from "react";

const Navbar = () => (
  <nav className="flex items-center justify-between py-6 px-8 bg-white shadow-sm">
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold text-black">Jadoo</span>
    </div>
    <ul className="flex gap-8 text-gray-700 font-medium">
      <li>
        <a href="#">Destinations</a>
      </li>
      <li>
        <a href="#">Hotels</a>
      </li>
      <li>
        <a href="#">Flights</a>
      </li>
      <li>
        <a href="#">Bookings</a>
      </li>
    </ul>
    <div className="flex items-center gap-4">
      <button className="text-gray-700">Login</button>
      <button className="bg-orange-400 text-white px-4 py-2 rounded-md">
        Sign up
      </button>
      <select className="ml-2 border-none bg-transparent text-gray-700">
        <option>EN</option>
        <option>AM</option>
      </select>
    </div>
  </nav>
);

export default Navbar;
