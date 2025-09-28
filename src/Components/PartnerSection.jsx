import React from "react";

const PartnersSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Trusted Collaborators</h2>
        <p className="text-gray-500 mb-10">
          We're proud to be supported by these outstanding organizations.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/one.png"
            alt="Brand Alpha"
            className="h-12 mx-auto grayscale"
          />
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/two-150x47.png"
            alt="Brand Beta"
            className="h-12 mx-auto grayscale"
          />
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/three.png"
            alt="Brand Gamma"
            className="h-12 mx-auto grayscale"
          />
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/four.png"
            alt="Brand Delta"
            className="h-12 mx-auto grayscale"
          />
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/five-150x61.png"
            alt="Brand Epsilon"
            className="h-12 mx-auto grayscale"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
