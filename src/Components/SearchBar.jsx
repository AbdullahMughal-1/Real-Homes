import React, { useState } from "react";
import { Range } from "react-range";

function SearchBar() {
  const STEP = 1000;
  const MIN = 2500;
  const MAX = 6950000;
  const [priceRange, setPriceRange] = useState([2500, 6950000]);

  return (
    <div className="w-11/12 max-w-6xl mx-auto bg-white shadow-md rounded-md p-6 mt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <select className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 w-full">
          <option>All Main Locations</option>
          <option>Miami</option>
          <option>New York</option>
          <option>Los Angeles</option>
        </select>

        <select className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 w-full">
          <option>All Status</option>
          <option>For Sale</option>
          <option>For Rent</option>
        </select>

        <select className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 w-full">
          <option>All Types</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>House</option>
        </select>

        <button className="bg-blue-600 text-white rounded px-4 py-2 text-sm hover:bg-blue-700 transition w-full">
          🔍 Search
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-sm text-gray-700">
            From{" "}
            <span className="text-blue-600 font-semibold">
              ${priceRange[0].toLocaleString()}
            </span>{" "}
            To{" "}
            <span className="text-blue-600 font-semibold">
              ${priceRange[1].toLocaleString()}
            </span>
          </p>
          <div className="mt-4">
            <Range
              values={priceRange}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => setPriceRange(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="h-2 bg-gray-200 rounded-full"
                  style={{ ...props.style }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="w-4 h-4 bg-blue-600 rounded-full shadow-md"
                />
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <select className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 w-full">
            <option>All Beds</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
          </select>

          <select className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 w-full">
            <option>All Baths</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>

          <select className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 w-full">
            <option>All Garages</option>
            <option>1+</option>
            <option>2+</option>
          </select>
        </div>
      </div>

      {/* Extra features */}
      <p className="text-blue-600 text-sm mt-4 cursor-pointer hover:underline">
        + Looking for certain features
      </p>
    </div>
  );
}

export default SearchBar;
