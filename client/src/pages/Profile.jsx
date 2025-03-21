import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    
      

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-blue-800 text-white p-4 flex flex-col items-center space-y-4 shadow-lg">
          <h2 className="text-xl font-semibold">Menu</h2>
          <div className="flex flex-col w-full space-y-2">
            <p className="cursor-pointer hover:bg-blue-600 p-2 rounded text-center">Profile</p>
            <p className="cursor-pointer hover:bg-blue-600 p-2 rounded text-center">Dashboard</p>
          </div>
        </div>

        {/* Profile Container */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Profile Header */}
          <div className="flex items-center gap-6 bg-white rounded-lg shadow-lg p-4 border border-gray-200 transition duration-200 hover:shadow-xl">
  <div className="w-24 h-24 rounded-full bg-gray-400 overflow-hidden border-2 border-blue-500 shadow-md flex items-center justify-center">

    <span className="text-white font-bold text-lg">JD</span> 
  </div>
  <div>
    <h2 className="text-3xl font-bold text-gray-800">Name: John Doe</h2>
    <p className="text-gray-600">Email: <span className="text-blue-600 hover:underline">johndoe@example.com</span></p>
    <p className="text-gray-600">Username: <span className="font-medium text-gray-700">@johndoe123</span></p>
  </div>
</div>
          {/* Donation History */}
          <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
    <h3 className="text-xl font-semibold mb-4">Donation History</h3>
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                    <th className="py-2 px-4 border-b text-left">Campaign</th>
                    <th className="py-2 px-4 border-b text-left">Date</th>
                    <th className="py-2 px-4 border-b text-right">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">Campaign 1</td>
                    <td className="py-2 px-4 border-b">01/01/2023</td>
                    <td className="py-2 px-4 border-b text-right">$50</td>
                </tr>
                <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">Campaign 2</td>
                    <td className="py-2 px-4 border-b">02/01/2023</td>
                    <td className="py-2 px-4 border-b text-right">$30</td>
                </tr>
                <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">Campaign 3</td>
                    <td className="py-2 px-4 border-b">03/01/2023</td>
                    <td className="py-2 px-4 border-b text-right">$20</td>
                </tr>
                <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">Campaign 4</td>
                    <td className="py-2 px-4 border-b">04/01/2023</td>
                    <td className="py-2 px-4 border-b text-right">$75</td>
                </tr>
                <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">Campaign 5</td>
                    <td className="py-2 px-4 border-b">05/01/2023</td>
                    <td className="py-2 px-4 border-b text-right">$60</td>
                </tr>
                <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">Campaign 6</td>
                    <td className="py-2 px-4 border-b">06/01/2023</td>
                    <td className="py-2 px-4 border-b text-right">$100</td>
                </tr>
                <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">Campaign 7</td>
                    <td className="py-2 px-4 border-b">07/01/2023</td>
                    <td className="py-2 px-4 border-b text-right">$80</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

          {/* Total Donations */}
          <div className="mt-6 p-6 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-300">
    <h3 className="text-2xl font-bold text-white shadow-md">Total Donations</h3>
    <p className="mt-3 text-lg text-white">
        Amount Donated: <span className="font-extrabold text-2xl">$1000</span>
    </p>
    
</div>

          {/* Fundraising Section */}
          <div className="mt-6 p-6 border border-gray-400 rounded-lg bg-gray-50 shadow-lg hover:shadow-xl transition duration-300">
    <h3 className="text-2xl font-bold text-gray-800">Start Your Own Fundraiser</h3>
    <button className="mt-3 px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg shadow-md transform hover:scale-105 transition duration-300 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0l2.5 5H20l-4 4 1.5 5-5-2.5L10 10l-4 2.5L5 9l-5-4h7.5L10 0z"/></svg>
        Create Fundraiser
    </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
