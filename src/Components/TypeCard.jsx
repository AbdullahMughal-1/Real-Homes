import React from "react";

const TypeCard = ({ label, total, imageUrl }) => (
  <div className="relative w-full h-80 rounded-lg shadow-md overflow-hidden group cursor-pointer">
    <img
      src={imageUrl}
      alt={label}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      onError={(e) => (e.target.src = "https://picsum.photos/400/300?grayscale")}
    />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="text-sm">{total} Listing{total !== 1 ? "s" : ""}</p>
    </div>
  </div>
);

export default TypeCard;
