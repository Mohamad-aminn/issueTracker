import React from "react";

const loading = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-6 justify-center items-center">
      <div className="skeleton w-[500px] h-10" />
      <div className="skeleton w-[500px] h-96 mb-4" />
      <div className="skeleton w-[500px] h-8" />
    </div>
  );
};

export default loading;
