import { Divider } from "antd";
import React from "react";
import SIdebarProfile from "./SIdebarProfile";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <div>
      {/* user info */}
      <SIdebarProfile />

      <Divider />

      {/* links */}
      <SidebarLinks />

      {/*  */}
    </div>
  );
};

export default Sidebar;
