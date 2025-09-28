import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import TopSearchBar from "./TopSearchBar";
import { properties } from "../data/properties";

function PropertyList() {
  const [filtered, setFiltered] = useState(properties);

  const handleSearch = (filters) => {
    const result = properties.filter((p) => {
      const matchLocation =
        !filters.location || p.location === filters.location;
      const matchStatus =
        !filters.status || p.status === filters.status;
      const matchType =
        !filters.type || p.type === filters.type;

      return matchLocation && matchStatus && matchType;
    });

    setFiltered(result);
  };

  return (
    <section className="py-14 px-4 max-w-7xl mx-auto">
      <TopSearchBar onSearch={handleSearch} />

      <div className="text-center mb-10">
        <p className="text-blue-500 font-semibold text-sm uppercase">Results</p>
        <h2 className="text-4xl font-bold text-gray-800">Properties</h2>
        <p className="text-gray-500 mt-2">
          Showing {filtered.length} matching properties
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </section>
  );
}

export default PropertyList;
