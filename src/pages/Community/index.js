import React from "react";

const index = () => {
  return (
    <div className="fixed top-0 left-[19vw] w-[100%] h-full flex items-center justify-start pl-80 z-50">
      <div className="absolute bg-gray-900 opacity-70 inset-0"></div>
      <div className="bg-white p-20 rounded-lg z-10">
        <h2 className="text-4xl text-center font-semibold mb-4">
          Coming Soon !
        </h2>
        <p className="text-gray-700">
          This feature is currently under development.
        </p>
      </div>
    </div>
  );
};

export default index;
