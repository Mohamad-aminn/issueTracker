import React, { ReactNode } from "react";
import Sidebar from "./sidebar/Sidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen justify-start ">
      {/* sidebar */}
      <Sidebar />

      <div className="flex-1 overflow-auto bg-[#131844]/70">{children}</div>
    </div>
  );
};

export default layout;
