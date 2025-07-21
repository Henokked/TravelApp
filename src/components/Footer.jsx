import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-white py-12 px-8 border-t">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      <div>
        <span className="text-2xl font-bold text-black">Jadoo.</span>
        <p className="text-gray-400 mt-2 text-sm">Book your trip in minute, get full control for much longer.</p>
      </div>
      <div className="flex gap-16">
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">More</h4>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a href="#"><FaFacebookF className="text-gray-500 hover:text-orange-400" /></a>
          <a href="#"><FaInstagram className="text-gray-500 hover:text-orange-400" /></a>
          <a href="#"><FaTwitter className="text-gray-500 hover:text-orange-400" /></a>
        </div>
        {/* <div className="flex gap-2 mt-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-8" />
        </div> */}
      </div>
    </div>
    <div className="text-center text-gray-400 text-xs mt-8">All rights reserved@jadoo.co</div>
  </footer>
);

export default Footer;