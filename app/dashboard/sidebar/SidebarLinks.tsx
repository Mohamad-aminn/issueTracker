import { BugOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import Link from "next/link";
import React from "react";
import { sidebarLinks } from "./linksData";

const SidebarLinks = () => {
  return (
    <Flex vertical gap={10}>
      {sidebarLinks.map((link, i: number) => (
        <Link
          href={link.href}
          style={{ animationDelay: `${i * 4}99ms` }}
          className="hover:bg-[#1F2544] sidebar-link hover:text-[#dddb] gap-5 transition-colors border-2 border-[#697398] w-full rounded-md text-lg font-medium py-4 flex justify-center text-[#697398]"
        >
          {link.icon}
          <div>{link.title}</div>
        </Link>
      ))}
    </Flex>
  );
};

export default SidebarLinks;
