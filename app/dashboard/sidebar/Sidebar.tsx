import { Divider } from "antd";
import React from "react";
import SIdebarProfile from "./SIdebarProfile";
import SidebarLinks from "./SidebarLinks";
import "./sidebar.css";

const Sidebar = async () => {
  return (
    <div className="min-w-[400px] p-5 sidebar-bg">
      <div className="sticky">
        {/* user info */}
        <SIdebarProfile />

        <Divider />

        {/* links */}
        <SidebarLinks />
      </div>

      {/*  */}
    </div>
  );
};

export default Sidebar;
