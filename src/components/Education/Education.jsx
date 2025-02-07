import React from "react";

function Education() {
  return (
    <div className="container mx-auto py-16 px-8" id="education">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
        🎓 My Educational Journey
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {/* M.Sc Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-96 mx-auto">
          <figure className="flex justify-center">
            <img
              src="https://i.ibb.co.com/3rvbCBZ/download-12.png"
              alt="Education"
              className="w-28 h-28 rounded-full shadow-md"
            />
          </figure>
          <div className="text-center mt-6">
            <p className="text-lg font-semibold text-blue-500 bg-blue-100 px-3 py-1 rounded-md inline-block">
              Master of Science (M.Sc)
            </p>
            <p className="text-gray-700 mt-2 text-lg">Department of Physics</p>
            <h3 className="text-xl font-bold text-gray-800">
              Govt Edward College, Pabna
            </h3>
            <p className="text-gray-600 mt-2">Session: 2020-2021</p>
          </div>
        </div>

        {/* B.Sc Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-96 mx-auto">
          <figure className="flex justify-center">
            <img
              src="https://i.ibb.co.com/GTRtRnZ/download-13.png"
              alt="Education"
              className="w-28 h-28 rounded-full shadow-md"
            />
          </figure>
          <div className="text-center mt-6">
            <p className="text-lg font-semibold text-blue-500 bg-blue-100 px-3 py-1 rounded-md inline-block">
              Bachelor of Science (B.Sc)
            </p>
            <p className="text-gray-700 mt-2 text-lg">Department of Physics</p>
            <h3 className="text-xl font-bold text-gray-800">
              Govt Edward College, Pabna
            </h3>
            <p className="text-gray-600 mt-2">Session: 2016-2017</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
