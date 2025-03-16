import React from 'react';

const Dashboard = () => {
  const helpProvided = [
    { name: "Ketan Rajput", email: "ketanrajput.mi@gmail.com", disease: "Cancer", donation: 5000, donationDate: "01/01/2023", operationStartDate: "01/02/2023" },
    { name: "Nilesh Dubey", email: "nilesh.mind@gmail.com", disease: "AIDS", donation: 3000, donationDate: "02/01/2023", operationStartDate: "02/02/2023" },
    { name: "Asha Rajput", email: "asha.mi@gmail.com", disease: "Throat Cancer", donation: 7000, donationDate: "03/01/2023", operationStartDate: "03/02/2023" },
    { name: "Gyansingh Baghel", email: "gyanpal.mi@gmail.com", disease: "Heart Dysfunction", donation: 4500, donationDate: "04/01/2023", operationStartDate: "04/02/2023" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Help Provided</h2>

    
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {helpProvided.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-3">{member.name}</h4>
            <p className="text-gray-700 mb-2">Disease: {member.disease}</p>
            <p className="text-gray-700 mb-2">Email: {member.email}</p>
            <p className="text-gray-700 mb-2">Donation: ${member.donation}</p>
            <p className="text-gray-700 mb-2">Donation Date: {member.donationDate}</p>
            <p className="text-gray-700 mb-2">Operation Start Date: {member.operationStartDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
