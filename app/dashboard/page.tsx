import React from "react";
import Issues from "./Issues";

const Dashboard = () => {
  return (
    <div className="flex h-screen justify-start ">
      {/* sidebar */}
      <div className="min-w-[400px] bg-info-content"></div>
      {/* content */}
      <div className="w-full ">
        <Issues />
      </div>
    </div>
  );
};

export default Dashboard;
