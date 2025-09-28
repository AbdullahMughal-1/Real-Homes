import React, { useState } from "react";

function TopSearchBar({ onSearch }) {
    const [filters, setFilters] = useState({
        location: "",
        status: "",
        type: "",
    });

    const handleChange = (key, value) => {
        const updated = { ...filters, [key]: value };
        setFilters(updated);
    };

    const handleSearch = () => {
        onSearch(filters);
    };

    return (
        <div className="bg-white rounded-lg p-6 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end">
            <div className="flex-1 min-w-[240px]">
                <label className="block text-gray-700 text-sm font-medium mb-2">Location</label>
                <select
                    className="w-full p-3 border border-gray-300 rounded text-gray-700"
                    onChange={(e) => handleChange("location", e.target.value)}
                >
                    <option value="">All Locations</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Miami">Miami</option>
                </select>
            </div>

            <div className="flex-1 min-w-[240px]">
                <label className="block text-gray-700 text-sm font-medium mb-2">Property Status</label>
                <select
                    className="w-full p-3 border border-gray-300 rounded text-gray-700"
                    onChange={(e) => handleChange("status", e.target.value)}
                >
                    <option value="">Any</option>
                    <option value="For Sale">For Sale</option>
                    <option value="For Rent">For Rent</option>
                    <option value="Sold">Sold</option>
                </select>
            </div>

            <div className="flex-1 min-w-[240px]">
                <label className="block text-gray-700 text-sm font-medium mb-2">Property Type</label>
                <select
                    className="w-full p-3 border border-gray-300 rounded text-gray-700"
                    onChange={(e) => handleChange("type", e.target.value)}
                >
                    <option value="">All Types</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Condo">Condo</option>
                </select>
            </div>

            <button
                onClick={handleSearch}
                className="bg-cyan-400 text-blue-900 px-8 py-3 rounded font-semibold hover:bg-cyan-300 flex items-center justify-center space-x-2 w-full md:w-auto"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search w-4 h-4"
                    aria-hidden="true"
                >
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                </svg>
                <span>Search</span>
            </button>
        </div>
    );
}

export default TopSearchBar;
