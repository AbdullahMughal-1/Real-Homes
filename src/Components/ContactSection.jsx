import React from "react";

function ContactSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat bg-fixed min-h-[600px] text-white clip-diagonal"
      style={{
        backgroundImage:
          "url('https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2022/01/pexels-vecislavas-popa-1571460.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/80 clip-diagonal"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="bg-white text-gray-800 p-6 md:p-8 w-full max-w-md rounded-md shadow-sm">
          <form className="space-y-4">
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Mr</option>
              <option>Mrs</option>
              <option>Dr</option>
            </select>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Country"
                className="w-1/2 border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                placeholder="City"
                className="w-1/2 border border-gray-300 p-2 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Street Address"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Referral Source"
                className="w-1/2 border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                placeholder="Assigned Agent"
                className="w-1/2 border border-gray-300 p-2 rounded"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 p-2 rounded h-24"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Send Inquiry
            </button>
          </form>
        </div>

        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Streamline your client engagement with a unified CRM solution
          </h2>
          <p className="text-sm text-gray-200">
            Every inquiry submission automatically creates a contact profile.
            <br />
            Track communication history and manage leads efficiently.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
