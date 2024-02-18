import { BugOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import Link from "next/link";
import React from "react";
import { sidebarLinks } from "./linksData";

const SidebarLinks = () => {
  return (
    <Flex vertical gap={10}>
      {sidebarLinks.map((link) => (
        <Link
          href={"/dashbaord/issues"}
          className="hover:bg-[#1F2544] gap-5 transition-colors border-2 border-[#1F2544] w-full rounded-md text-lg font-medium py-4 flex justify-center text-[#1F2544]"
        >
          {link.icon}
          <div>{link.title}</div>
        </Link>
      ))}
    </Flex>
  );
};

export default SidebarLinks;
