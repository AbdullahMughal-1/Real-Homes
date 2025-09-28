import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 py-12 relative">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/10/rh-logo.png"
            alt="Logo"
            className="mb-4"
          />
          <p className="text-gray-300">Top-rated Property Experience</p>
        </div>

        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">List View</a></li>
            <li><a href="#" className="hover:text-white transition">Map Explorer</a></li>
            <li><a href="#" className="hover:text-white transition">Grid View</a></li>
            <li><a href="#" className="hover:text-white transition">News</a></li>
            <li><a href="#" className="hover:text-white transition">Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Get in Touch</h4>
          <p>Suite 402, Grand Avenue, Coconut Grove, FL 33133</p>
          <p className="mt-2">+1 786-555-0192</p>
          <p className="mt-2">hello@realestatehub.com</p>

          <h4 className="text-white text-xl font-semibold mt-6 mb-2">Topics</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "market",
              "modern",
              "finance",
              "spaces",
              "visuals",
              "update",
              "decor",
              "lounges",
              "studio",
              "style",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-blue-800 text-gray-300 px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-blue-800 pt-6 text-center text-gray-400 text-sm">
        © 2025. All rights reserved. <br />
        Crafted by RealEstateHub
      </div>
    </footer>
  );
};

export default Footer;
