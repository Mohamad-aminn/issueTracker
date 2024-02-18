import React, { ReactNode } from "react";
import Sidebar from "./sidebar/Sidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen justify-start ">
      {/* sidebar */}
      <div className="min-w-[400px] p-5 bg-[#44475a]">
        <Sidebar />
      </div>

      <div className="flex-1">{children}</div>
    </div>
  );
};

export default layout;
