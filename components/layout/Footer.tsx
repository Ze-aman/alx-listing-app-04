import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Explore */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Home</li>
              <li>Destinations</li>
              <li>Popular Stays</li>
              <li>Deals</li>
            </ul>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">About Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Our Story</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Connect</h4>
            <div className="flex space-x-4 text-xl">
              {/* Social Icon Placeholders */}
              <span>f</span>
              <span>t</span>
              <span>i</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TravelApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;