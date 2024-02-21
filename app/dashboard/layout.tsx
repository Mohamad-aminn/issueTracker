import React, { ReactNode } from "react";
import Sidebar from "./sidebar/Sidebar";
import Particle from "./particle/Particle";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen justify-start ">
      {/* sidebar */}
      <Sidebar />

      <div className="flex-1 relative overflow-auto bg-[#131844]/80">
        <Particle />
        {children}
      </div>
    </div>
  );
};

export default layout;
