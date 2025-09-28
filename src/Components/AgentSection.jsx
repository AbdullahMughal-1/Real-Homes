import React from "react";

const agents = [
  {
    name: "Zara Malik",
    phone: "+92 300 1122334",
    email: "zara.malik@estatehub.com",
    properties: 4,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Farah Khan",
    phone: "+92 301 4455667",
    email: "farah.khan@estatehub.com",
    properties: 4,
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Nida Qureshi",
    phone: "+92 302 7788990",
    email: "nida.q@estatehub.com",
    properties: 3,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Bilal Ahmed",
    phone: "+92 303 9911223",
    email: "bilal.ahmed@estatehub.com",
    properties: 5,
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const AgentsSection = () => {
  return (
    <section className="bg-gray-100 py-16 relative -skew-y-2">
      <div className="container mx-auto px-6 skew-y-2">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Real Estate Experts</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Dedicated professionals ready to guide you every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition p-6 text-center"
            >
              <img
                src={agent.img}
                alt={agent.name}
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-200 shadow-md"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {agent.name}
              </h3>
              <p className="text-gray-500 text-sm">{agent.phone}</p>
              <p className="text-gray-500 text-sm">{agent.email}</p>
              <p className="mt-3 font-medium text-blue-600">
                {agent.properties} Listed Properties
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
